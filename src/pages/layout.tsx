import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="page">
      <style>
        {`
        @import url('https://fonts.cdnfonts.com/css/bossa');
        @import url('https://fonts.cdnfonts.com/css/satoshi');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --yellow: #f5e6a7;
          --offwhite: #f9f7f0;
          --navy: #0f2233;
          --green: #0b3b2e;
          --shadow: 0 18px 60px rgba(15, 34, 51, 0.12);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Satoshi', 'Inter', system-ui, sans-serif;
          background: var(--offwhite);
          color: var(--navy);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page {
          min-height: 100vh;
          background: var(--offwhite);
          display: flex;
          flex-direction: column;
        }

        .container {
          width: min(1120px, 90vw);
          margin: 0 auto;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(10px);
          background: rgba(249, 247, 240, 0.9);
          border-bottom: 1px solid rgba(15, 34, 51, 0.08);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
        }

        .brand {
          font-family: 'Bossa', 'Satoshi', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--yellow), #f0d47d);
          border: 1px solid rgba(15, 34, 51, 0.1);
          position: relative;
        }

        .brand-mark::after {
          content: "";
          position: absolute;
          bottom: 8px;
          left: 6px;
          width: 14px;
          height: 14px;
          background: var(--green);
          clip-path: polygon(0 0, 100% 100%, 0 100%);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 0.95rem;
        }

        .button {
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid var(--navy);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .button.primary {
          background: var(--navy);
          color: var(--offwhite);
          border-color: var(--navy);
          box-shadow: var(--shadow);
        }

        .button.secondary {
          background: transparent;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .hero {
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -120px;
          width: 320px;
          height: 320px;
          background: var(--yellow);
          opacity: 0.6;
          border-radius: 50%;
        }

        .hero::after {
          content: "";
          position: absolute;
          bottom: -80px;
          left: -60px;
          width: 200px;
          height: 200px;
          background: var(--green);
          clip-path: polygon(0 0, 100% 0, 70% 100%, 0 70%);
          opacity: 0.2;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px;
          align-items: center;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--green);
        }

        h1, h2, h3 {
          font-family: 'Bossa', 'Satoshi', sans-serif;
          margin: 0 0 12px;
        }

        h1 {
          font-size: clamp(2.5rem, 5vw, 3.6rem);
        }

        h2 {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
        }

        p {
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .card {
          background: white;
          border-radius: 24px;
          padding: 24px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(15, 34, 51, 0.08);
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 34, 51, 0.08);
          color: var(--navy);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .logo-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 16px;
          align-items: center;
        }

        .logo {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 14px 16px;
          border: 1px dashed rgba(15, 34, 51, 0.2);
          border-radius: 16px;
          text-align: center;
          color: rgba(15, 34, 51, 0.7);
          background: rgba(249, 247, 240, 0.8);
        }

        .section {
          padding: 60px 0;
        }

        .tag {
          padding: 6px 10px;
          background: rgba(15, 34, 51, 0.08);
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .mentor-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 18px;
          margin-bottom: 16px;
        }

        .footer {
          margin-top: auto;
          padding: 40px 0;
          border-top: 1px solid rgba(15, 34, 51, 0.08);
          background: rgba(15, 34, 51, 0.04);
        }

        .footer-grid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 0.9rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .input {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        input, textarea, select {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(15, 34, 51, 0.2);
          font-family: inherit;
          font-size: 0.95rem;
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        details {
          padding: 16px;
          border-radius: 16px;
          background: white;
          border: 1px solid rgba(15, 34, 51, 0.08);
        }

        details + details {
          margin-top: 12px;
        }

        summary {
          cursor: pointer;
          font-weight: 600;
        }

        .login-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        @media (max-width: 900px) {
          .nav-inner {
            flex-direction: column;
            gap: 16px;
          }

          .hero-grid,
          .grid-3,
          .grid-2,
          .form-grid,
          .login-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        `}
      </style>
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <span className="brand-mark" />
            Degr.au
          </a>
          <nav className="nav-links">
            <a href="/mentores">Mentores</a>
            <a href="/perfil">Perfil</a>
            <a href="/seja-mentor">Seja mentor</a>
            <a href="/sobre">Sobre</a>
            <a href="/faq">FAQ</a>
            <a href="/login" className="button secondary">Login</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>Degrau</strong> · Mentoria em português com alma brasileira.
          </div>
          <div>Contato · Parcerias · Termos</div>
        </div>
      </footer>
    </div>
  );
}

export const mentorProfiles = [
  {
    name: "Lívia Santos",
    title: "Product Designer na Nubank",
    price: "R$ 220/h",
    tags: ["Design", "Portfólio", "UX"],
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rafael Almeida",
    title: "Engenheiro de Software no iFood",
    price: "R$ 180/h",
    tags: ["Dev", "Carreira", "Backend"],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Camila Ribeiro",
    title: "Product Manager na Gupy",
    price: "R$ 200/h",
    tags: ["Produto", "Roadmap", "Go-to-market"],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Thiago Costa",
    title: "Tech Lead na Hotmart",
    price: "R$ 260/h",
    tags: ["Dev", "Liderança", "Arquitetura"],
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Larissa Monteiro",
    title: "UX Researcher na RD Station",
    price: "R$ 190/h",
    tags: ["Design", "Pesquisa", "Insights"],
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bruno Azevedo",
    title: "Gerente de Produto na Stone",
    price: "R$ 240/h",
    tags: ["Produto", "Métricas", "Growth"],
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  },
];
