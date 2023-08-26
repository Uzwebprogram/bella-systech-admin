import React, { useEffect } from 'react'
import styles from './style.module.css'
import './styles.css'
import { useParams } from 'react-router-dom'
import { Image, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Col, Row } from 'react-grid-system';
import { AparatProductGet } from '../../redux/product-aparat/index';
import { useDispatch, useSelector } from 'react-redux';
import DraverCommon from '../common/Drawer';
import { useState } from 'react';
import AparatProductPut from './put/aparat';
import AparatProductPuts from './put/aparat';
import DescriptionAparatProductPut from './put/description';
import SampleProductPut from './put/sample';
import SampleProductPuts from './put/sample';
import PhotosProductPuts from './put/photos';
import { PhotosProductGet } from '../../redux/product-aparat/photos';
import { DesignProductGet } from "../../redux/product-aparat/design"
import DesignProductPut from './put/design';
import DesignProductPuts from './put/design';
import ParametrPut from './put/parametr';
import { ParametrProductGet } from '../../redux/product-aparat/parametr';
const ProductAparatMoreComponent = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [openAparat, setOpenAparat] = useState(false);
  const [openAparatProduct, setOpenAparatProduct] = useState(false);
  const [openSampleProduct, setOpenSampleProduct] = useState(false);
  const [openPhotosProduct, setOpenPhotosProduct] = useState(false);
  const [openParametrProduct, setOpenParametrProduct] = useState(false);
  const [putAparatId, setPutAparatId] = useState();
  const [putDesign, setPutDesign] = useState();
  const aparatProductGetState = useSelector((state) => state.aparatproduct.AparatProductGet?.data)
  const filterAparat = aparatProductGetState.filter(elem => elem.id == id)
  console.log(filterAparat)
  useEffect(() => {
    dispatch(DesignProductGet())
  }, [])

  useEffect(() => {
    dispatch(AparatProductGet())
  }, [])
  useEffect(() => {
    dispatch(PhotosProductGet())
  }, [])
  useEffect(() => {
    dispatch(ParametrProductGet())
  }, [])

  const HandlePutModal = (e) => {
    setPutAparatId(e.target.id)
    setOpenAparat(true)
  }
  const HandlePutModalDescription = (e) => {
    setPutAparatId(e.target.id)
    setOpenAparatProduct(true)
  }
  const HandlePutModalSample = (e) => {
    setPutAparatId(e.target.id)
    setOpenSampleProduct(true)
  }
  const HandlePutModalPhotos = (e) => {
    setPutAparatId(e.target.id)
    setOpenPhotosProduct(true)
  }
  const HandlePutModalDesign = (e) => {
    setPutAparatId(e.target.id)
    setPutDesign(true)
  }
  const HandlePutModalParametr = (e) => {
    setPutAparatId(e.target.id)
    setOpenParametrProduct(true)
  }

  const onChange = (key) => {
    console.log(key);
  };

  const items = [];
  filterAparat.map(elem => (
    elem.partners.map(partner => (
      items.push(
        {
          key: partner.id,
          label: partner.name_ru,
          children: (
            <Row className={styles.card_partner_row}>
              <Col className={styles.card_partner_col} lg={12}>
                <div className={styles.card_more_col_item}>
                  <h6 className={styles.company_mini_title}>
                    #Имя партнера
                  </h6>
                  <h4><span className={styles.language}>RU:</span>  {partner.name_ru}</h4>
                  <h4><span className={styles.language}>EN:</span>  {partner.name_en}</h4>
                  <h4><span className={styles.language}>UZ:</span>  {partner.name_uz}</h4>
                </div>
              </Col>
              <Col className={styles.card_partner_col} lg={12}>
                <div className={styles.card_more_col_item} style={{ margin: "20px 0" }}>
                  <div className={styles.partner_img_wrapp}>
                    <div>
                      <h6 className={styles.company_mini_title}>
                        #Логотип партнеров
                      </h6>
                      <div className={styles.company_img_box}>
                        <Image
                          style={{ aspectRatio: 16 / 9, borderRadius: '25px', height: "150px" }}
                          // src={elem.company.image}
                          src={partner.logo}
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className={styles.company_mini_title}>
                        #Изображение партнеров
                      </h6>
                      <Image.PreviewGroup
                        preview={{
                          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                      >
                        <div className={styles.card_img_cover_wrap}>
                          <div className={styles.card_img_covers}>
                            <Image
                              style={{ aspectRatio: 16 / 9, borderRadius: '25px', height: "150px" }}
                              src={partner.image1}
                            />
                          </div>
                          <div className={styles.card_img_covers}>
                            <Image
                              style={{ aspectRatio: 16 / 9, borderRadius: '25px', height: "150px" }}
                              src={partner.image2}
                            />
                          </div>
                          <div className={styles.card_img_covers}>
                            <Image
                              style={{ aspectRatio: 16 / 9, borderRadius: '25px', height: "150px" }}
                              src={partner.image3}
                            />
                          </div>
                        </div>
                      </Image.PreviewGroup>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className={styles.card_partner_col} lg={6}>
                <div className={styles.card_more_col_item}>
                  <h6 className={styles.company_mini_title}>
                    #Социальные сети партнеров
                  </h6>
                  <div className={styles.partner_social_wrap}>
                    <a className={styles.partner_social} href={partner.telegram_link}>
                      <span> <i class='bx bxl-telegram'></i></span>
                      {partner.telegram_link}
                    </a>
                    <a className={styles.partner_social} href={partner.instagram_link}>
                      <span><i class='bx bxl-instagram-alt'></i></span>
                      {partner.instagram_link}
                    </a>
                    <a className={styles.partner_social} href={partner.facebook_link}>
                      <span><i class='bx bxl-facebook-circle'></i></span>
                      {partner.facebook_link}
                    </a>
                  </div>
                </div>
              </Col>
              <Col className={styles.card_partner_col} lg={6}>
                <div className={styles.card_more_col_item}>
                  <h6 className={styles.company_mini_title}>
                    #Номер телефона партнера
                  </h6>
                  <div className={styles.partner_phone}>
                    <i class='bx bxs-phone'></i>
                    <a className={styles.partner_social} href={`tel:${partner.phone_number1}`}>
                      {partner.phone_number1}
                    </a>
                  </div>
                  <div className={styles.partner_phone}>
                    <i class='bx bxs-phone'></i>
                    <a className={styles.partner_social} href={`tel:${partner.phone_number2}`}>
                      {partner.phone_number2}
                    </a>
                  </div>
                </div>
              </Col>
              <Col className={styles.card_partner_col} lg={6}>
                <div className={styles.card_more_col_item} style={{ marginTop: "20px" }}>
                  <h6 className={styles.company_mini_title}>
                    #Местонахождение партнеров
                  </h6>
                  <div className={styles.partner_location}>
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
                </div>
              </Col>
              <Col className={styles.card_partner_col} lg={6}>
                <div className={styles.card_more_col_item} style={{ marginTop: "20px" }}>
                  <h6 className={styles.company_mini_title}>
                    #Видео партнеров
                  </h6>
                  <div className={styles.card_partner_video_wrap}>
                    <iframe width="100%"
                      height="315"
                      src={partner.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen></iframe>
                  </div>
                </div>
              </Col>
              <Col className={styles.card_partner_col} lg={12}>
                <div className={styles.card_more_col_item} style={{ marginTop: "20px" }}>
                  <h6 className={styles.company_mini_title}>
                    #Описание партнера
                  </h6>
                  <p><span className={styles.language}>RU:</span>  {partner.description_ru}</p>
                  <p><span className={styles.language}>EN:</span>  {partner.description_en}</p>
                  <p><span className={styles.language}>UZ:</span>  {partner.description_uz}</p>
                </div>
              </Col>
            </Row>
          ),
        }
      )
    ))
  ))

  const itemCompany = []
  filterAparat.map(elem => (
    itemCompany.push(
      {
        key: elem.company.id,
        label: elem.company.name,
        children: (
          <Row className={styles.card_company_row}>
            <Col className={styles.card_company_col} lg={12}>
              <h6 className={styles.company_mini_title}>
                #Имя компании
              </h6>
              <h4>{elem.company.name}</h4>
              <hr />
            </Col>
            <Col className={styles.card_company_col} lg={12}>
              <h6 className={styles.company_mini_title}>
                #Изображение компании
              </h6>
              <div className={styles.company_img_box}>
                <Image
                  style={{ aspectRatio: 1 / 1, borderRadius: '25px', height: "176px" }}
                  // src={elem.company.image}
                  src={elem.image}
                />
              </div>
              <hr />
            </Col>
            <Col className={styles.card_company_col} lg={12}>
              <h6 className={styles.company_mini_title}>
                #***
              </h6>
              <h4><span className={styles.language}>RU:</span>  {elem.company.title_ru}</h4>
              <h4><span className={styles.language}>EN:</span>  {elem.company.title_en}</h4>
              <h4><span className={styles.language}>UZ:</span>  {elem.company.title_uz}</h4>
              <hr />
            </Col>
            <Col className={styles.card_company_col} lg={12}>
              <h6 className={styles.company_mini_title}>
                #Описание kомпании
              </h6>
              <p><span className={styles.language}>RU:</span>  {elem.company.description_ru}</p>
              <p><span className={styles.language}>EN:</span>  {elem.company.description_en}</p>
              <p><span className={styles.language}>UZ:</span>  {elem.company.description_uz}</p>
            </Col>
          </Row>
        ),
      }
    )
  ))

  const itemDesc = []
  filterAparat.map(elem => (
    elem.descriptions.map((e, index) => (
      itemDesc.push(
        {
          key: e.id,
          label: `${e.description_ru.slice(0,100)}...`,
          children: (
            <>
              <div className={styles.Top_edit}>
                <p style={{ color: "black", fontWeight: "bold" }}> Описания изменить</p>
                <button id={e.id} onClick={HandlePutModalDescription}><i id={e.id} class='bx bx-edit-alt'></i></button>
              </div>
              <p> <span className={styles.language}>RU:</span>  {e.description_ru}
              </p>
              <p><span className={styles.language}>EN:</span>  {e.description_en}</p>
              <p><span className={styles.language}>UZ:</span>  {e.description_uz}</p>
              <div className={styles.card_partner_video_wrap}>
                <h6 className={styles.company_mini_title}>
                  Ссылка на ютуб
                </h6>
                <iframe width="560"
                  height="315"
                  style={{ marginTop: "10px" }}
                  src={e.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </>
          ),
        }
      )
    ))
  ))

  const itemApp = []
  filterAparat.map(elem => (
    elem.sample.map((e, index) => (
      itemApp.push(
        {
          key: e.id,
          label: e.name_ru,
          children: (
            <>
              <div className={styles.Top_edit}>
                <p style={{ color: "black", fontWeight: "bold" }}> Применение изменить</p>
                <button id={e.id} onClick={HandlePutModalSample}><i id={e.id} class='bx bx-edit-alt'></i></button>
              </div>
              <p><span className={styles.language}>RU:</span>  {e.name_ru}</p>
              <p><span className={styles.language}>EN:</span>  {e.name_en}</p>
              <p><span className={styles.language}>UZ:</span>  {e.name_uz}</p>
            </>
          ),
        }
      )
    ))
  ))
  const itemParametr = []
  filterAparat.map(elem => (
    elem.parametr.map((e, index) => (
      itemParametr.push(
        {
          key: e.id,
          label: e.parametr_ru,
          children: (
            <>
              <div className={styles.Top_edit}>
                <p style={{ fontWeight: "bold" }}>Параметры изменить</p>
                <button id={e.id} onClick={HandlePutModalParametr}><i id={e.id} class='bx bx-edit-alt'></i></button>
              </div>
              <p>
                <span className={styles.language}>RU параметры :</span>
                {e.parametr_ru}
              </p>
              <p>
                <span className={styles.language}>EN параметры :</span>
                {e.parametr_en}
              </p>
              <p>
                <span className={styles.language}>UZ параметры :</span>
                {e.parametr_uz}
              </p>
              <p>------------------------------------------------</p>
              <p>
                <span className={styles.language}>
                  RU информация :</span>  {e.information_ru}
              </p>
              <p>
                <span className={styles.language}>
                  EN информация :</span>  {e.information_en}
              </p>
              <p>

                <span className={styles.language}>
                  UZ информация :</span>  {e.information_uz}</p>
            </>
          ),
        }
      )
    ))
  ))
  return (
    <>
      <div className={styles.card_more_section}>
        <div className={styles.card_more_big_wrap}>
          {
            filterAparat.map(elem => (
              <Row className={styles.card_more_row}>
                <Col lg={12} className={styles.card_more_col}>
                  <div className={styles.card_more_col_item}>
                    <div className={styles.Top_edit}>
                      <h6 className={styles.product_mini_title}>Имя товара</h6>
                      <button id={elem.id} onClick={HandlePutModal}><i id={elem.id} class='bx bx-edit-alt'></i></button>
                    </div>
                    <h4><span className={styles.language}>RU:</span> {elem.name_ru}</h4>
                    <h4><span className={styles.language}>EN:</span> {elem.name_en}</h4>
                    <h4><span className={styles.language}>UZ:</span> {elem.name_uz}</h4>
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>Изображения товара</h6>
                    <Image.PreviewGroup
                      preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                      }}
                    >
                      <div className={styles.card_img_cover_wrap}>
                        <div className={styles.card_img_covers}>
                          <Image
                            style={{ aspectRatio: 3 / 4, borderRadius: '25px', height: "176px" }}
                            src={elem.image1}
                          />
                        </div>

                        <div className={styles.card_img_covers}>
                          <Image
                            style={{ aspectRatio: 3 / 4, borderRadius: '25px', height: "176px" }}
                            src={elem.image2}
                          />
                        </div>

                        <div className={styles.card_img_covers}>
                          <Image
                            style={{ aspectRatio: 3 / 4, borderRadius: '25px', height: "176px" }}
                            src={elem.image3}
                          />
                        </div>
                      </div>
                    </Image.PreviewGroup>
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      Описание товара
                    </h6>
                    <p><span className={styles.language}>RU:</span>{elem.description_ru}</p>
                    <p><span className={styles.language}>EN:</span>{elem.description_en}</p>
                    <p><span className={styles.language}>UZ:</span>{elem.description_uz}</p>
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      ПДФ товара
                    </h6>
                    <a className={styles.card_pdf} href={elem.pdf}>{elem.pdf}</a>
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      Преимущества товара
                    </h6>
                    <p>{elem.product_benefits}</p>
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      Категория товара
                    </h6>
                    <h4><span className={styles.language}>RU:</span> {elem.category_aparat.title_ru}</h4>
                    <h4><span className={styles.language}>EN:</span> {elem.category_aparat.title_en}</h4>
                    <h4><span className={styles.language}>UZ:</span> {elem.category_aparat.title_uz}</h4>
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      Продуктовая компания
                    </h6>
                    {/* <Row className={styles.card_company_row}>
                      <Col className={styles.card_company_col} lg={12}>
                        <h6 className={styles.company_mini_title}>
                          #Имя компании
                        </h6>
                        <h4>{elem.company.name}</h4>
                        <hr />
                      </Col>
                      <Col className={styles.card_company_col} lg={12}>
                        <h6 className={styles.company_mini_title}>
                          #Изображение компании
                        </h6>
                        <div className={styles.company_img_box}>
                          <Image
                            style={{ aspectRatio: 1 / 1, borderRadius: '25px', height: "176px" }}
                            // src={elem.company.image}
                            src={elem.image}
                          />
                        </div>
                        <hr />
                      </Col>
                      <Col className={styles.card_company_col} lg={12}>
                        <h6 className={styles.company_mini_title}>
                          #***
                        </h6>
                        <h4><span className={styles.language}>RU:</span>  {elem.company.title_ru}</h4>
                        <h4><span className={styles.language}>EN:</span>  {elem.company.title_en}</h4>
                        <h4><span className={styles.language}>UZ:</span>  {elem.company.title_uz}</h4>
                        <hr />
                      </Col>
                      <Col className={styles.card_company_col} lg={12}>
                        <h6 className={styles.company_mini_title}>
                          #Описание kомпании
                        </h6>
                        <p><span className={styles.language}>RU:</span>  {elem.company.description_ru}</p>
                        <p><span className={styles.language}>EN:</span>  {elem.company.description_en}</p>
                        <p><span className={styles.language}>UZ:</span>  {elem.company.description_uz}</p>
                      </Col>
                    </Row> */}
                    <Collapse
                      items={itemCompany}
                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                      onChange={onChange}
                    />
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      Партнеры по продукту
                    </h6>
                    <Collapse
                      items={items}
                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                      onChange={onChange}
                    />
                  </div>
                </Col>
                <Col lg={12} className={styles.card_more_col}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      Продукт описания
                    </h6>
                    <Collapse
                      items={itemDesc}
                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                      onChange={onChange}
                    />
                  </div>
                </Col>
                <Col lg={12} className={styles.card_more_col}>
                  <div className={styles.card_more_col_item}>

                    <h6 className={styles.product_mini_title}>
                      Применение товара
                    </h6>
                    <Collapse
                      items={itemApp}
                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                      onChange={onChange}
                    />
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    {elem.photos.map((elem, index) =>
                      <>
                        <div className={styles.Top_edit}>
                          <h6 className={styles.product_mini_title}>Фото процедуры</h6>
                          <button id={elem.id} onClick={HandlePutModalPhotos}><i id={elem.id} class='bx bx-edit-alt'></i></button>
                        </div>
                        <Row className={styles.card_photos_wrapps}>
                          <Col lg={6}>
                            <Image.PreviewGroup
                              preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                              }}
                            >
                              <Row>
                                <Col lg={6} className={styles.card_photos_col}>
                                  <Image
                                    style={{
                                      aspectRatio: 16 / 9,
                                      borderRadius: '25px',
                                      width: "100%",
                                      // height: "150px"
                                    }}
                                    src={elem.image1}
                                  />
                                </Col>
                                <Col lg={6} className={styles.card_photos_col}>
                                  <Image
                                    style={{
                                      aspectRatio: 16 / 9,
                                      borderRadius: '25px',
                                      width: "100%",
                                      //  height: "150px"
                                    }}
                                    src={elem.image2}
                                  />
                                </Col>

                                <Col lg={6} className={styles.card_photos_col}>
                                  <Image
                                    style={{
                                      aspectRatio: 16 / 9,
                                      borderRadius: '25px',
                                      width: "100%",
                                      //  height: "150px"
                                    }}
                                    src={elem.image3}
                                  />
                                </Col>

                                <Col lg={6} className={styles.card_photos_col}>
                                  <Image
                                    style={{
                                      aspectRatio: 16 / 9,
                                      borderRadius: '25px',
                                      width: "100%",
                                      //  height: "150px"
                                    }}
                                    src={elem.image4}
                                  />
                                </Col>
                              </Row>
                            </Image.PreviewGroup>
                          </Col>
                          <Col lg={6}>
                            <div
                            // className={styles.card_partner_video_wrap}
                            >
                              {/* <h6 className={styles.company_mini_title}>
                              Ссылка на ютуб
                            </h6> */}
                              <iframe width="100%"
                                height="350"
                                src={elem.video}
                                style={{ borderRadius: "20px" }}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            </div>
                          </Col>
                        </Row>
                      </>
                    )}

                  </div>

                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    {elem.design.map((elem, index) => <>
                      <div className={styles.Top_edit}>
                        <h6 className={styles.product_mini_title}>Доказанный эффект</h6>
                        <button id={elem.id} onClick={HandlePutModalDesign}><i id={elem.id} class='bx bx-edit-alt'></i></button>
                      </div>
                      <Image.PreviewGroup
                        preview={{
                          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                      >
                        <div className={styles.card_img_cover_wrap}>
                          <div key={index} className={styles.card_img_covers}>
                            <Image
                              style={{
                                aspectRatio: 16 / 9, borderRadius: '25px',
                                height: "376px"
                              }}
                              src={elem.before}
                            />

                          </div>

                          <div className={styles.card_img_covers}>
                            <Image
                              style={{
                                aspectRatio: 16 / 9, borderRadius: '25px',
                                height: "376px"
                              }}
                              src={elem.after}
                            />

                          </div>

                        </div>
                      </Image.PreviewGroup>
                    </>)}
                  </div>
                </Col>
                <Col className={styles.card_partner_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      Технические параметры
                    </h6>
                    <Collapse
                      items={itemParametr}
                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                      onChange={onChange}
                    />
                  </div>

                </Col>
              </Row>
            ))
          }
        </div>
      </div >
      <AparatProductPuts putAparatId={putAparatId} openAparat={openAparat} setOpenAparat={() => setOpenAparat(false)} />
      <DescriptionAparatProductPut putAparatId={putAparatId} openAparatProduct={openAparatProduct} setOpenAparatProduct={() => setOpenAparatProduct(false)} />
      <SampleProductPuts putAparatId={putAparatId} openAparatProduct={openSampleProduct} setOpenAparatProduct={() => setOpenSampleProduct(false)} />
      <PhotosProductPuts putAparatId={putAparatId} openAparatProduct={openPhotosProduct} setOpenAparatProduct={() => setOpenPhotosProduct(false)} />
      <DesignProductPuts putAparatId={putAparatId} openAparatProduct={putDesign} setOpenAparatProduct={() => setPutDesign(false)} />
      <ParametrPut putAparatId={putAparatId} openAparatProduct={openParametrProduct} setOpenAparatProduct={() => setOpenParametrProduct(false)} />
    </>
  )
}

export default ProductAparatMoreComponent