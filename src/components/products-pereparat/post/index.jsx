import React, { useEffect, useState } from "react";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";
import { useDispatch, useSelector } from "react-redux";

import { CategoryGet } from "../../../redux/category/index";
import { Row, Col } from "react-grid-system";
import SelectCommon from "../../common/select/index";
import DrawerCommon from "../../common/Drawer/index";
import InputCommon from "../../common/input/index";
import "./styles.css";
import { Spin, Input, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, message, Steps, theme } from "antd";
import styled from "styled-components";
import ImageUpload from "./upload";
import { AparatGet } from "../../../redux/aparat";
import { CompanyGet } from "../../../redux/company";
import { PartnersGet } from "../../../redux/partners";
import AparatProduct from "./aparat";
import { DescriptionProductPost } from "../../../redux/product-aparat/description";

import { PhotosProductGet, PhotosProductPost, UploadImagePhoto, UploadImagePhoto2, UploadImagePhoto3 , UploadImagePhoto4 } from "../../../redux/product-aparat/photos";
import { LocalFireDepartment } from "@mui/icons-material";
import {DesignProductPost, UploadImageDesign , UploadImageDesign2} from "./../../../redux/product-aparat/design"
import { PereparatGet, PereparatPost , UploadImage, UploadImage2, UploadImage3 , UploadPdf } from "../../../redux/pereparat";
import { PereparatCategoryGet } from "../../../redux/pereparat-category";
function ProductAddForm({ Open, HandleClose, setSelectId, selectId }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  // !!! aparat-product api !!!
  const [titleUz, setTitleUz] = useState();
  const [titleRu, setTitleRU] = useState();
  const [titleEn, setTitleEn] = useState();
  const [productTypeUz, setProductTypeUz] = useState();
  const [productTypeRu, setProductTypeRu] = useState();
  const [productTypeEn, setProductTypeEn] = useState();
  const [companystate , setCompanyState] = useState();
  const [categoryaparatstate , setCategoryAparatState] = useState();
  const [partnerstate , setPartnersState] = useState();
  const [salecount, setsalecount] = useState();
  // ! photos api 

  const next = async (e) => {
    e.preventDefault();
      const body = {
        name_uz: titleUz,
        name_ru: titleRu,
        name_en: titleEn,
        description_uz: productTypeUz,
        description_ru: productTypeRu,
        description_en: productTypeEn,
        image1: dataImage1?.data,
        image2: dataImage2?.data,
        image3: dataImage3?.data,
        pdf: dataPdf.data,
        company : companystate,
        category_pereparat: categoryaparatstate,
      };
      await dispatch(PereparatPost(body));
        dispatch(PereparatGet());
      window.location.reload();
  };
  const AparatCategoryGets = useSelector((state) => state.pereparatcategory.PereparatCategoryGet.data);
  useEffect(() => {
    dispatch(PereparatCategoryGet());
  }, []);
  const CompanyGets = useSelector((state) => state.company.CompanyGet.data);
  useEffect(() => {
    dispatch(CompanyGet());
  }, []);
    const PartnersGets = useSelector((state) => state.partners.PartnersGet.data)
    useEffect(() => {
      dispatch(PartnersGet());
    }, []);

    const dataImage1 =  useSelector((state) => state.pereparat?.uploadPereparat)
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const dataImage2 =  useSelector((state) => state.pereparat?.uploadPereparat2)
  const HandleChange2 = async (e) => {
    await dispatch(UploadImage2(e));
  };
  const dataImage3 =  useSelector((state) => state.pereparat?.uploadPereparat3)
  const HandleChange3 = async (e) => {
    await dispatch(UploadImage3(e));
  };
  const dataPdf =  useSelector((state) => state.pereparat?.uploadPereparatPdf)
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
  // !!! aparat-product api !!!

  // ? * ----------------------------------------------------------------------------------------- *//

  // !!! photos-product api !!!
  const dataImagePhotos1 =  useSelector((state) => state.photos?.uploadPhotosProduct)
  const HandleChangePhotos = async (e) => {
    await dispatch(UploadImagePhoto(e));
  };
  const dataImagePhotos2 =  useSelector((state) => state.photos?.uploadPhotosProduct2)
  const HandleChangePhotos2 = async (e) => {
    await dispatch(UploadImagePhoto2(e));
  };
  const dataImagePhotos3 =  useSelector((state) => state.photos?.uploadPhotosProduct3)
  const HandleChangePhotos3 = async (e) => {
    await dispatch(UploadImagePhoto3(e));
  };
  const dataImagePhotos4 =  useSelector((state) => state.photos?.uploadPhotosProduct4)
  const HandleChangePhotos4 = async (e) => {
    await dispatch(UploadImagePhoto4(e));
  };
    // !!! design-product api !!!
    const dataImageDesign1 =  useSelector((state) => state.design?.uploadDesignProduct)
    const HandleChangeDesigns = async (e) => {
      await dispatch(UploadImageDesign(e));
    };
    const dataImageDesign2 =  useSelector((state) => state.design?.uploadDesignProduct2)
    const HandleChangeDesign2s = async (e) => {
      await dispatch(UploadImageDesign2(e));
    };
    
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "#000",
      }}
      spin
    />
  );

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

  // STEPS CODE
  const steps = [
    {
      title: "Перепарат Продукт",
      content: (
          <>
 
          </>
      ),
    },
  ];

  const { token } = theme.useToken();

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineHeight: "260px",
    // textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  // STEPS CODE
  return (
    <DrawerCommon title="Добавить продукт" open={Open} onClose={HandleClose}>
         <AparatProduct  setTitleUz={setTitleUz} setTitleRU={setTitleRU} setTitleEn={setTitleEn} setProductTypeUz={setProductTypeUz} setProductTypeRu={setProductTypeRu} setProductTypeEn={setProductTypeEn} setsalecount={setsalecount} HandleChange={HandleChange} HandleChange2={HandleChange2} HandleChange3={HandleChange3} options={options} optionsCompany={optionsCompany} OptionPartners={OptionPartners} SelectChange={SelectChange} SelectChange2={SelectChange2} SelectChange3={SelectChange3}  HandleChangePdf={HandleChangePdf}/>
         <CommonBtn
          onClick={next}
style={{
                  margin: "20px auto 0 auto",
                  padding: "12px 40px",
                  border: "2px solid #fff",
                }}
              >
                Добавить
              </CommonBtn>
    </DrawerCommon>
  );
}

export default ProductAddForm;
