import React, { useState } from "react";

function App() {
  const [subject, setSubject] = useState("");
  const [sender, setSender] = useState("");
  const [body, setBody] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, we fake the sentiment based on a simple check:
    const text = (subject + " " + body).toLowerCase();

    if (text.includes("good") || text.includes("happy") || text.includes("great")) {
      setSentiment("Positive");
    } else if (text.includes("bad") || text.includes("sad") || text.includes("poor")) {
      setSentiment("Negative");
    } else {
      setSentiment("Neutral");
    }

    // Clear inputs if you want
    // setSubject("");
    // setSender("");
    // setBody("");
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>Email Sentiment Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
          required
        />
        <input
          type="text"
          placeholder="Sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
          required
        />
        <textarea
          placeholder="Email Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10, minHeight: 100 }}
          required
        ></textarea>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Analyze Sentiment
        </button>
      </form>

      {sentiment && (
        <h2 style={{ marginTop: 20 }}>
          Sentiment Result: {sentiment}{" "}
          {sentiment === "Positive" && "😊"}
          {sentiment === "Neutral" && "😐"}
          {sentiment === "Negative" && "😞"}
        </h2>
      )}
    </div>
  );
}

export default App;
