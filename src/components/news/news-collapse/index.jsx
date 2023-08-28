import React from 'react'
import { Collapse, Popover, Space, Image } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import './styles.css'
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-grid-system';
import { NavLink } from 'react-router-dom';

const NewsCollapseGet = ({ HandleDelete, onClickPut, cols }) => {
    const newsGetState = useSelector((state) => state.news);
    const rows = newsGetState.newsGet.data;
    const items = [];

    const DateFormat = (date) => {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [day, month, year].join(".");
    };

    rows.map((news) => {
        items.push({
            key: news.id,
            label: (
                <div className='collapse_title_box'>
                    <h4>{news.title_ru.slice(0, 70)}...</h4>
                    <div className="boxx">
                        <div className='time_wrap'>
                            <div>
                                <span>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/qtxqkhzr.json"
                                        trigger="hover"
                                        colors="primary:#fff"
                                        style={{width: "20px", height: "20px" ,marginRight: "10px"}}>
                                    </lord-icon>
                                    {DateFormat(news.time_date)}
                                </span>
                            </div>
                        </div>
                        <div className="btn-wraps">
                            <button
                                onClick={onClickPut} id={news.id}
                            >
                                <i class='bx bx-message-square-edit'></i>
                            </button>
                        </div>

                        <Space wrap>
                            <Popover
                                trigger="click"
                                placement="rightBottom"
                                content={
                                    <div className="content_delete_box">
                                        <p>Вы уверены, что хотите удалить эту новости?</p>
                                        <div className="btn_wrap_delete">
                                            <button
                                                onClick={HandleDelete}
                                                id={news.id}
                                                className="yes_btn">
                                                да
                                            </button>
                                        </div>
                                    </div>
                                }
                                title={
                                    <div className="delete_box">
                                        <i class='bx bxs-error-circle'></i>
                                        <span>Удалите новости
                                            <span>{news.title_ru.slice(0, 20)}</span>
                                        </span>
                                    </div>
                                }
                            >
                                <div className="btn-wrap">
                                    <button
                                        id={news.id}
                                    >
                                        <lord-icon
                                            src="https://cdn.lordicon.com/jmkrnisz.json"
                                            trigger="hover"
                                            colors="primary:#121331"
                                            style={{ width: "25px", height: "25px" }}>
                                        </lord-icon>
                                    </button>
                                </div>
                            </Popover>
                        </Space>
                    </div>
                </div>
            ),
            children: (
                <>
                    <div className='partner_content_wrapper'>
                        <div className='partner_content_item'>
                            <div className='partner_item_img_wrapp'>
                                <div>
                                    <h4>Новости фотографию</h4>
                                    <Image
                                        src={news.image}
                                        style={{
                                            aspectRatio: 16 / 9,
                                            width: '100%',
                                            height: "100px",
                                            borderRadius: "20px"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='partner_content_item'>
                            <h4>Новости титул</h4>
                            <div className='partner_name_wrapp'>
                                <h4><span>UZ:</span> {news.title_uz}</h4>
                                <h4><span>RU:</span> {news.title_ru}</h4>
                                <h4><span>EN:</span> {news.title_en}</h4>
                            </div>
                        </div>
                        <div className='partner_content_item'>
                            <h4>Новости oписание</h4>
                            <div className='partner_desc'>
                                <p>
                                    <span>UZ: </span>
                                    {news.description_uz}
                                </p>
                                <p>
                                    <span>RU: </span>
                                    {news.description_ru}
                                </p>
                                <p>
                                    <span>EN: </span>
                                    {news.description_en}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            ),
        })
    })
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <div className='collapse_section'>
                <Collapse
                    bordered
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    items={items}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default NewsCollapseGet