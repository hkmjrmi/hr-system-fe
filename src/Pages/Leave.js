import { Button, Card, Space, Statistic, Table, Typography } from "antd";
import { useState } from "react";
import moment from "moment";

function Leave() {
    const [data, setData] = useState([
        {
            leaveType: 'Annual Leave',
            from: moment("2023-04-22T00:00:00.000Z").format("DD/MM/YYYY"),
            to: moment("2023-04-25T00:00:00.000Z").format("DD/MM/YYYY"),
            numOfDays: 2,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Medical Leave',
            from: '21/04/2023',
            to: '25/04/2023',
            numOfDays: 1,
            reason: 'Eid Celebration',
            status: 'Approved',
            approvedBy: 'Chin Hau'
        },
        {
            leaveType: 'Emergency Leave',
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
            numOfDays: 5,
            reason: 'Eid Celebration',
            status: 'Rejected',
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
            filters: [
                {
                    text: 'Annual Leave',
                    value: 'Annual Leave',
                },
                {
                    text: 'Medical Leave',
                    value: 'Medical Leave',
                },
                {
                    text: 'Emergency Leave',
                    value: 'Emergency Leave',
                },
                {
                    text: 'Block Leave',
                    value: 'Block Leave',
                },
              ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.leaveType.startsWith(value),
            width: '30%',
        },
        {
            title: 'From',
            dataIndex: 'from',
            defaultSortOrder: 'descend',
            sorter: (a, b) => moment(a.from, 'DD/MM/YYYY') - moment(b.from, 'DD/MM/YYYY'),
            render: (text) => moment(text, 'DD/MM/YYYY').format('DD/MM/YYYY'),
          },
          {
            title: 'To',
            dataIndex: 'to',
            defaultSortOrder: 'descend',
            sorter: (a, b) => moment(a.from, 'DD/MM/YYYY') - moment(b.from, 'DD/MM/YYYY'),
            render: (text) => moment(text, 'DD/MM/YYYY').format('DD/MM/YYYY'),
          },
          {
            title: 'Days',
            dataIndex: 'numOfDays',
            sorter: {
              compare: (a, b) => a.numOfDays - b.numOfDays,
              multiple: 3,
            },
          },
        {
            title: 'Reason',
            dataIndex: 'reason',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            filters: [
                {
                    text: 'Approved',
                    value: 'Approved',
                },
                {
                    text: 'Rejected',
                    value: 'Rejected',
                },
                {
                    text: 'Pending',
                    value: 'Pending',
                },
              ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.status.startsWith(value),
            width: '30%',
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
