import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState("");

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const response = await fetch("http://localhost:4040/api/transactions");
    return await response.json();
  }

  async function addNewTransaction(ev) {
    ev.preventDefault();
  
    const match = name.match(/^[+-]?\d+/); // Match digits at the start with optional +/- sign
    const price = match ? parseInt(match[0], 10) : 0; // Parse or default to 0
    const updatedName = match ? name.substring(match[0].length).trim() : name;
  
    const transactionData = {
      price,
      name: updatedName,
      description,
      datetime,
    };
  
    console.log("Transaction Data to Send:", transactionData);
  
    try {
      const response = await fetch("http://localhost:4040/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionData),
      });
  
      if (response.ok) {
        const newTransaction = await response.json();
  
        // Update transactions state without needing a full page reload
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  
        // Clear the form inputs after adding
        setName('');
        setDescription('');
        setDatetime('');
      } else {
        console.error("Failed to add transaction.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }

let balance = 0;
for (const transaction of transactions) {
  balance += transaction.price;
}
balance = balance.toFixed(2);
// Split the balance into integer and fractional parts
const [integer, fraction] = balance.split('.');
  
  return (
    <main>
      <h1>
      ₹{integer}<span>.{fraction}</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"+20000 new mobile"}
          />
          <input
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder={"description"}
          />
        </div>
        <button type="submit">Add new Transaction</button>
      </form>
      <div className="transactions">
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <div className="transaction" key={transaction._id}>
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div
                  className={
                    "price " + (transaction.price < 0 ? "red" : "green")
                  }
                >
                  {transaction.price}
                </div>
                <div className="datetime">
                  {new Date(transaction.datetime).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
