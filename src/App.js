import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'
import NavBar from './components/NavBar'
import Experience from './components/Experience';
import About from './components/About';
import PortfolioSection from './components/PortfolioSection';
import { Provider } from "react-redux";
import store from "./store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from './components/Modal'
import SimpleReactLightbox from 'simple-react-lightbox'
import DigitalProjects from './components/DigitalProjects';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import Nav from './components/Nav';





function App() {
  return (
    <SimpleReactLightbox>
        <Provider store={store}>
          <BrowserRouter>
        
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Header} path='/header' exact />
          <Route component={SinglePost} exact path='/post/:slug' />
          <Route component={Post} exact path='/post' />
          <Route component={Project} exact path='/project' />
        </Switch>
        <Nav />
        <Header />
        <SkillsSection />
        <About />
        <Experience />
        <PortfolioSection />
        <Footer />
        </BrowserRouter>
        </Provider>
        </SimpleReactLightbox>
    
  )
}

export default App;
