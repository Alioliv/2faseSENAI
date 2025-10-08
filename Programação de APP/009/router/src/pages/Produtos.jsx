import { useContext } from "react"
import Navbar from "./components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"

function Produtos() {
    const {produto , setProdutos, produtos} = useContext(GlobalContext)

    function trocarProduto() {
        
    
    }
    return(
        <div>
        <Navbar/>
        <h1> Produtos </h1>
        produto, Produtos
        </div>
    )
}