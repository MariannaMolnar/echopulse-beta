import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext";
import { Suspense } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </Suspense>
  );
}

export default App;
