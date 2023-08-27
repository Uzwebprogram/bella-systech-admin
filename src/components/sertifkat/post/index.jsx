import React, { useRef, useEffect, useState } from "react";
import CommonBtn from "../../common/CommonBtn";
import { useDispatch } from "react-redux";
import { Wrapper } from "./styled-index";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";
import { Spin, Input, Image, DatePicker } from "antd";
import "./styles.css";
import DraverCommon from "../../common/Drawer";
import { LoadingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { SertificatGet, SertificatPost  , UploadImage} from "../../../redux/sertifikat";
function UslugyForm({ Open, HandleClose }) {
  const dispatch = useDispatch();
  const dataProject = useSelector((state) => state.sertificat?.uploadSertificat);

  useEffect(() => {
    dispatch(SertificatGet());
  }, []);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      SertificatPost({
        image : dataProject.data,
      })
    );
    dispatch(SertificatGet());
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
    <DraverCommon title='Добавить блог' open={Open} onClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <div className="input_wrap">
            <div className="scrool">
              <Row className="row">
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
                              style={{ aspectRatio: "1 / 1", borderRadius: "20px", width : 350, height:300, zIndex: "99999999" }}
                              src={dataProject.data}
                            />
                          ) : (
                            <div className="none_img">
                              <i class='bx bxs-image'></i>
                            </div>
                          )
                        )
                      }
                    </Col>
                    <Col className="col_upload" lg={6}>
                      {
                        dataProject?.Loading == true ? (
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
