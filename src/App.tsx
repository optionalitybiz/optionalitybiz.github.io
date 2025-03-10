import styles from './App.module.scss';
import { NavHeader } from './components/nav-header/nav-header';
import { Footer } from './components/footer/footer';
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";

function App() {
    return (
        <HelmetProvider>
            <div className={styles.App}>
                <NavHeader />
                <main className={styles.mainContent}>
                    <Home />
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default App;
