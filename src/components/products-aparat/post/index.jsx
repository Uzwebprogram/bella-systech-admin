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
import {AparatProductGet, AparatProductPost , UploadImage, UploadImage2, UploadImage3 , UploadPdf} from "../../../redux/product-aparat"
import DescriptionAparatProduct from "./description";
import AparatProduct from "./aparat";
import { DescriptionProductPost } from "../../../redux/product-aparat/description";
function ProductAddForm({ Open, HandleClose, setSelectId, selectId }) {
  const dispatch = useDispatch();
  const [descriptionUzYoutube , setDescriptionUzYoutube] = useState();
  const [descriptionRuYoutube , setDescriptionRuYoutube] = useState();
  const [descriptionEnYoutube , setDescriptionEnYoutube] = useState();
  const [YoutubeLink , setYouteLink] = useState();
  const [current, setCurrent] = useState(0);
  const AparatProductGetsPost = useSelector((state) => state.aparatproduct.AparatProductPost.data)
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
  console.log(current);
  const next = async (e) => {
    e.preventDefault();
    if (current == 0) {
      const body = {
        name_uz: titleUz,
        name_ru: titleRu,
        name_en: titleEn,
        description_uz: productTypeUz,
        description_ru: productTypeRu,
        description_en: productTypeEn,
        image1: dataImage1.data,
        image2: dataImage2.data,
        image3: dataImage3.data,
        pdf: dataPdf.data,
        product_benefits: salecount,
        company : companystate,
        category_aparat: categoryaparatstate,
        partners : partnerstate
      };
      await dispatch(AparatProductPost(body));
      dispatch(AparatProductGet());
      setCurrent(current + 1);
    } else if (current == 1) {
      const body = {
        description_uz: descriptionUzYoutube,
        description_ru: descriptionRuYoutube,
        description_en: descriptionEnYoutube,
        youtube_link : YoutubeLink,
        aparat : AparatProductGetsPost?.data?.data?.id
      };
      await dispatch(DescriptionProductPost(body))
      setCurrent(current + 1);

    }

  };
  const AparatCategoryGets = useSelector((state) => state.aparat.AparatGet.data);
  useEffect(() => {
    dispatch(AparatGet());
  }, []);
  const CompanyGets = useSelector((state) => state.company.CompanyGet.data);
  useEffect(() => {
    dispatch(CompanyGet());
  }, []);
    const PartnersGets = useSelector((state) => state.partners.PartnersGet.data)
    useEffect(() => {
      dispatch(PartnersGet());
    }, []);

    const dataImage1 =  useSelector((state) => state.aparatproduct?.uploadAparatProduct)
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const dataImage2 =  useSelector((state) => state.aparatproduct?.uploadAparatProduct2)
  const HandleChange2 = async (e) => {
    await dispatch(UploadImage2(e));
  };
  const dataImage3 =  useSelector((state) => state.aparatproduct?.uploadAparatProduct3)
  const HandleChange3 = async (e) => {
    await dispatch(UploadImage3(e));
  };
  const dataPdf =  useSelector((state) => state.aparatproduct?.uploadAparatProductPdf)
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
      title: "First",
      content: (
          <>
          <AparatProduct  setTitleUz={setTitleUz} setTitleRU={setTitleRU} setTitleEn={setTitleEn} setProductTypeUz={setProductTypeUz} setProductTypeRu={setProductTypeRu} setProductTypeEn={setProductTypeEn} setsalecount={setsalecount} HandleChange={HandleChange} HandleChange2={HandleChange2} HandleChange3={HandleChange3} options={options} optionsCompany={optionsCompany} OptionPartners={OptionPartners} SelectChange={SelectChange} SelectChange2={SelectChange2} SelectChange3={SelectChange3}  HandleChangePdf={HandleChangePdf}/>
          </>
      ),
    },

    {
      title: "Second",
      content: <>
      <DescriptionAparatProduct  setDescriptionRuYoutube={setDescriptionRuYoutube} setDescriptionUzYoutube={setDescriptionUzYoutube} setDescriptionEnYoutube={setDescriptionEnYoutube} setYouteLink={setYouteLink} />
      </>,
    },
    {
      title: "Third",
      content: "Third-content",
    },
    {
      title: "Fourth",
      content: "Fourth-content",
    },
    {
      title: "Last",
      content: "Last-content",
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
      <>
        <Steps className={styled.stepsss} current={current} items={items} />
        <div className="step_content" style={contentStyle}>
          {steps[current].content}
        </div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
        </div>
      </>
    </DrawerCommon>
  );
}

export default ProductAddForm;
