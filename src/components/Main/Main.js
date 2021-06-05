import React from "react";
import Selector from "../../assets/static/main-selector.png";

// images
import Img1 from "../../assets/static/main-img1.png";

// styles
import "../../assets/styles/Main.css";

const Main = () => {
  return (
    <div className="main">
      <ul className="selectors__container">
        <li className="main__text-container">
          <a className="main__selectors" href="">
            <img src={Selector} alt="selector" />
          </a>
        </li>
        <li className="main__text-container">
          <a className="main__selectors" href="">
            <img src={Selector} alt="selector" />
          </a>
        </li>
        <li className="main__text-container">
          <a className="main__selectors" href="">
            <img src={Selector} alt="selector" />
          </a>
        </li>
      </ul>
      <article className="main__text-container">
        <h1>Ciencias del comportamiento e inteligencia artificial</h1>
      </article>
      <article className="main__text2-container">
        <h2>Deseamos ayudar a las organizaciones a prevenir los accidentes.</h2>
      </article>
      <figure className="img__container">
        <img className="image-1" src={Img1} alt="image__main-1" />
      </figure>
      <div className="main__button-container">
        <button>Leer más</button>
      </div>
    </div>
  );
};

export default Main;
