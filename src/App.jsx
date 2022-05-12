import Main from "./components/Main";
import TopBar from "./components/TopBar";
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <TopBar/>
      <Main/>
    </div>
  );
}

export default App;
