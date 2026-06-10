import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  const examplePort = import.meta.env.VITE_PORT;

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome-page" replace />} />
        <Route path="/welcome-page" element={<WelcomePage />} />
      </Routes>
    </>
  );
};

export default App;
