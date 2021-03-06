import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import MainPage from "./components/MainPage";
import ModalBook from "./components/ModalBook";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <TopBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="shows" element={<MainPage />}/>
        <Route path="shows/:showId/:showName" element={<Detail />} >
          <Route path="book" element={<ModalBook/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
