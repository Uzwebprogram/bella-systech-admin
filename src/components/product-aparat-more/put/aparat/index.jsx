import React, { useEffect, useState } from 'react'
import { Col, Row } from "react-grid-system"
import ImageUpload from '../upload'
import SelectCommon from '../../../common/select'
import InputCommon from '../../../common/input'
import { Wrapper } from '../../../products-aparat/post/styled-index'
import { useDispatch, useSelector } from 'react-redux'
import { AparatProductGet, AparatProductPut, UploadImage, UploadImage2, UploadImage3, UploadPdf } from '../../../../redux/product-aparat'
import { AparatGet } from '../../../../redux/aparat'
import { CompanyGet } from '../../../../redux/company'
import { PartnersGet } from '../../../../redux/partners'
import "./../../../products-aparat/post/styles.css"
import CommonBtn from '../../../common/CommonBtn'
import './style.css'
import { Input } from 'antd';

import DraverCommon from '../../../common/Drawer'
const AparatProductPuts = ({ putAparatId, openAparat, setOpenAparat }) => {
  const dispatch = useDispatch();
  const [titleUz, setTitleUz] = useState();
  const [titleRu, setTitleRU] = useState();
  const [titleEn, setTitleEn] = useState();
  const [productTypeUz, setProductTypeUz] = useState();
  const [productTypeRu, setProductTypeRu] = useState();
  const [productTypeEn, setProductTypeEn] = useState();
  const [companystate, setCompanyState] = useState();
  const [categoryaparatstate, setCategoryAparatState] = useState();
  const [partnerstate, setPartnersState] = useState();
  const [salecount, setsalecount] = useState();
  const [salecounten, setsalecounten] = useState();
  const [salecountuz, setsalecountuz] = useState();

  const AparatCategoryGets = useSelector((state) => state.aparat.AparatGet.data);
  useEffect(() => {
    dispatch(AparatGet());
  }, []);
  const AparatProductGets = useSelector((state) => state.aparatproduct.AparatProductGet.data);
  useEffect(() => {
    dispatch(AparatProductGet());
  }, []);
  const AparatProductFilter = AparatProductGets.filter(e => e.id == putAparatId)
  const CompanyGets = useSelector((state) => state.company.CompanyGet.data);
  useEffect(() => {
    dispatch(CompanyGet());
  }, []);
  const PartnersGets = useSelector((state) => state.partners.PartnersGet.data)
  useEffect(() => {
    dispatch(PartnersGet());
  }, []);

  const HandlePut = async (e) => {
    e.preventDefault();
    const body = {
      name_uz: titleUz,
      name_ru: titleRu,
      name_en: titleEn,
      description_uz: productTypeUz,
      description_ru: productTypeRu,
      description_en: productTypeEn,
      image1: !dataImage1.data ? AparatProductFilter.map(elem => elem.image1)[0] : dataImage1?.data,
      image2: !dataImage2.data ? AparatProductFilter.map(elem => elem.image2)[0] : dataImage2?.data,
      image3: !dataImage3.data ? AparatProductFilter.map(elem => elem.image3)[0] : dataImage3?.data,
      pdf: !dataPdf.data ? AparatProductFilter.map(elem => elem.pdf)[0] : dataPdf.data,
      product_benefits: salecount,
      product_benefits_en: salecounten,
      product_benefits_uz: salecountuz,
      company: companystate,
      category_aparat: categoryaparatstate,
      partners: partnerstate
    };
    e.target[0].value = null
    e.target[1].value = null
    e.target[2].value = null
    e.target[3].value = null
    e.target[4].value = null
    e.target[5].value = null
    e.target[6].value = null
    e.target[7].value = null
    e.target[8].value = null
    e.target[9].value = null
    e.target[10].value = null
    e.target[11].value = null
    e.target[12].value = null
    e.target[13].value = null
    await dispatch(AparatProductPut({ body, id: putAparatId }));
    dispatch(AparatProductGet());
    setOpenAparat();
  }
  const dataImage1 = useSelector((state) => state.aparatproduct?.uploadAparatProduct)
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const dataImage2 = useSelector((state) => state.aparatproduct?.uploadAparatProduct2)
  const HandleChange2 = async (e) => {
    await dispatch(UploadImage2(e));
  };
  const dataImage3 = useSelector((state) => state.aparatproduct?.uploadAparatProduct3)
  const HandleChange3 = async (e) => {
    await dispatch(UploadImage3(e));
  };
  const dataPdf = useSelector((state) => state.aparatproduct?.uploadAparatProductPdf)
  const HandleChangePdf = async (e) => {
    await dispatch(UploadPdf(e));
  };
  const SelectChange = (e) => {
    setCompanyState(e);
  };

  const SelectChange2 = (e) => {
    setCategoryAparatState(e);
  };
  const SelectChange3 = (e) => {
    setPartnersState(e);
  };
  const options = [];
  AparatCategoryGets.map((elem) =>
    options.push({
      value: elem.id,
      label: elem.title_ru,
    })
  );
  const optionsCompany = [];
  CompanyGets.map((elem) =>
    optionsCompany.push({
      value: elem.id,
      label: elem.name,
    })
  );

  const OptionPartners = [];
  PartnersGets.map((elem) =>
    OptionPartners.push({
      value: elem.id,
      label: elem.name_ru,
    })
  );
  const { TextArea } = Input;
  return (
    <>
      <DraverCommon open={openAparat} onClose={setOpenAparat}>
        {AparatProductFilter.map(elem => <>
          <Wrapper onSubmit={HandlePut}>
            <div className="input_wrap">
              <div className="scrool">
                <Row className="row">
                  <Col className="col" lg={12}>
                    <div className='col_edit_item'>
                      <ImageUpload
                        imgSize={3 / 4}
                        elem={elem}
                        HandleChange={HandleChange}
                        HandleChange2={HandleChange2}
                        HandleChange3={HandleChange3}
                      />
                    </div>
                  </Col>
                  <Col className="col" lg={4}>
                    <div className='col_edit_item' style={{ height: "93%" }}>
                      <h4>Выбрать компания</h4>
                      <div className="selects">
                        <SelectCommon
                          defaultValue={elem.company.name}
                          onChange={SelectChange}
                          placeholder="Выбрать"
                          options={optionsCompany}
                        />
                        <span style={{ color: "red", marginTop: "10px", marginLeft: "5px" }}>вы должны выбрать!</span>
                      </div>
                      <h4>Выбрать категория апарат</h4>
                      <div className="selects">
                        <SelectCommon
                          onChange={SelectChange2}
                          defaultValue={elem.category_aparat.title_ru}
                          placeholder="Выбрать"
                          options={options}
                        />
                        <span style={{ color: "red", marginTop: "10px", marginLeft: "5px" }}>вы должны выбрать!</span>
                      </div>
                      <h4>Выбрать партнеры</h4>
                      <div className="selects">
                        <SelectCommon
                          onChange={SelectChange3}
                          defaultValue={elem.partners.name_ru}
                          placeholder="Выбрать"
                          options={OptionPartners}
                        />
                        <span style={{ color: "red", marginTop: "10px", marginLeft: "5px" }}>вы должны выбрать!</span>
                      </div>
                    </div>
                  </Col>
                  <Col className="col" lg={8}>
                    <div className='col_edit_item' style={{ marginBottom: "20px" }}>
                      <h4>PDF-файл <span style={{ cursor: "pointer" }} onClick={() => window.location.href = elem.pdf}>(посмотреть старый пдф)</span></h4>
                      <InputCommon
                        className="file_input"
                        type="file"
                        id="fileupload"
                        onChange={(e) => HandleChangePdf(e)}
                      />
                    </div>
                    <div className='col_edit_item'>
                      <h4>Имя продукта русский</h4>
                      <InputCommon
                        type="text"
                        defaultValue={elem.name_ru}
                        onChange={(e) => setTitleRU(e.currentTarget.value)}
                      />
                      <div>
                        <h4>Имя продукта английский</h4>
                        <InputCommon
                          type="text"
                          defaultValue={elem.name_en}
                          onChange={(e) => setTitleEn(e.currentTarget.value)}
                        />
                      </div>
                      <div>
                        <h4>Имя продукта узбекский</h4>
                        <InputCommon
                          type="text"
                          defaultValue={elem.name_uz}
                          onChange={(e) => setTitleUz(e.currentTarget.value)}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col className="col" lg={12}>
                    <div className='col_edit_item'>
                      <h4>Oписание русский</h4>
                      <TextArea
                        defaultValue={elem.description_ru}
                        onChange={(e) => setProductTypeRu(e.currentTarget.value)}
                        autoSize />
                      <h4>Oписание английский</h4>
                      <TextArea
                        defaultValue={elem.description_en}
                        onChange={(e) => setProductTypeEn(e.currentTarget.value)}
                        autoSize />
                      <h4>Oписание узбекский</h4>
                      <TextArea
                        defaultValue={elem.description_uz}
                        onChange={(e) => setProductTypeUz(e.currentTarget.value)}
                        autoSize />
                    </div>
                  </Col>

                  {/* <Col className="col" lg={12}>
                    <div className='col_edit_item'>
                      <h4>*</h4>
                      <TextArea
                        defaultValue={elem.description_en}
                        onChange={(e) => setProductTypeEn(e.currentTarget.value)}
                        autoSize />
                    </div>
                  </Col> */}
                  <Col className="col" lg={12}>
                    <div className='col_edit_item'>
                      <h4>Преимущества русский</h4>
                      <TextArea
                        defaultValue={elem.product_benefits}
                        onChange={(e) => setsalecount(e.currentTarget.value)}
                        autoSize />
                      <div>
                        <h4>Преимущества английский</h4>
                        <TextArea
                          defaultValue={elem.product_benefits_en}
                          onChange={(e) => setsalecounten(e.currentTarget.value)}
                          autoSize />
                      </div>
                      <div>
                        <h4>Преимущества узбекский</h4>
                        <TextArea
                          defaultValue={elem.product_benefits_uz}
                          onChange={(e) => setsalecountuz(e.currentTarget.value)}
                          autoSize />
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>
            </div>
            <CommonBtn
              type="submit"
              style={{
                margin: "20px auto 0 auto",
                padding: "12px 40px",
                border: "2px solid #fff",
              }}
            >
              Добавить
            </CommonBtn>
          </Wrapper>
        </>)}
      </DraverCommon>


    </>
  )
}

export default AparatProductPuts