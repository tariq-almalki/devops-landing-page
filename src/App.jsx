import { HomePage } from "./components/HomePage/HomePage.jsx";
import { Services } from "./components/Services/Services.jsx";
import { SmoothScroll } from "./components/SmoothScroll/SmoothScroll.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Loading } from "./components/Loading/Loading.jsx";

export function App() {
  return (
    <>
      <Loading />
      <div className='MainContainer'>
        <NavBar />
        <SmoothScroll>
          <HomePage />
          <Services />
        </SmoothScroll>
      </div>
    </>
  );
}
