import { Button, Card, DatePicker, Form, Input, InputNumber, Modal, Radio, Select, Space, Statistic, Table, Typography } from "antd";
import { useState } from "react";

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
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
            <RecentLeaves showModal={showModal} />
        </Space>
        </Space>

        <Modal title="Request New Leave" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
           <LeaveForm/>
        </Modal>
    </div> );
}

function DashboardCard({title, value}){
    return (
        <Card>
            <Space direction="horizontal">
            <Statistic title={title} value={value}/>
            </Space>
        </Card>
        
    )
}

function LeaveForm() {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item label="Leave Type" name="leaveType" rules={[{ required: true, message: 'Please select a leave type' }]}>
                <Select placeholder="Select leave type">
                    <Select.Option value="annual">Annual Leave</Select.Option>
                    <Select.Option value="medical">Medical Leave</Select.Option>
                    <Select.Option value="emergency">Emergency Leave</Select.Option>
                </Select>
            </Form.Item> 
            <Form.Item label="From" name="fromDate" rules={[{ required: true, message: 'Please select a date' }]}>
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="To" name="toDate" rules={[{ required: true, message: 'Please select a date' }]}>
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Number of days">
                <InputNumber min={1} max={30} defaultValue={1} />
            </Form.Item>
            <Form.Item label="Reason" name="reason">
                <textarea style={{ width: '100%' }} />
            </Form.Item>
            </Form>
    )
}

function RecentLeaves({ showModal }) {
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
      </>
    );
}


export default Dashboard;