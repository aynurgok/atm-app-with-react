import { createContext, useState } from "react";

export const Context = createContext()

const Provider = ({children}) => {
    const [balance, setBalance] = useState(100) 
    const [showPopup, setShowPopup] = useState(false);
    const [newData, setNewData] = useState({});
    
    const data = {
        balance,
        setBalance,
        showPopup,
        setShowPopup,
        newData,
        setNewData
    }
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>

    );

}
export default Provider
