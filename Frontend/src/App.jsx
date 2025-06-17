
import PrompetPage from "./Pages/PrompetPage";
import Images from "./components/Images";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAuth } from "./store/useAuth.js";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import WelcomePage from "./Pages/WelcomePage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";

function App() {
  const { authUser, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div>
      <Toaster />

      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={authUser?<PrompetPage/>:<WelcomePage/>}/>
        </Route>

        <Route path ="/login" element={!authUser?<LoginPage/>:<Navigate to={"/"}/>} />
        <Route path ="/signup" element={!authUser?<SignUpPage/>:<Navigate to={"/"}/>} />
      </Routes>
    </div>
  );
}

export default App;
