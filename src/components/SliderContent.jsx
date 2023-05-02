import React from "react";

const SliderContent = () => {
  return (
    <div className="slider__content">
      <video autoPlay muted loop id="myVideo">
        <source
          src="https://www.tissotwatches.com/media/Videos/homepage-video-cdt-desktop.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default SliderContent;
