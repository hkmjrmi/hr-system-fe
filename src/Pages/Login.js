import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Image, Input, Typography } from "antd";
import { useState } from "react";

function Login({ doAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = () => {
    setLoading(true);
    if (username === "user" && password === "1234") {
        doAuth(true);
        setLoading(false);
    } else {
        alert("User is not registered");
        setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: 300, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <Image width={50} src="https://cms-tpq.theparq.com/wp-content/uploads/2020/07/UOB_LOGO_800x800.png" />
        </div>
        <Typography.Title level={3}>HR Leave System</Typography.Title>
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username!' }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" value={username} onChange={handleUsernameChange} />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" value={password} onChange={handlePasswordChange}/>
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <Button type="primary" htmlType="submit" style={{ float: 'right' }} loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
