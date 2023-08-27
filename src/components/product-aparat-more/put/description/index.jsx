import React, { useEffect, useState } from "react";
import { Row, Col } from "react-grid-system";
import styles from "./style.module.css"
import InputCommon from "../../../common/input";
import { useDispatch, useSelector } from "react-redux";
import DraverCommon from "../../../common/Drawer";
import { Wrapper } from "../../../products-aparat/post/styled-index";
import { DescriptionProductGet, DescriptionProductPut } from "../../../../redux/product-aparat/description";
import CommonBtn from "../../../common/CommonBtn";
import { useParams } from "react-router-dom";
import { AparatProductGet } from "../../../../redux/product-aparat";
import { Input } from 'antd';
const { TextArea } = Input;
const DescriptionAparatProductPut = ({ openAparatProduct, setOpenAparatProduct, putAparatId }) => {
  const [descriptionUzYoutube, setDescriptionUzYoutube] = useState();
  const [descriptionRuYoutube, setDescriptionRuYoutube] = useState();
  const [descriptionEnYoutube, setDescriptionEnYoutube] = useState();
  const [YoutubeLink, setYouteLink] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const DescriptionProductGets = useSelector(state => state.descriptionproduct.DescriptionProductGet.data)
  useEffect(() => {
    dispatch(DescriptionProductGet())
  }, [])
  const DescriptionProductGetsFilter = DescriptionProductGets.filter(e => e.id == putAparatId)

  const HandlePutDescription = async (e) => {
    e.preventDefault();
    const body = {
      description_uz: descriptionUzYoutube,
      description_ru: descriptionRuYoutube,
      description_en: descriptionEnYoutube,
      youtube_link: YoutubeLink,
      aparat: id
    };
    await dispatch(DescriptionProductPut({ body, id: putAparatId }))
    dispatch(AparatProductGet())
    setOpenAparatProduct();

  }
  return (
    <DraverCommon title="Продукт описания изменить" open={openAparatProduct} onClose={setOpenAparatProduct} >
      <Wrapper onSubmit={HandlePutDescription}>
        {DescriptionProductGetsFilter.map(elem => <>
          <Row className={styles.row}>
            <Col className={styles.col} lg={6}>
              <div className={styles.col_edit_item}>
                <h4>Youtube линк</h4>
                <InputCommon
                  type="text"
                  defaultValue={elem.youtube_link}
                  placeholder="youtube линк"
                  required
                  onChange={(e) => setYouteLink(e.currentTarget.value)}
                />
              </div>
            </Col>
            <Col className={styles.col} lg={12}>
              <div className={styles.col_edit_item}>
                <h4>Oписания</h4>
                <TextArea
                  defaultValue={elem.description_ru}
                  onChange={(e) => setDescriptionRuYoutube(e.currentTarget.value)}
                  autoSize />
                <TextArea
                  style={{ margin: "20px 0" }}
                  defaultValue={elem.description_uz}
                  onChange={(e) => setDescriptionUzYoutube(e.currentTarget.value)}
                  autoSize />
                <TextArea
                  defaultValue={elem.description_en}
                  onChange={(e) => setDescriptionEnYoutube(e.currentTarget.value)}
                  autoSize />
              </div>
            </Col>
          </Row>
        </>)}


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
      </Wrapper>
    </DraverCommon>
  );
};

export default DescriptionAparatProductPut;
