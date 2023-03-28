import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./MainNavigation.css";
import mainLogo from "../../assets/logo.jpg";
import {
  faHome,
  faBell,
  faDownload,
  faUpload,
  faEye,
  faTag,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import SideNavebarList from "./SideNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuthToken } from "../../utils/auth";

const navbarList = [
  { icon: faHome, listName: "All Properties", color: "#6ab3eb" },
  { icon: faHome, listName: "My Property" },
  { icon: faBell, listName: "Assistance" },
  { icon: faDownload, listName: "Recieved Interest" },
  { icon: faUpload, listName: "Sent Interest" },
  { icon: faEye, listName: "Property Views" },
  { icon: faTag, listName: "Tariff Plans" },
];

const MainNavigation = () => {
  const [userID, setUserID] = useState("");
  const [username, setUserName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const token = getAuthToken();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("USER_ID");
    navigate("/");
  };

  useEffect(() => {
    const token = getAuthToken().toString();
    fetch(`https://realbackend-j2fs.onrender.com/api/users/userId`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("USER_ID", data.userID);
        localStorage.setItem("USERNAME", data.username.split("-")[0]);
        setUserID(localStorage.getItem("USER_ID"));
        setUserName(localStorage.getItem("USERNAME"));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [token]);

  const showAuthSettings = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const navigateHomeHandler = () => {
    navigate("../../../user");
  };
  const location = useLocation();

  const navigateHandler = (listName) => {
    if (listName === "My Property" && location.pathname === "/user") {
      navigate(`property`);
    } else if (
      listName === "All Properties" &&
      location.pathname === "/user/property"
    ) {
      navigate("../user");
    } else if (listName === "All Properties" && location.pathname === "user") {
      navigate("../user");
    } else if (
      listName === "My Property" &&
      location.pathname === "/user/property"
    ) {
      navigate("../user/property");
    } else {
      return;
    }
  };

  return (
    <Fragment>
      <div className="main-container">
        <section className="aside-container">
          <div className="main-logo" onClick={navigateHomeHandler}>
            <img src={mainLogo} alt="main-logo" />
          </div>
          <nav className="side-navbar">
            <ul>
              {navbarList.map((listItem) => (
                <SideNavebarList
                  key={Math.random().toString()}
                  icon={listItem.icon}
                  listName={listItem.listName}
                  color={listItem.color ? listItem.color : ""}
                  onClick={navigateHandler}
                />
              ))}
            </ul>
          </nav>
        </section>
        <nav className="navbar">
          <div className="user-id">
            <p>User Id :</p>
            <span>{userID}</span>
          </div>
          <div className="profile">
            <div className="profile-username">
              <p className="username">{username}</p>
              <div onClick={showAuthSettings} className="profile-auth">
                {!isActive ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </div>
            </div>

            <ul className="auth-actions">
              {isActive && <li onClick={logoutHandler}>Logout</li>}
            </ul>
          </div>
        </nav>
        <section className="main-section">
          <Outlet />
        </section>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
