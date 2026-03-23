import { Layout, mentorProfiles } from "./layout";

const filters = [
  { label: "Área", options: ["Design", "Dev", "Produto"] },
  { label: "Experiência", options: ["Júnior", "Sênior", "Liderança"] },
  { label: "Faixa de preço", options: ["Até R$150", "R$150-220", "R$220+"] },
];

export default function Mentores() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Mentores</div>
              <h1>Encontre quem vai guiar seu próximo degrau</h1>
              <p>
                Filtre por área, experiência e faixa de investimento. Conecte-se
                com mentores prontos para destravar sua evolução.
              </p>
            </div>
            <div className="card">
              <h3>Filtros rápidos</h3>
              <div className="form-grid" style={{ marginTop: "16px" }}>
                {filters.map((filter) => (
                  <label className="input" key={filter.label}>
                    {filter.label}
                    <select>
                      <option>Selecionar</option>
                      {filter.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: "32px" }}>
            {mentorProfiles.map((mentor) => (
              <article className="card mentor-card" key={mentor.name}>
                <img src={mentor.image} alt={mentor.name} />
                <h3>{mentor.name}</h3>
                <p>{mentor.title}</p>
                <div className="pill">{mentor.price}</div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginTop: "12px",
                  }}
                >
                  {mentor.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
