import { Card, Col, Row } from 'antd';
import { IProduct } from '../../../common/interfaces/IProduct';

type Props = {
    product: IProduct
}
const ProductItem = ({ product }: Props) => {
    return (
        <Col span={8}>
            <Card title={product.name} hoverable style={{ width: 240, textAlign: "center", marginBottom: "1rem" }}>
                <Card.Meta title={"Price: " + product.price.toString()} description={"Quantity: " + product.quantity.toString()} />
            </Card>
        </Col>
    )
}

export default ProductItem