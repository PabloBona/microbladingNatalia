import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../store/components/Home/CardProduct'

import "./styles/home.css"

const Home = () => {
    const [productsFilter, setproductsFilter] = useState()
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(true)

    const [inputPrice, setInputPrice] = useState({
        from: 0,
        to: Infinity
    })
    const products = useSelector(state => state.products)
    useEffect(() => {
        if (products) {
            setproductsFilter(products)
        }
    }, [products])
    const handleChange = (e) => {
        const inputValue = e.target.value.toLowerCase().trim();
        const filter = products?.filter((prod) =>
            prod.title.toLowerCase().includes(inputValue)
        );
        setproductsFilter(filter)
        setInputValue(e.target.value)
    };
    const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to
    return (
        <div className='home '>

            <div className='products-container'>
                <CardProduct />


            </div>

        </div>
    )
}
export default Home