import { useRef, useState } from "react";
import './style/contacts.css';
import whatsapp from '../assets/whatsapp.png';

export function Contacts() {
  const textareaRef = useRef(null);

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const numeroWhatsappDestino = "5511945491546";

  const handleTextareaInput = (event) => {
    const textarea = textareaRef.current;
    if (textarea) {
      setMensagem(event.target.value);
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  const formatarTelefone = (valorInput) => {
    let valor = valorInput.replace(/\D/g, '');

    if (valor.length > 0) {
      valor = '(' + valor;
    }

    if (valor.length > 3) {
      valor = valor.slice(0, 3) + ') ' + valor.slice(3);
    }

    if (valor.length > 9) {
      valor = valor.slice(0, 9) + '-' + valor.slice(9);
    }

    valor = valor.slice(0, 15);

    return valor;
  };

  const handleTelefoneChange = (e) => {
    const valorFormatado = formatarTelefone(e.target.value);
    setTelefone(valorFormatado);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome.trim() || !telefone.trim() || !mensagem.trim()) {
      alert("Por favor, preencha todos os campos para continuar.");
      return;
    }

    const textoWhatsapp = `Olá! Gostaria de fazer um orçamento.\n\nNome: ${nome}\nTelefone: ${telefone}\n\nMensagem: ${mensagem}`;

    const textoCodificado = encodeURIComponent(textoWhatsapp);

    const linkWhatsapp = `https://wa.me/${numeroWhatsappDestino}?text=${textoCodificado}`;

    window.open(linkWhatsapp, '_blank');
  };

  return (
    <>
      <div className="bg-contacts" id="Contacts">
        <div className="contactsContent sr-fade-up">
          <div className="twoColumns">
            <div className="textColumn">
              <h1 className="titleContacts">
                JL AMORTECEDORES
              </h1>
              <p className="textContacts">
                Está interessado em nosso serviço?
              </p>
            </div>
            <div className="Column">
              <h1 className="titleForm">Entre em contato:</h1>
              <div className="bgForms">
                <form className="form" onSubmit={handleSubmit}>
                  <p className="subtitleForm">Nome:</p>
                  <input
                    type="text"
                    className="inputForm"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome completo"
                  />
                  <p className="subtitleForm">Telefone:</p>
                  <input
                    type="tel"
                    className="inputForm"
                    value={telefone}
                    onChange={handleTelefoneChange}
                    placeholder="(99) 9999-9999" // Placeholder atualizado para o novo formato
                  />
                  <p className="subtitleForm">Mensagem:</p>
                  <textarea
                    className="textareaForm"
                    ref={textareaRef}
                    value={mensagem}
                    onInput={handleTextareaInput}
                    placeholder="Qual peça você procura ou qual sua dúvida?"
                  ></textarea>
                  <button type="submit" className="buttonForm">
                    Enviar Mensagem
                    <img src={whatsapp} alt="WhatsApp Icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}