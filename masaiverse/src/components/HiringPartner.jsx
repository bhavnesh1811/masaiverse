import React, { Component } from "react";
import styles from "./HiriginPartner.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const images=[
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_2746958f65.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_23a9923a34.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/byjus_e7b97a9c80.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/ajio_a16cd7a85b.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatagri_d4794042fe.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_15b5ee2b82.svg"
]
export default class AutoPlay extends Component {
  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
       <div className={styles.heading}>
       <h2>Meet Our <span>4000+</span> Hiring Partners</h2>
       </div>
        <div>
        <Slider {...settings}>
         {images.map((el)=>{
            return(
               <div className={styles.container}>
                <img src={el} alt="" />
               </div>
            )
         })}
        </Slider>
        </div>
      </div>
    );
  }
}