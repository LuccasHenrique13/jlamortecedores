import './style/about.css';
import aboutImage from '../assets/aboutImage.jpg';

export function About() {
  return (
    <>
      <div className="bg-about" id="About">
        <div className="aboutContent sr-fade-up">
          <div className="twoColumns">
            <div className="textColumn">
              <h1 className="titleAbout">
                Quem somos?
              </h1>
              <p className="textAbout">
                A JL Amortecedores é especializada em peças de suspensão remanufaturadas com
                garantia e qualidade. Nosso foco está em oferecer durabilidade, economia e segurança,
                com atendimento direto e humanizado via WhatsApp.
              </p>
            </div>
            <div className="imageColumn">
              <img src={aboutImage} alt="Descrição da imagem" className="aboutImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}