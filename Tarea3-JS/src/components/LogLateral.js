import React, { useState } from "react";
import { Drawer, Button } from "antd";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
export default function LogLateral() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button type="primary" shape="round" onClick={showDrawer}>
        Access/Register
      </Button>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={400}
      >
        <hr></hr>
        <h2 style={{textAlign:'center', width:'100%'}}>LOG IN</h2>
        <hr></hr>
        <FormLogin />
        <hr></hr>
        <h2 style={{textAlign:'center', width:'100%'}}>REGISTER</h2>
        <hr></hr>
        <FormRegister />
      </Drawer>
    </div>
  );
}
