import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "@/reducer/user";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'redux',
    storage,
    whitelist: ['user']

}
const reducer = combineReducers({
    user: userReducer
})
const currentPersistReducer = persistReducer(persistConfig,reducer)
// 创建store，用来创建store对象，需要一个配置对象作为参数
const store = configureStore({
    devTools: process.env.NODE_ENV === 'development',
    reducer: currentPersistReducer
})
export type AppDispatch = typeof store.dispatch
export const currentPersistStore = persistStore(store)
export default store;
