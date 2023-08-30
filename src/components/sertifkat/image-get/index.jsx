import React from 'react';
import { Image } from 'antd';
import { useSelector } from "react-redux";
import { Row, Col } from 'react-grid-system';
import { Popover, Space } from 'antd';
import './styles.css'
const ImageGet = ({ HandleDelete, onClickPut, cols }) => {
    const newsGetState = useSelector((state) => state.sertificat);
    const rows = newsGetState.SertificatGet.data;
    return (
        <div className='sertificat_section'>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <Row className='sertificat_img_row'>
                    {
                        rows.map(elem => (
                            <Col lg={cols} className='sertificat_img_col'>
                                <div className='sertificat_col_bg'>
                                    <Image style={{ aspectRatio: "3 / 4", width: "100%", borderRadius: "20px" }} src={elem.image} />
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
                                                        <p>Вы уверены, что хотите удалить эту сертификат?</p>
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
                                                        <span>Удалите сертификат</span>
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
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Image.PreviewGroup>
        </div>
    )
};
export default ImageGet;