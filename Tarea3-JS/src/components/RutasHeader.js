import React from 'react';
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';
import { EllipsisOutlined, DownOutlined } from '@ant-design/icons';

export default function RutasHeader() {

    const { Paragraph } = Typography;

    const routes = [
    {
      path: 'index',
      breadcrumbName: 'First-level Menu',
      
    },
    {
      path: 'first',
      breadcrumbName: 'Second-level Menu',
    },
    {
      path: 'second',
      breadcrumbName: 'Third-level Menu',
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        First-level Menu
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Second-level Menu
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Third-level Menu
        </a>
      </Menu.Item>
    </Menu>
  );

    return (
      <>
        <PageHeader 

            breadcrumb={{ routes }}          

        />
        <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" style={{margin:20}}>
        Hover me <DownOutlined />
        </a>
        </Dropdown>,
        </>
    )
}


