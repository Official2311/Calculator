import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <h3 className="mb-4 fw-bold text-uppercase">mB-Calculator</h3>

      <div className="card p-4 shadow-lg rounded-4" style={{ width: "320px", backgroundColor: "#1e1e1e", border: "none" }}>
        <input 
          type="text" 
          value={input} 
          readOnly 
          className="form-control mb-3 text-end fs-4 rounded-3 bg-secondary text-white border-0"
          style={{ height: "50px" }}
        />

        <div className="row g-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
            <div className="col-3" key={item}>
              <button
                className="btn w-100 fs-4 fw-bold rounded-3"
                style={{ 
                  backgroundColor: ["+", "-", "*", "/", "="].includes(item) ? "#ff9500" : "#333", 
                  color: "white",
                  height: "60px",
                  border: "none"
                }}
                onClick={() => (item === "=" ? handleCalculate() : handleClick(item))}
              >
                {item}
              </button>
            </div>
          ))}

          <div className="col-12">
            <button 
              onClick={handleClear} 
              className="btn w-100 fs-4 fw-bold rounded-3 mt-2"
              style={{ backgroundColor: "#ff3b30", color: "white", height: "60px", border: "none" }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
