import React from 'react';
import '../style.css';
import ImageFullScreen from './ImageFullScreen';
import FullScreenLightBox from './FullScreanLightBox';

const DetailImage = (data) => {

    //console.log(data.state.data);

    //console.log(data);

    return <div className="col-lg-8 container-up-left bg-white">

        {
            !data.state.data ? null :

            <FullScreenLightBox images={data.state.data} >

                <ImageFullScreen data={data.state} />

            </FullScreenLightBox>
        }


        <div className="pagination d-flex justify-content-between">
            <div className="text-start">Total images: {data.state.data.length}</div>

            <ul className="pagination d-flex justify-content-center">
                <li className="page-item mr-1 previos-pointer">
                    <a className="page-link " onClick={data.previos} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>

                <li className="page-item previos-pointer">
                    <a className="page-link" onClick={data.next} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>

            <div></div>

        </div>

    </div>
}

export default DetailImage;