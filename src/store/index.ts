import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import appReducer from "./app";
import authReducer from "./auth";
import informationReducer from "./information";
import transactionReducer from "./transaction";

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    information: informationReducer,
    transaction: transactionReducer,
  },
  devTools: import.meta.env.DEV ? true : false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
