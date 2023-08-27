import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonBtn from "../../common/CommonBtn";
import { Row, Col } from "react-grid-system";
import { Image, Spin } from "antd";
import DraverCommon from "../../common/Drawer";
import { LoadingOutlined } from '@ant-design/icons';
import './styles.css'
import { SertificatGet, SertificatPut, UploadImage } from "../../../redux/sertifikat";

function Put({ openPut, handleClosePut, HandlePut, put_id }) {
  const ids = put_id;
  const dispatch = useDispatch();
  const dataProject = useSelector((state) => state.sertificat?.uploadSertificat);
  const newsGets = useSelector((state) => state.sertificat.SertificatGet.data);
  const FilterData = newsGets.filter(elem =>  elem.id == ids)

  useEffect(() => {
    dispatch(SertificatGet());
  }, []);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      image: !dataProject.data ? FilterData.map(elem => elem.image)[0] : dataProject.data ,
    };
    await dispatch(SertificatPut({ body, id: ids }));
    dispatch(SertificatGet());
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
      <DraverCommon title='Изменить блог' open={openPut} onClose={handleClosePut}>
        <>
          <Wrapper onSubmit={HandleSubmit}>
            <div className="input_wrap">
              <div className="scrool">
                {
                  newsGets.map(elem =>  elem.id == ids ?
                    <Row className="row">
                    <h4>Добавить фотографию</h4>
                    <Row className="row">
                      <Col className="col_upload" lg={6}>
                        {
                          dataProject.Loading == true ? (
                            <div className="spinss">
                              <Spin indicator={antIcon} />
                            </div>
                          ) : (
                            dataProject.Success == true ? (
                              <Image
                                width="100%"
                                height="100%"
                                style={{ aspectRatio: "1 / 1", borderRadius: "20px", zIndex: "99999999" }}
                                src={dataProject.data}
                              />
                            ) : (
                              <Image
                                width="100%"
                                height="100%"
                                style={{ aspectRatio: "1 / 1", borderRadius: "20px", zIndex: "99999999" }}
                                src={elem.image}
                              />
                            )
                          )
                        }
                      </Col>
                      <Col className="col_upload" lg={6}>
                        {
                          dataProject.Loading == true ? (
                            <div className="spins">
                              <Spin indicator={antIcon} />
                            </div>
                          ) : (
                            <>

                              <input type="file" id="file" onChange={HandleChange} />
                              <label for="file" class="custom-file-upload">
                                <span className="span-download">
                                  <ion-icon name="cloud-download-outline"></ion-icon>
                                  <h3>Загрузить фото</h3>
                                </span>
                              </label>
                            </>
                          )
                        }
                      </Col>
                      <Col lg={12}>
                        <div className="infor_box">
                          <p><span>Формат: </span>PNG, JPEG, JPG, SVG. Рекомендуемое разрешение <span>1080×1080</span></p>
                          <p> <span>Размер: </span>размер файла не должен превышать 5 MB</p>
                        </div>
                      </Col>
                    </Row>
              </Row>
                  :null)
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
