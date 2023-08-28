import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Homepage from './Homepage';



const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
