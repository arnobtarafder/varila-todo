import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Pages/Authentication/SignUp';
import SignIn from './Pages/Authentication/SignIn';
import Home from './Pages/Home';


function App() {
  return (
    <div>
        <Navbar />

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

          <Route path='/login' element={<SignIn />}></Route>
          <Route path='/registration' element={<SignUp />}></Route>
        </Routes>



        <Toaster />
    </div>
  );
}

export default App;
