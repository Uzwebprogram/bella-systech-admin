import React from 'react'
import styles from './style.module.css'
import './styles.css'
import { useParams } from 'react-router-dom'
import { Image } from 'antd';
import { Col, Row } from 'react-grid-system';

const ProductAparatMoreComponent = () => {
  const { id } = useParams()
  console.log(id, 'params')
  return (
    <>
      <div className={styles.card_more_section}>
        <div className={styles.card_more_big_wrap}>
          <h4>Product Title</h4>
          <Row className={styles.card_more_img_row}>
            <Col className={styles.card_more_img_col} lg={6}>
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
              >
                <Row>
                  <Col lg={4}>
                    <Image style={{ aspectRatio: 3 / 4 }} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                  </Col>
                  <Col lg={4}>
                    <Image
                      style={{ aspectRatio: 3 / 4 }}
                      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                  </Col>
                  <Col lg={4}>
                    <Image
                      style={{ aspectRatio: 3 / 4 }}
                      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                  </Col>
                </Row>



              </Image.PreviewGroup>
            </Col>
            <Col className={styles.card_more_img_col} lg={6}>
              <h4>Category title 1</h4>
              <h4>Category title 2</h4>
              <h4>Category title 3</h4>
              <h4>Category title 1</h4>
              <h4>Category title 1</h4>
              <h4>Category title 1</h4>
              <h4>Category title 1</h4>
              <h4>Category title 1</h4>
              <h4>Category title 1</h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ProductAparatMoreComponent