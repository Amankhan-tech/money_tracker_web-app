# 💰 MERN Money Tracker

MERN Money Tracker is a web application designed to help users track their expenses and income effectively. Built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, this app provides a simple and intuitive interface for managing financial transactions with features like real-time updates, color-coded transaction types, and seamless database integration.

---

## 📝 Features

- **Add Transactions**: Record income or expenses by providing a name, description, amount, and date.
- **Real-Time Updates**: Transactions update dynamically without needing to refresh the page.
- **Color-Coded Entries**: Income transactions are marked in green, while expenses are marked in red.
- **Responsive Design**: Fully responsive for use on desktop and mobile devices.

---

## 🛠️ Technologies Used

1. **Frontend**:
   - **React.js**: For building the user interface.
   - **CSS**: For styling the components.
   
2. **Backend**:
   - **Node.js**: For server-side logic.
   - **Express.js**: To handle API requests.
   
3. **Database**:
   - **MongoDB**: For storing transaction data.

---

## 🚀 How to Use This Application

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or later)
- **MongoDB Atlas Account** (or a local MongoDB setup)
- **Git** (to clone the repository)

---

### Steps to Set Up the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/mern-money-tracker.git
   cd mern-money-tracker
   ```

2. **Set Up the Backend**:
   - Navigate to the `api` folder:
     ```bash
     cd api
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add your MongoDB connection string:
     ```env
     MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
     ```
   - Start the backend server:
     ```bash
     node index.js
     ```
   - Backend will run on `http://localhost:4040`.

3. **Set Up the Frontend**:
   - Navigate to the root folder:
     ```bash
     cd ..
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React app:
     ```bash
     npm start
     ```
   - The frontend will run on `http://localhost:3000`.

4. **Add Your First Transaction**:
   - Open the app in your browser.
   - Use the input fields to add transactions with a name, description, price, and date.

---

## 📂 Folder Structure

```plaintext
mern-money-tracker/
│
├── api/              # Backend code (Node.js & Express.js)
│   ├── index.js      # Entry point for the backend server
│   └── models/       # Mongoose schemas
│
├── src/              # Frontend code (React.js)
│   ├── App.js        # Main application logic
│   ├── components/   # Reusable components
│   └── styles/       # CSS for styling
│
├── .env.example      # Environment variable template
├── package.json      # Dependency configuration
└── README.md         # Documentation
```

---

## 🌟 Why I Created This Project

This project was built as a practical demonstration of building a full-stack application using the MERN stack. It also serves as a foundation for users who want to:
- Learn how to integrate React with Express and MongoDB.
- Understand RESTful API creation and consumption.
- Explore real-world applications of frontend-backend communication.

---

## 🤝 Contributions

Feel free to fork this repository, make changes, and submit pull requests. Any suggestions to improve the project are welcome!

---

## 🎉 Final Thoughts

MERN Money Tracker is more than just a coding project—it's a tool designed to bring simplicity and efficiency to managing your finances. Whether you're learning the MERN stack or looking for a personal expense tracker, this app has got you covered.

---

### 📬 Contact
If you have any questions or feedback, feel free to reach out via GitHub issues or email. Happy coding! 🚀