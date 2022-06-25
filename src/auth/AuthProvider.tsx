import React, {PropsWithChildren} from 'react';
import {Auth0Provider} from '@auth0/auth0-react';
import {authConfig} from '../config/appConfig';
import {useNavigate} from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-types
const AuthProvider = (props: PropsWithChildren<{}>) => {
    const navigateTo = useNavigate();
    const onRedirectCallback = (appstate: any) => {
        navigateTo(appstate?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={authConfig.auth0Domain}
            clientId={authConfig.auth0ClientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {props.children}
        </Auth0Provider>
    );
};

export default AuthProvider;
