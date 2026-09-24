import { channels, emergencies, routineTopics, rules } from "./content";

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Edifício Milena — início">
            <img src="/milena/logo-milena.png" alt="Edifício Milena" />
          </a>
          <div className="navLinks">
            <a href="#brcondos">BRCondos</a>
            <a href="#convivencia">Convivência</a>
            <a href="#emergencias">Emergências</a>
          </div>
        </nav>

        <section className="heroContent" id="inicio">
          <p className="eyebrow">GUIA DO MORADOR</p>
          <h1>Informação clara.<br />Canal certo.</h1>
          <p className="lead">
            Acesse os canais oficiais, consulte as regras básicas de convivência e saiba quem acionar em uma emergência.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#brcondos">Resolver pelo app <Arrow /></a>
            <a className="button secondary" href={channels.announcements}>Entrar no grupo de comunicados <Arrow /></a>
          </div>
        </section>
      </header>

      <section className="quick" aria-label="Canais rápidos">
        <article>
          <span className="number">01</span>
          <div><h2>Portaria</h2><p>Interfone {channels.portaria.intercom}<br />{channels.portaria.phone}</p></div>
          <a href={channels.portaria.whatsapp} aria-label="Conversar com a portaria pelo WhatsApp"><Arrow /></a>
        </article>
        <article>
          <span className="number">02</span>
          <div><h2>Comunicados</h2><p>Grupo oficial do condomínio</p></div>
          <a href={channels.announcements} aria-label="Entrar no grupo oficial de comunicados"><Arrow /></a>
        </article>
        <article className="urgent">
          <span className="number">03</span>
          <div><h2>Emergência</h2><p>Síndico: {channels.syndico.phone}</p></div>
          <a href={channels.syndico.whatsapp} aria-label="Comunicar emergência ao síndico"><Arrow /></a>
        </article>
      </section>

      <section className="section appSection" id="brcondos">
        <div className="sectionIntro">
          <p className="eyebrow">CANAL OFICIAL</p>
          <h2>Assuntos do dia a dia<br />começam no BRCondos.</h2>
          <p>Registre a solicitação, anexe as informações necessárias e acompanhe o atendimento pelo aplicativo.</p>
          <div className="storeLinks">
            <a className="button primary" href={channels.ios}>Baixar para iPhone <Arrow /></a>
            <a className="button primary" href={channels.android}>Baixar para Android <Arrow /></a>
          </div>
          <p className="support">
            Suporte BRCondos: <a href="tel:08006030023">0800 603 0023</a> • segunda a sexta, das 8h30 às 18h
          </p>
        </div>
        <ul className="topicList">
          {routineTopics.map((topic, index) => (
            <li key={topic}><span>{String(index + 1).padStart(2, "0")}</span>{topic}</li>
          ))}
        </ul>
      </section>

      <section className="section rulesSection" id="convivencia">
        <div className="sectionHeading">
          <div><p className="eyebrow">BOA CONVIVÊNCIA</p><h2>Regras básicas para todos</h2></div>
          <p>Estas orientações resumem os temas mais consultados. O regimento interno completo está disponível no BRCondos.</p>
        </div>
        <div className="rulesGrid">
          {rules.map((rule, index) => (
            <article key={rule.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section emergencySection" id="emergencias">
        <div className="sectionHeading light">
          <div><p className="eyebrow">CONTATOS 24 HORAS</p><h2>Em caso de emergência</h2></div>
          <p>Proteja as pessoas, informe o endereço completo e acione o serviço adequado. Depois, avise a portaria e o síndico.</p>
        </div>
        <div className="emergencyList">
          {emergencies.map(([service, number, use]) => (
            <article key={service}><h3>{service}</h3><a href={`tel:${number.replace(/\D/g, "")}`}>{number}</a><p>{use}</p></article>
          ))}
        </div>
        <a className="syndicCard" href={channels.syndico.whatsapp}>
          <div><span>SÍNDICO • SOMENTE EMERGÊNCIAS</span><strong>{channels.syndico.phone}</strong></div><Arrow />
        </a>
      </section>

      <footer>
        <img src="/milena/logo-milena.png" alt="" />
        <p>
          Condomínio Edifício Milena<br />
          Rua Luiz Leitner, 55 • Rua Padre Agostinho, 2715 • Bigorrilho • Curitiba/PR<br />
          <a href={`mailto:${channels.institutionalEmail}`}>{channels.institutionalEmail}</a>
        </p>
        <a href="#inicio">Voltar ao início ↑</a>
      </footer>
    </main>
  );
}
