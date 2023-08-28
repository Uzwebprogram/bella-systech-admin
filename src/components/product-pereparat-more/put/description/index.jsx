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
const DescriptionAparatProductPut = ({openAparatProduct , setOpenAparatProduct , putAparatId}) => {
  const [descriptionUzYoutube , setDescriptionUzYoutube] = useState();
  const [descriptionRuYoutube , setDescriptionRuYoutube] = useState();
  const [descriptionEnYoutube , setDescriptionEnYoutube] = useState();
  const [YoutubeLink , setYouteLink] = useState();
  const dispatch = useDispatch();
  const {id} = useParams();
  const DescriptionProductGets = useSelector(state => state.descriptionproduct.DescriptionProductGet.data)
  useEffect(() => {
    dispatch(DescriptionProductGet())
  }, [])
  const DescriptionProductGetsFilter = DescriptionProductGets.filter(e => e.id == putAparatId)

  const HandlePutDescription =  async(e) => {
    e.preventDefault();
    const body = {
      description_uz: descriptionUzYoutube,
      description_ru: descriptionRuYoutube,
      description_en: descriptionEnYoutube,
      youtube_link : YoutubeLink,
      aparat : id
    };
    await dispatch(DescriptionProductPut({body , id:putAparatId}))
    dispatch(AparatProductGet())
    setOpenAparatProduct();

  }
  return (
    <DraverCommon open={openAparatProduct} onClose={setOpenAparatProduct} >
        <Wrapper onSubmit={HandlePutDescription}>
          {DescriptionProductGetsFilter.map(elem => <>
            <Row className={styles.row}>
        <Col className={styles.col} lg={12}>
          <h4>Преимущества</h4>
          <textarea
            className="textarea_products"
            placeholder="печатание ру"
            required
            defaultValue={elem.description_ru}
            onChange={(e) => setDescriptionRuYoutube(e.currentTarget.value)}
            rows="10"
            cols="120"
          ></textarea>
        </Col>
        <Col className="col" lg={12}>
          <h4>*</h4>
          <textarea
            className="textarea_products"
            placeholder="печатание уз"
            defaultValue={elem.description_uz}
            required
            onChange={(e) => setDescriptionUzYoutube(e.currentTarget.value)}
            rows="10"
            cols="120"
          ></textarea>
        </Col>
          <Col className="col" lg={12}>
          <h4>*</h4>
          <textarea
            className="textarea_products"
            defaultValue={elem.description_en}
            placeholder="печатание ен"
            required
            onChange={(e) => setDescriptionEnYoutube(e.currentTarget.value)}
            rows="10"
            cols="120"
          ></textarea>
        </Col>

      </Row>
      <Row className={styles.row}> 
          <Col className="col" lg={4}>
                    <h4>youtube линк</h4>

                      <InputCommon
                        type="text"
                        defaultValue={elem.youtube_link}
                        placeholder="youtube линк"
                        required
                        onChange={(e) => setYouteLink(e.currentTarget.value)}
                      />
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
