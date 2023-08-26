import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import './styles.css'
import { Col, Row } from 'react-grid-system'
import { Dropdown, Space, message, DatePicker } from 'antd';
import { AparatProductGet, AparatProductDelete } from '../../../redux/product-aparat';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import InputCommon from '../../common/input';
import SelectCommon from '../../common/select';
const { RangePicker } = DatePicker;

const CardAdd = ({ onClickPut, cols, contentWidth }) => {
    const [query, setQuery] = useState()
    const [companies, setCompanies] = useState()
    const [categories, setCategories] = useState()
    const [startDate, setStartDate] = useState()
    const [companyADateSort, setCompanyADateSort] = useState()
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
    const [ids, setIds] = useState()
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

    const SelectChangeCompany = (e) => {
        setCompanies(e);
        setCompanyADateSort(e)
    };
    const SelectChangeCategory = (e) => {
        setCategories(e);
    };

    const optionCompany = []
    const optionCategory = []
    aparatProductGetState.map(elem => {
        if (!optionCompany.map(elem => elem.label).includes(elem.company.name)) {
            optionCompany.push({
                label: elem.company.name,
                value: elem.company.id
            })
        }
    })

    aparatProductGetState.map(elem => {
        if (!optionCategory.map(elem => elem.label).includes(elem.category_aparat.title_ru)) {
            optionCategory.push({
                label: elem.category_aparat.title_ru,
                value: elem.category_aparat.id
            })
        }
    })

    const keys = ["name_uz", "name_ru", "name_en", "description_uz", "description_ru", "description_en"]

    const search = (data) => {
        return data.filter(item => keys.some((key) => item[key].toLowerCase().includes(query)))
    }

    const companySearch = (data) => {
        return data.filter(item => item.company.id == companies)
    }

    const categorySearch = (data) => {
        return data.filter(item => item.category_aparat.id == categories)
    }

    const dateFilter = (data) => {
        return data.filter(item =>
            DateFormat(item.createdAt) == DateFormat(startDate)
        )
    }

    const companyAndDateSort = (data) => {
        return data.filter(item =>
            item.company.id == companyADateSort ||
            DateFormat(item.createdAt) == DateFormat(startDate)
        )
    }

    const aparatData = search(aparatProductGetState)
    const companyData = companySearch(aparatProductGetState)
    const categoryData = categorySearch(aparatProductGetState)
    const dateData = dateFilter(aparatProductGetState)
    // const dateAndCompanyFilter = companyAndDateSort(companyData)

    console.log(categoryData, 'sort')
    return (
        <>
            <div className={styles.card_section}>
                <div className={styles.card_searchbar_wrapper}>
                    <div className={styles.card_searchabar_row_wrap}>
                        <Row className={styles.card_searchbar_row}>
                            <Col lg={12}>
                                <div className={styles.card_result_wrapp}>
                                    <p className={styles.card_result_data}>
                                        Все продукты:
                                        <span>{aparatProductGetState.length}</span>
                                    </p>
                                    <div className={styles.lines}></div>
                                    <p className={styles.card_result_data}>
                                        Результат поиска:
                                        <span>{
                                            query ?
                                                aparatData.length : companies ?
                                                    companyData.length : startDate ?
                                                        dateData.length : categories ? categoryData.length : 0}</span>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <InputCommon
                                    type="search"
                                    placeholder="Поиск.."
                                    className={styles.card_search_input}
                                    onChange={(e) => setQuery(e.currentTarget.value)}
                                />
                            </Col>
                            <Col lg={3}>
                                <SelectCommon
                                    className={styles.card_search_select}
                                    onChange={SelectChangeCompany}
                                    placeholder="Сорт по компанию"
                                    options={optionCompany}
                                />
                            </Col>
                            <Col lg={3}>
                                <SelectCommon
                                    className={styles.card_search_select}
                                    onChange={SelectChangeCategory}
                                    placeholder="Сорт по категории"
                                    options={optionCategory}
                                />
                            </Col>
                            <Col lg={3}>
                                <DatePicker
                                    placeholder='Сорт по дате'
                                    onChange={(e) => setStartDate(e)}
                                    className={styles.card_search_date_input}
                                />

                            </Col>
                        </Row>
                    </div>
                </div>
                <Row className={styles.card_row}>
                    {
                        query ? (
                            aparatData.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
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
                                                    <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                        <div className={styles.card_details}>
                                                            {/* <div className={styles.card_details_item}> */}
                                                            <div className={styles.time_box}>
                                                                <div className={styles.card_time}>
                                                                    <span className={styles.card_date_span}>
                                                                        <i class='bx bx-calendar'></i>
                                                                        {DateFormat(elem.createdAt)}

                                                                        <span className={styles.card_time_span}>
                                                                            <i class='bx bxs-watch' ></i>
                                                                            {elem.createdAt.slice(11, 19)}
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
                                                                <h4>{elem.category_aparat.title_ru}</h4>
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
                        ) : companies ? (
                            companyData.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
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
                                                    <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                        <div className={styles.card_details}>
                                                            {/* <div className={styles.card_details_item}> */}
                                                            <div className={styles.time_box}>
                                                                <div className={styles.card_time}>
                                                                    <span className={styles.card_date_span}>
                                                                        <i class='bx bx-calendar'></i>
                                                                        {DateFormat(elem.createdAt)}

                                                                        <span className={styles.card_time_span}>
                                                                            <i class='bx bxs-watch' ></i>
                                                                            {elem.createdAt.slice(11, 19)}
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
                                                                <h4>{elem.category_aparat.title_ru}</h4>
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
                        ) : startDate ? (
                            dateData.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
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
                                                    <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                        <div className={styles.card_details}>
                                                            {/* <div className={styles.card_details_item}> */}
                                                            <div className={styles.time_box}>
                                                                <div className={styles.card_time}>
                                                                    <span className={styles.card_date_span}>
                                                                        <i class='bx bx-calendar'></i>
                                                                        {DateFormat(elem.createdAt)}

                                                                        <span className={styles.card_time_span}>
                                                                            <i class='bx bxs-watch' ></i>
                                                                            {elem.createdAt.slice(11, 19)}
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
                                                                <h4>{elem.category_aparat.title_ru}</h4>
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
                        ) : categories ? (
                            categoryData.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
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
                                                    <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                        <div className={styles.card_details}>
                                                            {/* <div className={styles.card_details_item}> */}
                                                            <div className={styles.time_box}>
                                                                <div className={styles.card_time}>
                                                                    <span className={styles.card_date_span}>
                                                                        <i class='bx bx-calendar'></i>
                                                                        {DateFormat(elem.createdAt)}

                                                                        <span className={styles.card_time_span}>
                                                                            <i class='bx bxs-watch' ></i>
                                                                            {elem.createdAt.slice(11, 19)}
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
                                                                <h4>{elem.category_aparat.title_ru}</h4>
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
                        ) : (
                            aparatProductGetState.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
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
                                                    <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                        <div className={styles.card_details}>
                                                            {/* <div className={styles.card_details_item}> */}
                                                            <div className={styles.time_box}>
                                                                <div className={styles.card_time}>
                                                                    <span className={styles.card_date_span}>
                                                                        <i class='bx bx-calendar'></i>
                                                                        {DateFormat(elem.createdAt)}

                                                                        <span className={styles.card_time_span}>
                                                                            <i class='bx bxs-watch' ></i>
                                                                            {elem.createdAt.slice(11, 19)}
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
                                                                <h4>{elem.category_aparat.title_ru}</h4>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.card_desc}>
                                                    <h4 className={styles.card_title}>{elem.name_ru}</h4>
                                                    <p className={styles.card_description}>
                                                        {elem.description_ru.slice(0, 50)}...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </Col>
                            ))
                        )
                    }
                </Row>
            </div>
        </>
    )
}

export default CardAdd