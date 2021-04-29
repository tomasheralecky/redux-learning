import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store/store';
import Products from './Products/Products';
import Basket from './Basket/Basket';
import { Route, Switch } from 'react-router-dom';
import ReduxLearning from './ReduxLearning';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div>
                    <a href="/">Home</a><br />
                    <a href="/products">Products</a><br />
                    <a href="/basket">Basket</a>
                </div>
                <Switch>
                    <Route path="/" exact component={ReduxLearning} />
                    <Route path="/products" component={Products} />
                    <Route path="/basket" component={Basket} />
                </Switch>
            </PersistGate>
        </Provider>
    );
}

export default App;
