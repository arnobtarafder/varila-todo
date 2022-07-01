import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Pages/Authentication/SignUp';
import SignIn from './Pages/Authentication/SignIn';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import Task from './Components/Task/Task';
import NotFound from './Components/NotFound/NotFound';


function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };


  return (
    <div data-theme={theme && "night"} className="bg-base-200">
      <Navbar handleThemeChange={handleThemeChange} theme={theme} />

      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
        </Route>

        <Route
          path="/task"
          element={
            <PrivateRoute>
              <Task />
            </PrivateRoute>
          }
        />
    

        <Route path='/login' element={<SignIn />}></Route>
        <Route path='/registration' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>


      <Toaster />
    </div>
  );
}

export default App;
