import React, { useEffect, useState } from "react";
import classes from "./PropertyNavbar.module.css";
import { Outlet, useLocation } from "react-router-dom";

const PropertyNavbar = () => {
  const [path, setPath] = useState();
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <section className={classes["add-property-navbar-section"]}>
        <h3 className={classes["nav-heading"]}>Add new property</h3>
        <nav className={classes["add-property-navbar"]}>
          <ul>
            <li
              className={`${classes.list} ${
                path === "/user/property/basic-info" ? classes.active : ""
              }`}
            >
              <div className={classes["wrapper"]}>
                <div
                  className={`${classes["step-count"]} ${
                    path === "/user/property/basic-info" ? classes.active : ""
                  }`}
                >
                  <p>1</p>
                </div>
                <p>Basic Info</p>
              </div>
            </li>

            <li
              className={`${classes.list} ${
                path === "/user/property/property-detail" ? classes.active : ""
              }`}
            >
              <div className={classes["wrapper"]}>
                <div
                  className={`${classes["step-count"]} ${
                    path === "/user/property/property-detail"
                      ? classes.active
                      : ""
                  }`}
                >
                  <p>2</p>
                </div>
                <p>Property Detail</p>
              </div>
            </li>

            <li
              className={`${classes.list} ${
                path === "/user/property/general-info" ? classes.active : ""
              }`}
            >
              <div className={classes["wrapper"]}>
                <div
                  className={`${classes["step-count"]} ${
                    path === "/user/property/general-info" ? classes.active : ""
                  }`}
                >
                  <p>3</p>
                </div>
                <p>General Info</p>
              </div>
            </li>

            <li
              className={`${classes.list} ${
                path === "/user/property/location-info" ? classes.active : ""
              }`}
            >
              <div className={classes["wrapper"]}>
                <div
                  className={`${classes["step-count"]} ${
                    path === "/user/property/location-info"
                      ? classes.active
                      : ""
                  }`}
                >
                  <p>4</p>
                </div>
                <p>Location Info</p>
              </div>
            </li>
          </ul>
        </nav>
      </section>
      <section className={classes["add-property-details-section"]}>
        <Outlet />
      </section>
    </>
  );
};

export default PropertyNavbar;
