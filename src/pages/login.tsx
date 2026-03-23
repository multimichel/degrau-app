import { Layout } from "./layout";

export default function Login() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Login</div>
          <h1>Entrar no Degrau</h1>
          <p>
            Escolha o seu perfil para continuar. Mentores e mentorados têm áreas
            de login dedicadas para gerenciar sessões, pagamentos e histórico.
          </p>
          <div className="login-grid" style={{ marginTop: "24px" }}>
            <div className="card">
              <h3>Sou mentorado</h3>
              <p>
                Acesse sua trilha, mensagens e recomendações de mentores
                alinhados aos seus objetivos.
              </p>
              <button className="button primary" type="button">
                Entrar como mentorado
              </button>
            </div>
            <div className="card">
              <h3>Sou mentor</h3>
              <p>
                Gerencie sua agenda, veja solicitações e acompanhe pagamentos.
              </p>
              <button className="button secondary" type="button">
                Entrar como mentor
              </button>
            </div>
          </div>
          <div className="card" style={{ marginTop: "32px" }}>
            <h3>Ainda não tem conta?</h3>
            <p>
              Crie seu perfil em poucos minutos e comece a construir o seu plano
              de carreira com mentoria em português.
            </p>
            <a className="button primary" href="/">
              Criar conta
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
