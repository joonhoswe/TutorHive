import { React, useEffect, useState } from 'react';
import Layout from '@components/layout';
import { Auth0Provider } from '@auth0/auth0-react';
import '../globals.css';  

export default function MyApp({ Component, pageProps }) {
    const [redirectUri, setRedirectUri] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
        setRedirectUri(window.location.origin);
        }
    }, []);

    if (!redirectUri) {
        return <div>Loading...</div>;
      }

    return (
        <Auth0Provider
        domain="tutorhive.us.auth0.com"
        clientId="Rq4riJNwqc0mjXKOQxbodDfv1S1oi0hd"
        authorizationParams={{
            redirect_uri: redirectUri,
        }}
        cacheLocation="localstorage"
        useRefreshTokens={true}
        >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Auth0Provider>
    );
}
