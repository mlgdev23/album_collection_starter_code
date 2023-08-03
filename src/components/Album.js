import React, {useState} from "react"
import { starRating } from "../utility"
import Player from "./Player"

function Album({ album }) {
   const { title, artist, year, rating, coverUrl, spotifyId } = album

   const [showPlayer, setShowPlayer] = useState(false)

   function handleClick(e) {
      setShowPlayer(showPlayer => !showPlayer)
   }
   return (
      <div className="album">
         <h2>{title}</h2>
         <p>{artist}</p>
         <p>{year}</p>
         <p>Rating: {starRating(rating)}</p>

         {showPlayer && (
            <div className="player">
               <Player spotifyId={spotifyId} />
            </div>
         )}

         <img src={coverUrl} alt={`Cover Art of ${title}`} onClick={handleClick}/>
      </div>
   )
}

export default Album
