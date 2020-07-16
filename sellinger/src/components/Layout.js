import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import '../index.css';


export default class Layout extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Container fluid className="mt-3 wrapper-layout">
                    {this.props.children}
                </Container>
                <Footer />
            </div>
        )
    }
}