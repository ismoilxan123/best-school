import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";

const MyHeader = () => {
  return (
    <Header style={{}}>
      <Button
        type="text"
        // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        // style={{
        //   fontSize: "16px",
        //   width: 64,
        //   height: 64,
        //   color: "white",
        // }}
      />
    </Header>
  );
};

export default MyHeader;
