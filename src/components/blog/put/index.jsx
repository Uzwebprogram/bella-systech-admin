import React, { useRef, useEffect, useState } from "react";
import CommonBtn from "../../common/CommonBtn";
import { useDispatch } from "react-redux";
import ImageUpload from "./upload";
import SelectCommon from "../../common/select";
import InputCommon from "../../common/input";
import {
  PartnersPut,
  PartnersGet,
  UploadImage1,
  UploadImage2,
  UploadImage3,
  UploadLogo
} from "../../../redux/partners/index";
import { AparatGet } from "../../../redux/aparat";
import { Wrapper } from "./styled-index";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";
import { Input } from 'antd';


import "./styles.css";
import DraverCommon from "../../common/Drawer";
const { TextArea } = Input;
function Put({ openPut, handleClosePut, HandlePut, put_id }) {
  const dispatch = useDispatch();
  const [nameUz, setNameUz] = useState(null);
  const [nameRu, setNameRU] = useState(null);
  const [nameEn, setNameEn] = useState(null);
  const [descriptionUz, setDescriptionUz] = useState(null)
  const [descriptionRu, setDescriptionRu] = useState(null)
  const [descriptionEn, setDescriptionEn] = useState(null)
  const [videos, setVideos] = useState(null)
  const [locationLink, setLocationLink] = useState(null)
  const [tgLink, setTgLink] = useState(null)
  const [instaLink, setInstaLink] = useState(null)
  const [faceLink, setFaceLink] = useState(null)
  const [phone1, setPhone1] = useState(null);
  const [phone2, setPhone2] = useState(null);
  const [selectAparat, setSelectAparat] = useState(null)

  const aparatGetState = useSelector((state) => state.aparat.AparatGet?.data);
  const partnersGetState = useSelector((state) => state.partners.PartnersGet?.data)
  const dataProjectLogo = useSelector((state) => state.partners?.uploadLogo);
  const dataProject1 = useSelector((state) => state.partners?.uploadImage1);
  const dataProject2 = useSelector((state) => state.partners?.uploadImage2);
  const dataProject3 = useSelector((state) => state.partners?.uploadImage3);
  console.log(partnersGetState)
  const FilterData = partnersGetState.filter(elem => elem.id == put_id)
  useEffect(() => {
    dispatch(PartnersGet());
  }, []);

  useEffect(() => {
    dispatch(AparatGet());
  }, []);

  const HandleLogo = async (e) => {
    await dispatch(UploadLogo(e));
  };
  const HandleChange1 = async (e) => {
    await dispatch(UploadImage1(e));
  };
  const HandleChange2 = async (e) => {
    await dispatch(UploadImage2(e));
  };
  const HandleChange3 = async (e) => {
    await dispatch(UploadImage3(e));
  };

  const SelectChange = (e) => {
    setSelectAparat(e);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      logo: !dataProjectLogo.data ? FilterData.map(elem => elem.logo)[0] : dataProjectLogo.data,
      name_uz: nameUz,
      name_ru: nameRu,
      name_en: nameEn,
      description_uz: descriptionUz,
      description_ru: descriptionRu,
      description_en: descriptionEn,
      image1: !dataProject1.data ? FilterData.map(elem => elem.image1)[0] : dataProject1.data,
      image2: !dataProject2.data ? FilterData.map(elem => elem.image2)[0] : dataProject2.data,
      image3: !dataProject3.data ? FilterData.map(elem => elem.image3)[0] : dataProject3.data,
      video: videos,
      location: locationLink,
      phone_number1: phone1,
      phone_number2: phone2,
      telegram_link: tgLink,
      facebook_link: faceLink,
      instagram_link: instaLink,
      aparat: selectAparat
    }
    await dispatch(PartnersPut({ body, id: put_id }));
    dispatch(PartnersGet());
    handleClosePut();
    window.location.reload()
  };

  const optionAparat = []
  aparatGetState.map(elem => {
    elem.aparat.map(e => {
      optionAparat.push({
        label: e.name_ru,
        value: e.id
      })
    })
  })

  return (
    <DraverCommon title='Изменить партнеры' open={openPut} onClose={handleClosePut}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <div className="input_wrap">
            <div className="scrool">
              {
                partnersGetState.map(partner => partner.id == put_id ? (
                  <Row className="row">
                    <Col className="col" lg={12}>
                      <div className="cl_bg">
                        <ImageUpload
                          partner={partner}
                          HandleLogo={HandleLogo}
                          HandleChange1={HandleChange1}
                          HandleChange2={HandleChange2}
                          HandleChange3={HandleChange3}
                          dataProjectLogo={dataProjectLogo}
                          dataProject1={dataProject1}
                          dataProject2={dataProject2}
                          dataProject3={dataProject3}
                        />
                      </div>
                    </Col>
                    <Col className="col" lg={4}>
                      <div className="cl_bg">
                        <h4>Выбрать апарат</h4>
                        <div className="selects">
                          <SelectCommon
                            onChange={SelectChange}
                            placeholder="Выбрать"
                            options={optionAparat}
                          />
                        </div>
                        <p style={{ color: "red", fontWeight: "bold" }}>Выбор апарат обязателен. В противном случае вы не сможете редактировать эту информацию.</p>
                      </div>
                    </Col>
                    <Col className="col" lg={8}>
                      <div className="cl_bg">
                        <h4>Имя партнера</h4>
                        <InputCommon
                          type="text"
                          defaultValue={partner.name_uz}
                          onChange={(e) => setNameUz(e.currentTarget.value)}
                        />
                        <InputCommon
                          type="text"
                          defaultValue={partner.name_ru}
                          onChange={(e) => setNameRU(e.currentTarget.value)}
                        />
                        <InputCommon
                          type="text"
                          defaultValue={partner.name_en}
                          onChange={(e) => setNameEn(e.currentTarget.value)}
                        />
                      </div>
                    </Col>
                    <Col className="col" lg={6}>
                      <div className="cl_bg">
                        <h4>Cсылка на видео</h4>
                        <InputCommon
                          type="url"
                          defaultValue={partner.video}
                          onChange={(e) => setVideos(e.currentTarget.value)}
                        />
                        <h4>Cсылка на локацию</h4>
                        <InputCommon
                          type="url"
                          defaultValue={partner.location}
                          onChange={(e) => setLocationLink(e.currentTarget.value)}
                        />
                        <h4>Номер телефона 1</h4>
                        <InputCommon
                          type="tel"
                          defaultValue={partner.phone_number1}
                          onChange={(e) => setPhone1(e.currentTarget.value)}
                        />
                        <h4>Номер телефона 2</h4>
                        <InputCommon
                          type="tel"
                          defaultValue={partner.phone_number2}
                          onChange={(e) => setPhone2(e.currentTarget.value)}
                        />
                      </div>

                    </Col>
                    <Col className="col" lg={6}>
                      <div className="cl_bg">
                        <h4>Ссылка на Telegram</h4>
                        <InputCommon
                          type="url"
                          defaultValue={partner.telegram_link}
                          onChange={(e) => setTgLink(e.currentTarget.value)}
                        />
                        <h4>Ссылка на Facebook</h4>
                        <InputCommon
                          type="url"
                          defaultValue={partner.facebook_link}
                          onChange={(e) => setFaceLink(e.currentTarget.value)}
                        />
                        <h4>Ссылка на Instagram</h4>
                        <InputCommon
                          type="url"
                          defaultValue={partner.instagram_link}
                          onChange={(e) => setInstaLink(e.currentTarget.value)}
                        />
                      </div>

                    </Col>
                    <Col className="col" lg={12}>
                      <div className="cl_bg">
                        <h4 className="cl_bg_title">Описание узбекский</h4>
                        <TextArea
                          defaultValue={partner.description_uz}
                          onChange={(e) => setDescriptionUz(e.currentTarget.value)}
                          autoSize
                        />
                        <h4 className="cl_bg_title">Описание русский</h4>
                        <TextArea
                          defaultValue={partner.description_ru}
                          onChange={(e) => setDescriptionRu(e.currentTarget.value)}
                          autoSize
                        />
                        <h4 className="cl_bg_title">Описание английский</h4>
                        <TextArea
                          defaultValue={partner.description_en}
                          onChange={(e) => setDescriptionEn(e.currentTarget.value)}
                          autoSize
                        />
                      </div>
                    </Col>
                  </Row>
                ) : null)
              }
              <CommonBtn
                type="submit"
                style={{
                  margin: "20px auto 0 auto",
                  padding: "12px 40px",
                  border: "2px solid #fff",
                }}
              >
                Изменить
              </CommonBtn>
            </div>
          </div>
        </Wrapper>
      </>
    </DraverCommon>
  );
}

export default Put;
