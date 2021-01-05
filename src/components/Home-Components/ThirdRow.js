import React from 'react';
import './style.css';

const ThirdRow = () => {

    return <div className="row bg-white third-row-layout">
        <div className="col-lg-2 d-flex justify-content-center text-center ">
            <div>
                {/* <p>More sells</p>
                            <p>Evane more sells</p>
                            <p>Dont waste time and money</p>
                            <p>Just post you'r old items</p> */}
            </div>
        </div>

        <div className="col-lg-8">

            <div className="row third-row-style d-flex justify-content-center">
                

                <div className="col-lg-3 cube-col bg-warning text-white">
                    <h3>
                        More items
                    </h3>
                </div>

                <div className="col-lg-1">
                </div>

                <div className="col-lg-3 cube-col bg-warning text-white">
                    <h3>
                        More items
                    </h3>
                </div>

                <div className="col-lg-1">
                </div>

                <div className="col-lg-3 cube-col bg-warning text-white">
                    <h3>
                        More items
                    </h3>
                </div>
            </div>


        </div>

        <div className="col-lg-2 d-flex justify-content-end ">
            <div >

            </div>
        </div>
    </div>
}

export default ThirdRow;