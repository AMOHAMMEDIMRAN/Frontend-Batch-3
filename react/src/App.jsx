import CardComponent from "./components/CardComponent";
import DataPost from "./components/DataPost";
import ImageComponent from "./components/ImageComponent";
import StateComponent from "./components/StateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseStateComponent from "./components/UseEffectComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div>
      <Router>
        <DataProvider>
          <Routes>
            {/* <Route  path="/" element={<StateComponent />} /> */}
            {/* <Route path="/project" element={<UseEffectComponent />} /> */}
            <Route index path="/" element={<DataPost />} />
          </Routes>
        </DataProvider>
      </Router>
    </div>
  );
};
export default App;
