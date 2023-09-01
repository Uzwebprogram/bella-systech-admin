import React from 'react'
import { Row, Col } from "react-grid-system"
import styles from "./style.module.css"
import InputCommon from '../../../common/input'
import CommonBtn from '../../../common/CommonBtn'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SampleProductPost } from '../../../../redux/product-aparat/sample'
import { Space, message } from 'antd'
const SampleProductPosts = () => {
  const dispatch = useDispatch();
  const [title_ru, setTitleru] = useState();
  const [title_uz, setTitleuz] = useState();
  const [title_en, setTitleen] = useState();
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
      name_uz: title_uz,
      name_en: title_en,
      name_ru: title_ru,
      aparat: AparatProductGetsPost?.data?.data?.id
    }
    await dispatch(SampleProductPost(body))
    success()
    e.target[0].value = null
    e.target[1].value = null
    e.target[2].value = null
    e.target[3].value = null
    e.target[4].value = null
    e.target[5].value = null
  }
  return (
    <form onSubmit={HandleSubmit}>
      <Row className={styles.row}>
        <Col className="col" lg={4}>
          <h4>Применение товара</h4>
          <InputCommon
            type="text"
            placeholder="Применение товара уз"
            required
            onChange={(e) => setTitleuz(e.currentTarget.value)}
          />
        </Col>
        <Col className="col" lg={4}>
          <h4>*</h4>
          <InputCommon
            type="text"
            placeholder="Применение товара ру"
            required
            onChange={(e) => setTitleru(e.currentTarget.value)}
          />
        </Col>
        <Col className="col" lg={4}>
          <h4>*</h4>
          <InputCommon
            type="text"
            placeholder="Применение товара ен"
            required
            onChange={(e) => setTitleen(e.currentTarget.value)}
          />
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

export default SampleProductPosts