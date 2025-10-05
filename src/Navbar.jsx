export default function Nav() {
  return (
    <nav
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "left" }}>
        CS — Ticket System
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">FAQ</a>
        <a href="#">Changelog</a>
        <a href="#">Blog</a>
        <a href="#">Download</a>
        <a href="#">Contact</a>
        <button>+ New Ticket</button>
      </div>

      <style >{`
        .nav-links {
          display: grid;
          grid-template-columns: repeat(7, auto);
          gap: 1rem;
          align-items: center;
        }

        .nav-links a, .nav-links button {
          text-decoration: none;
          color: black;
        }

        .nav-links button {
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: linear-gradient(to bottom right, #632EE3, #9F62F2);
          border: none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
        }

        @media (max-width: 1200px) {
          .nav-links {
            grid-template-columns: repeat(7, auto);
          }
        }

        @media (max-width: 992px) {
          .nav-links {
            grid-template-columns: repeat(7, auto);
          }
        }

   

        @media (max-width: 610px) {
          .nav-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </nav>
  );
}