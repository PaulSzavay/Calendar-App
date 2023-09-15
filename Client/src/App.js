import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Homepage from './Homepage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Date from './Date';




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
        <Route path="/Date" element={<Date/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
