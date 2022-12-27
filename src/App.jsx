import { ThemeProvider } from "@emotion/react";
import { Header, Main, Navigation } from "./components";
import { theme } from "./customTheme/theme";
import {
  BiHash,
  VscBell,
  IoMdListBox,
  IoMailOutline,
  BsBookmark,
  HiUser,
  CgMoreO,
  RiHome7Fill,
} from "./assets/icons";
import "./App.css";

function App() {
  const navItems = [
    { id: 1, item: "Inicio", svg: <RiHome7Fill /> },
    { id: 2, item: "Explorar", svg: <BiHash /> },
    { id: 3, item: "Notificaciones", svg: <VscBell /> },
    { id: 4, item: "Mensajes", svg: <IoMailOutline /> },
    { id: 5, item: "Guardados", svg: <BsBookmark /> },
    { id: 6, item: "Listas", svg: <IoMdListBox /> },
    { id: 7, item: "Perfil", svg: <HiUser /> },
    { id: 9, item: "Más opciones", svg: <CgMoreO /> },
  ];
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navigation navItems={navItems} />
        <Header />
          <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
