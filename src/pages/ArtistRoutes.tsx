import { Route, Routes } from "react-router"
import ArtistDetailsPage from "./ArtistDetailsPage"

function ArtistRoutes() {
  return (
    <Routes>
        <Route path=":artistName" element={<ArtistDetailsPage />}/>
    </Routes>
  )
}

export default ArtistRoutes