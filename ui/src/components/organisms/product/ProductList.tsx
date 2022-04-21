import { getProducts } from '../../../redux/actionCreators/products';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useEffect } from 'react';
import { IProduct } from '../../../common/interfaces/IProduct';
import ProductItem from '../../molecules/product/ProductItem';
import { Row } from 'antd';
import PageNoCenter from '../../pages/PageNoCenter';

const Products = () => {
    const { list, loading, error } = useTypedSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getProducts());
    }, [])

    useEffect(() => {
        console.log(list)
    }, [list])
    return (
        <PageNoCenter>
            <Row style={{ justifyContent: 'left !important' }}>
                {loading
                    ? (
                        <div>Loading...</div>
                    )
                    : list.map((product: IProduct) => <ProductItem key={"product" + product._id} product={product} />)
                }
            </Row>
        </PageNoCenter>
    )
}

export default Products