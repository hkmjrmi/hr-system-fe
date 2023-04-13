import { Button, Card, Space, Statistic, Table, Typography } from "antd";
import { useState } from "react";

function Leave() {
    const [data, setData] = useState([
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Annual Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        
    ]);

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            width: 50,
            render: (text, record, index) => index + 1
        },
        {
            title: 'Leave Type',
            dataIndex: 'leaveType',
        },
        {
            title: 'From',
            dataIndex: 'from'
        },
        {
            title: 'To',
            dataIndex: 'to'
        },
        {
            title: 'Days',
            dataIndex: 'numOfDays',
        },
        {
            title: 'Reason',
            dataIndex: 'reason',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Approved By',
            dataIndex: 'approvedBy',
        },
    ];

    // Add 'no' field to each item in the data array
    const dataWithNo = data.map((item, index) => {
        return { ...item, no: index + 1 };
    });

    return (
        <div>
            <Typography.Title level={4}>Leave</Typography.Title>
            <Table columns={columns} dataSource={dataWithNo} pagination={{ showSizeChanger: true }} />
        </div>
    );
}

export default Leave;
