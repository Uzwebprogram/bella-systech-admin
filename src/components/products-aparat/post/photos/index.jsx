import React from 'react'
import ImageUploadPhotos from './upload'
import InputCommon from '../../../common/input'

const PhotosProduct = ({HandleChange  , HandleChange2  , HandleChange3 , HandleChange4 , dataImage1, dataImage2  , dataImage3 , dataImage4,  setYouteLinkPhotos}) => {
  return (
    <div>
        <ImageUploadPhotos HandleChange={HandleChange} data={dataImage1} HandleChange2={HandleChange2} data2={dataImage2} HandleChange3={HandleChange3} data3={dataImage3} data4={dataImage4} HandleChange4={HandleChange4} />
                    <h4>youtube линк</h4>
                      <InputCommon
                        type="text"
                        placeholder="youtube линк"
                        required
                        onChange={(e) => setYouteLinkPhotos(e.currentTarget.value)}
                      />
    </div>
  )
}

export default PhotosProduct