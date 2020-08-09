import React from 'react';

const ImageFullScreen = (data) => {

    return <div>
        <img src={data.data.data[data.data.current]} className="image-poster" />
    </div>

}

export default ImageFullScreen;