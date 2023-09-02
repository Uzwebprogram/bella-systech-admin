import React from 'react'
import { Row, Col } from "react-grid-system"
import styles from "./style.module.css"
import InputCommon from '../../../common/input'
import CommonBtn from '../../../common/CommonBtn'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ParametrProductPost, ParametrProductPut } from '../../../../redux/product-aparat/parametr'
import DraverCommon from '../../../common/Drawer'
import { useParams } from 'react-router-dom'
import { Input } from 'antd';
const { TextArea } = Input;
const ParametrPut = ({ putAparatId, openAparatProduct, setOpenAparatProduct }) => {
  const dispatch = useDispatch();
  const [title_ru, setTitleru] = useState();
  const [title_uz, setTitleuz] = useState();
  const [title_en, setTitleen] = useState();
  const [description_ru, setDescriptionru] = useState();
  const [description_uz, setDescriptionuz] = useState();
  const [description_en, setDescriptionen] = useState();
  const dataParametr = useSelector(state => state.parametr.ParametrProductGet.data)
  const dataParametrFilter = dataParametr.filter(e => e.id == putAparatId)
  const { id } = useParams();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      parametr_uz: title_uz,
      parametr_en: title_en,
      parametr_ru: title_ru,
      information_uz: description_uz,
      information_en: description_en,
      information_ru: description_ru,
      aparat: id
    }
    await dispatch(ParametrProductPut({ body, id: putAparatId }))
    // window.location.reload()
    e.target[0].value = null
    e.target[1].value = null
    e.target[2].value = null
    e.target[3].value = null
    e.target[4].value = null
    e.target[5].value = null
  }
  return (
    <DraverCommon width={900} title='Технические параметры изменить' open={openAparatProduct} onClose={setOpenAparatProduct}>
      <form onSubmit={HandleSubmit}>
        {dataParametrFilter.map(elem => <>
          <Row className={styles.row}>
            <Col className={styles.col} lg={12}>
              <div className={styles.col_edit_item}>
                <h4>Имя технические параметры русский</h4>
                <InputCommon
                  type="text"
                  defaultValue={elem.parametr_ru}
                  onChange={(e) => setTitleru(e.currentTarget.value)}
                />
                <h4>Имя технические параметры английский</h4>
                <InputCommon
                  className={styles.parametr_input}
                  type="text"
                  defaultValue={elem.parametr_en}
                  onChange={(e) => setTitleen(e.currentTarget.value)}
                />
                <h4>Имя технические параметры узбекский</h4>
                <InputCommon
                  type="text"
                  defaultValue={elem.parametr_uz}
                  onChange={(e) => setTitleuz(e.currentTarget.value)}
                />
              </div>
            </Col>
            <Col className={styles.col} lg={12}>
              <div className={styles.col_edit_item}>
                <h4>Информация о технические параметрах русский</h4>
                <TextArea
                  defaultValue={elem.information_ru}
                  onChange={(e) => setDescriptionru(e.currentTarget.value)}
                  autoSize />
                <h4>Информация о технические параметрах английский</h4>
                <TextArea
                  className={styles.parametr_input}
                  defaultValue={elem.information_en}
                  onChange={(e) => setDescriptionen(e.currentTarget.value)}
                  autoSize />
                <h4>Информация о технические параметрах узбекский</h4>
                <TextArea
                  defaultValue={elem.information_uz}
                  onChange={(e) => setDescriptionuz(e.currentTarget.value)}
                  autoSize />
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

export default ParametrPut