import { Layout } from "./layout";

export default function Sobre() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Manifesto</div>
              <h1>Por que o Degr.au existe</h1>
              <p>
                O Degr.au nasce para democratizar o acesso à mentoria em
                português, respeitando o repertório cultural brasileiro e a
                potência criativa da nossa gente.
              </p>
              <p>
                Inspirado na geometria do modernismo e na coragem de projetar
                futuros possíveis, acreditamos que inclusão começa com uma
                conversa. Mentoria é o degrau que aproxima talentos de grandes
                oportunidades.
              </p>
            </div>
            <div className="card">
              <h3>Nosso compromisso</h3>
              <ul>
                <li>Incluir vozes diversas no mercado de tecnologia.</li>
                <li>Valorizar experiências locais e globais.</li>
                <li>Manter a mentoria acessível e transparente.</li>
              </ul>
              <div style={{ marginTop: "16px" }}>
                <span className="pill">Mentoria em português</span>
                <span className="pill" style={{ marginLeft: "8px" }}>
                  Inclusão ativa
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
