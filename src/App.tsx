import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { AppContainer } from "./utils/styledComponents";
import formSlice from "./store/formSlice";
import Layout from "./components/Layout";

const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <AppContainer>
          <Layout />
        </AppContainer>
      </Provider>
    </>
  );
}

export default App;
