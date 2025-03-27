import { useState } from "react";
import Bollar from "./Bollar";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const batsmanStyle = {
    border: "2px solid coral",
    margin: "10px",
  };

  const handleSingles = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleDouble = () => {
    const updateRuns = runs + 2;
    setRuns(updateRuns);
  };
  const handleTripple = () => {
    const updateRuns = runs + 3;
    setRuns(updateRuns);
  };
  const handleFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
  };
  const handleSix = () => {
    const updateRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updateRuns);
  };
  return (
    <div style={batsmanStyle}>
      <h3>Player : Bangla Batsman</h3>
      <p>Count Six: {sixes}</p>
      {runs > 50 && <p>You have compelete 50</p>}
      <h1>Score : {runs} </h1>
      <button onClick={handleSingles}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>six</button>
      <button onClick={handleDouble}>dobule</button>
      <button onClick={handleTripple}>Tripple</button>
    </div>
  );
}
