import { CalendarOutlined, DashboardOutlined, LogoutOutlined, PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function SideMenu() {
    const navigate = useNavigate()
    return (
      <div className="SideMenu">
        <Menu
          onClick={(item) => {
            if(item.key === "/logout"){
                alert("Logout Success!");
            } else {
                navigate(item.key);
            }
            
          }}
          items={[
            {
              label: "Dashboard",
              icon: <DashboardOutlined />,
              key: "/"
            },
            {
              label: "Leave",
              icon: <CalendarOutlined />,
              key: "/leave"
            },
            {
              label: "Profile",
              icon: <UserOutlined />,
              key: "/profile"
            },
            {
              label: "Logout",
              icon: <PoweroffOutlined />,
              danger: true,
              key: "/logout"
            }
          ]}
        ></Menu>
      </div>
    );
  }
  
export default SideMenu;