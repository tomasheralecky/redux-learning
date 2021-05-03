import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { store, persistor } from './modules/store/store';
import Basket from './Basket';
import Home from './Home';
import Products from './Products';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div>
                    <a href="/">Home</a>
                    <br />
                    <a href="/products">Products</a>
                    <br />
                    <a href="/basket">Basket</a>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/basket" component={Basket} />
                </Switch>
            </PersistGate>
        </Provider>
    );
}

export default App;
