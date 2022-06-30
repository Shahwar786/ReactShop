import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = ({ categoryText }) => {
    const [productsData, getProductsData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products').then(res => getProductsData(res.data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {categoryText === 'All' ? (
                productsData?.map(item => <ProductCard  {...item} />)

            ) : (
                    productsData?.filter((item) => item?.category?.toLowerCase() === categoryText.toLowerCase())?.map(item => <ProductCard  {...item} />)

            )}

        </div>
    )
}

export default Products