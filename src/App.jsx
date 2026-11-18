import { Routes, Route, Navlink   } from "react-router-dom";
import{ChessListPage} from './pages/ChessListPage';
import {ChessSinglePage} from './pages/ChessSinglePage'
import './App.cs';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path ="/" element ={<ChesttListPage/>}/>
        <Route path="/chess/:chessId" element={ChessListPage}/>
        <Route path="/new-chess" element = {<ChessCreatePage/>}/>
        <Route path="/mod-chess/:chessId" element={<ChessModPage/>}/>
      </Routes>
    </>
  )
}