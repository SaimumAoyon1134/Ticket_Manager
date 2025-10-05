import Vector1 from './assets/vector1.png';
import Vector2 from './assets/vector2.png';

export default function Card({pro, resolved}) {
  return (
    
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
     
      <div
  style={{
    width: "45%",
    height: "200px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    
    position: "relative", 
    overflow: "hidden",
    background: "linear-gradient(135deg, rgba(106,17,203,0.8), rgba(160,68,255,0.8))",
  }}
>
  
  <img
    src={Vector1}
    alt=""
    style={{
      width:"50%",
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      height: "250px",
      opacity: 0.8,
    }}
  />

  <img
    src={Vector1}
    alt=""
    style={{
      width:"50%",
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translateY(-50%) rotate(180deg)",
      height: "200px",
      opacity: 0.8,
    }}
  />

 
  In Progress
  <p style={{ fontSize: "2rem" }}>{pro}</p>
</div>
 <div
  style={{
    width: "45%",
    height: "200px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    
    position: "relative", 
    overflow: "hidden",
    background: "linear-gradient(135deg, #54CF68, #00827A)",
  }}
>
  
  <img
    src={Vector1}
    alt=""
    style={{
      width:"50%",
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      height: "250px",
      opacity: 0.8,
    }}
  />

  <img
    src={Vector1}
    alt=""
    style={{
      width:"50%",
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translateY(-50%) rotate(180deg)",
      height: "250px",
      opacity: 0.8,
    }}
  />

 
   Resolved
  <p style={{ fontSize: "2rem" }}>{resolved}</p>
</div>


      
    </div>
  );
}