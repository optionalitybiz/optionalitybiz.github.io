import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from './App.module.scss';
import { NavHeader } from './components/nav-header/nav-header';
import { Footer} from './components/footer/footer';

import  ContactPage  from "./pages/ContactPage";
import   Home  from "./pages/Home";
import  About  from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Projects from "./pages/ProjectsPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                 <NavHeader />
                    <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/contact' element={<ContactPage />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/services' element={<ServicesPage />}/>
                    <Route path='/projects' element={<ProjectsPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
