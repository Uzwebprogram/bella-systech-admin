import React, { useState } from "react";
import { Spin, Input, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-grid-system";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles.css";


const ImageUpload = ({
  HandleChange,
  dataProject
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
          <Col lg={12} className="upload_col">
          <h4>Добавить фотографию</h4>
            <div className="upload_cover">
              {dataProject?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : dataProject?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={dataProject?.data}
                />
              ) : (
                <div className="upload_none_img">
                  <>
                    <input type="file" id="file3" onChange={HandleChange} />
                    <label for="file3" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-cloud-upload'></i>
                      </span>
                    </label>
                  </>
                </div>
              )}
            </div>
            <div className="upload_plus_box">
              {
                dataProject?.Success == true ? (
                  <>
                    <input type="file" id="file3" onChange={HandleChange} />
                    <label for="file3" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-plus-circle'></i>
                      </span>
                    </label>
                  </>
                ) : null
              }
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