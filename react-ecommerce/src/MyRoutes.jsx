import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout"
import DisplayProductAPI from "./components/product/DisplayProductsAPI"
import ProductDetails from "./components/product/ProductDetails"


const MyRouters=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/" element={<DisplayProductAPI/>}/>
                    <Route path="/product-details/:productId" element={<ProductDetails/>}/>

                </Route>
            </Routes>
        </Router>
    )
}

export default MyRouters