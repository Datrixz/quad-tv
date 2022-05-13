import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import MainPage from "./components/MainPage";
import TopBar from "./components/TopBar";
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <TopBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="detail">
          <Route path=":showId" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
