import './App.css';

import { Routes, Route, Outlet } from "react-router-dom";

import Homepage from './pages/Home';
import CharacterCreatePage from './pages/CreateCharacter';
import CharacterViewPage from './pages/ViewCharacters';
import SpellsPage from './pages/Spells';
import Login from './pages/Login';
import NoMatch from './pages/error404';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './components/Header/header.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Add additional pages here after importing */}
          <Route index element={<Homepage />}></Route>
          <Route path="/CharacterCreate" element={<CharacterCreatePage />}></Route>
          <Route path="/ViewCharacters" element={<CharacterViewPage />}></Route>
          <Route path="/Spells" element={<SpellsPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

function Layout() {
  return (
    <Outlet />
  )
}

export default App;
