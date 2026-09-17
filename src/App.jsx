import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";

export default function App() {

  return(
    <Router basename="/hmti">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  )
}