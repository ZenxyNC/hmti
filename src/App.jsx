import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import KesanPesan from "./components/gts/kesan-pesan/kesan-pesan";
import ViewKesanPesan from "./components/gts/kesan-pesan/view-kesan-pesan";

export default function App() {

  return(
    <Router basename="/hmti">
      <Routes>
        <Route path="/gts/kesan-pesan" element={<KesanPesan />} />
        <Route path="/gts/view-kesan-pesan" element={<ViewKesanPesan />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </Router>
  )
}