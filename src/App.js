import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction() {
    
  }
  return (
    <main>
      <h1>
        ₹400<span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input 
          type="text" 
          value={name} 
          onChange={ev => setName(ev.target.value)}
          placeholder={"+20000 new mobile"} 
          />
          <input 
          value={datetime} 
          onChange={ev => setDatetime(ev.target.value)} 
          type="datetime-local" 
          />
        </div>
        <div className="description">
          <input 
          type="text"
          value={description}
          onChange={ev => setDescription(ev.target.value)}
          placeholder={"description"} 
          />
        </div>
        <button type="submit">Add new Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Mobile</div>
            <div className="description">It was time for new mobile</div>
          </div>
          <div className="right">
            <div className="price red">-₹20000</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Video Edit for a Client</div>
            <div className="description">It was time for new mobile</div>
          </div>
          <div className="right">
            <div className="price green">+₹10000</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Laptop</div>
            <div className="description">It was time for new mobile</div>
          </div>
          <div className="right">
            <div className="price red">-₹70000</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
