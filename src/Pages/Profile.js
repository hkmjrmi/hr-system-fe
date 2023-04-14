import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

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
        <p>Contact: 01112307067</p>
        <p>Email Address: john.doe@gmail.com</p>
      </Card>
    </div>
  );
}

export default Profile;