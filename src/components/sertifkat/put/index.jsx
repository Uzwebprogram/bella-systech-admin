import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonBtn from "../../common/CommonBtn";
import { Row, Col } from "react-grid-system";
import { Image, Spin } from "antd";
import DraverCommon from "../../common/Drawer";
import { LoadingOutlined } from '@ant-design/icons';
import ImageUpload from "./upload";
import './styles.css'
import { SertificatGet, SertificatPut, UploadImage } from "../../../redux/sertifikat";

function Put({ openPut, handleClosePut, HandlePut, put_id }) {
  const ids = put_id;
  const dispatch = useDispatch();
  const dataProject = useSelector((state) => state.sertificat?.uploadSertificat);
  const newsGets = useSelector((state) => state.sertificat.SertificatGet.data);
  const FilterData = newsGets.filter(elem => elem.id == ids)

  useEffect(() => {
    dispatch(SertificatGet());
  }, []);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      image: !dataProject.data ? FilterData.map(elem => elem.image)[0] : dataProject.data,
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
      <DraverCommon width={600} title='Изменить сертификат' open={openPut} onClose={handleClosePut}>
        <>
          <Wrapper onSubmit={HandleSubmit}>
            <div className="input_wrap">
              <div className="scrool">
                {
                  newsGets.map(elem => elem.id == ids ?
                    <Row className="row">
                      <Col lg={12}>
                        <ImageUpload HandleChange={HandleChange} dataProject={dataProject} elem={elem} />
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
