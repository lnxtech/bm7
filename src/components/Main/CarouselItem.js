import React from "react";

import "../../assets/styles/Main.css";

class CarouselItem extends React.Component {
  render() {
    return (
      <>
        <section id="section-1" className="section__container">
          <div class="main__item">
            <article>
              <div className="main__allText-container">
                <article className="main__text-container">
                  <h1>{this.props.title}</h1>
                </article>
                <article className="main__text2-container">
                  <h2>{this.props.description}</h2>
                </article>
              </div>
              <div className="main__button-container">
                <button>Leer más</button>
              </div>
            </article>

            <figure className="img__container">
              <img
                className={this.props.imageClass}
                src={this.props.image}
                alt="image__main-1"
              />
            </figure>
          </div>
        </section>
      </>
    );
  }
}

export default CarouselItem;

// <section
//           id="section-1"
//           onLoadCapture={moveToSection1}
//           className="section__container"
//         >
//           <div class="main__item">
//             <div className="main__allText-container">
//               <article className="main__text-container">
//                 <h1>Ciencias del comportamiento e inteligencia artificial</h1>
//               </article>
//               <article className="main__text2-container">
//                 <h2>
//                   Deseamos ayudar a las organizaciones a prevenir los
//                   accidentes.
//                 </h2>
//               </article>
//             </div>
//             <div className="main__button-container">
//               <button>Leer más</button>
//             </div>
//             <figure className="img__container">
//               <img className="image-1" src={Img1} alt="image__main-1" />
//             </figure>
//           </div>
//         </section>
//         <section id="section-2" className="section__container">
//           <div class="main__item">
//             <div>
//               <article className="main__text-container2">
//                 <h1>Pedictor de Accidentabilidad</h1>
//               </article>
//               <article className="main__text2-container2">
//                 <h2>
//                   Identificamos los factores que inciden en la accidentabilidad
//                   de las personas con Inteligencia Artificial.
//                 </h2>
//               </article>
//             </div>

//             <figure className="img__container">
//               <img className="image-2" src={Img2} alt="image__main-2" />
//             </figure>
//             <div className="main__button-container">
//               <button>Leer más</button>
//             </div>
//           </div>
//         </section>
//         <section id="section-3" className="section__container">
//           <div class="main__item">
//             <div>
//               <article className="main__text-container3">
//                 <h1>03 factores que influyen la accidentabilidad</h1>
//               </article>
//               <article className="main__text2-container3">
//                 <h2>Aspectos Cognitivos, emocionales y de Contexto.</h2>
//               </article>
//             </div>
//             <figure className="img__container">
//               <img className="image-3" src={Img3} alt="image__main-1" />
//             </figure>
//             <div className="main__button-container">
//               <button>Leer más</button>
//             </div>
//           </div>
//         </section>
