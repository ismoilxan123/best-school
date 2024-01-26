import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";

const MyContent = () => {
  return (
    <Content
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "10px",
      }}
    >
      <Outlet />
    </Content>
  );
};

export default MyContent;
