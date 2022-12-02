import React from "react";
import { useState } from "react";
import Details from "./Details";
import "../Application_Setting/application.css";
import History from "./History";
import Logo_SecondNav from '../Header/Logo_SecondNav'
const Application = () => {
  return (
    <>
      <Logo_SecondNav />
    <div className="">
      <div className="Leadsett">
        <div className="aside">
          <div className="settcont">
            <p>Lead Generation Tool</p>
          </div>
          <div className="AppMainsett">
            {/* <div className='heading'>
                        <p>Settings</p>
                    </div> */}
            <div>
              <div className="d-flex tabSettings">
                <ul
                  class="nav flex-column nav-pills me-3 userSettingTabUL"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <li
                    class="nav-link active userSettingTab"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Details
                  </li>
                  <li
                    class="nav-link userSettingTab"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    History
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="  appdatamain">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
              <Details />
              
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              <History/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Application;
