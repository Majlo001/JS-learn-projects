import { useContext, useEffect, useState } from 'react';
import Layout from '../components/layout';
import { ProductsContext } from '../components/productContext';

export default function checkoutPage() {
    const {selectedProducts} = useContext(ProductsContext)
    const [productsInfo, setProductsInfo] = useState([])

    useEffect(() => {
        const uniqIds = [...new Set(selectedProducts)];

        fetch('/api/products?ids='+uniqIds.join(','))
            .then(response => response.json())
            .then(json => setProductsInfo(json))
    }, [selectedProducts]);


    return (
        <Layout>
            {/* {selectedProducts.join(',\n')} */}
        </Layout>
    )
}