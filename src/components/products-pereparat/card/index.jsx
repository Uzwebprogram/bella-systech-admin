import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import './styles.css'
import { Col, Row } from 'react-grid-system'
import { Dropdown, Space, message, DatePicker, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import InputCommon from '../../common/input';
import SelectCommon from '../../common/select';
import { PereparatGet, PereparatDelete } from '../../../redux/pereparat';
const { RangePicker } = DatePicker;

const CardAdd = ({ cols, contentWidth }) => {
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
    const aparatProductGetState = useSelector((state) => state.pereparat.PereparatGet?.data)
    console.log(aparatProductGetState)
    useEffect(() => {
        dispatch(PereparatGet())
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
        await dispatch(PereparatDelete(e.target.id));
        dispatch(PereparatGet());
    };



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
        if (!optionCompany.map(elem => elem.label).includes(elem.company?.name)) {
            optionCompany.push({
                label: elem.company?.name,
                value: elem.company?.id
            })
        }
    })
    aparatProductGetState.map(elem => {
        if (!optionCategory.map(elem => elem.label).includes(elem.category_pereparat?.title_ru)) {
            optionCategory.push({
                label: elem.category_pereparat?.title_ru,
                value: elem.category_pereparat?.id
            })
        }
    })
    const keys = ["name_uz", "name_ru", "name_en", "description_uz", "description_ru", "description_en"]
    const search = (data) => {
        return data?.filter(item => keys?.some((key) => item[key]?.toLowerCase().includes(query)))
    }
    const companySearch = (data) => {
        return data?.filter(item => item.company?.id == companies)
    }
    const categorySearch = (data) => {
        return data?.filter(item => item.category_pereparat?.id == categories)
    }
    const dateFilter = (data) => {
        return data?.filter(item =>
            DateFormat(item.createdAt) == DateFormat(startDate)
        )
    }
    const companyAndDateSort = (data) => {
        return data?.filter(item =>
            item.company?.id == companyADateSort ||
            DateFormat(item.createdAt) == DateFormat(startDate)
        )
    }
    const aparatData = search(aparatProductGetState)
    const companyData = companySearch(aparatProductGetState)
    const categoryData = categorySearch(aparatProductGetState)
    const dateData = dateFilter(aparatProductGetState)
    // const dateAndCompanyFilter = companyAndDateSort(companyData)
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
                                    placeholder="Сорт компанию"
                                    options={optionCompany}
                                />
                            </Col>
                            <Col lg={3}>
                                <SelectCommon
                                    className={styles.card_search_select}
                                    onChange={SelectChangeCategory}
                                    placeholder="Сорт категории"
                                    options={optionCategory}
                                />
                            </Col>
                            <Col lg={3}>
                                <DatePicker
                                    placeholder='Bыбрать дату'
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
                                    <div className={styles.card}>
                                        <div className={styles.card_content_bigwrapp}>
                                            <div>
                                                <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                    <div className={styles.card_img_wrap}>
                                                        <img
                                                            src={elem.image1}
                                                            style={{ aspectRatio: 3 / 4 }}
                                                            alt="" />
                                                    </div>
                                                </NavLink>
                                                <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                    <div className={styles.card_details}>
                                                        {/* <div className={styles.card_details_item}> */}
                                                        <div className={styles.time_box}>
                                                            <div className={styles.card_time}>
                                                                <span className={styles.card_date_span}>
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/qtxqkhzr.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331"
                                                                        style={{ width: "20px", height: "20px", marginRight: "10px" }}>
                                                                    </lord-icon>
                                                                    {DateFormat(elem.createdAt)}
                                                                    <span className={styles.card_time_span}>
                                                                        <lord-icon
                                                                            src="https://cdn.lordicon.com/qmuwmmnl.json"
                                                                            trigger="hover"
                                                                            colors="primary:#df2027"
                                                                            style={{ width: "20px", height: "20px", marginRight: "5px" }}>
                                                                        </lord-icon>
                                                                        {elem.createdAt.slice(11, 19)}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className={styles.card_drop}>
                                                                <Space wrap>
                                                                    <Popover
                                                                        trigger="click"
                                                                        placement="rightBottom"
                                                                        content={
                                                                            <div className="content_delete_box">
                                                                                <p>Вы уверены, что хотите удалить эту продукт?</p>
                                                                                <div className="btn_wrap_delete">
                                                                                    {contextHolder}
                                                                                    <button
                                                                                        onClick={HandleDelete}
                                                                                        id={elem.id}
                                                                                        className="yes_btn">
                                                                                        да
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        title={
                                                                            <div className="delete_box">
                                                                                <i class='bx bxs-error-circle'></i>
                                                                                <span>Удалите продукт
                                                                                    <span>{elem.name_ru.slice(0, 20)}</span>
                                                                                </span>
                                                                            </div>
                                                                        }
                                                                    >
                                                                        <div className="btn-wrap">
                                                                            <button
                                                                                id={elem.id}
                                                                                className={styles.card_more_btn}>
                                                                                <lord-icon
                                                                                    src="https://cdn.lordicon.com/jmkrnisz.json"
                                                                                    trigger="hover"
                                                                                    colors="primary:#121331"
                                                                                    style={{ width: "20px", height: "20px", display: "inline" }}>
                                                                                </lord-icon>
                                                                            </button>
                                                                        </div>
                                                                    </Popover>
                                                                </Space>
                                                            </div>
                                                            {/* </div> */}
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Company</span>
                                                            <h4>{elem.company.name}</h4>
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Category</span>
                                                            <h4>{elem.category_pereparat?.title_ru}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                <div className={styles.card_desc}>
                                                    <h4 className={styles.card_title}>{elem.name_ru.length > 15 ? `${elem.name_ru.slice(0, 25)}...` : elem.name_ru}</h4>
                                                    <p className={styles.card_description}>
                                                        {elem.description_ru.slice(0, 50)}...
                                                    </p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        ) : companies ? (
                            companyData.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
                                    <div className={styles.card}>
                                        <div className={styles.card_content_bigwrapp}>
                                            <div>
                                                <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                    <div className={styles.card_img_wrap}>
                                                        <img
                                                            src={elem.image1}
                                                            style={{ aspectRatio: 3 / 4 }}
                                                            alt="" />
                                                    </div>
                                                </NavLink>
                                                <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                    <div className={styles.card_details}>
                                                        {/* <div className={styles.card_details_item}> */}
                                                        <div className={styles.time_box}>
                                                            <div className={styles.card_time}>
                                                                <span className={styles.card_date_span}>
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/qtxqkhzr.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331"
                                                                        style={{ width: "20px", height: "20px", marginRight: "10px" }}>
                                                                    </lord-icon>
                                                                    {DateFormat(elem.createdAt)}
                                                                    <span className={styles.card_time_span}>
                                                                        <lord-icon
                                                                            src="https://cdn.lordicon.com/qmuwmmnl.json"
                                                                            trigger="hover"
                                                                            colors="primary:#df2027"
                                                                            style={{ width: "20px", height: "20px", marginRight: "5px" }}>
                                                                        </lord-icon>
                                                                        {elem.createdAt.slice(11, 19)}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className={styles.card_drop}>
                                                                <Space wrap>
                                                                    <Popover
                                                                        trigger="click"
                                                                        placement="rightBottom"
                                                                        content={
                                                                            <div className="content_delete_box">
                                                                                <p>Вы уверены, что хотите удалить эту продукт?</p>
                                                                                <div className="btn_wrap_delete">
                                                                                    {contextHolder}
                                                                                    <button
                                                                                        onClick={HandleDelete}
                                                                                        id={elem.id}
                                                                                        className="yes_btn">
                                                                                        да
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        title={
                                                                            <div className="delete_box">
                                                                                <i class='bx bxs-error-circle'></i>
                                                                                <span>Удалите продукт
                                                                                    <span>{elem.name_ru.slice(0, 20)}</span>
                                                                                </span>
                                                                            </div>
                                                                        }
                                                                    >
                                                                        <div className="btn-wrap">
                                                                            <button
                                                                                id={elem.id}
                                                                                className={styles.card_more_btn}>
                                                                                <lord-icon
                                                                                    src="https://cdn.lordicon.com/jmkrnisz.json"
                                                                                    trigger="hover"
                                                                                    colors="primary:#121331"
                                                                                    style={{ width: "20px", height: "20px", display: "inline" }}>
                                                                                </lord-icon>
                                                                            </button>
                                                                        </div>
                                                                    </Popover>
                                                                </Space>
                                                            </div>
                                                            {/* </div> */}
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Company</span>
                                                            <h4>{elem.company.name}</h4>
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Category</span>
                                                            <h4>{elem.category_pereparat?.title_ru}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                <div className={styles.card_desc}>
                                                    <h4 className={styles.card_title}>{elem.name_ru.length > 15 ? `${elem.name_ru.slice(0, 25)}...` : elem.name_ru}</h4>
                                                    <p className={styles.card_description}>
                                                        {elem.description_ru.slice(0, 50)}...
                                                    </p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        ) : startDate ? (
                            dateData.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
                                    <div className={styles.card}>
                                        <div className={styles.card_content_bigwrapp}>
                                            <div>
                                                <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                    <div className={styles.card_img_wrap}>
                                                        <img
                                                            src={elem.image1}
                                                            style={{ aspectRatio: 3 / 4 }}
                                                            alt="" />
                                                    </div>
                                                </NavLink>
                                                <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                    <div className={styles.card_details}>
                                                        {/* <div className={styles.card_details_item}> */}
                                                        <div className={styles.time_box}>
                                                            <div className={styles.card_time}>
                                                                <span className={styles.card_date_span}>
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/qtxqkhzr.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331"
                                                                        style={{ width: "20px", height: "20px", marginRight: "10px" }}>
                                                                    </lord-icon>
                                                                    {DateFormat(elem.createdAt)}
                                                                    <span className={styles.card_time_span}>
                                                                        <lord-icon
                                                                            src="https://cdn.lordicon.com/qmuwmmnl.json"
                                                                            trigger="hover"
                                                                            colors="primary:#df2027"
                                                                            style={{ width: "20px", height: "20px", marginRight: "5px" }}>
                                                                        </lord-icon>
                                                                        {elem.createdAt.slice(11, 19)}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className={styles.card_drop}>
                                                                <Space wrap>
                                                                    <Popover
                                                                        trigger="click"
                                                                        placement="rightBottom"
                                                                        content={
                                                                            <div className="content_delete_box">
                                                                                <p>Вы уверены, что хотите удалить эту продукт?</p>
                                                                                <div className="btn_wrap_delete">
                                                                                    {contextHolder}
                                                                                    <button
                                                                                        onClick={HandleDelete}
                                                                                        id={elem.id}
                                                                                        className="yes_btn">
                                                                                        да
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        title={
                                                                            <div className="delete_box">
                                                                                <i class='bx bxs-error-circle'></i>
                                                                                <span>Удалите продукт
                                                                                    <span>{elem.name_ru.slice(0, 20)}</span>
                                                                                </span>
                                                                            </div>
                                                                        }
                                                                    >
                                                                        <div className="btn-wrap">
                                                                            <button
                                                                                id={elem.id}
                                                                                className={styles.card_more_btn}>
                                                                                <lord-icon
                                                                                    src="https://cdn.lordicon.com/jmkrnisz.json"
                                                                                    trigger="hover"
                                                                                    colors="primary:#121331"
                                                                                    style={{ width: "20px", height: "20px", display: "inline" }}>
                                                                                </lord-icon>
                                                                            </button>
                                                                        </div>
                                                                    </Popover>
                                                                </Space>
                                                            </div>
                                                            {/* </div> */}
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Company</span>
                                                            <h4>{elem.company.name}</h4>
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Category</span>
                                                            <h4>{elem.category_pereparat?.title_ru}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                <div className={styles.card_desc}>
                                                    <h4 className={styles.card_title}>{elem.name_ru.length > 15 ? `${elem.name_ru.slice(0, 25)}...` : elem.name_ru}</h4>
                                                    <p className={styles.card_description}>
                                                        {elem.description_ru.slice(0, 50)}...
                                                    </p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        ) : categories ? (
                            categoryData.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
                                    <div className={styles.card}>
                                        <div className={styles.card_content_bigwrapp}>
                                            <div>
                                                <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                    <div className={styles.card_img_wrap}>
                                                        <img
                                                            src={elem.image1}
                                                            style={{ aspectRatio: 3 / 4 }}
                                                            alt="" />
                                                    </div>
                                                </NavLink>
                                                <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                    <div className={styles.card_details}>
                                                        {/* <div className={styles.card_details_item}> */}
                                                        <div className={styles.time_box}>
                                                            <div className={styles.card_time}>
                                                                <span className={styles.card_date_span}>
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/qtxqkhzr.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331"
                                                                        style={{ width: "20px", height: "20px", marginRight: "10px" }}>
                                                                    </lord-icon>
                                                                    {DateFormat(elem.createdAt)}
                                                                    <span className={styles.card_time_span}>
                                                                        <lord-icon
                                                                            src="https://cdn.lordicon.com/qmuwmmnl.json"
                                                                            trigger="hover"
                                                                            colors="primary:#df2027"
                                                                            style={{ width: "20px", height: "20px", marginRight: "5px" }}>
                                                                        </lord-icon>
                                                                        {elem.createdAt.slice(11, 19)}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className={styles.card_drop}>
                                                                <Space wrap>
                                                                    <Popover
                                                                        trigger="click"
                                                                        placement="rightBottom"
                                                                        content={
                                                                            <div className="content_delete_box">
                                                                                <p>Вы уверены, что хотите удалить эту продукт?</p>
                                                                                <div className="btn_wrap_delete">
                                                                                    {contextHolder}
                                                                                    <button
                                                                                        onClick={HandleDelete}
                                                                                        id={elem.id}
                                                                                        className="yes_btn">
                                                                                        да
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        title={
                                                                            <div className="delete_box">
                                                                                <i class='bx bxs-error-circle'></i>
                                                                                <span>Удалите продукт
                                                                                    <span>{elem.name_ru.slice(0, 20)}</span>
                                                                                </span>
                                                                            </div>
                                                                        }
                                                                    >
                                                                        <div className="btn-wrap">
                                                                            <button
                                                                                id={elem.id}
                                                                                className={styles.card_more_btn}>
                                                                                <lord-icon
                                                                                    src="https://cdn.lordicon.com/jmkrnisz.json"
                                                                                    trigger="hover"
                                                                                    colors="primary:#121331"
                                                                                    style={{ width: "20px", height: "20px", display: "inline" }}>
                                                                                </lord-icon>
                                                                            </button>
                                                                        </div>
                                                                    </Popover>
                                                                </Space>
                                                            </div>
                                                            {/* </div> */}
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Company</span>
                                                            <h4>{elem.company.name}</h4>
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Category</span>
                                                            <h4>{elem.category_pereparat?.title_ru}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                <div className={styles.card_desc}>
                                                    <h4 className={styles.card_title}>{elem.name_ru.length > 15 ? `${elem.name_ru.slice(0, 25)}...` : elem.name_ru}</h4>
                                                    <p className={styles.card_description}>
                                                        {elem.description_ru.slice(0, 50)}...
                                                    </p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            aparatProductGetState.map((elem) => (
                                <Col className={styles.card_col} lg={cols}>
                                    <div className={styles.card}>
                                        <div className={styles.card_content_bigwrapp}>
                                            <div>
                                                <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                    <div className={styles.card_img_wrap}>
                                                        <img
                                                            src={elem.image1}
                                                            style={{ aspectRatio: 3 / 4 }}
                                                            alt="" />
                                                    </div>
                                                </NavLink>
                                                <div className={styles.card_content_wrap} style={{ width: contentWidth }}>
                                                    <div className={styles.card_details}>
                                                        {/* <div className={styles.card_details_item}> */}
                                                        <div className={styles.time_box}>
                                                            <div className={styles.card_time}>
                                                                <span className={styles.card_date_span}>
                                                                    <lord-icon
                                                                        src="https://cdn.lordicon.com/qtxqkhzr.json"
                                                                        trigger="hover"
                                                                        colors="primary:#121331"
                                                                        style={{ width: "20px", height: "20px", marginRight: "10px" }}>
                                                                    </lord-icon>
                                                                    {DateFormat(elem.createdAt)}
                                                                    <span className={styles.card_time_span}>
                                                                        <lord-icon
                                                                            src="https://cdn.lordicon.com/qmuwmmnl.json"
                                                                            trigger="hover"
                                                                            colors="primary:#df2027"
                                                                            style={{ width: "20px", height: "20px", marginRight: "5px" }}>
                                                                        </lord-icon>
                                                                        {elem.createdAt.slice(11, 19)}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className={styles.card_drop}>
                                                                <Space wrap>
                                                                    <Popover
                                                                        trigger="click"
                                                                        placement="rightBottom"
                                                                        content={
                                                                            <div className="content_delete_box">
                                                                                <p>Вы уверены, что хотите удалить эту продукт?</p>
                                                                                <div className="btn_wrap_delete">
                                                                                    {contextHolder}
                                                                                    <button
                                                                                        onClick={HandleDelete}
                                                                                        id={elem.id}
                                                                                        className="yes_btn">
                                                                                        да
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        title={
                                                                            <div className="delete_box">
                                                                                <i class='bx bxs-error-circle'></i>
                                                                                <span>Удалите продукт
                                                                                    <span>{elem.name_ru.slice(0, 20)}</span>
                                                                                </span>
                                                                            </div>
                                                                        }
                                                                    >
                                                                        <div className="btn-wrap">
                                                                            <button
                                                                                id={elem.id}
                                                                                className={styles.card_more_btn}>
                                                                                <lord-icon
                                                                                    src="https://cdn.lordicon.com/jmkrnisz.json"
                                                                                    trigger="hover"
                                                                                    colors="primary:#121331"
                                                                                    style={{ width: "20px", height: "20px", display: "inline" }}>
                                                                                </lord-icon>
                                                                            </button>
                                                                        </div>
                                                                    </Popover>
                                                                </Space>
                                                            </div>
                                                            {/* </div> */}
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Company</span>
                                                            <h4>{elem.company.name}</h4>
                                                        </div>
                                                        <div className={styles.card_details_item}>
                                                            <span>Category</span>
                                                            <h4>{elem.category_pereparat?.title_ru}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink className={styles.card_more_page_link} to={`/pereparat-product-more/${elem.id}`}>
                                                <div className={styles.card_desc}>
                                                    <h4 className={styles.card_title}>{elem.name_ru.length > 15 ? `${elem.name_ru.slice(0, 25)}...` : elem.name_ru}</h4>
                                                    <p className={styles.card_description}>
                                                        {elem.description_ru.slice(0, 50)}...
                                                    </p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        )
                    }
                </Row>
            </div >
        </>
    )
}

export default CardAdd