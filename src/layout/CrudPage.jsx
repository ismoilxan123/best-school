import { Button, Divider, Drawer, Flex, Form, Input, Space, Table } from "antd";
import {
  BookFilled,
  DeleteFilled,
  EditFilled,
  FileAddOutlined,
  PlusCircleFilled,
  UserAddOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import useTeacher from "../hooks/useCrud";
import { useForm } from "antd/es/form/Form";

const CrudPage = ({ title, pageColumns, pageForum, collectionName }) => {
  const [form] = useForm();
  const {
    loading,
    data,
    setEdit,
    edit,
    addTeacher,
    open,
    setOpen,
    deleteTeacher,
    updateTeacher,
  } = useTeacher(collectionName);

  const onFinish = (value) => {
    if (edit) {
      updateTeacher(edit.id, value);
    } else {
      addTeacher(value);
    }
  };

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && edit) {
      form.setFieldsValue(edit);
    }
  }, [open]);
  function handleEdit(record) {
    setEdit(record);
    setOpen(true);
  }

  const columns = [
    {
      title: "№",
      dataIndes: "id",
      key: "id",
      render: (record, id, index) => index + 1,
      width: 50,
    },
    ...pageColumns,

    {
      title: "Action",
      key: "3",
      render: (record) => (
        <Space>
          <Button
            onClick={() => deleteTeacher(record.id)}
            type="primary"
            danger
            icon={<DeleteFilled></DeleteFilled>}
          ></Button>
          <Button
            onClick={() => handleEdit(record)}
            type="primary"
            icon={<EditFilled></EditFilled>}
          ></Button>
        </Space>
      ),
      width: 110,
    },
  ];

  return (
    <div>
      <Flex justify="space-between" align="center">
        <h1>{`${title}s`}</h1>
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          size="large"
          icon={<PlusCircleFilled />}
        ></Button>
      </Flex>
      <Divider />
      <Table
        loading={loading}
        rowKey="id"
        columns={columns}
        dataSource={data}
      />
      <Drawer
        title={`${edit ? "Edit" : "Add new"} ${title}`}
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
          {pageForum.map((pF) => (
            <Form.Item
              rules={[{ required: true }]}
              label={pF.label}
              name={pF.name}
            >
              <Input />
            </Form.Item>
          ))}

          <Form.Item>
            <Button loading={loading} htmlType="submit" type="primary">
              {`${edit ? "Edit" : "Add"} ${title}`}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default CrudPage;
