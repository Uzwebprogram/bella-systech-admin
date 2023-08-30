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
import ImageUpload from "./upload";
import { SertificatGet, SertificatPost, UploadImage } from "../../../redux/sertifikat";
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
        image: dataProject.data,
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
    <DraverCommon width={600} title='Добавить сертификат' open={Open} onClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <div className="input_wrap">
            <div className="scrool">
              <Row className="row">
                <Col lg={12}>
                  <div className="col_edit_item">
                    <ImageUpload HandleChange={HandleChange} dataProject={dataProject} />
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
