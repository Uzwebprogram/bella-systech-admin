import React from 'react'
import {Col , Row} from "react-grid-system"
import ImageUpload from '../upload'
import SelectCommon from '../../../common/select'
import InputCommon from '../../../common/input'
import { Wrapper } from '../styled-index'
const AparatProduct = ({setTitleUz , setTitleRU , setTitleEn , setProductTypeUz , setProductTypeRu , setProductTypeEn , setsalecount , HandleChange , HandleChange2 , HandleChange3 , options , optionsCompany , OptionPartners , SelectChange , SelectChange2 , SelectChange3 ,  HandleChangePdf , dataImage1 , dataImage2  , dataImage3 }) => {
  return (
                <>
          <Wrapper>
            <div className="input_wrap">
              <div className="scrool">
                <Row className="row">
                  <Col className="col" lg={12}>
                    <ImageUpload HandleChange={HandleChange} data={dataImage1} HandleChange2={HandleChange2} data2={dataImage2} HandleChange3={HandleChange3} data3={dataImage3}/>
                  </Col>
                  <Col className="col" lg={6}>
                    <div>
                      <h4>Выбрать компания</h4>
                      <div className="selects">
                        <SelectCommon
                          onChange={SelectChange}
                          placeholder="Выбрать"
                          options={optionsCompany}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col className="col" lg={6}>
                    <div>
                      <h4>Выбрать категория перепарат</h4>
                      <div className="selects">
                        <SelectCommon
                          onChange={SelectChange2}
                          placeholder="Выбрать"
                          options={options}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col className="col" lg={6}>
                    <h4>PDF-файл</h4>
                    <InputCommon
                      className="file_input"
                      type="file"
                      id="fileupload"
                      required
                      onChange={(e) => HandleChangePdf(e)}
                    />
                  </Col>
                  <Col className="col" lg={4}>
                    <h4>Имя продукта</h4>
                    <InputCommon
                      type="text"
                      placeholder="узбекский"
                      required
                      onChange={(e) => setTitleUz(e.currentTarget.value)}
                    />
                  </Col>
                  <Col className="col" lg={4}>
                    <h4>*</h4>

                    <InputCommon
                      type="text"
                      placeholder="русский"
                      required
                      onChange={(e) => setTitleRU(e.currentTarget.value)}
                    />
                  </Col>
                  <Col className="col" lg={4}>
                    <h4>*</h4>
                    <InputCommon
                      type="text"
                      placeholder="английский"
                      required
                      onChange={(e) => setTitleEn(e.currentTarget.value)}
                    />
                  </Col>
                  <Col className="col" lg={12}>
                    <h4>Oписание</h4>
                    <textarea
                      className="textarea_products"
                      placeholder="узбекский"
                      required
                      onChange={(e) => setProductTypeUz(e.currentTarget.value)}
                      rows="10"
                      cols="120"
                    ></textarea>
                  </Col>
                  <Col className="col" lg={12}>
                    <textarea
                      className="textarea_products"
                      placeholder="русский"
                      required
                      onChange={(e) => setProductTypeRu(e.currentTarget.value)}
                      rows="10"
                      cols="120"
                    ></textarea>
                  </Col>
                  <Col className="col" lg={12}>
                    <textarea
                      className="textarea_products"
                      placeholder="английский"
                      required
                      onChange={(e) => setProductTypeEn(e.currentTarget.value)}
                      rows="10"
                      cols="120"
                    ></textarea>
                  </Col>

                </Row>
              </div>
            </div>
          </Wrapper>
        </>
  )
}

export default AparatProduct