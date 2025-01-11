import React, { useState } from "react";
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CampaignCard.css";

const CampaignCarousel = () => {
  const campaigns = [
    {
      image:
        "https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s=",
      text: "Summer fashion just got a whole lot hotter with our $500 off hot deal!",
    },
    {
      image:
        "https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Now that's a new arrival & $350 off on it.",
    },
    {
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Get fresh groceries with Purchase Worth $300!",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2013/11/02/03/23/festival-204331_640.jpg",
      text: "Arrived: Christmas treats at $300 off!",
    },
    {
      image:
        "https://img.freepik.com/free-photo/view-spiral-notebook-with-pen-dinner-plate-christmas-tree-fir-branches-conifer-cone-gift-box-santa-claus-hat-fallen-glass-goblets-black-background_140725-59912.jpg?ga=GA1.1.1299278498.1731507918&semt=ais_hybrid",
      text: "30% off at Food Kart to celebrate this New Year's Eve!",
    },
  ];

  const [centerSlide, setCenterSlide] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    padding: 2,
    adaptiveHeight: true,
    centerMode: true, // Enable center mode
    beforeChange: (current, next) => {
      // Calculate center slide index
      const centerIndex =
        ((next + Math.floor(settings.slidesToShow / 2)) % campaigns.length) - 1;
      setCenterSlide(centerIndex);
    },
  };

  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Thousands of Stunning Templates
      </h2>
      <p className="text-lg mb-8">
        Select a Template, Edit Details, and Engage Your Customers!
      </p>
      <Slider {...settings}>
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className={`relative ${
              index === centerSlide ? "scale-110 z-10" : "scale-100"
            } transition-transform duration-300`}
          >
            <div
              className={`w-full bg-cover bg-center rounded-lg shadow-md ${
                index === centerSlide ? "border-4 border-white-600" : ""
              }`}
              style={{
                backgroundImage: `url(${campaign.image})`,
                height: "320px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: 0,
                padding: 0,
              }}
            ></div>
            <div
              className={`bg-black bg-opacity-50 text-white text-sm p-4 absolute bottom-0 w-full rounded-b-lg ${
                index === centerSlide ? "text-lg font-bold" : ""
              }`}
            >
              {campaign.text}
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className="iphone-frame mx-auto  my-10">
        {" "}
        <Slider {...settings}>
          {" "}
          {campaigns.map((img, index) => (
            <div key={index} className="w-full h-full">
              <div
                style={{
                  backgroundImage: `url(${img.image})`,
                }}
                alt={`Slide ${index}`}
                className="w-full h-full bg-cover bg-center"
              ></div>
            </div>
          ))}{" "}
        </Slider>{" "}
      </div> */}

      <div className="mt-8 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Explore Campaign Templates
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          WhatsApp
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          SMS
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          Email
        </button>
      </div>
    </div>
  );
};

export default CampaignCarousel;
