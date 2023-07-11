import React from "react";
import { Form, Input, Button, Card, InputNumber } from "antd";

const CreateUser = () => {
  return (
    <Card title="New User" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Username" required>
          <Input placeholder="Enter username" />
        </Form.Item>
        <Form.Item label="Email" required>
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item label="Password" required>
          <Input placeholder="Enter password" />
        </Form.Item>
        <Button type="primary">Submit</Button>
      </Form>
    </Card>
  );
};

export default CreateUser;
