import { Form, Input, Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { login } from '../../../redux/actionCreators/login';
import AppCard from '../../atoms/AppCard/AppCard';
import Page from '../../pages/Index';

const LoginForm = () => {
    const navigate = useNavigate();

    const { user, loading, error } = useTypedSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        // @ts-ignore
        dispatch(login(values))
    };
    const handleClick = () => navigate("/register")

    useEffect(() => {
        if (user._id && user._id !== "") {
            navigate("/products")
        }
    }, [user])

    return (
        <Page>
            <AppCard title="Login">
                <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={onFinish}
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
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                        <a onClick={handleClick}>Register</a>
                    </Form.Item>
                </Form>
            </AppCard>
        </Page>
    );
};

export default LoginForm;