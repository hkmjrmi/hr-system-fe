import { Card, Space, Statistic, Table, Typography } from "antd";
import { useState } from "react";

function Leave() {
    const [data, setData] = useState([
        {
            id:1,
            name:'John Doe',
            email: 'john.doe@gmail.com',
        },
        {
            id:2,
            name:'Jane Doe',
            email: 'jane.doe@gmail.com',
        },
    ])

    const columns = [
        {
            key:'1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key:'2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key:'3',
            title: 'Email',
            dataIndex: 'email'
        },
    ]

    return ( 
    <div><Typography.Title level={4}>Leave</Typography.Title>
        <Table columns={columns} dataSource={data}></Table>
    </div>
    );
}   


export default Leave;