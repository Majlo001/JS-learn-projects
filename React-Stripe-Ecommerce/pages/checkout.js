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

    function moreOfThisProduct(id) {
        setSelectedProducts(prev => [...prev,id]);
    }
    function lessOfThisProduct(id) {
        const pos = selectedProducts.indexOf(id);

        if (pos !== -1) {
            setSelectedProducts( prev => {
                return prev.filter((value,index) => index !== pos);
            });
        }
    }


    return (
        <Layout>
            {!productsInfo.length && (
                <div>No products in your shopping cart</div>
            )}
            {productsInfo.length && productsInfo.map(product => (
                <div className="flex mb-5 items-center" key={product._id}>
                    <div className="bg-gray-100 p-3 rounded-xl shrink-0" style={{boxShadow:'inset 1px 0px 10px 10px rgba(0,0,0,0.1)'}}>
                        <img className="w-24" src={product.picture} alt=""/>
                    </div>
                    <div className="pl-4 items-center">
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <p className="text-sm leading-4 text-gray-500">{product.description}</p>
                        <div className="flex mt-1">
                            <div className="grow font-bold">${product.price}</div>
                            <div>
                                <button onClick={() => lessOfThisProduct(product._id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>
                                <span className="px-2">
                                    {selectedProducts.filter(id => id === product._id).length}
                                </span>
                                <button onClick={() => moreOfThisProduct(product._id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
    )
}