import React from 'react'
import { Row, Col } from "react-grid-system"
import styles from "./style.module.css"
import InputCommon from '../../../common/input'
import CommonBtn from '../../../common/CommonBtn'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ParametrProductPost } from '../../../../redux/product-aparat/parametr'
import { Space, message, Input } from 'antd'
const { TextArea } = Input;
const Parametr = () => {
  const dispatch = useDispatch();
  const [title_ru, setTitleru] = useState();
  const [title_uz, setTitleuz] = useState();
  const [title_en, setTitleen] = useState();
  const [description_ru, setDescriptionru] = useState();
  const [description_uz, setDescriptionuz] = useState();
  const [description_en, setDescriptionen] = useState();
  const AparatProductGetsPost = useSelector((state) => state.aparatproduct.AparatProductPost.data)
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'информация добавлена,  если хотите добавить еще, пишите информацию',
    });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      parametr_uz: title_uz,
      parametr_en: title_en,
      parametr_ru: title_ru,
      information_uz: description_uz,
      information_en: description_en,
      information_ru: description_ru,
      aparat: AparatProductGetsPost?.data?.data?.id
    }
    await dispatch(ParametrProductPost(body))
    e.target[0].value = null
    e.target[1].value = null
    e.target[2].value = null
    e.target[3].value = null
    e.target[4].value = null
    e.target[5].value = null
    success()
  }
  return (
    <form onSubmit={HandleSubmit}>
      <Row className={styles.row}>
        <Col className="col" lg={4}>
          <h4>Имя технические параметры</h4>
          <InputCommon
            type="text"
            placeholder="Имя технические параметры уз"
            required
            onChange={(e) => setTitleuz(e.currentTarget.value)}
          />
        </Col>
        <Col className="col" lg={4}>
          <h4>*</h4>

          <InputCommon
            type="text"
            placeholder="Имя технические параметры ру"
            required
            onChange={(e) => setTitleru(e.currentTarget.value)}
          />
        </Col>
        <Col className="col" lg={4}>
          <h4>*</h4>
          <InputCommon
            type="text"
            placeholder="Имя технические параметры ен"
            required
            onChange={(e) => setTitleen(e.currentTarget.value)}
          />
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col className={styles.col} lg={12}>
          <div style={{ margin: "20px 0" }}>
            <h4>Информация о технические параметрах</h4>
            <TextArea
              placeholder="печатание уз"
              required
              onChange={(e) => setDescriptionuz(e.currentTarget.value)}
              autoSize />
          </div>
        </Col>
        <Col className="col" lg={12}>
          <div style={{ margin: "20px 0" }}>
            <TextArea
              placeholder="печатание ру"
              required
              onChange={(e) => setDescriptionru(e.currentTarget.value)}
              autoSize />
          </div>
        </Col>
        <Col className="col" lg={12}>
          <div style={{ margin: "20px 0" }}>
            <TextArea
              placeholder="печатание ен"
              required
              onChange={(e) => setDescriptionen(e.currentTarget.value)}
              autoSize />
          </div>
        </Col>
      </Row>
      {contextHolder}
      <Space>
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
      </Space>

    </form>
  )
}

export default Parametr