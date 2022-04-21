import { Layout } from "antd"
import AppRoutes from "./AppRoutes"
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <Layout>
      <AppRoutes />
    </Layout>
  </Provider>
)


export default App
