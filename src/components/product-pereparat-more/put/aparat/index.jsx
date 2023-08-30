import React, { useEffect, useState } from 'react'
import { Col, Row } from "react-grid-system"
import ImageUpload from '../upload'
import SelectCommon from '../../../common/select'
import InputCommon from '../../../common/input'
import { Wrapper } from '../../../products-aparat/post/styled-index'
import { useDispatch, useSelector } from 'react-redux'
import { PereparatGet, PereparatPut, UploadImage, UploadImage2, UploadImage3, UploadPdf } from '../../../../redux/pereparat'
import { AparatGet } from '../../../../redux/aparat'
import { CompanyGet } from '../../../../redux/company'
import { PartnersGet } from '../../../../redux/partners'
import "./../../../products-aparat/post/styles.css"
import CommonBtn from '../../../common/CommonBtn'
import DraverCommon from '../../../common/Drawer'
import { PereparatCategoryGet } from '../../../../redux/pereparat-category'
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

  const AparatCategoryGets = useSelector((state) => state.pereparatcategory.PereparatCategoryGet.data);
  console.log(AparatCategoryGets);
  useEffect(() => {
    dispatch(PereparatCategoryGet());
  }, []);
  const AparatProductGets = useSelector((state) => state.pereparat.PereparatGet.data);
  useEffect(() => {
    dispatch(PereparatGet());
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
      company: companystate,
      category_pereparat: categoryaparatstate,
    };

    await dispatch(PereparatPut({ body, id: putAparatId }));
    dispatch(PereparatGet());
    setOpenAparat();
    window.location.reload();
  }
  const dataImage1 = useSelector((state) => state.pereparat?.uploadPereparat)
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const dataImage2 = useSelector((state) => state.pereparat?.uploadPereparat2)
  const HandleChange2 = async (e) => {
    await dispatch(UploadImage2(e));
  };
  const dataImage3 = useSelector((state) => state.pereparat?.uploadPereparat3)
  const HandleChange3 = async (e) => {
    await dispatch(UploadImage3(e));
  };
  const dataPdf = useSelector((state) => state.pereparat?.uploadPereparatPdf)
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
      label: elem.title_ru,
    })
  );

  const OptionPartners = [];
  PartnersGets.map((elem) =>
    OptionPartners.push({
      value: elem.id,
      label: elem.name_ru,
    })
  );
  return (
    <>
      <DraverCommon open={openAparat} onClose={setOpenAparat}>
        {AparatProductFilter.map(elem => <>
          <Wrapper onSubmit={HandlePut}>
            <div className="input_wrap">
              <div className="scrool">
                <Row className="row">
                  <Col className="col" lg={12}>
                    <ImageUpload HandleChange={HandleChange} HandleChange2={HandleChange2} HandleChange3={HandleChange3} />
                  </Col>
                  <Col className="col" lg={6}>
                    <div>
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
                    </div>
                  </Col>
                  <Col className="col" lg={6}>
                    <div>
                      <h4>Выбрать категория апарат</h4>
                      <div className="selects">
                        <SelectCommon
                          onChange={SelectChange2}
                          defaultValue={elem.category_pereparat.title_ru}

                          placeholder="Выбрать"
                          options={options}
                          required
                        />
                        <span style={{ color: "red", marginTop: "10px", marginLeft: "5px" }}>вы должны выбрать!</span>

                      </div>
                    </div>
                  </Col>
                  <Col className="col" lg={6}>
                    <h4>PDF-файл <span style={{ cursor: "pointer" }} onClick={() => window.location.href = elem.pdf}>(посмотреть старый пдф)</span></h4>
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
                      defaultValue={elem.name_uz}
                      required
                      onChange={(e) => setTitleUz(e.currentTarget.value)}
                    />
                  </Col>
                  <Col className="col" lg={4}>
                    <h4>*</h4>

                    <InputCommon
                      type="text"
                      placeholder="русский"
                      defaultValue={elem.name_ru}

                      required
                      onChange={(e) => setTitleRU(e.currentTarget.value)}
                    />
                  </Col>
                  <Col className="col" lg={4}>
                    <h4>*</h4>
                    <InputCommon
                      type="text"
                      placeholder="английский"
                      defaultValue={elem.name_en}

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
                      defaultValue={elem.description_uz}

                      onChange={(e) => setProductTypeUz(e.currentTarget.value)}
                      rows="10"
                      cols="120"
                    ></textarea>
                  </Col>
                  <Col className="col" lg={12}>
                    <textarea
                      className="textarea_products"
                      placeholder="русский"
                      defaultValue={elem.description_ru}

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
                      defaultValue={elem.description_en}

                      required
                      onChange={(e) => setProductTypeEn(e.currentTarget.value)}
                      rows="10"
                      cols="120"
                    ></textarea>
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