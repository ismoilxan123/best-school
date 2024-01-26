import {
  BookOutlined,
  FieldTimeOutlined,
  GroupOutlined,
  HomeFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { NavLink, useLocation } from "react-router-dom";

const MySidebar = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <Sider trigger={null} width={250}>
      <h1
        style={{
          fontSize: "20px",
          color: "white",
          padding: "18px 30px",
          borderBottom: "1px solid #4b5a69",
        }}
      >
        Teacher
      </h1>
      <Menu
        mode="vertical"
        theme="dark"
        // selectedKeys={["/teachers"]}
        items={[
          {
            key: 1,
            label: <NavLink to={"/"}>Home</NavLink>,
            icon: <HomeFilled></HomeFilled>,
          },
          {
            key: 2,
            label: <NavLink to={"/teacher"}>Teachers</NavLink>,
            icon: <UserOutlined></UserOutlined>,
          },
          {
            key: 3,
            label: <NavLink to={"/classes"}>Classes</NavLink>,
            icon: <GroupOutlined></GroupOutlined>,
          },
          {
            key: 4,
            label: <NavLink to={"/subjects"}>Subjects</NavLink>,
            icon: <BookOutlined></BookOutlined>,
          },
          {
            key: 5,
            label: <NavLink to={"/timetable"}>Timetable</NavLink>,
            icon: <FieldTimeOutlined></FieldTimeOutlined>,
          },
        ]}
      />
    </Sider>
  );
};

export default MySidebar;
