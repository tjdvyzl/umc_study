import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./components/Header";
  
function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/celebrity" element={<Celebrity/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/notFound" element={<NotFound/>} />
          <Route path="/tv" element={<TV/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;