import React from "react";
import { Row, Col } from "react-grid-system";
import styles from "./style.module.css"
import InputCommon from "../../../common/input";
import { useSelector } from "react-redux";
const DescriptionAparatProduct = ({setDescriptionRuYoutube , setDescriptionUzYoutube ,setDescriptionEnYoutube , setYouteLink}) => {

  return (
    <div>
      <Row className={styles.row}>
        <Col className={styles.col} lg={12}>
          <h4>Преимущества</h4>
          <textarea
            className="textarea_products"
            placeholder="печатание ру"
            required
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
                        placeholder="youtube линк"
                        required
                        onChange={(e) => setYouteLink(e.currentTarget.value)}
                      />
                    </Col>
          </Row>
    </div>
  );
};

export default DescriptionAparatProduct;
