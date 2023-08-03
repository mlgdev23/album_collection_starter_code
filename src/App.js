import React from "react"
import "./App.css"
import { albumCollection } from "./data"
import AlbumList from "./components/AlbumList"

function App() {
   return (
      <div className="App">
         <AlbumList albums={albumCollection}/>
      </div>
   )
}

export default App
