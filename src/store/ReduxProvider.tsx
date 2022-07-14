import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Loader} from 'src/common/Loader';
import store, {persistor} from './store';
// eslint-disable-next-line @typescript-eslint/ban-types
const ReduxProvider = (props: PropsWithChildren<{}>) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Loader />}>
                {props.children}
            </PersistGate>
        </Provider>
    );
};

export default ReduxProvider;
