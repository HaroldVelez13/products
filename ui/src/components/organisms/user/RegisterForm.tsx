import { Form, Input, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import AppCard from '../../atoms/AppCard/AppCard';
import Page from '../../pages/Index';

const RegisterForm = () => {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Success:', values);

    };

    const handleClick = () => navigate("/")

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Select.Option value="57">+57</Select.Option>
                <Select.Option value="01">+1</Select.Option>
            </Select>
        </Form.Item>
    );

    return (
        <Page>
            <AppCard title="Register">
                <Form
                    name="Register Form"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="phone_number"
                        label="Phone Number"
                        rules={[{ required: false }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
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