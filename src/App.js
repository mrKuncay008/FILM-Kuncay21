// fungsi compponen navbar
import "./App.css"
import NavBar from './comp/navbar';
import Page from './comp/landingPage';
import Ngaji from './comp/pengajian';
import Cata from './comp/catalog';
import Whoami from './comp/dramaOne';
import ScrollToTop from './comp/Tools/scroll';
import Drama from './comp/drama';
import Act from './comp/Action';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// css
import "./tampilan/nav.css";
import "./tampilan/pengajian.css";
import "./tampilan/landingPage.css"
import "./tampilan/catalog.css"
import "./tampilan/drama.css"

function App() {
  return (
  <Router>
    <div className="App">
    <NavBar />
    <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route path="/pengajian" element={<Ngaji />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/Action" element={<Act />} />
          <Route path="/dramaOne" element={<Whoami />} />
          <Route path="/*"  element={<Navigate to="/" />}  />
        </Routes>
      <Cata />
    </div>
  </Router>
  );
}
export default App;

