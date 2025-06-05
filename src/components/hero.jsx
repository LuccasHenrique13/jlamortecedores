import './style/hero.css';

export function Hero() {
    return (
        <div className="bg-hero" id="Home">
            <div className="heroContent">
                <h1 className="titleHero">
                    Facilidade,<br />com qualidade
                </h1>
                <p className="textHero">
                    Trabalhamos com amortecedores, bandejas,<br />
                    pivôs, coxim de motor e coxim de câmbio
                </p>
                <div className="buttonContact">
                <button
  className="textButton"
  onClick={() => window.open('https://wa.me/5511945491546?text=Ol%C3%A1!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20dispon%C3%ADveis%2C%20garantia%20e%20valores%3F', '_blank', 'noopener,noreferrer')}
>
  Entre em contato
</button>
                </div>
            </div>
        </div>
    );
}
