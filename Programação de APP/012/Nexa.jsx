
import "./EventoConvidado.css";

import React, { useState, useEffect } from 'react';


const EventoConvidado = () => {
  const [evento, setEvento] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulando busca de dados do banco
  useEffect(() => {
    // Aqui você faria a chamada real para sua API
    // fetch('http://localhost:3000/api/evento/1')
    //   .then(res => res.json())
    //   .then(data => setEvento(data))
    
    // Dados mockados para exemplo
    setTimeout(() => {
      setEvento({
        id: 1,
        titulo: "EVENTO PARA",
        subtitulo: "Conecta Sul",
        imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        dataInicio: "23 de Outubro",
        dataFim: "8-27 de Outubro",
        horarioInicio: "20h00",
        horarioFim: "19h00",
        local: "Avenida Juscelino Kubitschek, 2041, São Paulo - SP",
        endereco: "DUFFEL Itaim Six 20h00, Sábado de 19h00, Domingo às 19h00",
        descricao: "O Deep Tech Summit 2025 é o principal evento da América Latina dedicado à inovação baseada em ciência e engenharia da fronteira. Durante três dias, reunimos os principais promotores, fundos de investimento globais e grandes corporações para discutir o caminho mais viável do deep tech.\n\nCom trilhas de conteúdo curadas, experiências de matchmaking, reconhecimento das startups mais quentes da região e um ambiente pensado para conexões de alto valor, é a plataforma ideal para quem está na vanguarda da inovação tecnológica.",
        dataEvento: "Datas: 25 e 27 de outubro de 2025",
        motivoParticipacao: "Por que participar do Deep Tech Summit?\n• Foco Exclusivo em Deep Tech\n• Acesso a Investidores e Corporações de alto calibre\n• Ecossistema Global em Conexão\n• Startups, corporações, fundos de investimento e +2000 participantes conectados através de dezenas de painéis\n• Conteúdo Curado com Profundidade\n• Matchmaking de Verdade\n• Prêmio Deep Tech do Ano",
        classificacao: "Aberto para todas as idades",
        organizador: {
          nome: "Confederação Nacional do Comércio de Bens, Serviços e Turismo (CNC)",
          descricao: "A Confederação Nacional do Comércio de Bens, Serviços e Turismo é uma entidade sindical que representa os direitos e interesses das quase cinco milhões de empresas do setor.",
          logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80"
        }
      });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Carregando...</div>
      </div>
    );
  }

  if (!evento) return null;

  return (
    <div className="evento-container">
      <div className="evento-content">
        {/* Header com logo */}
        <div className="header">
          <h1 className="logo">ne<span className="logo-highlight">xa</span></h1>
          <div className="badge">
            50% Emily
          </div>
        </div>

        {/* Card Principal do Evento */}
        <div className="card-principal">
          <div className="card-flex">
            {/* Imagem do Evento */}
            <div className="card-imagem">
              <img 
                src={evento.imagem} 
                alt={evento.titulo}
                className="evento-img"
              />
              <div className="evento-badge">
                {evento.titulo}
              </div>
            </div>

            {/* Informações do Evento */}
            <div className="card-info">
              <h2 className="evento-titulo">{evento.subtitulo}</h2>
              
              <div className="info-list">
                <div className="info-item">
                  <Calendar className="icon" />
                  <div>
                    <p className="info-text-bold">{evento.dataInicio} à {evento.dataFim}</p>
                  </div>
                </div>

                <div className="info-item">
                  <Clock className="icon" />
                  <div>
                    <p className="info-text">{evento.endereco}</p>
                  </div>
                </div>

                <div className="info-item">
                  <MapPin className="icon" />
                  <div>
                    <p className="info-text">{evento.local}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowModal(true)}
                className="btn-confirmar"
              >
                Confirmar presença
              </button>
            </div>
          </div>
        </div>

        {/* Seção Descrição */}
        <div className="secao-card">
          <div className="secao-header">
            <div className="icon-box icon-box-pink">
              <span className="emoji">📝</span>
            </div>
            <h3 className="secao-titulo">Descrição</h3>
          </div>
          <div className="secao-conteudo">
            {evento.descricao}
          </div>
          <p className="data-evento">{evento.dataEvento}</p>
          <div className="secao-conteudo">
            {evento.motivoParticipacao}
          </div>
        </div>

        {/* Grid de Classificação e Local */}
        <div className="grid-secoes">
          {/* Classificação */}
          <div className="secao-card">
            <div className="secao-header">
              <div className="icon-box icon-box-purple">
                <Users className="icon-small" />
              </div>
              <h3 className="secao-titulo">Classificação</h3>
            </div>
            <p className="info-text">{evento.classificacao}</p>
          </div>

          {/* Local do Evento */}
          <div className="secao-card">
            <div className="secao-header">
              <div className="icon-box icon-box-blue">
                <MapPin className="icon-small" />
              </div>
              <h3 className="secao-titulo">Local do evento</h3>
            </div>
            <p className="info-text-bold">{evento.local.split(',')[0]}</p>
            <p className="info-text-small">{evento.local}</p>
          </div>
        </div>

        {/* Sobre o Organizador */}
        <div className="secao-card">
          <div className="secao-header">
            <div className="icon-box icon-box-green">
              <span className="emoji">🏢</span>
            </div>
            <h3 className="secao-titulo">Sobre o Organizador</h3>
          </div>
          <div className="organizador-content">
            <img 
              src={evento.organizador.logo} 
              alt={evento.organizador.nome}
              className="organizador-logo"
            />
            <div className="organizador-info">
              <h4 className="organizador-nome">{evento.organizador.nome}</h4>
              <p className="organizador-descricao">{evento.organizador.descricao}</p>
              <div className="organizador-botoes">
                <button className="btn-organizador btn-pink">
                  Falar com o organizador
                </button>
                <button className="btn-organizador btn-purple">
                  Mais eventos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Confirmação */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              onClick={() => setShowModal(false)}
              className="modal-close"
            >
              <X className="icon-close" />
            </button>
            
            <div className="modal-body">
              <div className="modal-icon">
                <span className="modal-emoji">✅</span>
              </div>
              <h3 className="modal-titulo">Presença Confirmada!</h3>
              <p className="modal-texto">Você confirmou presença no evento {evento.subtitulo}</p>
              
              <div className="modal-info">
                <p className="modal-info-item">📅 {evento.dataInicio}</p>
                <p className="modal-info-item">🕐 {evento.horarioInicio}</p>
                <p className="modal-info-item">📍 {evento.local}</p>
              </div>
              
              <button 
                onClick={() => setShowModal(false)}
                className="btn-confirmar"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};




export default EventoConvidado; 