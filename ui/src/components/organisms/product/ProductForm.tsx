import { Form, Input, Button, InputNumber } from 'antd';
import AppCard from '../../atoms/AppCard/AppCard';
import Page from '../../pages/Index';

const ProductForm = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };


    return (
        <Page>
            <AppCard title="Product" >
                <Form
                    name="Product Form"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={onFinish}
                    autoComplete="off"

                >
                    <Form.Item
                        label="name"
                        name="name"
                        rules={[{ required: true, message: 'Please input the product name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        style={{ display: 'inline-block', width: 'calc(50%)' }}
                        name="price"
                        label="price"
                        rules={[{ required: true, message: 'Please input the product price!' }]}
                    >
                        <InputNumber min={1} />
                    </Form.Item>
                    <Form.Item
                        style={{ display: 'inline-block', width: 'calc(50%)' }}
                        name="quantity"
                        label="quantity"
                        rules={[{ required: true, message: 'Please input the product quantity!' }]}
                    >
                        <InputNumber min={1} />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" block style={{ marginTop: 12 }}>
                            Add Product
                        </Button>
                    </Form.Item>

                </Form>
            </AppCard>
        </Page>
    )
}

export default ProductForm