import './style/products.css';
import amortecedor from '../assets/amortecedor.png';
import bandeja from '../assets/bandeja.png';
import pivo from '../assets/pivo.png';
import coximdemotor from '../assets/coximdemotor.png';
import coximdecambio from '../assets/coximdecambio.png';
import whatsappLinks from '../data/links.json';

export function Products() {
    const getLink = (produto) => {
        const item = whatsappLinks.find(link => link.produto === produto);
        return item ? item.link : "#";
    };

    return (
        <>
            <div className="bg-products" id="Products">
                <div className="productsContent sr-fade-up ">
                    <h1 className="productsTitle">Produtos</h1>
                </div>
                <div className="productsGrid sr-fade-up">
                    <div className="productsCard sr-sequence-item">
                        <div className="imageWrapper">
                            <img src={amortecedor} alt="Amortecedores" />
                            <h2 className="imageTitle">Amortecedores</h2>
                            <a className="buttonAboutProducts" href={getLink("Amortecedores")} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                    </div>
                    <div className="productsCard sr-sequence-item">
                        <div className="imageWrapper">
                            <img src={bandeja} alt="Bandejas" />
                            <h2 className="imageTitle">Bandejas</h2>
                            <a className="buttonAboutProducts" href={getLink("Bandejas")} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                    </div>
                    <div className="productsCard sr-sequence-item">
                        <div className="imageWrapper">
                            <img src={pivo} alt="Pivôs" />
                            <h2 className="imageTitle">Pivôs</h2>
                            <a className="buttonAboutProducts" href={getLink("Pivôs")} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                    </div>
                    <div className="productsCard sr-sequence-item">
                        <div className="imageWrapper">
                            <img src={coximdemotor} alt="Coxim de Motor" />
                            <h2 className="imageTitle">Coxim de Motor</h2>
                            <a className="buttonAboutProducts" href={getLink("Coxim de Motor")} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                    </div>
                    <div className="productsCard sr-sequence-item">
                        <div className="imageWrapper">
                            <img src={coximdecambio} alt="Coxim de Câmbio" />
                            <h2 className="imageTitle">Coxim de Câmbio</h2>
                            <a className="buttonAboutProducts" href={getLink("Coxim de Câmbio")} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}