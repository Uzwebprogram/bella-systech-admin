import React from 'react'
import { Col, Row } from "react-grid-system"
import ImageUpload from '../upload'
import SelectCommon from '../../../common/select'
import InputCommon from '../../../common/input'
import { Wrapper } from '../styled-index'
import { Input } from 'antd';
const { TextArea } = Input;

const AparatProduct = ({
  setTitleUz,
  setTitleRU,
  setTitleEn,
  setProductTypeUz,
  setProductTypeRu,
  setProductTypeEn,
  setsalecount,
  setsalecountuz,
  setsalecounten,
  HandleChange,
  HandleChange2,
  HandleChange3,
  options,
  optionsCompany,
  OptionPartners,
  SelectChange,
  SelectChange2,
  SelectChange3,
  HandleChangePdf,
  dataImage1,
  dataImage2,
  dataImage3
}) => {
  return (
    <>
      <Wrapper>
        <div className="input_wrap">
          <div className="scrool">
            <Row className="row">
              <Col className="col" lg={12}>
                <ImageUpload
                  HandleChange={HandleChange}
                  data={dataImage1}
                  HandleChange2={HandleChange2}
                  data2={dataImage2}
                  HandleChange3={HandleChange3}
                  data3={dataImage3}
                  imgSize={3 / 4}
                />
              </Col>
              <Col className="col" lg={4}>
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
                <div>
                  <h4>Выбрать категория апарат</h4>
                  <div className="selects">
                    <SelectCommon
                      onChange={SelectChange2}
                      placeholder="Выбрать"
                      options={options}
                    />
                  </div>
                </div>
                <div>
                  <h4>Выбрать партнеры</h4>
                  <div className="selects">
                    <SelectCommon
                      onChange={SelectChange3}
                      placeholder="Выбрать"
                      options={OptionPartners}
                    />
                  </div>
                </div>
              </Col>
              <Col className="col" lg={8}>
                <div>
                  <h4>PDF-файл</h4>
                  <InputCommon
                    className="file_input"
                    type="file"
                    id="fileupload"
                    required
                    onChange={(e) => HandleChangePdf(e)}
                  />
                </div>
                <div>
                  <h4>Имя продукта</h4>
                  <InputCommon
                    type="text"
                    placeholder="узбекский"
                    required
                    onChange={(e) => setTitleUz(e.currentTarget.value)}
                  />
                </div>
                <div style={{ margin: "20px 0" }}>
                  <InputCommon
                    type="text"
                    placeholder="русский"
                    required
                    onChange={(e) => setTitleRU(e.currentTarget.value)}
                  />
                </div>
                <div>
                  <InputCommon
                    type="text"
                    placeholder="английский"
                    required
                    onChange={(e) => setTitleEn(e.currentTarget.value)}
                  />
                </div>

              </Col>
              <Col className="col" lg={12}>
                <div>
                  <h4>Oписание</h4>
                  <TextArea
                    placeholder="узбекский"
                    required
                    onChange={(e) => setProductTypeUz(e.currentTarget.value)}
                    autoSize />
                </div>
              </Col>
              <Col className="col" lg={12}>
                <div style={{ margin: "20px 0" }}>
                  <TextArea
                    placeholder="русский"
                    required
                    onChange={(e) => setProductTypeRu(e.currentTarget.value)}
                    autoSize />
                </div>
              </Col>
              <Col className="col" lg={12}>
                <div>
                  <TextArea
                    placeholder="английский"
                    required
                    onChange={(e) => setProductTypeEn(e.currentTarget.value)}
                    autoSize />
                </div>
              </Col>
              <Col className="col" lg={12}>
                <div>
                  <h4>Преимущества товара</h4>
                  <TextArea
                    placeholder="русский"
                    required
                    onChange={(e) => setsalecount(e.currentTarget.value)}
                    autoSize />
                </div>
                <div style={{ margin: "20px 0" }}>
                  <TextArea
                    placeholder="английский"
                    required
                    onChange={(e) => setsalecounten(e.currentTarget.value)}
                    autoSize />
                </div>
                <div>
                  <TextArea
                    placeholder=" узбекский"
                    required
                    onChange={(e) => setsalecountuz(e.currentTarget.value)}
                    autoSize />
                </div>
              </Col>

            </Row>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default AparatProduct