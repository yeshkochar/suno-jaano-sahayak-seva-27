
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SchemeDetails from './pages/SchemeDetails';
import NotFound from './pages/NotFound';
import { Toaster } from "@/components/ui/toaster";
import '@/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/schemes/:categoryId" element={<SchemeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
