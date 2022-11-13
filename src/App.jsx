import { HomePage } from "./components/HomePage/HomePage.jsx";
import { Services } from "./components/Services/Services.jsx";
import { LocomotiveScroll } from "./components/LocomotiveScroll/LocomotiveScroll.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Team } from "./components/Team/Team.jsx";
// import { Loading } from './components/Loading/Loading.jsx';
import { services } from "./components/Services/js/services.js";

export function App() {
  return (
    <>
      {/* <Loading /> */}
      <NavBar />
      <LocomotiveScroll>
        <HomePage />
        <div className='panel' id='wrapper'>
          {services.map((services, index) => (
            <Services key={index} services={services} />
          ))}
        </div>
        <Team />
      </LocomotiveScroll>
    </>
  );
}
