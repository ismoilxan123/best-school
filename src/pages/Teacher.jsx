import { Button, Drawer, Flex, Form, Input, Table } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import useTeacher from "../hooks/useTeacher";
import { useForm } from "antd/es/form/Form";

const Teacher = () => {
  const [form] = useForm();
  const { loading, data, addTeacher, open, setOpen } = useTeacher();
  const onFinish = (value) => {
    addTeacher(value);
  };

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: 1,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: 2,
    },
    {
      title: "Action",
      key: "action",
      reder: (record) => record.id,
    },
  ];

  return (
    <div>
      <Flex justify="space-between" align="center">
        <h1>Teacher</h1>
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          size="large"
          icon={<UserAddOutlined />}
        ></Button>
      </Flex>
      <br />
      <Table
        loading={loading}
        rowKey="firstName"
        columns={columns}
        dataSource={data}
      />
      <Drawer
        title="Add new Teacher"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          name="add_teacher"
        >
          <Form.Item
            rules={[{ required: true }]}
            label="First Name"
            name={"firstName"}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            label="Last Name"
            name={"lastName"}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} htmlType="submit" type="primary">
              Add Teacher
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Teacher;
