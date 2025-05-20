"use client"

import React, { useEffect, useState } from 'react'


interface IuseFetch{
    url: string;
    dependency: Array<any>;
}

interface IuseFetchReturn {
    data: Array<any> | null;
    loading: boolean;
    error: boolean;
    
}
const useFetch = (url: string, dependency: Array<any>) :IuseFetchReturn  =>  {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() =>{
        setLoading(true);
        fetch(url)
        .then((res) => {
            if(res.ok){
                return res.json();
            }
            throw new Error('failed');
        }).then((data) => {
            setData(data);
        })
        .catch((e)=>{
            setError(true);
        }).finally(()=>{
            setLoading(false);
        })

    }, [...dependency]);

   return ({
    data, error, loading
   })
}

export default useFetch