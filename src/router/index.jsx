import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { RouterData } from "./index-data";
import logo from "../assets/image/logocircle.png";
import Cookies from "universal-cookie";

import "./styles.css";

function RouterComponent() {
  const cookie = new Cookies();
  return (
    <>
      <div className="big_wrap">
        <Suspense
          fallback={
            <div className="spin_wrapp">
              <div className='loader'></div>
              {/* <img src={Logo} alt="" /> */}
            </div>
          }
        >
          <Routes>
            {RouterData.map((elem) => (
              <Route
                key={elem.id}
                path={elem.path}
                element={elem.component}
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default RouterComponent;
