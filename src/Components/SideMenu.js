import { FieldTimeOutlined } from "@ant-design/icons";
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
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />} label="Dashboard">Dashboard</Menu.Item>
        <Menu.Item key="/leave" icon={<FieldTimeOutlined />} label="Leave">Leave</Menu.Item>
        <Menu.Item key="/profile" icon={<UserOutlined />} label="Profile">Profile</Menu.Item>
        <Menu.Item key="/calendar" icon={<CalendarOutlined />} label="Calendar">Public Holidays</Menu.Item>
        <Menu.Item key="/logout" icon={<PoweroffOutlined />} danger label="Logout">Logout</Menu.Item>

      </Menu>
    </div>
  );
}

export default SideMenu;