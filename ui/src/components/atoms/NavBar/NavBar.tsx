import { Header } from "antd/lib/layout/layout"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Link className="li" to="/">login</Link>
            <Link className="li" to="/register">register</Link>
            <Link className="li" to="/products">products</Link>
            <Link className="li" to="/products/form">products form</Link>
        </Header>
    )
}
export default NavBar