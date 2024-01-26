import React from "react";

import { Layout } from "antd";
import MySidebar from "./layout/MySidebar";
import MyHeader from "./layout/MyHeader";
import MyContent from "./layout/MyContent";

const Root = () => {
  return (
    <Layout style={{ minHeight: "100%" }}>
      <MySidebar />
      <Layout>
        <MyHeader />
        <Layout style={{ padding: "24px" }}>
          <MyContent />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Root;
