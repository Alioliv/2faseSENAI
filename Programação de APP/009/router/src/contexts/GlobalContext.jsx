import { createContext, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// aqui cria as infos salvas no contexto
    const[usuario, setUsuario] = useState("Lúcio Fernando")
    const [Produtos, setProdutos] = useState ("Mause")
     
    
    return(
        <GlobalContext.Provider value={{
                usuario, 
                Produtos,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}