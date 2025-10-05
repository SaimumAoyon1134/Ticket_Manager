import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function JsonItem({ ticket, onClick }) {
   const statusColors = {
    Open: "#B9F8CF",          
    "In Progress": "#F8F3B9", }
   const circleColors = {
    Open: "#02A53B",          
    "In Progress": "#FEBB0C",
   }
   const textColors = {
    Open: "#0B5E06",          
    "In Progress": "#9C7700",
   }
   const priorityColors = {
    Low: "#4b6987ff",
    Medium: "#FEBB0C",
    High: "#F83044",
    Critical: "#d58b92ff"
   }

  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      margin: "10px 0", 
      padding: "5px", 
      backgroundColor: "white" ,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    }}onClick={onClick} >
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
      }}>
          <p style={{
            color:"black",
          }}>{ticket.title}</p>
          <div style={{
            padding:"3px",
            borderRadius: "10px",
            backgroundColor: statusColors[ticket.status] || "#6c757d", 
            display:"flex",
            alignItems:"center",
            color: textColors[ticket.status] || "black",
            
          }}>
            <div style={{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:circleColors[ticket.status],marginRight:"5px"}}></div>
            {ticket.status}</div>
      </div>
      <p style={{ color:"#6c757d", fontSize:"14px", padding:"0px",margin:"0px"}}>{ticket.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize:"14px" ,width:"30%"}}>
          <span style={{ color:"#6c757d"}}>#{ticket.id} </span>
          <span style={{color:priorityColors[ticket.priority]}}>{ticket.priority}</span>
        </div>
         <div style={{ display: "flex", justifyContent: "space-between", fontSize:"14px" ,width:"65%"}}>
          <span style={{ display:"flex",alignItems:"center",color:"#6c757d"}}>{ticket.customer} </span>
          <span style={{display:"flex",alignItems:"center",color:"#6c757d"}}><CalendarMonthIcon></CalendarMonthIcon>{ticket.createdAt}</span>
        </div>
      </div>
     
    </div>
  )
}