import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Switch } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  FileImageOutlined,
  LoginOutlined,
  CommentOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  SettingOutlined,
  ContactsOutlined,
  FileTextOutlined
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import './styles.css'
import logo from "../../assets/image/logos.png";
import { useSelector, useDispatch } from "react-redux";
import { adminGet } from "../../redux/admin_add/index";
const { Header, Content, Footer } = Layout;


const HorizontalSidebar = ({ children, setIsChecked }) => {
  const emailSave = window.localStorage.getItem('emails')
  const text = <span>Выйти</span>;
  const dispatch = useDispatch();
  const adminGetState = useSelector((state) => state.adminadd);
  const rows = adminGetState.userGet?.data;
  const filterData = rows.filter(elem => elem.email == emailSave)
  const pathname = useLocation();
  const cookies = new Cookies();

  useEffect(() => {
    dispatch(adminGet());
  }, []);

  const navigate = useNavigate();
  const HandleLogout = () => {
    cookies.remove("token");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, "1500");
  };

  const onChange = async (checked) => {
    window.localStorage.setItem('checked', 'true')
    window.location.reload()

  };


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: <Tooltip title={text}>
        <button className="tool_btns" onClick={HandleLogout}>
          <span>Выйти</span>
          <LoginOutlined />
        </button>
      </Tooltip>,
      key: '0',
    },
    {
      label: <div className="switch_wrapp"> <span>Боковая панель</span> <Switch onChange={onChange} /></div>,
      key: '1',
    },
  ];

  return (
    <Layout className="layout hori_sidebar">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={logo} width={100} className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            {
              key: "1",
              label: (
                <NavLink
                  to={"/adminadd"}
                  className={pathname == "/adminadd" ? "active" : ""}
                >
                  <span class="title">Админ</span>
                </NavLink>
              ),
            },
            {
              key: "2",
              label: (
                <NavLink to={"/contact"}>
                  <span class="title">Заявки</span>
                </NavLink>
              ),
            },
            {
              key: "3",
              label: (
                <span class="title">Категория</span>

              ),
              children: [
                {
                  type: 'category',
                  label: (
                    <NavLink
                      to={"/category-aparat"}
                      className={pathname == "/category-aparat" ? "active" : ""}
                    >
                      <span class="title">Апарат</span>
                    </NavLink>
                  )
                },
                {
                  type: 'category',
                  label: (
                    <NavLink
                      to={"/category-pereparat"}
                      className={pathname == "/category-pereparat" ? "active" : ""}
                    >
                      <span class="title">Препараты</span>
                    </NavLink>
                  )
                }
              ]
            },
            {
              key: "4",
              label: (
                <span class="title">Продукт</span>
              ),
              children: [
                {
                  type: 'category',
                  label: (
                    <NavLink
                      to={"/aparat-product"}
                      className={pathname == "/aparat-product" ? "active" : ""}
                    >
                      <span class="title">Апарат</span>
                    </NavLink>
                  )
                },
                {
                  type: 'category',
                  label: (
                    <NavLink
                      to={"/pereparat-product"}
                      className={pathname == "/pereparat-product" ? "active" : ""}
                    >
                      <span class="title">Препараты</span>
                    </NavLink>
                  )
                }
              ]
            },
            {
              key: "5",
              label: (
                <NavLink
                  to={"/news"}
                  className={pathname == "/news" ? "active" : ""}
                >
                  <span class="title">Новости</span>
                </NavLink>
              ),
            },
            {
              key: "6",
              label: (
                <NavLink
                  to={"/partners"}
                  className={pathname == "/partners" ? "active" : ""}
                >
                  <span class="title">Партнеры</span>
                </NavLink>
              ),
            },
            {
              key: "6",
              label: (
                <NavLink
                  to={"/sertfikat"}
                  className={pathname == "/sertfikat" ? "active" : ""}
                >
                  <span class="title">Сертификат</span>
                </NavLink>
              ),
            },
            {
              key: "6",
              label: (
                <NavLink
                  to={"/news-form"}
                  className={pathname == "/news-form" ? "active" : ""}
                >
                  <span class="title">Записи на семинар</span>
                </NavLink>
              ),
            }
          ]}
        />
        <div className="profile">
          <Dropdown
            style={{ marginLeft: '10px' }}
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <lord-icon
                  src="https://cdn.lordicon.com/dycatgju.json"
                  trigger="hover"
                  colors="primary:#fff"
                  style={{width: "20px", height: "20px"}}>
                </lord-icon>
                <span className="drop_span">Настройка</span>
              </Space>
            </a>
          </Dropdown>
          <UserOutlined className="user-icon" />
          <div className="profile-right">
            {filterData.map((elem) => (
              <>
                <p className="profile_name">{elem.name}</p>
                <p className="profile_email">{elem.email}</p>
              </>
            ))}
          </div>
        </div>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            borderRadius: "20px"
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          background: "transparent",
          color: "#3045A5",
          fontWeight: '500',
          padding: '5px 50px'
        }}
      >
        ©2023 Created by Software System Pro
      </Footer>
    </Layout>
  );
};
export default HorizontalSidebar;