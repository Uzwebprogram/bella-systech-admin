import React, { useState } from "react";
import { Spin, Input, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-grid-system";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles.css";
import { VerticalAlignBottom } from "@mui/icons-material";

const ImageUploadPhotos = ({ HandleChange, HandleChange2, HandleChange3, HandleChange4, imgSize }) => {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.product?.uploadProjects);
  // const HandleChange = async (e) => {
  //   await dispatch(UploadImage(e));
  // };
  const data = useSelector((state) => state.photos?.uploadPhotosProduct)
  const data2 = useSelector((state) => state.photos?.uploadPhotosProduct2)
  const data3 = useSelector((state) => state.photos?.uploadPhotosProduct3)
  const data4 = useSelector((state) => state.photos?.uploadPhotosProduct4)

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
        <Row className="upload_row">
          <Col lg={4}>
            <h4>Фотографию 1</h4>
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
            <h4> Фотографию 2</h4>
            <div className="upload_cover">
              {data2?.Loading == true ? (
                <div className="upload_spinss">
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
            <h4>Фотографию 3</h4>
            <div className="upload_cover">
              {data3?.Loading == true ? (
                <div className="upload_spinss">
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
                <div className="upload_none_img">
                  <>
                    <input type="file" id="file3" onChange={HandleChange3} />
                    <label for="file3" class="custom-file-upload">
                      <span className="upload_span-download">
                        <ion-icon name="cloud-download-outline"></ion-icon>
                      </span>
                    </label>
                  </>
                </div>
              )}
            </div>
            {
              data3?.Success == true ? (
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
              ) : null
            }
          </Col>
          <Col lg={4}>
            <h4>Фотографию 4</h4>
            <div className="upload_cover">
              {data4?.Loading == true ? (
                <div className="upload_spinss">
                  <Spin indicator={antIcon} />
                </div>
              ) : data4?.Success == true ? (
                <Image
                  style={{
                    aspectRatio: imgSize,
                    borderRadius: "20px",
                    zIndex: "99999999",
                    verticalAlign: "initial",
                  }}
                  src={data4?.data}
                />
              ) : (
                <div className="upload_none_img">
                  <>
                    <input type="file" id="file4" onChange={HandleChange4} />
                    <label for="file4" class="custom-file-upload">
                      <span className="upload_span-download">
                        <ion-icon name="cloud-download-outline"></ion-icon>
                      </span>
                    </label>
                  </>
                </div>
              )}
            </div>
            {
              data4?.Success == true ? (
                <div className="upload_plus_box">
                  <>
                    <input type="file" id="file4" onChange={HandleChange4} />
                    <label for="file4" class="custom-file-upload">
                      <span className="upload_span-download">
                        <i class='bx bxs-plus-circle'></i>
                      </span>
                    </label>
                  </>
                </div>
              ) : null
            }
          </Col>
          <Col lg={8}>
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

export default ImageUploadPhotos;

