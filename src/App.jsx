import { HomePage } from "./components/HomePage/HomePage.jsx";
import { Services } from "./components/Services/Services.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Loading } from "./components/Loading/Loading.jsx";
import { LocomotiveScroll } from "./components/LocomotiveScroll/LocomotiveScroll.jsx";

export function App() {
  return (
    <>
      <Loading />
      <NavBar />
      <LocomotiveScroll>
        <HomePage />
        <Services />
      </LocomotiveScroll>
    </>
  );
}
