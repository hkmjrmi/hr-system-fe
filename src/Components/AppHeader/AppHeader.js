import {MailOutlined} from "@ant-design/icons";
import { Space, Image, Typography } from "antd";
function AppHeader() {
    return ( 
    <div className="AppHeader">
        <Image width={40} src="https://cms-tpq.theparq.com/wp-content/uploads/2020/07/UOB_LOGO_800x800.png">
        </Image>
        <Typography.Title>HR System</Typography.Title>
        <Space>
            <MailOutlined style={{fontSize: 24}}></MailOutlined>
        </Space>
        </div>
     );
}

export default AppHeader;