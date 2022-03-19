import {createContext, useContext, useState} from "react";

// @ts-ignore
const DataContext = createContext();

export const DataProvider = ({children}:any) => {
    const [data, setData] = useState({})

    //временна функция, обновляющая данные
    const setValues = (values:any) => {
        setData(prevData => ({
            ...prevData,
            ...values
        }))
    }

    return (
        <DataContext.Provider value={{data, setValues}}>
            {children}
        </DataContext.Provider>
    )
};

export const useData = () => useContext(DataContext)