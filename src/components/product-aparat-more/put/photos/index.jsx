import React, { useEffect, useState } from 'react'
import ImageUploadPhotos from './upload'
import InputCommon from '../../../common/input'
import { PhotosProductGet, PhotosProductPut, UploadImagePhoto, UploadImagePhoto2, UploadImagePhoto3, UploadImagePhoto4 } from '../../../../redux/product-aparat/photos';
import CommonBtn from '../../../common/CommonBtn';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from "./style.module.css"
import DraverCommon from '../../../common/Drawer';
import { Col, Row } from 'react-grid-system';
const PhotosProductPuts = ({ putAparatId, openAparatProduct, setOpenAparatProduct }) => {
  const [YouteLinkPhotos, setYouteLinkPhotos] = useState();
  const dispatch = useDispatch();


  const dataImagePhotos1 = useSelector((state) => state.photos?.uploadPhotosProduct)
  const HandleChange = async (e) => {
    await dispatch(UploadImagePhoto(e));
  };
  const dataImagePhotos2 = useSelector((state) => state.photos?.uploadPhotosProduct2)
  const HandleChange2 = async (e) => {
    await dispatch(UploadImagePhoto2(e));
  };
  const dataImagePhotos3 = useSelector((state) => state.photos?.uploadPhotosProduct3)
  const HandleChange3 = async (e) => {
    await dispatch(UploadImagePhoto3(e));
  };
  const dataImagePhotos4 = useSelector((state) => state.photos?.uploadPhotosProduct4)
  const HandleChange4 = async (e) => {
    await dispatch(UploadImagePhoto4(e));
  };
  const { id } = useParams();
  const dataPhotos = useSelector(state => state.photos.PhotoProductGet.data)
  const dataPhotosFilter = dataPhotos.filter(e => e.id == putAparatId)
  console.log(dataPhotosFilter)
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      image1: !dataImagePhotos1.data ? dataPhotosFilter.map(elem => elem.image1)[0] : dataImagePhotos1.data,
      image2: !dataImagePhotos2.data ? dataPhotosFilter.map(elem => elem.image2)[0] : dataImagePhotos2.data,
      image3: !dataImagePhotos3.data ? dataPhotosFilter.map(elem => elem.image3)[0] : dataImagePhotos3.data,
      image4: !dataImagePhotos4.data ? dataPhotosFilter.map(elem => elem.image4)[0] : dataImagePhotos4.data,
      video: YouteLinkPhotos,
      aparat: id
    }
    await dispatch(PhotosProductPut({ body, id: putAparatId }))
    window.location.reload();
  }
  return (
    <DraverCommon open={openAparatProduct} onClose={setOpenAparatProduct}>
      <form className={styles.form} onSubmit={HandleSubmit}>
        {dataPhotosFilter.map(elem => <>
          <Row>
            <Col lg={12} className={styles.col}>
              <div className={styles.col_edit_item}>
                <ImageUploadPhotos
                  elem={elem}
                  imgSize={16 / 9}
                  HandleChange={HandleChange}
                  HandleChange2={HandleChange2}
                  HandleChange3={HandleChange3}
                  HandleChange4={HandleChange4}
                />
              </div>
            </Col>
            <Col lg={6} className={styles.col}>
              <div className={styles.col_edit_item}>
                <h4>Youtube линк</h4>
                <InputCommon
                  type="text"
                  placeholder="youtube линк"
                  required
                  defaultValue={elem.video}
                  onChange={(e) => setYouteLinkPhotos(e.currentTarget.value)}
                />
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
      </form>
    </DraverCommon>


  )
}

export default PhotosProductPuts