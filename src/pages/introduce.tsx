import React from "react";
import Layout from "@theme/Layout";
// 个人介绍页面
export default function Introduce() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>测试GitHub Actions是否成功</p>
      </div>
    </Layout>
  );
}
