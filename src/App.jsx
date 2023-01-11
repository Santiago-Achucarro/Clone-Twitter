import { Header, Main, Navigation } from "./components";
import { QueryClient, QueryClientProvider } from "react-query";
import { navItems } from "./assets/navItems";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navigation navItems={navItems} />
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
