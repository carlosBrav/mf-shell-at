import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home'
import Principal from './principal'
import {DetailPokemon} from './detail'
import {Historical} from './historical'
import { ProtectedRoute } from '../routes/protected-route';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/detail" element={<DetailPokemon />}/>
        <Route path="/historical" element={<Historical />}/>
        <Route
          path="/"
          element={
            <ProtectedRoute children={<Home />}/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}