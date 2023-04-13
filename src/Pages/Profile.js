import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";

function Profile() {
   
    const { Meta } = Card;

    return (
    <div>
      <Card style={{ marginTop:"20px", width: 400 }}>
        <Meta
          avatar={<Avatar icon={<UserOutlined />} />}
          title="John Doe"
          description="johndoe@example.com"
        />
        <p>Contact: 123-456-7890</p>
        <p>Address: 123 Main St, Anytown USA</p>
      </Card>
    </div>
  );
}

export default Profile;