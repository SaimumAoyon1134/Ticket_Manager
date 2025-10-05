import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const linkStyle = { color: "#666", fontSize: "0.8rem", marginBottom: "4px" };

  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1rem",
        borderTop: "1px solid #ccc",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#666",
        backgroundColor: "black",
      }}
    >
     
      <div className="footer-grid">
        <div>
          <p>CS — Ticket System</p>
          <p style={linkStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div>
          <p>Company</p>
          <p style={linkStyle}>About Us</p>
          <p style={linkStyle}>Our Mission</p>
          <p style={linkStyle}>Contact Sales</p>
        </div>

        <div>
          <p>Services</p>
          <p style={linkStyle}>Products & Services</p>
          <p style={linkStyle}>Customer Stories</p>
          <p style={linkStyle}>Download Apps</p>
        </div>

        <div>
          <p>Information</p>
          <p style={linkStyle}>Privacy Policy</p>
          <p style={linkStyle}>Terms & Conditions</p>
          <p style={linkStyle}>Join Us</p>
        </div>

        <div>
          <p>Social Links</p>
          <p style={linkStyle}><XIcon sx={{ fontSize: '0.8rem', color: 'black', backgroundColor: 'white', borderRadius:"5px"}} />  @CS — Ticket System</p>
          <p style={linkStyle}><LinkedInIcon sx={{ fontSize: '0.8rem', color: 'black', backgroundColor: 'white', borderRadius:"5px"}} /> @CS — Ticket System</p>
          <p style={linkStyle}><FacebookIcon sx={{ fontSize: '0.8rem', color: 'black', backgroundColor: 'white', borderRadius:"5px"}} /> @CS — Ticket System</p>
          <p style={linkStyle}><EmailIcon sx={{ fontSize: '0.8rem', color: 'black', backgroundColor: 'white', borderRadius:"5px"}} /> support@cst.com</p>
        </div>
      </div>

      &copy; {new Date().getFullYear()} CS — Ticket System. All rights reserved.

     
      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          text-align: left;
          margin-bottom: 1rem;
          color: white;
        }

      
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

     
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

 
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}