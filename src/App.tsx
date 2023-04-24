import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Titlebar from "./components/Titlebar/Titlebar";

import Summary from "./pages/SummaryPage/Summary";
import Notes from "./pages/Notes";
import Links from "./pages/Links";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <BrowserRouter>
      <Titlebar />
      <Layout>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/summariser" element={<Summary />} />
          <Route path="/links" element={<Links />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
