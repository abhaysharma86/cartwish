import React, { useEffect, useState } from 'react'
import ApiClient from '../utils/Api-Client';

const userData = (url, customConfig, deps) => {
    const [data, setData] = useState(null);
    const [error, seterror] = useState("");
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        ApiClient.get(url, customConfig)
        .then((res) => {
            if(url === "/products" && data && data.products && customConfig.params.page !== 1){
                setData(prev => ({...prev, products: [...prev.products, ...res.data.products]}))
            }else{
                setData(res.data);
            }
            
            setisLoading(false);
        })
        .catch((err) => {
            seterror(err.message)
            setisLoading(true);
        });
    }, deps ? deps : []);
    return {data, error, isLoading};

};

export default userData