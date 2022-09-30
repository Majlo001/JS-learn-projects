import {useState, useEffect} from 'react'
import Footer from '../components/footer';
import Product from '../components/product';
import { initMongoose } from '../lib/mongoose';
import { findAllProducts } from './api/products';


export default function Home({products}) {
  // const [productsInfo, setProductsInfo] = useState([])
  const [phrase, setPhrase] = useState('')

  // useEffect(() => {
  //   fetch('/api/products')
  //     .then(response => response.json())
  //     .then(json => setProductsInfo(json))
  // }, []);

  const categoriesNames = [...new Set(products.map(p => p.category))];

  if (phrase) {
    let res = phrase.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(res));
  }

  return (
    <div className="py-5">
      <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-100 w-full py-2 px-4 rounded-xl mx-4" />

      <div>
        {categoriesNames.map(categoryName => (

          <div key={categoryName} className="py-4">
            {products.find(p => p.category === categoryName) && (
              <>
                <h2 className="text-2xl capitalize py-5">{categoryName}s</h2>

                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(product => product.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="px-5 snap-start">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

        ))}
      </div>

      <Footer />

    </div>
  )
}


export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}
