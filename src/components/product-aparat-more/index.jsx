import React, { useEffect } from 'react'
import styles from './style.module.css'
import './styles.css'
import { useParams } from 'react-router-dom'
import { Image } from 'antd';
import { Col, Row } from 'react-grid-system';
import { AparatProductGet } from '../../redux/product-aparat/index';
import { useDispatch, useSelector } from 'react-redux';

const ProductAparatMoreComponent = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const aparatProductGetState = useSelector((state) => state.aparatproduct.AparatProductGet?.data)
  const filterAparat = aparatProductGetState.filter(elem => elem.id == id)
  console.log(filterAparat)
  useEffect(() => {
    dispatch(AparatProductGet())
  }, [])
  return (
    <>
      <div className={styles.card_more_section}>
        <div className={styles.card_more_big_wrap}>
          {
            filterAparat.map(elem => (
              <Row className={styles.card_more_row}>
                <Col lg={12} className={styles.card_more_col}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>Имя товара</h6>
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
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
                  </div>
                </Col>
                <Col className={styles.card_more_col} lg={12}>
                  <div className={styles.card_more_col_item}>
                    <h6 className={styles.product_mini_title}>
                      Партнеры по продукту
                    </h6>
                    {
                      elem.partners.map(partner => (
                        <Row className={styles.card_partner_row}>
                          <Col className={styles.card_partner_col} lg={12}>
                            <h6 className={styles.company_mini_title}>
                              #Имя партнера
                            </h6>
                            <h4><span className={styles.language}>RU:</span>  {partner.name_ru}</h4>
                            <h4><span className={styles.language}>EN:</span>  {partner.name_en}</h4>
                            <h4><span className={styles.language}>UZ:</span>  {partner.name_uz}</h4>
                            <hr />
                          </Col>
                          <Col className={styles.card_partner_col} lg={12}>
                            <div className={styles.partner_img_wrapp}>
                              <div>
                                <h6 className={styles.company_mini_title}>
                                  #Логотип партнеров
                                </h6>
                                <div className={styles.company_img_box}>
                                  <Image
                                    style={{ aspectRatio: 1 / 1, borderRadius: '25px', height: "176px" }}
                                    // src={elem.company.image}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
                                        style={{ aspectRatio: 1 / 1, borderRadius: '25px', height: "176px" }}
                                        // src={partner.image1}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                      />
                                    </div>

                                    <div className={styles.card_img_covers}>
                                      <Image
                                        style={{ aspectRatio: 1 / 1, borderRadius: '25px', height: "176px" }}
                                        // src={partner.image2}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                      />
                                    </div>

                                    <div className={styles.card_img_covers}>
                                      <Image
                                        style={{ aspectRatio: 1 / 1, borderRadius: '25px', height: "176px" }}
                                        // src={partner.image3}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                      />
                                    </div>
                                  </div>
                                </Image.PreviewGroup>
                              </div>
                            </div>
                            <hr />
                          </Col>
                          <Col className={styles.card_partner_col} lg={4}>
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
                          </Col>
                          <Col className={styles.card_partner_col} lg={4}>
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
                          </Col>
                          <Col className={styles.card_partner_col}>
                            <h6 className={styles.company_mini_title}>
                              #Местонахождение партнеров
                            </h6>
                            <div className={styles.partner_location}>
                              <i class='bx bxs-map'></i>
                              <p>{partner.location}</p>
                            </div>
                          </Col>
                          <Col className={styles.card_partner_col} lg={12}>
                            <hr />
                            <h6 className={styles.company_mini_title}>
                              #Описание партнера
                            </h6>
                            <p><span className={styles.language}>RU:</span>  {partner.description_ru}</p>
                            <p><span className={styles.language}>EN:</span>  {partner.description_en}</p>
                            <p><span className={styles.language}>UZ:</span>  {partner.description_uz}</p>
                            <hr />
                          </Col>
                        </Row>
                      ))
                    }

                  </div>
                </Col>
              </Row>
            ))
          }

        </div>
      </div >
    </>
  )
}

export default ProductAparatMoreComponent