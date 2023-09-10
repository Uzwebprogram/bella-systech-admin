import React from 'react'
import ImageUploadPhotos from './upload'
import InputCommon from '../../../common/input'
import styles from './style.module.css'
import { Col, Row } from 'react-grid-system';

const PhotosProduct = ({ HandleChange, HandleChange2, HandleChange3, HandleChange4, dataImage1, dataImage2, dataImage3, dataImage4, setYouteLinkPhotos }) => {
  return (
    <div>
      <Row className={styles.photos_row}>
        <Col lg={12} className={styles.col}>
          <ImageUploadPhotos
            imgSize={16 / 9}
            HandleChange={HandleChange}
            HandleChange2={HandleChange2}
            HandleChange3={HandleChange3}
            HandleChange4={HandleChange4}
            data={dataImage1}
            data2={dataImage2}
            data3={dataImage3}
            data4={dataImage4}
          />
        </Col>
        <Col lg={6} className={styles.col}>
          <h4>Youtube линк</h4>
          <InputCommon
            type="url"
            placeholder="youtube линк"
            required
            onChange={(e) => setYouteLinkPhotos(e.currentTarget.value)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default PhotosProduct