import React, { useRef, useEffect, useState } from "react";
import CommonBtn from "../../common/CommonBtn";
import { useDispatch } from "react-redux";
import { Wrapper } from "./styled-index";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";
import { Spin, Input, Image, DatePicker } from "antd";
import "./styles.css";
import InputCommon from '../../common/input/index'
import DraverCommon from "../../common/Drawer";
import { LoadingOutlined } from '@ant-design/icons';
import ImageUpload from "./upload";
import { NewsGet, NewsPost, UploadImage } from "../../../redux/news";
const { TextArea } = Input;
function UslugyForm({ Open, HandleClose }) {
  const dispatch = useDispatch();
  const [titleUz, setTitleUz] = useState();
  const [titleRu, setTitleRu] = useState();
  const [titleEn, setTitleEn] = useState();
  const [descriptionUz, setDescriptionUz] = useState()
  const [descriptionRu, setDescriptionRu] = useState()
  const [descriptionEn, setDescriptionEn] = useState()
  const [date, setData] = useState()

  const dataProject = useSelector((state) => state.news?.uploadNews);

  useEffect(() => {
    dispatch(NewsGet());
  }, []);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      NewsPost({
        title_uz: titleUz,
        title_ru: titleRu,
        title_en: titleEn,
        description_uz: descriptionUz,
        description_ru: descriptionRu,
        description_en: descriptionEn,
        image: dataProject.data,
        time_date: date
      })
    );
    dispatch(NewsGet());
    HandleClose();
    window.location.reload();
  };

  const dateFormat = 'YYYY/MM/DD';
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "#000"
      }}
      spin
    />
  );
  return (
    <DraverCommon width={1000} title='Добавить новости' open={Open} onClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <div className="input_wrap">
            <div className="scrool">
              <Row className="row">
                <Col lg={4} className="col">
                  <div className="col_edit_item">
                    <ImageUpload HandleChange={HandleChange} dataProject={dataProject} />
                    <h4 style={{ marginTop: "30px" }}>Дата новостей</h4>
                    <InputCommon
                      type="date"
                      onChange={e => setData(e.target.value)}
                    />
                  </div>
                </Col>
                <Col className="col" lg={8}>
                  <div className="col_edit_item" >
                    <h4>Новости титул</h4>
                    <InputCommon
                      type="text"
                      placeholder="русский"
                      required
                      onChange={(e) => setTitleRu(e.currentTarget.value)}
                    />
                    <InputCommon
                      className='col_margin_input'
                      type="text"
                      placeholder="английский"
                      required
                      onChange={(e) => setTitleEn(e.currentTarget.value)}
                    />
                    <InputCommon
                      type="text"
                      placeholder="узбекский"
                      required
                      onChange={(e) => setTitleUz(e.currentTarget.value)}
                    />
                  </div>
                </Col>

                <Col className="col" lg={12}>
                  <div className="col_edit_item">
                    <h4>Описание русский</h4>
                    <TextArea
                      onChange={(e) => setDescriptionRu(e.currentTarget.value)}
                      required
                      placeholder="написать..."
                      autoSize />
                  </div>
                </Col>
                <Col className="col" lg={12}>
                  <div className="col_edit_item">
                    <h4>Описание английский</h4>
                    <TextArea
                      onChange={(e) => setDescriptionEn(e.currentTarget.value)}
                      required
                      placeholder="написать..."
                      autoSize />
                  </div>
                </Col>
                <Col className="col" lg={12}>
                  <div className="col_edit_item">
                    <h4>Описание узбекский</h4>
                    <TextArea
                      onChange={(e) => setDescriptionUz(e.currentTarget.value)}
                      required
                      placeholder="написать..."
                      autoSize />
                  </div>
                </Col>
              </Row>
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
            </div>
          </div>
        </Wrapper>
      </>
    </DraverCommon>
  );
}

export default UslugyForm;
