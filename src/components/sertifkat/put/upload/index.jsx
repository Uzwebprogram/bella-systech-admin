import React, { useState } from "react";
import { Spin, Input, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-grid-system";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles.css";


const ImageUpload = ({
  HandleChange,
  dataProject,
  elem
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
          <Col lg={4} className="upload_col">
            <h4>Фотографию</h4>
            <div className="upload_cover">
              {dataProject?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : dataProject?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: "3 / 4",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={dataProject?.data}
                />
              ) : (
                <Image
                  style={{
                    aspectRatio: "3 / 4",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={elem?.image}
                />
              )}
            </div>
            <div className="upload_plus_box">
              <>
                <input type="file" id="file3" onChange={HandleChange} />
                <label for="file3" class="custom-file-upload">
                  <span className="upload_span-download">
                    <i class='bx bxs-plus-circle'></i>
                  </span>
                </label>
              </>
            </div>
          </Col>
          <Col lg={8}>
            <div className="infor_box">
              <p>
                <span>Формат: </span>PNG, JPEG, JPG, SVG. Рекомендуемое
                разрешение <span>1080x1440</span>
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
