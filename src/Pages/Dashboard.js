import { Card, Space, Statistic, Table, Typography } from "antd";

function Dashboard() {
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
            <RecentLeaves />
        </Space>
        </Space>
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

function RecentLeaves(){
    return (
        <>
        <Typography.Text>Recent Leaves</Typography.Text>
        <Table
            columns={[
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
                }
            ]}
        ></Table>
        </>
    )
}

export default Dashboard;