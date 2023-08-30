import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Homepage from './Homepage';
import SignUp from './SignUp';
import SignIn from './SignIn';




const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
