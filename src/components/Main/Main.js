import React from "react";
import Selector from "../../assets/static/main-selector.png";
import CarouselItem from "./CarouselItem";
// images
import Img1 from "../../assets/static/main-img1.png";
import Img2 from "../../assets/static/main-img2.png";
import Img3 from "../../assets/static/main-img3.png";
import Arrow from "../../assets/static/main-arrow.png";

// styles
import "../../assets/styles/Main.css";

const Main = () => {
  const moveToSection1 = () => {
    const container = document.getElementById("main__container");
    const containerWidth = container.scrollWidth;
    let lastOne;
    let firstOne;
    // setInterval(() => {
    //   if (container.scrollLeft !== lastOne) {
    //     container.scrollTo(container.scrollLeft + containerWidth / 2.96, 0);
    //     lastOne = container.scrollLeft;
    //     console.log(lastOne);
    //   } else {
    //     container.scrollTo(container.scrollLeft - containerWidth, 0);
    //     firstOne = container.scrollLeft;
    //     console.log(firstOne);
    //   }
    // }, 4000);
  };

  return (
    <div className="main">
      <div className="selectors__container">
        <div className="main__selector-container">
          <figure className="main__selectors">
            <img src={Selector} alt="selector1" />
          </figure>
        </div>
        <div className="main__selector-container">
          <figure className="main__selectors">
            <img src={Selector} alt="selector2" />
          </figure>
        </div>
        <div className="main__selector-container">
          <figure className="main__selectors">
            <img src={Selector} alt="selector3" />
          </figure>
        </div>
      </div>
      <div
        id="main__container"
        onLoadCapture={moveToSection1}
        className="main__container"
      >
        <CarouselItem
          title="Ciencias del comportamiento e inteligencia artificial"
          description="Deseamos ayudar a las organizaciones a prevenir accidentes."
          image={Img1}
          imageClass="image-1"
        />
        <CarouselItem
          title="Predictor de Accidentabilidad"
          description="Identificamos los factores que inciden en la accidentabilidad de las personas con Inteligencia Artificial."
          image={Img2}
          imageClass="image-2"
        />
        <CarouselItem
          title="03 factores que influyen la accidentabilidad"
          description="Aspectos Cognitivos, emocionales y de Contexto."
          image={Img3}
          imageClass="image-3"
        />
      </div>
      <article className="main__last-container">
        <div className="main__last-button">
          <button>Conócenos</button>
        </div>
        <figure className="arrow__about">
          <img src={Arrow} alt="flecha" />
        </figure>
      </article>
    </div>
  );
};

export default Main;
