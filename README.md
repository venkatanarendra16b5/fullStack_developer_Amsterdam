# Graph Hierarchy Visualization – Full Stack Assignment

This project visualizes hierarchical graph data using a 
- Node.js - backend 
- Vue 3 (Composition API) + D3.js - frontend.

The backend transforms flat graph data into a hierarchical structure, and the frontend renders it as an interactive horizontal tree with node details.

---

## ✨ Features

- Hierarchical tree visualization (left → right)
- Rectangular node cards for better readability
- Clickable nodes with detail panel
- Node deselection support
- Clean separation of backend and frontend
- Efficient tree construction (O(n))

---

## 🧱 Tech Stack

### Backend
- Node.js
- Express.js
- JavaScript

### Frontend
- Vue 3 (Composition API – CDN based)
- D3.js (Tree layout)
- HTML / CSS

---

## 📂 Project Structure

```text
fullStack_developer_Amsterdam/
├── backend/
│   ├── src/
│   │   ├── data/
│   │   │   └── graphData.json
│   │   ├── utils/
│   │   │   └── buildTree.js
│   │   ├── routes/
│   │   │   └── tree.routes.js
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── App.js
│   └── styles.css
│
└── README.md
```
## ▶️ How to Run the Application Locally

### 1️⃣ Run the Backend

- cd backend
- npm install
- npm start
- Backend runs at: http://localhost:3000
- API endpoint: GET /api/tree

### 2️⃣ Run the Frontend
- cd frontend
- npx serve .
- Then: Open the provided URL in the browser
- Note: The frontend is a static Vue 3 application and does not require a build step.

### 🖥️ How to Use the Application

- The tree hierarchy is displayed horizontally
- Click on any node to view its details (name & description)
- The selected node is highlighted
- Click the ❌ button in the details panel to deselect the node

### 📡 API Response Format
json
 {
  "success": true,
  "data": [
    {
      "name": "A",
      "description": "This is the description of A",
      "children": []
    }
  ]
 }

### 🧠 Design Decisions
- Flat data structure is used as input for simplicity and scalability
- Tree is constructed using a Map to ensure O(n) time complexity
- D3.js handles SVG rendering and layout calculations
- Vue 3 manages application state and user interactions
- Backend and frontend are fully decoupled

### ⚡ Performance Considerations
- Tree construction runs in linear time
- Single API call for fetching data
- Stateless backend
- D3 optimizes DOM updates for complex visualizations

### 🚨 Edge Cases Handled
- Missing parent nodes are treated as root nodes
- Empty dataset returns an empty tree
- Duplicate node names handled safely
- Node deselection supported

### 🔮 Possible Improvements
- Persist data using a graph database (e.g., Neo4j)
- Add unit test coverage
- Support very large graphs using lazy loading
- Deploy backend and frontend to cloud infrastructure

### 👤 Author
- Nallabothula Venkata Narendra - Full Stack Developer
