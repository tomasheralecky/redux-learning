import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { store, persistor } from './modules/store/store';
import Basket from './Basket';
import Confirmation from './Confirmation';
import DeliveryPayment from './DeliveryPayment';
import Header from './modules/components/Header/Header';
import Home from './Home';
import Invoicing from './Invoicing';
import Summary from './Summary';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/basket" component={Basket} />
                    <Route path="/delivery-payment" component={DeliveryPayment} />
                    <Route path="/invoicing" component={Invoicing} />
                    <Route path="/summary" component={Summary} />
                    <Route path="/confirmation" component={Confirmation} />
                </Switch>
            </PersistGate>
        </Provider>
    );
}

export default App;
