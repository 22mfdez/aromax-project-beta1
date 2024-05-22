import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        <div className="flex justify-center items-center h-80">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-center">
            <h4 className="text-lg font-medium">Media title</h4>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac nisl quis massa vulputate adipiscing.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-80">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-center">
            <h4 className="text-lg font-medium">Media title</h4>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac nisl quis massa vulputate adipiscing.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-80">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-center">
            <h4 className="text-lg font-medium">Media title</h4>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac nisl quis massa vulputate adipiscing.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-80">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-center">
            <h4 className="text-lg font-medium">Media title</h4>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac nisl quis massa vulputate adipiscing.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-80">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-center">
            <h4 className="text-lg font-medium">Media title</h4>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac nisl quis massa vulputate adipiscing.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
