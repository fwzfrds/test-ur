import { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel-minimal';

const ImageCarousel = ({ images }) => {
    // const data = [
    //     {
    //         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    //         // caption: "San Francisco"
    //     },
    //     {
    //         image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    //         // caption: "Scotland"
    //     }
    // ]
    const [data, setData] = useState([])

    useEffect(() => {
        if (images) {
            let imagesData = []
            images.forEach(img => {
                imagesData.push({ image: img })
            })
            setData(imagesData)
        }
    }, [images])

    return (
        <>
            {data.length > 0 &&
                <Carousel
                    data={data}
                    time={5000}
                    width="100%"
                    height="400px"
                    // captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={false}
                    // slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                // style={{
                //     textAlign: "center",
                //     maxWidth: "850px",
                //     maxHeight: "500px",
                //     margin: "0px auto",
                // }}
                />
            }
        </>
    );
}

export default ImageCarousel;