import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Join />} />
          {/* User going to land here where his login details will be taken and the through query strings, the parameters will be passed to route chat. Once data is fetched we are going to render the chat element . */}
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
