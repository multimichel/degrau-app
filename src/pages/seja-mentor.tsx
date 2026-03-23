import { Layout } from "./layout";

export default function SejaMentor() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Seja mentor</div>
              <h1>Compartilhe sua experiência e gere impacto</h1>
              <p>
                Receba mentorados alinhados ao seu perfil e construa uma renda
                recorrente. O Degr.au cuida da curadoria, pagamentos e suporte.
              </p>
              <div className="card" style={{ marginTop: "24px" }}>
                <h3>Benefícios para mentores</h3>
                <ul>
                  <li>Visibilidade para milhares de profissionais</li>
                  <li>Gestão de pagamentos e agenda simplificada</li>
                  <li>Comunidade exclusiva com outros mentores</li>
                  <li>Suporte para criar trilhas e produtos digitais</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Formulário de candidatura</h3>
              <form style={{ marginTop: "16px" }}>
                <div className="form-grid">
                  <label className="input">
                    Nome completo
                    <input placeholder="Seu nome" />
                  </label>
                  <label className="input">
                    Área
                    <select>
                      <option>Selecione</option>
                      <option>Design</option>
                      <option>Dev</option>
                      <option>Produto</option>
                    </select>
                  </label>
                </div>
                <label className="input" style={{ marginTop: "16px" }}>
                  Bio
                  <textarea placeholder="Conte sua trajetória e especialidades" />
                </label>
                <div className="form-grid" style={{ marginTop: "16px" }}>
                  <label className="input">
                    Preço por hora
                    <input placeholder="R$ 200" />
                  </label>
                  <label className="input">
                    Link de agendamento
                    <input placeholder="Calendly, TidyCal, etc." />
                  </label>
                </div>
                <label className="input" style={{ marginTop: "16px" }}>
                  E-mail do Stripe
                  <input placeholder="seuemail@stripe.com" />
                </label>
                <button
                  className="button primary"
                  style={{ marginTop: "20px", width: "100%" }}
                  type="button"
                >
                  Enviar candidatura
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
