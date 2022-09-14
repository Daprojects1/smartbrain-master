import React from "react";
import Logo from "../Logo/logo";
import Rank from "../Rank/Rank";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../FaceRecognition/FaceRecognition";

const Home = ({ App }) => {
  return (
    <>
      <Logo />
      <Rank count={App?.state?.count} />
      <ImageLinkForm
        onInputChange={App.onInputChange}
        value={App.state.input}
        onDetectBtn={App.onDetectBtn}
      />
      <FaceRecognition
        url={App.checkResponse()}
        box={App.state.box}
        isImageLoaded={App.state.isImageLoaded}
      />
    </>
  );
};

export default Home;
