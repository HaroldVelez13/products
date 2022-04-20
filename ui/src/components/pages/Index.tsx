import { Row } from "antd";
import { Content } from "antd/lib/layout/layout"

interface Props {
    children: any;
}
const Page = ({ children }: Props) => {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: "100vh" }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Row style={{ justifyContent: 'center' }}>
                    {children ? children : null}
                </Row>
            </div>
        </Content>
    )
}

export default Page