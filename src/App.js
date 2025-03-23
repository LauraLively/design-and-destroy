import './App.css';

import { Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Homepage from './pages/Home';
import CharacterCreatePage from './pages/CreateCharacter';
import CharacterViewPage from './pages/ViewCharacters';
import SpellsPage from './pages/Spells';
import ToolsPage from './pages/Tools';
import Login from './pages/Login';
import NoMatch from './pages/error404';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './components/Header/header.css';

function App() {
  useEffect(() => {
    document.title = 'Design & Destroy';
  }, []);
  return (
    <>
      <Header />
      <div class="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Add additional pages here after importing */}
          <Route index element={<Homepage />}></Route>
          <Route path="/CharacterCreate" element={<CharacterCreatePage />}></Route>
          <Route path="/ViewCharacters" element={<CharacterViewPage />}></Route>
          <Route path="/Tools" element={<ToolsPage />}></Route>
          <Route path="/Spells" element={<SpellsPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
      </div>
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
