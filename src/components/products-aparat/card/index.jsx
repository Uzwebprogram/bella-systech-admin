import React, { useEffect } from 'react'
import styles from './style.module.css'
import './styles.css'
import { Col, Row } from 'react-grid-system'
import { Dropdown, Space, Popover } from 'antd';
import { AparatProductGet } from '../../../redux/product-aparat';
import { useDispatch, useSelector } from 'react-redux';

const CardAdd = ({ HandleDelete, onClickPut }) => {
    const arr = [1, 2, 3, 4]
    const dispatch = useDispatch()
    const aparatProductGetState = useSelector((state) => state.ap)
    useEffect(() => {
        dispatch(AparatProductGet())
    }, [])

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
                <button
                    // id={elem.id}
                    className={styles.card_more_btn}>
                    <i class='bx bxs-trash'></i>
                    <span>Удалить</span>
                </button>
            ),
            key: '3',
        }
    ];
    return (
        <>
            <div className={styles.card_section}>
                <Row className={styles.card_row}>
                    {
                        arr.map(() => (
                            <Col className={styles.card_col} lg={6}>
                                <div className={styles.card}>
                                    <div className={styles.card_content_bigwrapp}>
                                        <div className={styles.time_box}>
                                            <div className={styles.card_time}>
                                                <span className={styles.card_date_span}>
                                                    <i class='bx bx-calendar'></i>
                                                    01.08.2023

                                                    <span className={styles.card_time_span}>
                                                        12:00
                                                    </span>
                                                </span>
                                            </div>
                                            <div className={styles.card_drop}>
                                                <Dropdown
                                                    placement="bottomRight"
                                                    menu={{
                                                        items,
                                                    }}
                                                // trigger={['click']}
                                                >
                                                    <a onClick={(e) => e.preventDefault()}>
                                                        <Space>
                                                            <i class='bx bx-dots-horizontal-rounded' ></i>
                                                        </Space>
                                                    </a>
                                                </Dropdown>

                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.card_img_wrap}>

                                                <img
                                                    src="https://picsum.photos/id/1/1920/1280"
                                                    style={{ aspectRatio: 4 / 3 }}
                                                    alt="" />
                                            </div>
                                            <div className={styles.card_content_wrap}>
                                                <div className={styles.card_details}>
                                                    <div className={styles.card_details_item}>
                                                        <span>Product company</span>
                                                        <h4>Company name</h4>
                                                    </div>
                                                    <div className={styles.card_details_item}>
                                                        <span>Product category</span>
                                                        <h4>Category name</h4>
                                                    </div>
                                                    <div className={styles.card_details_item}>
                                                        <span>Product partner</span>
                                                        <h4>Partner name</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.card_desc}>
                                            <h4 className={styles.card_title}>Name Products Card Design</h4>
                                            <p className={styles.card_description}>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Necessitatibus eaque eos perspiciatis accusamus laudantium deserunt quibusdam,
                                                dignissimos voluptatem voluptas quis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}

export default CardAdd