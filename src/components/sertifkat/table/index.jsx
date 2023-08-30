import * as React from "react";
import "./styles.css";
import TableCommon from "../../common/table";
import { useSelector } from "react-redux";
import { Image } from 'antd';
import { Popover, Space } from 'antd';



export default function TableAdd({ HandleDelete, onClickPut }) {
  const newsGetState = useSelector((state) => state.sertificat);
  const rows = newsGetState.SertificatGet.data;
  console.log(rows);
  const data = [];
  rows.map((elem, index) => {
    data.push({
      data: index + 1,
      key: elem.id,
      Фото: <Image
      width={60}
      height="100%"
      style={{ aspectRatio: "1 / 1", borderRadius: "20px", objectFit: "cover" }}
      src={elem.image}
    /> ,
      Действие: (
        <div className="boxx">
          <div className="btn-wraps">
            <button onClick={onClickPut} id={elem.id}>
              <i class='bx bx-message-square-edit'></i>
            </button>
          </div>

          <Space wrap>
            <Popover
              trigger="click"
              placement="rightBottom"
              content={
                <div className="content_delete_box">
                  <p>Вы уверены, что хотите удалить эту блог?</p>
                  <div className="btn_wrap_delete">
                    <button onClick={HandleDelete} id={elem.id} className="yes_btn">
                      да
                    </button>
                  </div>
                </div>
              }
              title={
                <div className="delete_box">
                  <i class='bx bxs-error-circle'></i>
                  <span>Удалите блог <span>{elem.title_ru}</span></span>
                </div>
              }
            >
              <div className="btn-wrap">
                <button id={elem.id}>
                  <i class="bx bxs-trash"></i>
                </button>
              </div>
            </Popover>
          </Space>
        </div>

      ),
    });
  });

  const columns = [
    {
      title: "№",
      dataIndex: "data",
      key: "data",
      width: 50,
      align: "center",
    },
    {
      title: "Фото",
      dataIndex: "Фото",
      key: "Фото",
      fixed: "left",
      width: 800,
      align: "center",
    },
    {
      title: "Действие",
      dataIndex: "Действие",
      key: "Действие",
      fixed: "right",
      align: "center",
    },
  ];



  return (
    <TableCommon
      bordered
      scroll={{
        y: 330,
      }}
      columns={columns}
      data={data}
      pagination={false}
    />
  );
}
