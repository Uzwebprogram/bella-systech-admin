import React, { useEffect } from 'react'
import styles from './style.module.css'
import './styles.css'
import { useParams } from 'react-router-dom'
import { Image, Collapse } from 'antd';
import { Col, Row } from 'react-grid-system';
import { CaretRightOutlined } from '@ant-design/icons';
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
  const [openAparat, setOpenAparat] = useState(false);
  const [putAparatId, setPutAparatId] = useState();
  const [openAparatProduct, setOpenAparatProduct] = useState(false);
  const aparatProductGetState = useSelector((state) => state.pereparat.PereparatGet?.data)
  const filterAparat = aparatProductGetState.filter(elem => elem.id == id)
  useEffect(() => {
    dispatch(PereparatGet())
  }, [])

  const HandlePutModal = (e) => {
    setPutAparatId(e.target.id)
    setOpenAparat(true)
  }
  const HandlePutModalDescription = (e) => {
    setPutAparatId(e.currentTarget.id)
    setOpenAparatProduct(true)
  }
  const itemCompany = []
  filterAparat.map(elem => (
    itemCompany.push(
      {
        key: elem.company.id,
        label: elem.company.name,
        children: (
          <Row className={styles.card_company_row}>
            <Col className={styles.card_company_col} lg={12}>
              <div className={styles.card_more_col_item}>
                <h6 className={styles.company_mini_title}>
                  #Имя компании
                </h6>
                <h4>{elem.company.name}</h4>
              </div>
            </Col>
            <Col className={styles.card_company_col} lg={12}>
              <div className={styles.card_more_col_item}>
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
              </div>
            </Col>
            <Col className={styles.card_company_col} lg={12}>
              <div className={styles.card_more_col_item}>
                <h6 className={styles.company_mini_title}>
                  #***
                </h6>
                <h4><span className={styles.language}>RU:</span>  {elem.company.title_ru}</h4>
                <h4><span className={styles.language}>EN:</span>  {elem.company.title_en}</h4>
                <h4><span className={styles.language}>UZ:</span>  {elem.company.title_uz}</h4>
              </div>
            </Col>
            <Col className={styles.card_company_col} lg={12}>
              <div className={styles.card_more_col_item}>
                <h6 className={styles.company_mini_title}>
                  #Описание kомпании
                </h6>
                <p><span className={styles.language}>RU:</span>  {elem.company.description_ru}</p>
                <p><span className={styles.language}>EN:</span>  {elem.company.description_en}</p>
                <p><span className={styles.language}>UZ:</span>  {elem.company.description_uz}</p>
              </div>
            </Col>
          </Row>
        ),
      }
    )
  ))

  const itemDesc = []
  filterAparat.map(elem => (
    elem.descriptions.map((e) => (
      itemDesc.push(
        {
          key: e.id,
          label: `${e.description_ru.slice(0, 100)}...`,
          children: (
            <>
              <div className={styles.Top_edit}>
                <p style={{ color: "black", fontWeight: "bold", margin: "0 0 10px 0" }}> Описания изменить</p>
                <button id={e.id} onClick={HandlePutModalDescription}><i id={e.id} class='bx bx-edit-alt'></i></button>
              </div>
              <div className={styles.card_more_col_item} style={{ marginBottom: "20px" }}>
                <p> <span className={styles.language}>RU:</span>  {e.description_ru}
                </p>
                <p><span className={styles.language}>EN:</span>  {e.description_en}</p>
                <p><span className={styles.language}>UZ:</span>  {e.description_uz}</p>
              </div>
              <div className={styles.card_more_col_item}>
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
              </div>
            </>
          ),
        }
      )
    ))
  ))
  const onChange = (key) => {
    console.log(key);
  };
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
              </Row>
            ))
          }
        </div>
      </div >
      <AparatProductPuts putAparatId={putAparatId} openAparat={openAparat} setOpenAparat={() => setOpenAparat(false)} />
      <DescriptionAparatProductPut putAparatId={putAparatId} openAparatProduct={openAparatProduct} setOpenAparatProduct={() => setOpenAparatProduct(false)} />
    </>
  )
}

export default ProductPereparatMoreComponent