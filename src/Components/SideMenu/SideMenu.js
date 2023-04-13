import { CalendarOutlined, DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function SideMenu() {
    const navigate = useNavigate()
    return (
    <div className="SideMenu">
        <Menu onClick = {(item) => {
            navigate(item.key);
        }}
            items = {[
            {
                label:"Dashboard",
                icon: <DashboardOutlined/>,
                key:'/'
            },
            {
                label:"Leave",
                icon: <CalendarOutlined/>,
                key:'/leave'
            },
            {
                label:"Profile",
                icon: <UserOutlined/>,
                key:'/profile'
            },
        ]}
        ></Menu>
    </div>  );
}

export default SideMenu;