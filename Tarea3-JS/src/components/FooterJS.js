import React, { useState } from "react";
import {
  Alert,
  Avatar,
  Badge,
  AutoComplete,
  Cascader,
  Checkbox,
  Space,
  DatePicker,
  Radio,
  Tooltip,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import TextLoop from "react-text-loop";

const { Option } = AutoComplete;
export default function FooterJS() {
  const [result, setResult] = useState([]);

  const options = [
    {
      value: "Pichincha",
      label: "Pichincha",
      children: [
        {
          value: "Quito",
          label: "Quito",
          children: [
            {
              value: "La Mariscal",
              label: "La Mariscal",
            },
          ],
        },
      ],
    },
    {
      value: "Guayaquil",
      label: "Guayaquil",
      children: [
        {
          value: "Guayaquil",
          label: "Guayaquil",
          children: [
            {
              value: "LasPeñas",
              label: "Las Peñas",
            },
          ],
        },
      ],
    },
  ];

  const onCascaderChange = (value) => {
    console.log(value);
  };

  const onCheckedChang = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };
  return (
    <div>
      <div>
        <Space direction="vertical">
          {" "}
          <Badge count={5}>
            <span className="head-example" />
            <Tooltip title="My Profile">
            <Avatar size="small" icon={<UserOutlined />}>
              {" "}
            </Avatar></Tooltip>
          </Badge>
          <AutoComplete
            style={{
              width: 200,
            }}
            onSearch={handleSearch}
            placeholder="Input mail"
          >
            {result.map((email) => (
              <Option key={email} value={email}>
                {email}
              </Option>
            ))}
          </AutoComplete>
          <Cascader
            options={options}
            onChange={onCascaderChange}
            placeholder="Please select a city"
          />
          <DatePicker onChange={onChangeDate} />
          <Radio>Large</Radio>
          <Radio>Small</Radio>
          <Checkbox onChange={onCheckedChang}>Enviar Asunto</Checkbox>
          <Alert
            banner
            message={
              <TextLoop mask>
                <div>Notice message one</div>
                <div>Notice message two</div>
                <div>Notice message three</div>
                <div>Notice message four</div>
              </TextLoop>
            }
          />
        </Space>
      </div>
    </div>
  );
}
