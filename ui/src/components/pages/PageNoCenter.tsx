import { Row } from "antd";
import { Content } from "antd/lib/layout/layout"

interface Props {
    children: any;
}
const PageNoCenter = ({ children }: Props) => {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: "100vh" }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

                {children ? children : null}

            </div>
        </Content>
    )
}

export default PageNoCenter