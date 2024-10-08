import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AppWrapper from './App';
import './index.css';

const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <AppWrapper />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);