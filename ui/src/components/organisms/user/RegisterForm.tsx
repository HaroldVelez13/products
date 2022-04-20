import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import AppCard from '../../atoms/AppCard/AppCard';
import Page from '../../pages/Index';

const RegisterForm = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleClick = () => navigate("/")

    return (
        <Page>
            <AppCard title="Register">
                <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" block style={{ marginTop: 12 }}>
                            Register
                        </Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                        <a href="#" onClick={handleClick}>Login</a>
                    </Form.Item>

                </Form>
            </AppCard>
        </Page>
    );
};

export default RegisterForm;