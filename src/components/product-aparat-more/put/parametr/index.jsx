import React from 'react'
import {Row , Col} from "react-grid-system"
import styles from "./style.module.css"
import InputCommon from '../../../common/input'
import CommonBtn from '../../../common/CommonBtn'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ParametrProductPost, ParametrProductPut } from '../../../../redux/product-aparat/parametr'
import DraverCommon from '../../../common/Drawer'
import { useParams } from 'react-router-dom'
const ParametrPut = ({putAparatId ,openAparatProduct, setOpenAparatProduct}) => {
    const dispatch = useDispatch();
    const [title_ru , setTitleru] = useState();
    const [title_uz , setTitleuz] = useState();
    const [title_en , setTitleen] = useState();
    const [description_ru , setDescriptionru] = useState();
    const [description_uz , setDescriptionuz] = useState();
    const [description_en , setDescriptionen] = useState();
    const dataParametr = useSelector(state => state.parametr.ParametrProductGet.data)
    const dataParametrFilter = dataParametr.filter(e => e.id == putAparatId)
    const {id} = useParams();
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const body ={
          parametr_uz: title_ru,
            parametr_en: title_en,
            parametr_ru: title_uz,
            information_uz: description_uz,
            information_en: description_en,
            information_ru: description_ru,
            aparat: id
        }
       await dispatch(ParametrProductPut({body , id:putAparatId}))
      //  window.location.reload()
       e.target[0].value = null
       e.target[1].value = null
       e.target[2].value = null
       e.target[3].value = null
       e.target[4].value = null
       e.target[5].value = null
    }
  return (
    <DraverCommon open={openAparatProduct} onClose={setOpenAparatProduct}>
          <form onSubmit={HandleSubmit}>
          {dataParametrFilter.map(elem => <>
            <Row className={styles.row}> 
          <Col className="col" lg={4}>
                    <h4>название параметра</h4>
                      <InputCommon
                        type="text"
                        placeholder="название параметра ру"
                        required
                        defaultValue={elem.parametr_ru}
                        onChange={(e) => setTitleru(e.currentTarget.value)}
                      />
                    </Col>
                    <Col className="col" lg={4}>
                    <h4>*</h4>

                      <InputCommon
                        type="text"
                        placeholder="название параметра уз"
                        defaultValue={elem.parametr_uz}

                        required
                        onChange={(e) => setTitleuz(e.currentTarget.value)}
                      />
                    </Col>
                    <Col className="col" lg={4}>
                    <h4>*</h4>

                      <InputCommon
                        type="text"
                        placeholder="название параметра ен"
                        defaultValue={elem.parametr_en}

                        required
                        onChange={(e) => setTitleen(e.currentTarget.value)}
                      />
                    </Col>
          </Row>
              <Row className={styles.row}>
        <Col className={styles.col} lg={12}>
          <h4>информация о параметрах</h4>
          <textarea
            className="textarea_products"
            placeholder="печатание ру"
            required
            defaultValue={elem.information_ru}

            onChange={(e) => setDescriptionru(e.currentTarget.value)}
            rows="10"
            cols="120"
          ></textarea>
        </Col>
        <Col className="col" lg={12}>
          <h4>*</h4>
          <textarea
            className="textarea_products"
            placeholder="печатание уз"
            defaultValue={elem.information_uz}

            required
            onChange={(e) => setDescriptionuz(e.currentTarget.value)}
            rows="10"
            cols="120"
          ></textarea>
        </Col>
          <Col className="col" lg={12}>
          <h4>*</h4>
          <textarea
            className="textarea_products"
            placeholder="печатание ен"
            defaultValue={elem.information_en}

            required
            onChange={(e) => setDescriptionen(e.currentTarget.value)}
            rows="10"
            cols="120"
          ></textarea>
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

export default ParametrPut