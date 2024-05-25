import React, { useEffect, useState, useRef } from 'react';
import "./styles.css";

function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const lastOldElementRef = useRef(null);
    const defaultRef = useRef(null)

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
            );
            const result = await response.json();
            console.log(result.products)
            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }
        } catch (e) {
            console.log(e)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        
        if (products.length > 0 && lastOldElementRef.current) {
            lastOldElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [products]);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true);
    }, [products]);

    if (loading) {
        return <div>Loading data! Please wait.</div>;
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length
                    ? products.map((item, index) => (
                        <div className="product" key={item.id} ref={index === products.length - 20 ? lastOldElementRef : null}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null}
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>
                    Load More Products
                </button>
                {disableButton ? <p>You have reached 100 products</p> : null}
            </div>
        </div>
    );
}

export default LoadMoreData;
