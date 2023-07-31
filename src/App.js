import React from "react"
import "./App.css"
import { albumCollection } from "./data"
import Album from "./components/Album"

function App() {
   return (
      <div className="App">
         <h1>My Music Album Collection</h1>
         <div className="albums">
            <Album album={albumCollection[0]} showPlayer={true} />
            <Album album={albumCollection[1]} />
            <Album album={albumCollection[2]} showPlayer={true} />
            <Album album={albumCollection[3]} />
            <Album album={albumCollection[4]} />
            <Album album={albumCollection[5]} />
            <Album album={albumCollection[6]} />
            <Album album={albumCollection[7]} />
            <Album album={albumCollection[8]} />
         </div>
      </div>
   )
}

export default App
