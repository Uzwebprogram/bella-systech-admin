import React, { useState } from "react";
import { Spin, Input, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-grid-system";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles.css";
import { VerticalAlignBottom } from "@mui/icons-material";

const ImageUploadDesign = ({ imgSize, HandleChange, HandleChange2 }) => {

  const data = useSelector((state) => state.design?.uploadDesignProduct)
  const data2 = useSelector((state) => state.design?.uploadDesignProduct2)

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
        <Row className="design_row">
          <Col lg={4}>
            <h4>До</h4>
            <div className="upload_cover">
              {data?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : data?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: imgSize,
                    width: "100%",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={data?.data}
                />
              ) : (
                <div className="upload_none_img">
                  <>
                    <input type="file" id="file1" onChange={HandleChange} />
                    <label for="file1" class="custom-file-upload">
                      <span className="upload_span-download">
                        <ion-icon name="cloud-download-outline"></ion-icon>
                      </span>
                    </label>
                  </>
                </div>
              )}
            </div>
            {
              data?.Success == true ? (
                <div className="upload_plus_box">
                  <>
                    <input type="file" id="file1" onChange={HandleChange} />
                    <label for="file1" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-plus-circle'></i>
                      </span>
                    </label>
                  </>
                </div>
              ) : null
            }
          </Col>
          <Col lg={4}>
            <h4>После</h4>
            <div className="upload_cover">
              {data2?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : data2?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: imgSize,
                    width: "100%",
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={data2?.data}
                />
              ) : (
                <div className="upload_none_img">
                  <>
                    <input type="file" id="file2" onChange={HandleChange2} />
                    <label for="file2" class="custom-file-upload">
                      <span className="upload_span-download">
                        <ion-icon name="cloud-download-outline"></ion-icon>
                      </span>
                    </label>
                  </>
                </div>
              )}
            </div>
            {
              data2?.Success == true ? (
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
              ) : null
            }
          </Col>
          <Col lg={4}>
            <div className="infor_box">
              <p>
                <span>Формат: </span>PNG, JPEG, JPG, SVG. Рекомендуемое
                разрешение <span>1920x1080</span> или <span>1280x720</span>
              </p>
              <p>
                {" "}
                <span>Размер: </span>размер файла не должен превышать <span>5 MB</span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ImageUploadDesign;
