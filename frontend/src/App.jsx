import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    request_id: "",
    name: "",
    description: "",
    urgency: "medium"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/requests/", form);
    alert("Request submitted!");
  };

  return (
    <div className="App">
      <h2>Submit a Request</h2>
      <form onSubmit={handleSubmit}>
        <input name="request_id" placeholder="Request ID" onChange={handleChange} />
        <input name="name" placeholder="Your Name" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <select name="urgency" onChange={handleChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
