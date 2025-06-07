import React from "react";
import './style/about2.css';
import whatsapp from '../assets/whatsapp.png';
import star from '../assets/estrela.png';
import handshake from '../assets/handshake.png';
import lock from '../assets/cadeado.png';

export function About2() {
    return (
        <>
            <div className="bg-about2">

                <h1 className="titleAbout2 sr-fade-up">
                    O que nos diferencia:
                </h1>

                <div className="center sr-fade-up">
                    <div className="grid">
                        <div className="sr-sequence-item">
                            <div className="card" id="pgbottom">
                                <img src={whatsapp} alt="Ícone WhatsApp" />
                                <h3>Atendimento rápido</h3>
                                <p>✔ Direto pelo WhatsApp</p>
                            </div>
                        </div>
                        <div className="sr-sequence-item">
                            <div className="card" id="pgbtom">
                                <img src={star} alt="Ícone Qualidade" />
                                <h3>Qualidade</h3>
                                <p>✔ Uma qualidade incrível, comparável a peças novas</p>
                            </div>
                        </div>
                        <div className="sr-sequence-item">
                            <div className="card ">
                                <img src={lock} alt="Ícone Garantia" />
                                <h3>Garantia</h3>
                                <p>✔ 1 Ano para amortecedores<br />6 meses para qualquer outro produto</p>
                            </div>
                        </div>
                        <div className="sr-sequence-item">
                            <div className="card" id="pgbtom2">
                                <img src={handshake} alt="Ícone Profissionais" />
                                <h3>Profissionais experientes</h3>
                                <p>✔ Com uma ampla experiência no setor automotivo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}