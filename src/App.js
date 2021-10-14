import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
// import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Footer/Footer';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import TopBar from './Pages/Header/TopBar/TopBar';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import WhyUs from './Pages/WhyUs/WhyUs';
import Team from './Pages/Team/Team';
import Price from './Pages/Price/Price';
import Review from './Pages/Review/Review';
import Blogs from './Pages/Blogs/Blogs';
import Process from './Pages/Process/Process';

function App() {
  return (
    <AuthProvider>
      <Router>
        <TopBar />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/whyus">
            <WhyUs />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/process">
            <Process />
          </Route>
          <Route path="/price">
            <Price />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          {/* <PrivateRoute exact path="/review">
          </PrivateRoute> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
