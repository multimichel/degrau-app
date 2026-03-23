import { Layout, mentorProfiles } from "./layout";

const mentor = mentorProfiles[0];

export default function Perfil() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <img
                src={mentor.image}
                alt={mentor.name}
                style={{ width: "100%", borderRadius: "18px", marginBottom: "16px" }}
              />
              <h2>{mentor.name}</h2>
              <p>{mentor.title}</p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {mentor.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "16px" }}>
                <div className="pill">{mentor.price}</div>
              </div>
              <a
                className="button primary"
                href="https://calendly.com"
                style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}
              >
                Agendar Sessão
              </a>
              <p style={{ marginTop: "12px", fontSize: "0.9rem" }}>
                Link de agendamento externo (Calendly ou similar).
              </p>
            </div>

            <div>
              <div className="eyebrow">Perfil do mentor</div>
              <h1>Mentoria prática para designers em crescimento</h1>
              <p>
                Lívia é especialista em design de produto com mais de 9 anos de
                experiência em fintechs. Conduz mentorias focadas em portfólio,
                transição de carreira e liderança de squads.
              </p>
              <div className="card" style={{ marginTop: "24px" }}>
                <h3>Especialidades</h3>
                <ul>
                  <li>Estratégia de portfólio e storytelling</li>
                  <li>Preparação para entrevistas de produto</li>
                  <li>Mentoria de UX em times ágeis</li>
                </ul>
              </div>
              <div className="card" style={{ marginTop: "24px" }}>
                <h3>Disponibilidade</h3>
                <p>
                  Sessões semanais ou quinzenais, com acompanhamento por e-mail e
                  planos de ação personalizados.
                </p>
                <div style={{ marginTop: "12px" }}>
                  <span className="pill">Idioma: Português</span>
                  <span className="pill" style={{ marginLeft: "8px" }}>
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
