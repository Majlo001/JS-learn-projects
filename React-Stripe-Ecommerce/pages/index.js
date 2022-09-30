import {useState, useEffect} from 'react'
import Product from '../components/product';

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([])
  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json))
  }, []);

  const categoriesNames = [...new Set(productsInfo.map(p => p.category))];

  return (
    <div>
      <div>

        {categoriesNames.map(categoryName => (
          <div key={categoryName} className="py-4">
            <h2 className="text-2xl capitalize py-5">{categoryName}s</h2>

            <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
              {productsInfo.filter(product => product.category === categoryName).map(productInfo => (
                <div key={productInfo._id} className="px-5 snap-start">
                  <Product {...productInfo} />
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}
