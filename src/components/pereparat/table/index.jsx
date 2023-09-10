import * as React from "react";
import "./styles.css";
import TableCommon from "../../common/table";
import { useSelector } from "react-redux";
import { Image } from 'antd';
import { Popover, Space } from 'antd';



export default function TableAdd({ HandleDelete, onClickPut }) {
  const categoryGetState = useSelector((state) => state.pereparatcategory);
  const rows = categoryGetState.PereparatCategoryGet?.data;
  const data = [];
  rows.map((elem, index) => {
    data.push({
      data: index + 1,
      key: elem.id,
      Имякатегориирусский: elem.title_ru,
      Имякатегорииен: elem.title_en,
      Имякатегорииузб: elem.title_uz,

      Действие: (
        <div className="boxx">
          <div className="btn-wraps">
            <button onClick={onClickPut} id={elem.id}>
              <i class='bx bx-message-square-edit'></i>
            </button>
          </div>

          <Space wrap>
            <Popover
              placement="rightBottom"
              content={
                <div className="content_delete_box">
                  <p>Вы уверены, что хотите удалить эту категория?</p>
                  <p>Чтобы удалить категорию, необходимо удалить <br /> связанные с ней товары!</p>
                  <div className="btn_wrap_delete">

                    <button onClick={HandleDelete} id={elem.id} className="yes_btn">
                      удалить
                    </button>
                  </div>
                </div>
              }
              title={
                <div className="delete_box">
                  <i class='bx bxs-error-circle'></i>
                  <span>Удалите категория препарат <span>{elem.title_ru}</span></span>
                </div>
              }
            >
              <div className="btn-wrap">
                <button id={elem.id}>
                  <lord-icon
                    src="https://cdn.lordicon.com/jmkrnisz.json"
                    trigger="hover"
                    colors="primary:#121331"
                    style={{ width: "25px", height: "25px" }}>
                  </lord-icon>
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
      title: "Имя категории рус",
      dataIndex: "Имякатегориирусский",
      key: "Имякатегориирусский",
    },
    {
      title: "Имя категории ен",
      dataIndex: "Имякатегорииен",
      key: "Имякатегорииен",

    },
    {
      title: "Имя категории узб",
      dataIndex: "Имякатегорииузб",
      key: "Имякатегорииузб",
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
