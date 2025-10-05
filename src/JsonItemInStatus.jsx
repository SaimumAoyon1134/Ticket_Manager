import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function JsonItemInStatus({ ticket, onClick }) {
  
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      margin: "10px 0", 
      padding: "5px", 
      backgroundColor: "white" ,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexDirection:"column"
      }}>
          <p style={{
            color:"black",
          }}>{ticket.title}</p>
          <button type="button" style={{
            backgroundColor: "#02A53B",
            width: "100%",
            border: "none",
            color: "white",
            padding: "5px 10px",
            textAlign: "center",
            fontSize: "14px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop:"10px"
          }}onClick={onClick} >Complete</button>
        
        </div>
     
    </div>
  )
}