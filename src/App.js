import './App.css';

import { Routes, Route, Outlet } from "react-router-dom";

import Homepage from './pages/Home';
import NoMatch from './pages/error404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Add additional pages here after importing */}
          <Route index element={<Homepage />}></Route>

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
