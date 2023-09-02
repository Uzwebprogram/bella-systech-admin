import React from "react";
import { Row, Col } from "react-grid-system";
import styles from "./style.module.css"
import InputCommon from "../../../common/input";
import { useSelector } from "react-redux";
import { Input } from 'antd';
const { TextArea } = Input;
const DescriptionAparatProduct = ({
  setDescriptionRuYoutube,
  setDescriptionUzYoutube,
  setDescriptionEnYoutube,
  setYouteLink
}) => {

  return (
    <div>
      <Row className={styles.row}>
        <Col className={styles.col} lg={12}>
          <div>
            <h4>Описание</h4>
            <TextArea
              placeholder="русский"
              required
              onChange={(e) => setDescriptionRuYoutube(e.currentTarget.value)}
              autoSize />
          </div>
        </Col>
        <Col className="col" lg={12}>
          <div style={{margin: "20px 0"}}>
            <TextArea
              placeholder="английский"
              required
              onChange={(e) => setDescriptionEnYoutube(e.currentTarget.value)}
              autoSize />
          </div>
        </Col>
        <Col className="col" lg={12}>
          <div>
            <TextArea
              placeholder="узбекский"
              required
              onChange={(e) => setDescriptionUzYoutube(e.currentTarget.value)}
              autoSize />
          </div>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col className="col" lg={8}>
          <h4>Youtube линк</h4>
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
