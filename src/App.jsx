import { Sidebar, Section, Main } from "./components";
import { WordleProvider } from "./context/WordleContext";

function App() {
  return (
    <WordleProvider>
      <div className="app">
        <Main>
          <Sidebar />
          <Section />
        </Main>
      </div>
    </WordleProvider>
  );
}

export default App;
