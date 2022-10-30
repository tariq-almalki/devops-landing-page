import { HomePage } from './components/HomePage/HomePage.jsx';
import { Services } from './components/Services/Services.jsx';
import { SmoothScroll } from './components/SmoothScroll/SmoothScroll.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';

export function App() {
    return (
        <>
            <NavBar />
            <SmoothScroll>
                <HomePage />
                <Services />
            </SmoothScroll>
        </>
    );
}
