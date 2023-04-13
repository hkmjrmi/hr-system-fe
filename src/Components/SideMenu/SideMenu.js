import { CalendarOutlined, DashboardOutlined, PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu({ logout }) {
  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          if (item.key === "/logout") {
            logout();
          } else {
            navigate(item.key);
          }
        }}
      >
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />} label="Dashboard" />
        <Menu.Item key="/leave" icon={<CalendarOutlined />} label="Leave" />
        <Menu.Item key="/profile" icon={<UserOutlined />} label="Profile" />
        <Menu.Item key="/logout" icon={<PoweroffOutlined />} danger label="Logout" />
      </Menu>
    </div>
  );
}

export default SideMenu;