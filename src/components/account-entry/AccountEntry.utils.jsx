import React from 'react';
import Slider from "react-slick";


import CarouselStyles from './AccountEntry.module.css';
import './dotsStyling.css';
import Rating from '../../shared-components/rating/Rating';

import img1 from "../../assets/WorkspaceImg.png";
import img2 from '../../assets/meetingroom/989coworking.jpg';
import img3 from '../../assets/meetingroom/apartment2.jpg';


const AccountEntryCarousel = () => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: false,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
          <div className="ft-slick__dots--custom"></div>
        )
    };

    return(
        <div className={CarouselStyles.AlignDots}>
                <Slider {...settings}>
                    <div className={CarouselStyles.ImgWrapper}>
                        <img  className={CarouselStyles.SliderImage} src={img1} alt="booking"/>
                        <div className={CarouselStyles.ImgWrapperOverlay}></div>
                        <div className={CarouselStyles.Product}>
                            <div className={CarouselStyles.ProductLoc}>Lekki, Lagos</div>
                            <div className={CarouselStyles.ProductType}>workspace</div>
                        </div>
                        <div className={CarouselStyles.ProductOverview}>
                            <div className={CarouselStyles.ProductLink}>N 40,000 / per month </div>
                            <div className={CarouselStyles.ProductRating}> <span>4.5</span>  <span ><Rating starCount="4" /></span></div>
                        </div>
                    </div>
                    <div className={CarouselStyles.ImgWrapper}>
                        <img src={img2} alt="booking"/>
                        <div className={CarouselStyles.ImgWrapperOverlay}></div>
                        <div className={CarouselStyles.Product}>
                            <div className={CarouselStyles.ProductLoc}>Victoria Island, Lagos</div>
                            <div className={CarouselStyles.ProductType}>Coworking space</div>
                        </div>
                        <div className={CarouselStyles.ProductOverview}>
                            <div className={CarouselStyles.ProductLink}>N 35,000 / per month </div>
                            <div className={CarouselStyles.ProductRating}> <span>4.5</span>  <span ><Rating starCount="4" /></span></div>
                        </div>
                    </div>
                    <div className={CarouselStyles.ImgWrapper}>
                        <img src={img3} alt="booking"/>
                        <div className={CarouselStyles.ImgWrapperOverlay}></div>
                        <div className={CarouselStyles.Product}>
                            <div className={CarouselStyles.ProductLoc}>Lekki, Lagos</div>
                            <div className={CarouselStyles.ProductType}>Apartment</div>
                        </div>
                        <div className={CarouselStyles.ProductOverview}>
                            <div className={CarouselStyles.ProductLink}>N 30,000 / per month </div>
                            <div className={CarouselStyles.ProductRating}> <span>5.0</span>  <span ><Rating starCount="5" /></span></div>
                        </div>
                    </div>
                </Slider>
            
        </div>
    )
};

export default AccountEntryCarousel;
// let slideIndex = 1;

// // Thumbnail image controls
// const currentSlide =(n)=> {
//   showSlides(slideIndex = n);
// }

// const showSlides = (n) => {
//   let i;
//   let slides = React.findDOMNode(this.refs.myslides);
//   let dots = document.getElementsByClassName("dot");
//   console.log(slides);
// //   if (n > slides.length) {slideIndex = 1}
// //   if (n < 1) {slideIndex = slides.length}
// //   for (i = 0; i < slides.length; i++) {
// //       slides[i].style.display = "none";
// //   }
// //   for (i = 0; i < dots.length; i++) {
// //       dots[i].className = dots[i].className.replace(" active", "");
// //   }
// //   slides[slideIndex-1].style.display = "block";
// //   dots[slideIndex-1].className += " active";
// }

// showSlides(slideIndex);

// const SlideWrapper = () => {
//     return (
//         <div className="slideWrapper">
//            <div className="mySlides fade" ref="myslides">
//                 <div className="numbertext">1 / 3</div>
//                 <img src={img1} alt="first slide" style={{width: "100%", height: "100%"}}/>
//                 <div className="text">Caption One</div>
//            </div>

//            <div className="mySlides fade" ref="myslides">
//                 <div className="numbertext">2 / 3</div>
//                 <img src={img2} alt="first slide" style={{width: "100%"}}/>
//                 <div className="text">Caption Two</div>
//            </div>

//            <div className="mySlides fade" ref="myslides">
//                 <div className="numbertext">3 / 3</div>
//                 <img src={img3} alt="first slide" style={{width: "100%"}}/>
//                 <div className="text">Caption Three</div>
//            </div>

//            {/* <!-- The dots/circles --> */}
//             <div style={{textAlign:"center"}}>
//                <span className="dot" onClick={currentSlide(1)}></span>
//                <span className="dot" onClick={currentSlide(2)}></span>
//                <span className="dot" onClick={currentSlide(3)}></span>
//             </div>
//         </div>
//     )
// }

// export default SlideWrapper;