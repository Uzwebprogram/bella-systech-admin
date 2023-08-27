import React from 'react'
import { Collapse, Popover, Space, Image } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import './styles.css'
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-grid-system';
import { NavLink } from 'react-router-dom';

const CollapseGet = ({ HandleDelete, onClickPut, cols }) => {
    const partnersGetState = useSelector((state) => state.partners.PartnersGet?.data)
    console.log(partnersGetState)
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

    partnersGetState.map(partner => {
        items.push({
            key: partner.id,
            label: (
                <div className='collapse_title_box'>
                    <h4>{partner.name_ru}</h4>
                    <div className="boxx">
                        <div className='time_wrap'>
                            <div>
                                <span>
                                    <i class='bx bx-calendar'></i>
                                    {DateFormat(partner.createdAt)}

                                    <span className='watch_span'>
                                        <i class='bx bxs-watch' ></i>
                                        {partner.createdAt.slice(11, 19)}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="btn-wraps">
                            <button
                                onClick={onClickPut} id={partner.id}
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
                                        <p>Вы уверены, что хотите удалить эту партнер?</p>
                                        <div className="btn_wrap_delete">
                                            <button
                                                onClick={HandleDelete}
                                                id={partner.id}
                                                className="yes_btn">
                                                да
                                            </button>
                                        </div>
                                    </div>
                                }
                                title={
                                    <div className="delete_box">
                                        <i class='bx bxs-error-circle'></i>
                                        <span>Удалите блог
                                            <span>{partner.name_ru.slice(0, 20)}</span>
                                        </span>
                                    </div>
                                }
                            >
                                <div className="btn-wrap">
                                    <button
                                        id={partner.id}
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
                                    <h4>Логотип партнера</h4>
                                    <Image
                                        src={partner.logo}
                                        style={{
                                            aspectRatio: 16 / 9,
                                            width: '100%',
                                            height: "100px",
                                            borderRadius: "20px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4> Фотографию 1</h4>
                                    <Image
                                        src={partner.image1}
                                        style={{
                                            aspectRatio: 16 / 9,
                                            width: '100%',
                                            height: "100px",
                                            borderRadius: "20px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4>Фотографию 2</h4>
                                    <Image
                                        src={partner.image2}
                                        style={{
                                            aspectRatio: 16 / 9,
                                            width: '100%',
                                            height: "100px",
                                            borderRadius: "20px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4>Фотографию 3</h4>
                                    <Image
                                        src={partner.image3}
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
                            <h4>Имя партнера</h4>
                            <div className='partner_name_wrapp'>
                                <h4><span>UZ:</span> {partner.name_uz}</h4>
                                <h4><span>RU:</span> {partner.name_ru}</h4>
                                <h4><span>EN:</span> {partner.name_en}</h4>
                            </div>
                        </div>
                        <div className='partner_content_item'>
                            <h4>Контактная информация партнера</h4>
                            <Row>
                                <Col lg={6} className='partner_col'>
                                    <div className='partner_social'>
                                        <a href={partner.telegram_link}>
                                            <span><i class='bx bxl-telegram' ></i></span>
                                            <span>{partner.telegram_link}</span>
                                        </a>
                                        <a href={partner.instagram_link}>
                                            <span><i class='bx bxl-instagram' ></i></span>
                                            <span>{partner.instagram_link}</span>
                                        </a>
                                        <a href={partner.facebook_link}>
                                            <span><i class='bx bxl-facebook' ></i></span>
                                            <span>{partner.facebook_link}</span>
                                        </a>
                                    </div>
                                </Col>
                                <Col lg={6} className='partner_col'>
                                    <div className='partner_social'>
                                        <a href={`tel: ${partner.phone_number1}`}>
                                            <span><i class='bx bx-phone-call'></i></span>
                                            <span>{partner.phone_number1}</span>
                                        </a>
                                        <a href={`tel: ${partner.phone_number2}`}>
                                            <span><i class='bx bx-phone-call'></i></span>
                                            <span>{partner.phone_number2}</span>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='partner_content_item'>
                            <Row>
                                <Col lg={6} className='partner_col'>
                                    <h4>Видео</h4>
                                    <div className='partner_video'>
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src={partner.video}
                                            title="YouTube video player"
                                            frameborder="0"
                                            style={{ borderRadius: "20px" }}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                </Col>
                                <Col lg={6} className='partner_col'>
                                    <h4>Местонахождение</h4>
                                    <div className='partner_video'>
                                        <iframe
                                            src={partner.location}
                                            width="100%"
                                            height="315"
                                            style={{ border: "0", borderRadius: "20px" }}
                                            allowfullscreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='partner_content_item'>
                            <h4>Описание</h4>
                            <div className='partner_desc'>
                                <p>
                                    <span>UZ: </span>
                                    {partner.description_uz}
                                </p>
                                <p>
                                    <span>RU: </span>
                                    {partner.description_ru}
                                </p>
                                <p>
                                    <span>EN: </span>
                                    {partner.description_en}
                                </p>
                            </div>
                        </div>
                        <div className='partner_content_item'>
                            <h4>Продукты партнеров</h4>
                            <Row>
                                {
                                    partner?.aparat?.map(elem => (
                                        <Col className='partner_product_cols' lg={cols}>
                                            <div className='partner_card'>
                                                <div className='partner_card_big_wrapp'>
                                                    <div className='partner_card_img_wrapp'>
                                                        <Image.PreviewGroup
                                                            preview={{
                                                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                            }}
                                                        >
                                                            <Image
                                                                src={elem.image1}
                                                                style={{
                                                                    aspectRatio: 3 / 4,
                                                                    width: '100%',
                                                                    borderRadius: "20px",
                                                                    height: "110px"
                                                                }}
                                                            />
                                                            <Image
                                                                src={elem.image2}
                                                                style={{
                                                                    aspectRatio: 3 / 4,
                                                                    width: '100%',
                                                                    borderRadius: "20px",
                                                                    height: "110px"
                                                                }}
                                                            />
                                                            <Image
                                                                src={elem.image3}
                                                                style={{
                                                                    aspectRatio: 3 / 4,
                                                                    width: '100%',
                                                                    borderRadius: "20px",
                                                                    height: "110px"
                                                                }}
                                                            />
                                                        </Image.PreviewGroup>
                                                    </div>
                                                    <div className='partner_card_content_wrapp'>
                                                        <NavLink to={`/aparat-product-more/${elem.id}`}>
                                                            <h4>{elem.name_ru.slice(0, 20)}...</h4>
                                                            <p>{elem.description_ru.slice(0, 50)}...</p>
                                                        </NavLink>

                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
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

export default CollapseGet