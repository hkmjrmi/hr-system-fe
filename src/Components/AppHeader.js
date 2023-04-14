import {BellOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import { Space, Image, Typography, Avatar } from "antd";
function AppHeader() {
    return ( 
    <div className="AppHeader">
        <Image width={40} src="https://cms-tpq.theparq.com/wp-content/uploads/2020/07/UOB_LOGO_800x800.png">
        </Image>
        <Typography.Title style={{color:"#FEFFFF"}}>Leave Planner</Typography.Title>
        <Space>
            <Avatar icon={<UserOutlined />} /><Typography.Text style={{color:"#FEFFFF"}}>John Doe</Typography.Text>
        </Space>
        </div>
     );
}

export default AppHeader;