import React, { useState } from "react";
import {
  Card,
  Col,
  Button,
  Typography,
  Image,
  Slider,
  Popconfirm,
  message,
  notification,
} from "antd";
import RateJ from "./RateJ";
import { RedoOutlined } from "@ant-design/icons";

function confirm(e) {
  console.log(e);
  message.success("Click on Yes");
    notification.open({
      message: 'Click on Yes',
      description:
        'This is the content of the notification. You pressed on Ok button',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
}

function cancel(e) {
  console.log(e);
  message.error("Click on No");
  notification.open({
    message: 'Click on No',
    description:
      'This is the content of the notification. You pressed on No button',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
}
export default function ContentCol() {
  const [id, setid] = useState(Math.floor(Math.random() * 1000));
  const [img, setimg] = useState("https://picsum.photos/id/" + id + "/250/250");
  const handleChangeImage = () => {
    setid(Math.floor(Math.random() * 1000));
    setimg("https://picsum.photos/id/" + id + "/250/250");
  };
  const handleSliderVar = (val) => {
    setimg("https://picsum.photos/id/" + id + "/250/250/?blur=" + val);
    if (val === 0) {
      setimg("https://picsum.photos/id/" + id + "/250/250");
    }
  };
  const { Text } = Typography;
  return (
    <div>
      <Col
        className="gutter-box"
        xs={{ span: "100%", offset: 1 }}
        lg={{ span: "100%", offset: 1 }}
      >
        <div className="idText">
          <Text strong type="strong">
            {id}
          </Text>
        </div>
        <Card hoverable style={{ width: "100%" }}>
          <Image
            style={{ alignSelf: "center" }}
            className="BorderImages"
            src={img}
          />
        </Card>
        <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
          style={{ width: "100%" }}
        >
          <a href="#" style={{ color: "white" }}>
            Delete
          </a>
        </Popconfirm>
        <Slider min={0} max={5} defaultValue={0} onChange={handleSliderVar} />
        <RateJ />
        <Button
          className="boton"
          onClick={handleChangeImage}
          type="primary"
          icon={<RedoOutlined />}
          img={img}
        >
          Cambiar
        </Button>
      </Col>
    </div>
  );
}
