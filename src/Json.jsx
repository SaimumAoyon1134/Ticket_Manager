import tickets from '../tickets.json'
import JsonItem from './JsonItem'
import { useState } from 'react';
import JsonItemInStatus from './JsonItemInStatus';
import Resolved from './Resolved'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';
;

export default function Json() {
  const [ticketsList, setTicketsList] = useState(tickets)  
  const [taskStatusList, setTaskStatusList] = useState([])
  const [pro,setPro] = useState(0);
  const [resolved,setResolved] = useState(0);

  const handleTicketClick = (ticket) => {
    
    taskStatusList.find(t => t.id === ticket.id) && toast.error(`This ticket is already in Task Status!`)
    if(taskStatusList.find(t => t.id === ticket.id)) return;

    let newPro = pro +1;
    setPro(newPro);

    setTaskStatusList(prev => [...prev, ticket])
    toast.success(`In Progress!`)
  }
   
  const [taskStatusListResolved, setTaskStatusListResolved] = useState([])

  const handleTicketStatus = (ticket) => {
    setTicketsList(prev => prev.filter(t => t.id !== ticket.id))
    let newResolved = resolved +1;
    setResolved(newResolved);

     let newPro = pro -1;
    setPro(newPro);

    setTaskStatusList(prev => prev.filter(t => t.id !== ticket.id))

    setTaskStatusListResolved(prev => [...prev, ticket])
    toast.success(`Completed!`)
    
  }
 
  return (
    <>
        <Card pro={pro} resolved={resolved}></Card>
        <ToastContainer position="top-right" autoClose={1000} />
         <div className="json-container">
      <div className="tickets-column">
        Customer Tickets
        <div className="tickets-grid">
          {ticketsList.map((ticket) => (
            <JsonItem key={ticket.id} ticket={ticket} onClick={() => handleTicketClick(ticket)} />
          ))}
        </div>
      </div>
      <div className="status-column">
        Task Status
        <div style={{ marginTop: '10px' }}>
          {taskStatusList.map(ticket => (
            <JsonItemInStatus 
              key={ticket.id} 
              ticket={ticket} 
              onClick={() =>  handleTicketStatus(ticket)}
            />
          ))}
          {taskStatusList.length === 0 && <p style={{
            color: "#6c757d",
            fontSize: "14px",
          }}>Select a ticket to add to Task Status</p>}
        </div>
         Resolved Task
        <div style={{ marginTop: '10px' }}>
          {taskStatusListResolved.map(ticket => (
            <Resolved
              key={ticket.id} 
              ticket={ticket} 
            
            />
          ))}
          {taskStatusListResolved.length === 0 && <p style={{
            color: "#6c757d",
            fontSize: "14px",
          }}>No resolved tasks yet.</p>}
        </div>
      </div>

      <style>{`
        .json-container {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 10px;
          margin-top: 20px;
        }

        .tickets-column {
     
          text-align: left;
          font-weight: bold;
          padding: 10px;
        }

        .tickets-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        .status-column {
          font-weight: bold;
          text-align: left;
          padding: 10px;
        }

       
        @media (max-width: 992px) {
          .json-container {
            grid-template-columns: 2fr 1fr;
          }
          .tickets-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
        .json-container {
            grid-template-columns: 1fr;
          }
          .tickets-grid {
            grid-template-columns: 1fr; 
          }
        }
      `}</style>
    </div>
    </>
   
  )
}