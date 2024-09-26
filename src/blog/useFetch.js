import {useState, useEffect} from 'react';

const useFetch = (url) => {

    // declare state variables
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const abortController = new AbortController();
    const signal = abortController.signal;

    useEffect(()=>{
        fetch(url, {signal})
        .then((resObj)=>{
            if(resObj.ok)
            {
                return resObj.json();
            }else{
                throw Error("Data is not fetched form the server");
            }
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch((err)=>{
            if (err.name === "AbortError") {
                console.log("Fetch is aborted");
            } else {
                setLoading(false);
                setError(err);
            }
            console.log("fetch is failed: catch block executed");
        });

        return ()=>{
            abortController.abort();
            console.log("abort signal executed");
        }
        
    }, [url])

    return {error, loading, data}
}
export default useFetch;