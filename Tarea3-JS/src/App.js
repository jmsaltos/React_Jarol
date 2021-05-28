import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Layout, PageHeader, BackTop, Spin, Skeleton, Button } from "antd";
import MenuLateral from "./components/MenuLateral";
import RutasHeader from "./components/RutasHeader";
import ContentRow from "./components/ContentRow";
import HeaderJS from "./components/HeaderJS";
import FooterJS from "./components/FooterJS";
import LogLateral from "./components/LogLateral";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header
          href="index"
          style={{ backgroundColor: "white" }}
          className="RowFlex"          
        >
          <p>
            <PageHeader className="texto" title="ANT" subTitle="Design" />
          </p>
          <div className="ButtonOpen">
            <LogLateral/>
          </div>
        </Header>
        

        <Layout>
          <Sider className="Lateral">
            <MenuLateral className="Lateral" />
          </Sider>
          <Content>
            <RutasHeader />
            <br href="first"></br>
            <ContentRow />
          </Content>
        </Layout>
        <Footer href="second">
          <h2 className="">
            <FooterJS />
          </h2>
        </Footer>
        <Skeleton />
        <Spin />
        <BackTop>
          <div className="StyleUp">UP</div>
        </BackTop>
      </Layout>
    </div>
  );
}

export default App;
