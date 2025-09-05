import React, { useState } from "react";

const RequestForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    request_id: "",
    description: "",
    name: "",
    urgency: "Medium",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ request_id: "", description: "", name: "", urgency: "Medium" });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Submit a Request</h2>

      <label>Request ID</label>
      <input
        type="text"
        name="request_id"
        value={form.request_id}
        onChange={handleChange}
      />

      <label>Description</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label>Urgency</label>
      <select name="urgency" value={form.urgency} onChange={handleChange}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RequestForm;
