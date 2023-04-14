import { Typography } from "antd";

function AppFooter() {
    return ( <div className="AppFooter">
        <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
        <Typography.Link href="#">Privact Policy</Typography.Link>
        <Typography.Link href="#">Term of Use</Typography.Link>
    </div> );
}

export default AppFooter;