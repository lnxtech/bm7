import React from "react";
import Selector from "../../assets/static/main-selector.png";

// images
import Img1 from "../../assets/static/main-img1.png";
import Img2 from "../../assets/static/main-img2.png";
import Img3 from "../../assets/static/main-img3.png";
import Arrow from "../../assets/static/main-arrow.png";

// styles
import "../../assets/styles/Main.css";

const Main = () => {
  const moveToSection1 = () => {
    handleChange(0);
  };

  const moveToSection2 = () => {
    handleChange(350);
  };

  const moveToSection3 = () => {
    handleChange(800);
  };

  const handleChange = (number) => {
    document.getElementById("main__container").scrollTo(number, 0);
  };

  return (
    <div className="main">
      <div className="selectors__container">
        <div className="main__selector-container">
          <figure onClick={moveToSection1} className="main__selectors">
            <img src={Selector} alt="selector1" />
          </figure>
        </div>
        <div className="main__selector-container">
          <figure onClick={moveToSection2} className="main__selectors">
            <img src={Selector} alt="selector2" />
          </figure>
        </div>
        <div className="main__selector-container">
          <figure onClick={moveToSection3} className="main__selectors">
            <img src={Selector} alt="selector3" />
          </figure>
        </div>
      </div>
      <div
        onChange={handleChange}
        id="main__container"
        className="main__container"
      >
        <section id="section-1" className="section__container">
          <div class="main__item">
            <div className="main__allText-container">
              <article className="main__text-container">
                <h1>Ciencias del comportamiento e inteligencia artificial</h1>
              </article>
              <article className="main__text2-container">
                <h2>
                  Deseamos ayudar a las organizaciones a prevenir los
                  accidentes.
                </h2>
              </article>
            </div>
            <figure className="img__container">
              <img className="image-1" src={Img1} alt="image__main-1" />
            </figure>
            <div className="main__button-container">
              <button>Leer más</button>
            </div>
          </div>
        </section>
        <section id="section-2" className="section__container">
          <div class="main__item">
            <div>
              <article className="main__text-container2">
                <h1>Pedictor de Accidentabilidad</h1>
              </article>
              <article className="main__text2-container2">
                <h2>
                  Identificamos los factores que inciden en la accidentabilidad
                  de las personas con Inteligencia Artificial.
                </h2>
              </article>
            </div>

            <figure className="img__container">
              <img className="image-2" src={Img2} alt="image__main-2" />
            </figure>
            <div className="main__button-container">
              <button>Leer más</button>
            </div>
          </div>
        </section>
        <section id="section-3" className="section__container">
          <div class="main__item">
            <div>
              <article className="main__text-container3">
                <h1>03 factores que influyen la accidentabilidad</h1>
              </article>
              <article className="main__text2-container3">
                <h2>Aspectos Cognitivos, emocionales y de Contexto.</h2>
              </article>
            </div>
            <figure className="img__container">
              <img className="image-3" src={Img3} alt="image__main-1" />
            </figure>
            <div className="main__button-container">
              <button>Leer más</button>
            </div>
          </div>
        </section>
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
