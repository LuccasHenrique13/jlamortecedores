import React from "react";
import './style/differences.css';

export function Differences() {
    return (
        <div className="bg-differences">
            <h1 className="titleDifferences sr-fade-up">
                Recondicionado x Remanufaturado
            </h1>

            <div className="center sr-fade-up">
                <div className="grid">
                    <div className="card">
                        <h3 className="titleCard">Recondicionado</h3>
                        <p>
                            Peça usada que passa por limpeza e eventuais reparos superficiais.
                            Geralmente, apenas o óleo ou alguns componentes são trocados. Pode
                            apresentar desempenho e durabilidade inferiores.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="titleCard">Remanufaturado</h3>
                        <p>
                            Peça completamente desmontada, inspecionada e reconstruída com
                            substituição total de componentes desgastados. Após montada, é testada para
                            garantir funcionamento igual ao de uma peça nova.
                            Mais confiável, durável e com garantia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
