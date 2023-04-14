import { Button, Card, DatePicker, Form, Input, InputNumber, Modal, Result, Select, Space, Statistic, Table, Typography } from "antd";
import { useState } from "react";

function Dashboard() {

  const { Option } = Select;

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard title={"Annual Leave"} value={18} />
          <DashboardCard title={"Medical Leave"} value={30} />
          <DashboardCard title={"Emergency Leave"} value={5} />
        </Space>
        <Space>
          <RecentLeaves showModal={showModal} isModalOpen={isModalOpen} closeModal={closeModal} />
        </Space>
      </Space>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <Card>
      <Space direction="horizontal">
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentLeaves({ showModal, isModalOpen, closeModal }) {
  // Table structure for demo purposes
  const columns = [
    {
      title: "Leave Type",
    },
    {
      title: "From",
    },
    {
      title: "To",
    },
    {
      title: "NumDays",
    },
    {
      title: "Status",
    },
    {
      title: "Approved By",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography.Text>Recent Leaves</Typography.Text>
        <Button type="primary" onClick={showModal} style={{ marginBottom: "10px" }}>
          Request New Leave
        </Button>
      </div>
      <Table columns={columns} />

      <Modal title="Request New Leave" open={isModalOpen} onCancel={closeModal} footer={null}>
        <LeaveForm closeModal={closeModal} />
      </Modal>
    </>
  );
}

function LeaveForm({ closeModal }) {

  const [successMessage, setSuccessMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
    setSuccessMessage('Request Leave has been successfully submitted!');
    setModalVisible(true);
    closeModal();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" layout="vertical">
        <Form.Item name="leaveType" label="Leave Type" rules={[{ required: true }]}>
          <Select style={{width:"400px"}}>
            <Option value="annual">Annual Leave</Option>
            <Option value="sick">Sick Leave</Option>
            <Option value="maternity">Maternity Leave</Option>
            <Option value="paternity">Paternity Leave</Option>
          </Select>
        </Form.Item>
        <Form.Item name="from" label="From" rules={[{required: true}]}>
          <DatePicker style={{width:"400px"}}/>
        </Form.Item>
        <Form.Item name="to" label="to" rules={[{required: true}]}>
          <DatePicker style={{width:"400px"}}/>
        </Form.Item>
        <Form.Item name="days" label="Number of Days" rules={[{required: true}]}>
          <InputNumber style={{width:"400px"}}/>
        </Form.Item>
        <Form.Item name="reasons" label="Reasons" rules={[{required: true}]}>
          <Input style={{width:"400px"}}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>

      <Modal
        title="Leave Form Result"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Result status="success" title={successMessage} />
      </Modal>
    </>
  )
}


export default Dashboard;