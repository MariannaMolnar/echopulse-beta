import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext";
import { Suspense } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllArtists from "./pages/AllArtists";
import Events from "./pages/Events";
import ArtistRoutes from "./pages/ArtistRoutes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/artists" element={<AllArtists />} />
              <Route path="/artists/*" element={<ArtistRoutes />}/>
              <Route path="/events" element={<Events />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </Suspense>
  );
}

export default App;
