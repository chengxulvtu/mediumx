import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { syncStorage } from "redux-persist-webextension-storage";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const syncStorageConfig = {
    key: "syncStorage",
    storage: syncStorage
  };

  const persistedReducer = persistReducer(syncStorageConfig, rootReducer);

  let store = createStore(persistedReducer, preloadedState, middlewareEnhancer);

  let persistor = persistStore(store);

  return { store, persistor };
}
