import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CaseStudyMesob } from "./pages/CaseStudyMesob";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Chatbot } from "@/components/Chatbot";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects/a-mesob" element={<CaseStudyMesob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </>
  );
}

export default App;
