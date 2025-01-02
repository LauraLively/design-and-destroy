import './App.css';

import { Routes, Route, Outlet } from "react-router-dom";

import Homepage from './pages/Home';
import CharacterCreatePage from './pages/CreateCharacter';
import NoMatch from './pages/error404';

import Header from './components/Header/header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Add additional pages here after importing */}
          <Route index element={<Homepage />}></Route>
          <Route path="/CharacterCreate" element={<CharacterCreatePage />}></Route>

          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <Outlet />
  )
}

export default App;
