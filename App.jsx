import React, { useState } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import TradeNavigator from "./src/navigation/TradeNavigator";
import SaleNavigator from "./src/navigation/SaleNavigator";
import { useSelector } from "react-redux";
import Splash from "./src/screens/Splash/SplashScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  const userData = useSelector((state) => state.isSignin);

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          {userData == null && <AuthNavigator />}
          {userData == "Sales@gmail.com" && <SaleNavigator />}
          {userData == "Trade@gmail.com" && <TradeNavigator />}
        </>
      )}
    </>
  );
};

export default App;
