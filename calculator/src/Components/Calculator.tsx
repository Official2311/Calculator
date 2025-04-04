import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Calculator() {
  const [input, setInput] = useState("");

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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg text-center" style={{ width: "300px" }}>
        <input 
          type="text" 
          value={input} 
          readOnly 
          className="form-control mb-3 text-center fs-4"
        />
        <div className="row g-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
            <div className="col-3" key={item}>
              <button
                className="btn btn-outline-primary w-100 fs-5"
                onClick={() => (item === "=" ? handleCalculate() : handleClick(item))}
              >
                {item}
              </button>
            </div>
          ))}
          <div className="col-12">
            <button 
              onClick={handleClear} 
              className="btn btn-danger w-100 fs-5"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
