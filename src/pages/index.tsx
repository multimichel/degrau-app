import { Layout } from "./layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Mentoria brasileira em tecnologia</div>
            <h1>Toda escada começa com um degrau</h1>
            <p>
              O Degr.au conecta profissionais de tech, design e produto em
              jornadas de crescimento guiadas por mentores experientes. Mentoria
              em português, humana e feita para o ritmo do mercado brasileiro.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a className="button primary" href="/login">
                Quero ser mentorado
              </a>
              <a className="button secondary" href="/seja-mentor">
                Quero ser mentor
              </a>
            </div>
            <div style={{ marginTop: "24px" }}>
              <span className="pill">Mentoria em português</span>
              <span className="pill" style={{ marginLeft: "8px" }}>
                Sessões remotas e flexíveis
              </span>
            </div>
          </div>
          <div className="card">
            <h3>Degrau em números</h3>
            <div className="grid-2" style={{ marginTop: "16px" }}>
              <div>
                <div className="eyebrow">+120</div>
                <p>mentores ativos em grandes empresas</p>
              </div>
              <div>
                <div className="eyebrow">+1.500</div>
                <p>sessões realizadas com foco em carreira</p>
              </div>
              <div>
                <div className="eyebrow">94%</div>
                <p>taxa de satisfação entre mentorados</p>
              </div>
              <div>
                <div className="eyebrow">R$ 150</div>
                <p>valor médio por sessão</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Mentoria em português, com profissionais de grandes empresas</h2>
          <p>
            Cresça com clareza e acompanhamento de pessoas que conhecem o mercado
            local, trajetórias internacionais e o desafio de evoluir na carreira
            sem perder a essência brasileira.
          </p>
          <div className="grid-3" style={{ marginTop: "24px" }}>
            <div className="card">
              <h3>Comunidade acessível</h3>
              <p>
                Sessões em português, com atenção às realidades de quem trabalha
                no Brasil e no exterior.
              </p>
            </div>
            <div className="card">
              <h3>Mentores selecionados</h3>
              <p>
                Profissionais de grandes empresas guiando transições de carreira,
                liderança e especialização técnica.
              </p>
            </div>
            <div className="card">
              <h3>Planos flexíveis</h3>
              <p>
                Escolha mentorias avulsas ou pacotes mensais com acompanhamento
                de metas e portfólio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <h2>Quem já acelera carreiras com a gente</h2>
          <p>
            Mentores e mentorados que já passaram por empresas referência no
            ecossistema latino-americano.
          </p>
          <div className="logo-row" style={{ marginTop: "24px" }}>
            <div className="logo">Nubank</div>
            <div className="logo">iFood</div>
            <div className="logo">Stone</div>
            <div className="logo">Loft</div>
            <div className="logo">Gupy</div>
            <div className="logo">Hotmart</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
