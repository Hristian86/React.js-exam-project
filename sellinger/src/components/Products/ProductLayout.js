import React, { Component } from 'react';
import Posts from './Posts';
import './style.css';
import Dropdown from 'react-bootstrap/esm/Dropdown';

const pageLength = 6;

export default class ProductLeyout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            pages: 1,
            maxPages: 1,
            previos: "page-item",
            next: "page-item",
            filterPrice: false,
            active: "page-item active"
        }
    }

    filterItemsByPrice = () => {
        let filter = this.state.filterPrice;
        filter = !filter;
        // console.log(filter);
        this.setState({ filterPrice: filter });
        // console.log(this.props.state[1].price);
        let arr = this.props.state.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        // console.log(arr);
    }


    filterItemsByPriceDes = () => {
        let filter = this.state.filterPrice;
        filter = !filter;
        // console.log(filter);
        this.setState({ filterPrice: filter });
        // console.log(this.props.state[1].price);
        let arr = this.props.state.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        // console.log(arr);
    }

    paginationHandlerMinus = () => {
        if (this.state.pages === 1) {
            this.setState({
                previos: "page-item disabled",
                next: "page-item"
            });
        } else {
            let pageses = this.state.pages;
            pageses -= 1;
            this.setState({
                pages: pageses,
                previos: "page-item",
                next: "page-item"
            });
        }
        // window.scrollTo(0, 0);        
    }

    paginationHandlerPlus = () => {
        let currentPage = this.state.pages;
        let maxLength = parseInt((this.props.state.length / pageLength));
        if (this.props.state.length % pageLength !== 0) {
            maxLength += 1;
        }

        if (this.state.pages === maxLength) {
            this.setState({
                pages: maxLength,
                previos: "page-item",
                next: "page-item disabled"
            });
        } else {
            let previosFixed = this.state.pages;
            previosFixed += 1;
            this.setState({
                pages: previosFixed,
                previos: "page-item",
                next: "page-item"
            });
        }
        // window.scrollTo(0, 0);
    }

    pageCount = (e) => {
        // console.log(e);
        this.setState({
            pages: e
        });
    }

    engine = () => {

        let arr = [];
        let display = [];
        let pagination = [];
        let element = [];

        let maxLength = parseInt((this.props.state.length / pageLength));
        if (this.props.state.length % pageLength !== 0) {
            maxLength += 1;
        }

        //for (var i = 0; i < this.props.state.length; i++) {
        //    if (this.props.state.subject != undefined) {
        //        arr.push(this.props.state[i])
        //    }
        //}

        arr = this.props.state;
        if (arr != undefined) {
            try {
                //console.log(arr);
                if (this.state.filterPrice) {
                    display = arr.map((post, index) => <Posts props={post} key={post.id} />)
                } else {
                    display = arr.map((post, index) => <Posts props={post} key={post.id} />)
                }

                for (let index = 0; index < display.length; index++) {
                    const element = display[index];

                    if (index < this.state.pages * pageLength && index >= (this.state.pages - 1) * pageLength) {
                        pagination.push(display[index]);
                    }
                }

                for (let index = 1; index <= maxLength; index++) {
                    element.push(pagination[index]);
                }

            } catch (e) {
                //console.log(e);
            }
        }

        return { pagination, element };
    }

    render() {

        const { pagination, element } = this.engine();

        return (
            <div className="wrapper-body">
                <div id="d-d-options" className="mb-3 drop-down-options">

                    {/* <button className="btn btn-success mr-3" onClick={this.filterItemsByPrice} > Filter by price ascending </button> */}
                    {/* <button className="btn btn-success" onClick={this.filterItemsByPriceDes} > Filter by price descending </button> */}

                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            Order by options...
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.filterItemsByPrice} >Price ascending</Dropdown.Item>
                            <Dropdown.Item onClick={this.filterItemsByPriceDes} >Price descending</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>

                </div >

                <div className="perant-container" >
                    {this.props.state ? <div className="row d-flex justify-content-start products-style"> {pagination.map(post => post)} </div> : <em>Loading...</em>}
                </div>

                <div>
                    <nav aria-label="Page navigation example" className="container-flud d-flex justify-content-center">
                        <ul className="pagination">
                            <li className={this.state.previos}><button className="page-link" type="submit" onClick={this.paginationHandlerMinus}>Previous</button></li>
                            {element.map((element, index) => <li className={this.state.active} key={index + 1} ><button className="page-link" onClick={() => { this.pageCount(index + 1) }}>{index + 1}</button></li>)}
                            <li className={this.state.next}><button className="page-link" onClick={() => { this.paginationHandlerPlus() }}>Next</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}