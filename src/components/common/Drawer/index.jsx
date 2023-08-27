import React, { Children } from 'react'
import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';

const DraverCommon = ({ title, onClose, open, children, addBtn, width }) => {


    return (
        <>
            <Drawer
                title={title}
                placement="right"
                width={width ? width : 1200}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button danger onClick={onClose}>Отменить</Button>

                    </Space>
                }
            >
                {children}
            </Drawer>
        </>
    )
}

export default DraverCommon