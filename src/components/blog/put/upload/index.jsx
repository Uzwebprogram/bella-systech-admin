import React, { useState } from "react";
import { Spin, Input, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-grid-system";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles.css";


const ImageUpload = ({
  HandleChange1,
  HandleChange2,
  HandleChange3,
  HandleLogo,
  dataProjectLogo,
  dataProject1,
  dataProject2,
  dataProject3,
  partner
}) => {


  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "#000",
      }}
      spin
    />
  );
  return (
    <>
      <div className="upload_row_wrapp">

        <Row>
          <Col lg={3}>
            <h4>Добавить логотип</h4>
            <div className="upload_cover">
              {dataProjectLogo?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : dataProjectLogo?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={dataProjectLogo?.data}
                />
              ) : (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={partner?.logo}
                />
              )}
            </div>
            <div className="upload_plus_box">
              <>
                <input type="file" id="filelogo" onChange={HandleLogo} />
                <label for="filelogo" class="custom-file-upload">
                  <span className="upload_span-download">
                    <i class='bx bxs-plus-circle'></i>
                  </span>
                </label>
              </>
            </div>
          </Col>
          <Col lg={3}>
            <h4>Добавить фотографию 1</h4>
            <div className="upload_cover">
              {dataProject1?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : dataProject1?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={dataProject1?.data}
                />
              ) : (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={partner?.image1}
                />
              )}
            </div>
            <div className="upload_plus_box">
              <>
                <input type="file" id="file1" onChange={HandleChange1} />
                <label for="file1" class="custom-file-upload">
                  <span className="upload_span-download">
                    <i class='bx bxs-plus-circle'></i>
                  </span>
                </label>
              </>
            </div>
          </Col>
          <Col lg={3}>
            <h4>Добавить фотографию 2</h4>
            <div className="upload_cover">
              {dataProject2?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : dataProject2?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={dataProject2?.data}
                />
              ) : (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={partner?.image2}
                />
              )}
            </div>
            <div className="upload_plus_box">
              <>
                <input type="file" id="file2" onChange={HandleChange2} />
                <label for="file2" class="custom-file-upload">
                  <span className="upload_span-download">
                    <i class='bx bxs-plus-circle'></i>
                  </span>
                </label>
              </>
            </div>
          </Col>
          <Col lg={3}>
            <h4>Добавить фотографию 3</h4>
            <div className="upload_cover">
              {dataProject3?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : dataProject3?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={dataProject3?.data}
                />
              ) : (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={partner?.image3}
                />
              )}
            </div>
            <div className="upload_plus_box">
              <>
                <input type="file" id="file3" onChange={HandleChange3} />
                <label for="file3" class="custom-file-upload">
                  <span className="upload_span-download">
                    <i class='bx bxs-plus-circle'></i>
                  </span>
                </label>
              </>
            </div>
          </Col>
          <Col lg={12}>
            <div className="infor_box">
              <p>
                <span>Формат: </span>PNG, JPEG, JPG, SVG. Рекомендуемое
                разрешение <span>1920x1080</span>  или <span>1280x720</span>
              </p>
              <p>
                <span>Размер: </span>размер файла не должен превышать <span>5 MB</span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ImageUpload;
