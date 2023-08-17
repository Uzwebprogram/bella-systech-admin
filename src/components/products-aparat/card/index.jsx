import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import './styles.css'
import { Col, Row } from 'react-grid-system'
import { Dropdown, Space, message } from 'antd';
import { AparatProductGet, AparatProductDelete } from '../../../redux/product-aparat';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CardAdd = ({ onClickPut }) => {
    const checks = window.localStorage.getItem("checked")
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Продукт удален успешно!',
                duration: 2,
            });
        }, 1000);
    };
    const arr = [1, 2, 3, 4]
    const [ids, setIds] = useState()
    console.log(ids, 'id')
    const dispatch = useDispatch()
    const aparatProductGetState = useSelector((state) => state.aparatproduct.AparatProductGet?.data)
    console.log(aparatProductGetState)
    useEffect(() => {
        dispatch(AparatProductGet())
    }, [])

    const DateFormat = (date) => {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [day, month, year].join(".");
    };

    const handleId = (e) => {
        e.preventDefault()
        setIds(e.currentTarget.id)
    }

    const HandleDelete = async (e) => {
        await dispatch(AparatProductDelete(e.currentTarget.id));
        dispatch(AparatProductGet());
        openMessage()
    };

    const items = [
        {
            label: (
                <button className={styles.card_more_btn}>
                    <i class='bx bxs-edit'></i>
                    <span> Шаг 1 Изменить</span>
                </button>
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <button className={styles.card_more_btn}>
                    <i class='bx bxs-edit'></i>
                    <span> Шаг 2 Изменить</span>
                </button>
            ),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <button className={styles.card_more_btn}>
                    <i class='bx bxs-edit'></i>
                    <span> Шаг 3 Изменить</span>
                </button>
            ),
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: (
                // <Space wrap>
                //     <Popover
                //         trigger="click"
                //         placement="rightBottom"
                //         content={
                //             <div className="content_delete_box">
                //                 <p>Вы уверены, что хотите удалить эту категория?</p>
                //                 <p>При удалений категорий вся информация принадлежащая <br /> данной категории будут удалены безвозратно</p>
                //                 <div className="btn_wrap_delete">
                //                     <button className="no_btn">
                //                         Нет
                //                     </button>
                //                     <button onClick={HandleDelete}
                //                          id={elem.id}
                //                         className="yes_btn">
                //                         да
                //                     </button>
                //                 </div>
                //             </div>
                //         }
                //         title={
                //             <div className="delete_box">
                //                 <i class='bx bxs-error-circle'></i>
                //                 <span>Удалите категория</span>
                //             </div>
                //         }
                //     >
                //         <button
                //             id={elem.id}
                //             className={styles.card_more_btn}>
                //             <i class='bx bxs-trash'></i>
                //             <span>Удалить</span>
                //         </button>
                //     </Popover>
                // </Space>
                <>
                    {contextHolder}
                    <button
                        onClick={HandleDelete}
                        id={ids}
                        className={styles.card_more_btn}>
                        <i class='bx bxs-trash'></i>
                        <span>Удалить</span>
                    </button>
                </>
            ),
            key: '3',
        }
    ];
    return (
        <>
            <div className={styles.card_section}>
                <Row className={styles.card_row}>
                    {
                        aparatProductGetState.map((elem) => (
                            <Col className={styles.card_col} lg={6}>
                                <NavLink className={styles.card_more_page_link} to={`/aparat-product-more/${elem.id}`}>
                                    <div className={styles.card}>
                                        <div className={styles.card_content_bigwrapp}>

                                            <div>
                                                <div className={styles.card_img_wrap}>

                                                    <img
                                                        src={elem.image1}
                                                        style={{ aspectRatio: 3 / 4 }}
                                                        alt="" />
                                                </div>
                                                <div className={styles.card_content_wrap}>
                                                    <div className={styles.card_details}>
                                                        {/* <div className={styles.card_details_item}> */}
                                                        <div className={styles.time_box}>
                                                            <div className={styles.card_time}>
                                                                <span className={styles.card_date_span}>
                                                                    <i class='bx bx-calendar'></i>
                                                                    {DateFormat(elem.updateAt)}

                                                                    <span className={styles.card_time_span}>
                                                                        <i class='bx bxs-watch' ></i>
                                                                        {elem.updateAt.slice(11, 19)}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className={styles.card_drop}>
                                                                <Dropdown
                                                                    placement="bottomRight"
                                                                    trigger={['click']}
                                                                    menu={{ items }}
                                                                >
                                                                    <a id={elem.id} onClick={handleId}>
                                                                        <Space>
                                                                            <i class='bx bx-dots-horizontal-rounded' ></i>
                                                                        </Space>
                                                                    </a>
                                                                </Dropdown>

                                                            </div>
                                                            {/* </div> */}
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Company</span>
                                                            <h4>{elem.company.name}</h4>
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Category</span>
                                                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, in.</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.card_desc}>
                                                <h4 className={styles.card_title}>{elem.name_ru}</h4>
                                                <p className={styles.card_description}>
                                                    {elem.description_ru}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}

export default CardAdd