import { legacy_createStore as createStore } from "redux";
import ProductReducer from './reducer/reducer';



const store = createStore(ProductReducer)

export default store;