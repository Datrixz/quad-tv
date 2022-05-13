import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Main from "./components/Main";
import TopBar from "./components/TopBar";
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <TopBar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
