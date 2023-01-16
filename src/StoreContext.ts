import React from "react";
import store, {storeType} from "./redux/redux-state";


const StoreContext = React.createContext(store as storeType)



export default StoreContext