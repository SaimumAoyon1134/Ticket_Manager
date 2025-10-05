import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function Resolved({ ticket, onClick }) {
  
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      margin: "10px 0", 
      padding: "5px", 
      backgroundColor: "#E0E7FF" ,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "left", 
        flexDirection:"column"
      }}>
          <p style={{
            color:"gray",
          }}>{ticket.title}</p>
        
        </div>
     
    </div>
  )
}