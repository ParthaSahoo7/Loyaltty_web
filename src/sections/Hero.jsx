import React from "react";
import Slider from "react-slick";
import { Button } from "../shared/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: "Grow your business with Loyaltty app",
      description:
        "Loyaltty is a platform for small businesses to manage rewards program and promotions.",
    },
    {
      title: "Attract and acquire new customers from local areas",
      description:
        "Loyaltty is a platform for small businesses to manage rewards program and promotions.",
    },
    {
      title: "Join today with $0 costs",
      description:
        "and build your campaign now!",
    },
  ];

  return (
    <section className="flex flex-wrap items-center px-8 py-3 pt-24 w-full text-white bg-[#040869] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className="flex flex-col w-full max-md:max-w-full">
              <h1 className="text-5xl font-bold tracking-tighter max-md:max-w-full max-md:text-2xl">
                {slide.title}
              </h1>
              <p className="mt-6 text-lg tracking-tight leading-8 max-md:max-w-full">
                {slide.description}
              </p>
            </div>
          ))}
        </Slider>
        <style jsx>{`
            .slick-prev,
            .slick-next {
              display: none !important;
            }
              .slick-list {
          padding: 0 !important;
        }
          `}</style>
        <Button className="self-start mt-16 max-md:mt-10">
          Get Started
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2951cba51cc364b4035c1d48c7ba179dffe33e24f246968107af2341cc685fa?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0"
            alt=""
            className="object-contain w-2.5 aspect-square"
            aria-hidden="true"
          />
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d7bbecc6b45108a2edecc9ed883399bcff1ee88b0ba49e614f45fd55803fbae?placeholderIfAbsent=true&"
          alt="Loyalty program dashboard preview"
          className="object-contain self-stretch my-auto aspect-[1.5] min-w-[240px] w-[600px] max-md:max-w-full"
        />
        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://apps.apple.com/in/app/loyaltty-merchant/id6471106229?platform=iphone" target="_blank" rel="noopener noreferrer">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" alt="Download on the App Store" className="h-12 w-auto" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=ai.lightring.loyaltty&hl=en" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
