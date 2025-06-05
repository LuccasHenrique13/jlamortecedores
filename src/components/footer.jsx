import React from "react";
import './style/footer.css';
import instagram from '../assets/instagram.png';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerLeft">
          <h3 className="footerTitle">JL AMORTECEDORES</h3>
          <p className="footerSlogan">Suspensão remanufaturada com garantia, qualidade</p>
        </div>
        <div className="footerRight">
          <p className="footerSocialTitle">Redes sociais</p>
          <div className="footerSocial">
            <img src={instagram} alt="Instagram" />
            <span>@jlamortecedores</span>
          </div>
        </div>
      </div>
      <hr className="footerDivider" />
      <p className="footerCopyright">
        © 2025 JL Amortecedores. Todos os direitos reservados.
      </p>
    </footer>
  );
}
