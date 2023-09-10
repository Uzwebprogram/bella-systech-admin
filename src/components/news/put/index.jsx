import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsPut, NewsGet, UploadImage } from "../../../redux/news";
import CommonBtn from "../../common/CommonBtn";
import { Row, Col } from "react-grid-system";
import { Image, Spin, Input } from "antd";
import DraverCommon from "../../common/Drawer";
import { LoadingOutlined } from '@ant-design/icons';
import './styles.css'
import InputCommon from "../../common/input";
import ImageUpload from "./upload";
const { TextArea } = Input

function Put({ openPut, handleClosePut, HandlePut, put_id }) {
  const ids = put_id;
  const dispatch = useDispatch();
  const [titleUz, setTitleUz] = useState();
  const [titleRu, setTitleRu] = useState();
  const [titleEn, setTitleEn] = useState();
  const [descriptionUz, setDescriptionUz] = useState()
  const [descriptionRu, setDescriptionRu] = useState()
  const [descriptionEn, setDescriptionEn] = useState()
  const [date, setData] = useState()
  const dataProject = useSelector((state) => state.news?.uploadNews);
  const newsGets = useSelector((state) => state.news.newsGet.data);
  const FilterData = newsGets.filter(elem => elem.id == ids)

  useEffect(() => {
    dispatch(NewsGet());
  }, []);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title_uz: titleUz,
      title_ru: titleRu,
      title_en: titleEn,
      description_uz: descriptionUz,
      description_ru: descriptionRu,
      description_en: descriptionEn,
      time_date: date,
      image: !dataProject.data ? FilterData.map(elem => elem.image)[0] : dataProject.data,
    };
    await dispatch(NewsPut({ body, id: ids }));
    dispatch(NewsGet());
    handleClosePut();
    window.location.reload()
  };
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
    <>
      <DraverCommon width={1000} title='Изменить новости' open={openPut} onClose={handleClosePut}>
        <>
          <Wrapper onSubmit={HandleSubmit}>
            <div className="input_wrap">
              <div className="scrool">
                {
                  newsGets.map(elem => elem.id == ids ?
                    <Row className="row">
                      <Col lg={4} className="col">
                        <div className="col_edit_item">
                          <ImageUpload HandleChange={HandleChange} dataProject={dataProject} elem={elem} />
                          <h4 style={{ marginTop: "30px" }}>Дата новостей</h4>
                          <InputCommon
                            type="date"
                            defaultValue={elem.time_date}
                            onChange={e => setData(e.target.value)}
                          />
                        </div>
                      </Col>
                      <Col className="col" lg={8}>
                        <div className="col_edit_item" >
                          <h4>Новости титул русский</h4>
                          <InputCommon
                            type="text"
                            defaultValue={elem.title_ru}
                            onChange={(e) => setTitleRu(e.currentTarget.value)}
                          />
                          <h4>Новости титул английский</h4>
                          <InputCommon
                            type="text"
                            defaultValue={elem.title_en}
                            onChange={(e) => setTitleEn(e.currentTarget.value)}
                          />
                          <h4>Новости титул узбекский</h4>
                          <InputCommon
                            type="text"
                            defaultValue={elem.title_uz}
                            onChange={(e) => setTitleUz(e.currentTarget.value)}
                          />
                        </div>
                      </Col>

                      <Col className="col" lg={12}>
                        <div className="col_edit_item">
                          <h4>Описание русский</h4>
                          <TextArea
                            onChange={(e) => setDescriptionRu(e.currentTarget.value)}
                            defaultValue={elem.description_ru}
                            autoSize />
                        </div>
                      </Col>
                      <Col className="col" lg={12}>
                        <div className="col_edit_item">
                          <h4>Описание английский</h4>
                          <TextArea
                            onChange={(e) => setDescriptionEn(e.currentTarget.value)}
                            defaultValue={elem.description_en}
                            autoSize />
                        </div>
                      </Col>
                      <Col className="col" lg={12}>
                        <div className="col_edit_item">
                          <h4>Описание узбекский</h4>
                          <TextArea
                            onChange={(e) => setDescriptionUz(e.currentTarget.value)}
                            defaultValue={elem.description_uz}
                            autoSize />
                        </div>
                      </Col>
                    </Row>
                    : null)
                }
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
    </>
  );
}
export default Put;
