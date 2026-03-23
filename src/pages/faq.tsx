import { Layout } from "./layout";

export default function FAQ() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="eyebrow">FAQ</div>
          <h1>Perguntas frequentes</h1>
          <p>
            Tudo o que você precisa saber antes de subir o próximo degrau na sua
            carreira.
          </p>
          <div style={{ marginTop: "24px" }}>
            <details open>
              <summary>Como funciona a mentoria no Degr.au?</summary>
              <p>
                Você escolhe um mentor, agenda sessões e recebe um plano de
                ação. O acompanhamento pode ser avulso ou recorrente.
              </p>
            </details>
            <details>
              <summary>Quais são as taxas da plataforma?</summary>
              <p>
                A taxa é aplicada apenas sobre sessões realizadas. Mentores
                recebem o valor líquido em sua conta Stripe.
              </p>
            </details>
            <details>
              <summary>Quem pode ser mentorado?</summary>
              <p>
                Profissionais em transição, júnior ou em busca de liderança em
                tech, design e produto.
              </p>
            </details>
            <details>
              <summary>Como funcionam cancelamentos?</summary>
              <p>
                Sessões podem ser remarcadas com até 24h de antecedência. Após
                esse prazo, consulte a política do mentor.
              </p>
            </details>
            <details>
              <summary>Posso trazer meu próprio mentor?</summary>
              <p>
                Sim. Você pode indicar mentores e nós fazemos a curadoria para
                que eles entrem na plataforma.
              </p>
            </details>
          </div>
        </div>
      </section>
    </Layout>
  );
}
