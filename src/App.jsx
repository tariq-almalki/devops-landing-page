import { useRef } from "react";
import { Loading } from "./Loading.jsx";

import "./Loading.css";

export function App() {
  const comp = useRef(null);
  return (
    <div className='k'>
      <Loading ref={comp} />
      {/* <div className='test'></div> */}
    </div>
  );
}
