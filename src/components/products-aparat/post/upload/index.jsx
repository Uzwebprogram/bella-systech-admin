import React, { useState } from "react";
import { Spin, Input, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UploadImage } from "../../../../redux/products/index";
import { Col, Row } from "react-grid-system";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles.css";
import { VerticalAlignBottom } from "@mui/icons-material";

const ImageUpload = ({ HandleChange, HandleChange2, HandleChange3, imgSize }) => {
 
  const data = useSelector((state) => state.aparatproduct?.uploadAparatProduct)
  const data2 = useSelector((state) => state.aparatproduct?.uploadAparatProduct2)
  const data3 = useSelector((state) => state.aparatproduct?.uploadAparatProduct3)

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
          <Col lg={2}>
            <h4>Фотографию 1</h4>
            <div className="upload_cover_aparat">
              {data?.Loading == true ? (
                <div className="upload_spinss2">
                  <Spin indicator={antIcon} />
                </div>
              ) : data?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: imgSize,
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={data?.data}
                />
              ) : (
                <div className="upload_none_img2">
                  <>
                    <input type="file" id="file1" onChange={HandleChange} />
                    <label for="file1" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-cloud-upload'></i>
                      </span>
                    </label>
                  </>
                </div>
              )}
            </div>
            <div className="upload_plus_boxs">
              {
                data?.Success == true ? (
                  <>
                    <input type="file" id="file1" onChange={HandleChange} />
                    <label for="file1" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-plus-circle'></i>
                      </span>
                    </label>
                  </>
                ) : null
              }
            </div>
          </Col>
          <Col lg={2}>
            <h4> Фотографию 2</h4>
            <div className="upload_cover_aparat">
              {data2?.Loading == true ? (
                <div className="upload_spinss2">
                  <Spin indicator={antIcon} />
                </div>
              ) : data2?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: imgSize,
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={data2?.data}
                />
              ) : (
                <div className="upload_none_img2">
                  <>
                    <input type="file" id="file2" onChange={HandleChange2} />
                    <label for="file2" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-cloud-upload'></i>
                      </span>
                    </label>
                  </>
                </div>
              )}
            </div>
            <div className="upload_plus_boxs">
              {
                data2?.Success == true ? (
                  <>
                    <input type="file" id="file2" onChange={HandleChange2} />
                    <label for="file2" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-plus-circle'></i>
                      </span>
                    </label>
                  </>
                ) : null
              }
            </div>
          </Col>
          <Col lg={2}>
            <h4>Фотографию 3</h4>
            <div className="upload_cover_aparat">
              {data3?.Loading == true ? (
                <div className="upload_spinss2">
                  <Spin indicator={antIcon} />
                </div>
              ) : data3?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: imgSize,
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={data3?.data}
                />
              ) : (
                <div className="upload_none_img2">
                  <>
                    <input type="file" id="file3" onChange={HandleChange3} />
                    <label for="file3" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-cloud-upload'></i>
                      </span>
                    </label>
                  </>
                </div>
              )}
            </div>
            <div className="upload_plus_boxs">
              {
                data3?.Success == true ? (
                  <>
                    <input type="file" id="file3" onChange={HandleChange3} />
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
                разрешение <span>1080×1440</span>
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

export default ImageUpload;
