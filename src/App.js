import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import FlashScreen from "./Pages/SplashScreen/SplashScreen";
import Layout from "./layout/Layout";
import Menu from "./Pages/Home/Menu";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Playground from "./Pages/Playground/Playground";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="scale" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<FlashScreen />} />
          <Route path="/home" element={<Menu />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
function App() {
  return (
    <div className="App">
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </div>
  );
}

export default App;
