import React from "react";
import { Form, Input, Button } from "antd";

function _TodoCreateButton(props) {
  const { todoList, setTodoList } = props;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (!values.title || !values.description) return;

    if (todoList.some((e) => e.title === values.title)) {
      alert("This title already exists");
      return;
    }

    setTodoList([
      ...todoList,
      {
        title: values.title,
        body: values.description,
        visible: true,
      },
    ]);
    form.resetFields();
  };

  const onFinishFailed = (error) => {
    console.log("onFinishFailed", error);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Put you item title here" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Put you item description here" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}

export const TodoCreateButton = _TodoCreateButton;
