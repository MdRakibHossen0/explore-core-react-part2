import { useState } from "react";

export default function Bollar() {
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);
  const [message, setMessage] = useState("");

  const bollarStyle = {
    border: "2px solid coral",
    margin: "10px",
    padding: "10px",
  };

  const color = {
    backgroundColor: "coral",
    padding: "5px",
    fontWeight: "bold",
  };

  // বল ও রান বাড়ানো
  const handleBall = (run) => {
    if (balls < 5) {
      setBalls((prevBalls) => prevBalls + 1);
      setRuns((prevRuns) => prevRuns + run);
    } else {
      setBalls(0); // নতুন ওভার শুরু হলে বল রিসেট হবে
      setRuns(0); // রানও রিসেট হবে
      setMessage("New Over Started!");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  // No Ball - বল বাড়বে না, শুধু রান বাড়বে
  const handleNoball = () => {
    setRuns((prevRuns) => prevRuns + 1);
    setMessage("No Ball");
    setTimeout(() => setMessage(""), 2000);
  };

  // Wide Ball - বল বাড়বে না, শুধু রান বাড়বে
  const handleWide = () => {
    setRuns((prevRuns) => prevRuns + 1);
    setMessage("Wide Ball");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div style={bollarStyle}>
      <h3>Over: {balls}</h3>
      <h2>This Over Runs: {runs}</h2>
      {message && <p style={color}>{message}</p>}

      <button onClick={() => handleBall(0)}>Dot Ball</button>
      <button onClick={() => handleBall(1)}>One</button>
      <button onClick={() => handleBall(2)}>Two</button>
      <button onClick={() => handleBall(4)}>Four</button>
      <button onClick={() => handleBall(6)}>Six</button>

      <button onClick={handleNoball}>No Ball</button>
      <button onClick={handleWide}>Wide Ball</button>
    </div>
  );
}
