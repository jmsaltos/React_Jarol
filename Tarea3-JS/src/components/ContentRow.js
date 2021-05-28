import React from "react";
import { Row, Divider, Pagination } from "antd";
import ContentCol from "./ContentCol";
import UploadJS from "./UploadJS";

export default function ContentRow() {
  return (
    <div>
      <Row  className="RowStyle">
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <UploadJS />
        <br></br>
        <Pagination className = "PaginationCss"/>
      </Row>
      <p>
      <Divider orientation = 'center' style={{fontSize:20}}>
        Más imágenes 
        </Divider> </p>
      <Row  className="RowStyle">
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <Pagination className = "PaginationCss" />
      </Row>
    </div>
  );
}
