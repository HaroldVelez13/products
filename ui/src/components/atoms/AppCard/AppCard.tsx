import { Card } from "antd"

interface Props {
    children: any;
    title: string;
}
const AppCard = ({ children, title }: Props) => {
    return (
        <Card hoverable title={title} style={{ width: 400 }} headStyle={{ textAlign: "center", fontSize: "1.5rem" }}>
            {children ? children : null}
        </Card>
    )
}

export default AppCard