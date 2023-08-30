import React from 'react'
import ImageUploadDesign from './upload'
import { Row, Col } from 'react-grid-system'
import styles from './style.module.css'

const DesignProduct = ({ HandleChange, HandleChange2 }) => {
  return (
    <div>
      {/* <ImageUploadDesign HandleChange={HandleChange} HandleChange2={HandleChange2} /> */}
      <Row className={styles.design_row}>
        <Col lg={12}>
          <ImageUploadDesign
            imgSize={16 / 9}
            HandleChange={HandleChange}
            HandleChange2={HandleChange2}
          />
        </Col>
      </Row>
    </div>
  )
}

export default DesignProduct