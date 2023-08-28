import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostContact, GetContact } from "../../../redux/contact";
import TableCommon from "../../common/table";
import { Popover, Space } from 'antd';
import { useState } from "react";

import './styles.css'

export default function TableAdd({ onClickDelete, HandleDelete }) {

  const ContactGetState = useSelector(
    (state) => state.newsform.getNewForm?.Data
  );

  const contactPostState = useSelector(
    (state) => state.contact
  );
  console.log(contactPostState.postContact.Success == true ? 'ok' : 'no')
  const dispatch = useDispatch();
  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  };

  const data = [];
  ContactGetState.map((elem, index) => {
    data.push({
      data: index + 1,
      key: elem.id,
      Имя: elem.full_name,
      Телефонныйномер: elem.phone,
      ДеятельностьДолжность : elem.activity,
      Названиеклиники: elem.position,
      категорияновостей: elem.clinic_name,

    });
  });

  React.useEffect(() => {
    dispatch(GetContact());
  }, []);

  const columns = [
    {
      title: "№",
      dataIndex: "data",
      key: "data",
      width: 50,
      align: "center",
    },
    {
      title: "Имя",
      dataIndex: "Имя",
      key: "Имя",
      fixed: "left",
    },
    {
      title: "Телефонный номер",
      dataIndex: "Телефонныйномер",
      key: "Телефонныйномер",
    },
    {
      title: "Деятельность/Должность",
      dataIndex: "ДеятельностьДолжность ",
      key: "ДеятельностьДолжность ",
    },
    {
      title: "Название клиники",
      dataIndex: "Названиеклиники",
      key: "Названиеклиники",
    },
    {
      title: "категория новостей",
      dataIndex: "категорияновостей",
      key: "категорияновостей",
    },
    {
      title: "категория новостей",
      dataIndex: "категорияновостей",
      key: "категорияновостей",
    },
  ];
  return (
    <>
      <TableCommon
        bordered
        columns={columns}
        data={data}
        pagination={false}
        scroll={{
          y: 330,
        }}
      />
    </>
  );
}
