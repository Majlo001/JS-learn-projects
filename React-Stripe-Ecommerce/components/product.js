import { useContext } from "react";
import { ProductsContext } from "./productContext";


export default function Product({_id, name, price, description, image}){
    const {setSelectedProducts} = useContext(ProductsContext);

    function addProduct(){
        setSelectedProducts(prev => [...prev, _id])
    }

    return(
        <div className="w-64">
            <div className="p-5 rounded-xl bg-blue-300">
                <img src={image} alt='' />
            </div>
            <div className="mt-2">
                <h3 className="font-bold text-lg">{name}</h3>
            </div>
            <p className="text-sm mt-1 leading-4">{description}</p>
            <div className="flex mt-2">
                <div className="text-2xl font-bold grow">${price}</div>
                <div onClick={addProduct} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">add to cart</div>
            </div>
        </div>
    );
}