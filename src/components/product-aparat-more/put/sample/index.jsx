import React, { useEffect } from 'react'
import {Row , Col} from "react-grid-system"
import styles from "./style.module.css"
import InputCommon from '../../../common/input'
import CommonBtn from '../../../common/CommonBtn'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SampleProductGet, SampleProductPost, SampleProductPut } from '../../../../redux/product-aparat/sample'
import { Space, message } from 'antd'
import { useParams } from 'react-router-dom'
import DraverCommon from '../../../common/Drawer'
import { AparatProductGet } from '../../../../redux/product-aparat'
const SampleProductPuts = ({putAparatId, openAparatProduct , setOpenAparatProduct}) => {
    const dispatch = useDispatch();
    const [title_ru , setTitleru] = useState();
    const [title_uz , setTitleuz] = useState();
    const [title_en , setTitleen] = useState();
    const {id} = useParams();

    useEffect(() => {
      dispatch(SampleProductGet())
    }, [])
    const SampleProductGets = useSelector(state => state.sample.SampleProductGet.data)
    const SampleProductGetsFilter = SampleProductGets.filter(e => e.id == putAparatId)
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const body ={
          name_uz: title_uz,
          name_en: title_en,
          name_ru: title_ru,
          aparat: id
        }
       await dispatch(SampleProductPut({body , id:putAparatId}))
        window.location.reload();
      }
  return (
    <DraverCommon open={openAparatProduct} onClose={setOpenAparatProduct}>
          <form onSubmit={HandleSubmit}>
          <Row className={styles.row}> 
          {SampleProductGetsFilter.map(elem => <>
            <Col className="col" lg={4}>
                    <h4>Применение товара</h4>

                      <InputCommon
                        type="text"
                        placeholder="Применение товара ру"
                        defaultValue={elem.name_ru}
                        required
                        onChange={(e) => setTitleru(e.currentTarget.value)}
                      />
                    </Col>
                    <Col className="col" lg={4}>
                    <h4>*</h4>

                      <InputCommon
                        type="text"
                        placeholder="Применение товара уз"
                        defaultValue={elem.name_uz}
                        required
                        onChange={(e) => setTitleuz(e.currentTarget.value)}
                      />
                    </Col>
                    <Col className="col" lg={4}>
                    <h4>*</h4>

                      <InputCommon
                        type="text"
                        placeholder="Применение товара ен"
                        defaultValue={elem.name_en}
                        required
                        onChange={(e) => setTitleen(e.currentTarget.value)}
                      />
                    </Col>
          </>)}

          </Row>
      
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

export default SampleProductPuts