import React from 'react';
import App, { Container } from 'next/app';
import Page from '../components/Page'; // make this component
import Nav from '../components/Nav';
// import { ApolloProvider } from 'react-apollo'
// import withData from '../lib/withData';

class MyApp extends App {
    // static async getInitialProps({ Component, ctx }) { 
    //     let pageProps = {};

    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx);
    //     }

    //     return { pageProps }
    // }

    render() {
        // const { Component, pageProps } = this.props;

        return (
            <Container>
                <Page>
                    {/* <Component { ...pageProps } /> */}
                </Page>
                <Nav />
            </Container>   
        )
    }

}

export default MyApp;