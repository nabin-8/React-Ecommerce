import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/Card";

const DisplayProductAPI=()=>{

    const [products, setProducts]=useState([])
    const [offset,setOffset]=useState(0);
    const limit=9;
    useEffect(()=>{
        axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
        .then(res=>{
            // console.log(res.data)
            if(offset===0){
                setProducts(res.data)
            }else{
                setProducts((prevProducts)=>[...prevProducts, ...res.data])
            }
        })
        .catch(err => console.log(err))
    },[offset])

    const loadMore=()=>{
        setOffset(offset+limit)
    }


    return(
        <>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map((product) =>{
                        return <Card
                            key={product.id}
                            image={product.images[0]}
                            title={product.title}
                            price={product.price}
                            id={product.id}
                        />
                    })

                }
            </div>
            <div className="flex justify-center">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={loadMore}
            >Load More</button>
            </div>
            
        </>
    )
}

export default DisplayProductAPI