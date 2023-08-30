import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostContact, GetContact } from "../../../redux/contact";
import TableCommon from "../../common/table";
import { Popover, Space } from 'antd';
import { useState } from "react";

import './styles.css'

export default function TableAdd({ HandleDelete }) {

  const ContactGetState = useSelector(
    (state) => state.newsform.getNewForm?.Data
  );
  console.log(ContactGetState)

  const contactPostState = useSelector(
    (state) => state.contact
  );
  // console.log(contactPostState.postContact.Success == true ? 'ok' : 'no')
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
      активность: elem.activity,
      Позиция: elem.position,
      имяклиники: elem.clinic_name,
      Создатьдату: (
        <div className='time_wrap'>
          <div>
            <span>
              <lord-icon
                src="https://cdn.lordicon.com/qtxqkhzr.json"
                trigger="hover"
                colors="primary:#fff"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}>
              </lord-icon>
              {DateFormat(elem.createdAt)}
            </span>
          </div>
        </div>
      )
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
      title: "Активность",
      dataIndex: "активность",
      key: "активность",
    },
    {
      title: "Позиция",
      dataIndex: "Позиция",
      key: "Позиция",
    },
    {
      title: "Имя клиники",
      dataIndex: "имяклиники",
      key: "имяклиники",
    },
    {
      title: "Создать дату",
      dataIndex: "Создатьдату",
      key: "Создатьдату",
      fixed: "right",
      align: "center",
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
