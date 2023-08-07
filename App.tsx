import React from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import TradeNavigator from './src/navigation/TradeNavigator';
import SaleNavigator from './src/navigation/SaleNavigator';
import { useSelector } from 'react-redux';



const App = () => {

const userData = useSelector(state => state.isSignin)
  return (
    <>
      {userData == null && <AuthNavigator/>}
      {userData == 'sales@gmail.com' && <SaleNavigator />}
      {userData == 'trade@gmail.com' && <TradeNavigator />}
      
    </>
  );
};

export default App;
