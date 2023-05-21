import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react"
import { getProducts } from "../../services/services";
import { useReducer } from "react";
import { DataReducer, initialState } from "../../reducers";
import { ActionType } from "../../reducers/constants";

const DataContext = createContext(); 

const DataProvider = ({children}) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const getAllProducts = async () => {
    try {
      const { status, data: {products}  } = await getProducts();
      if(status === 200 || status === 201) {
        dispatch({ type: ActionType.INITIALZE_PRODUCTS, payload: products});
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getAllProducts();
  } ,[])

  return (
    <DataContext.Provider
    value={{
      state,
      dispatch,
    }}
    >
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext);
export { useData, DataProvider };