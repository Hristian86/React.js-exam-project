import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import '../index.css';
import ErrorBoundry from './ErrorPage/ErrorBoundry';
import CookieAccept from './Privacy/CookieAccept';

export default class Layout extends Component {


    render() {

        return (
            <div>
                <ErrorBoundry>
                    <Navbar />
                    <Container fluid className="mt-3 wrapper-layout pl-0 pr-0">
                        {this.props.children}
                    </Container>
                    <CookieAccept />
                    <Footer />
                </ErrorBoundry>
            </div>
        )
    }
}