import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './style.css';

//const images = [
//    '//placekitten.com/1500/500',
//    '//placekitten.com/4000/3000',
//    '//placekitten.com/800/1200',
//    '//placekitten.com/1500/1500',
//];

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        //console.log(this.props.images);

        const images = this.props.images.map((pic, index) => {
            return pic
        });

        //console.log(images[0].props.src);
        const { photoIndex, isOpen } = this.state;

        return (
            <div className="full-screen-image">
                <div type="" onClick={() => this.setState({ isOpen: true })}>
                    {this.props.children}
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}