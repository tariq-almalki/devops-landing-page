import { HomePage } from './components/HomePage/HomePage.jsx';
import { Services } from './components/Services/Services.jsx';
import { SmoothScroll } from './components/SmoothScroll/SmoothScroll.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { Team } from './components/Team/Team.jsx';
import { Loading } from './components/Loading/Loading.jsx';
import { services } from './components/Services/js/services.js';

export function App() {
    return (
        <>
            <Loading />
            <NavBar />
            <SmoothScroll>
                <HomePage />
                {services.map((services, index) => (
                    <Services key={index} services={services} />
                ))}
                <Team />
            </SmoothScroll>
        </>
    );
}
