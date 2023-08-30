import React, { useEffect } from 'react'
import styles from './style.module.css'
import './styles.css'
import { useParams } from 'react-router-dom'
import { Image } from 'antd';
import { Col, Row } from 'react-grid-system';
import { AparatProductGet } from '../../redux/product-aparat/index';
import { useDispatch, useSelector } from 'react-redux';
import DraverCommon from '../common/Drawer';
import { useState } from 'react';
import AparatProductPut from './put/aparat';
import AparatProductPuts from './put/aparat';
import DescriptionAparatProductPut from './put/description';
import SampleProductPuts from './put/sample';
import PhotosProductPuts from './put/photos';
import DesignProductPuts from './put/design';
import ParametrPut from './put/parametr';
import { PereparatGet } from '../../redux/pereparat';
const ProductPereparatMoreComponent = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [openAparat , setOpenAparat] = useState(false);
  const [openAparatProduct , setOpenAparatProduct] = useState(false);
  const [openSampleProduct , setOpenSampleProduct] = useState(false);
  const [openPhotosProduct , setOpenPhotosProduct] = useState(false);
  const [openParametrProduct , setOpenParametrProduct] = useState(false);
  const [putAparatId , setPutAparatId] = useState();
  const [putDesign , setPutDesign] = useState();
  const aparatProductGetState = useSelector((state) => state.pereparat.PereparatGet?.data)
  const filterAparat = aparatProductGetState.filter(elem => elem.id == id)
  console.log(filterAparat);
  useEffect(() => {
    dispatch(PereparatGet())
  }, [])
  
  const HandlePutModal = (e) => {
    setPutAparatId(e.target.id)
    setOpenAparat(true)
  }
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
                      Категория товара
                    </h6>
                    <h4><span className={styles.language}>RU:</span> {elem.category_pereparat?.title_ru}</h4>
                    <h4><span className={styles.language}>EN:</span> {elem.category_pereparat?.title_en}</h4>
                    <h4><span className={styles.language}>UZ:</span> {elem.category_pereparat?.title_uz}</h4>
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
                  </div>
                </Col>
              </Row>
            ))
          }
        </div>
      </div >
            <AparatProductPuts putAparatId={putAparatId} openAparat={openAparat} setOpenAparat={() => setOpenAparat(false)}/>
    </>
  )
}

export default ProductPereparatMoreComponent