import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../Store/store";
const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <main className="text-center p-2">
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
