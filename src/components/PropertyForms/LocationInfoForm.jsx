import React, { useState } from "react";
import classes from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { getAuthToken } from "../../utils/auth";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const LocationInfoForm = () => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [popUp, setPopUp] = useState();

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };
  const cityInputHandler = (event) => {
    setCity(event.target.value);
  };
  const areaInputHandler = (event) => {
    setArea(event.target.value);
  };
  const pincodeInputHandler = (event) => {
    setPincode(event.target.value);
  };
  const addressInputHandler = (event) => {
    setAddress(event.target.value);
  };
  const landmarkInputHandler = (event) => {
    setLandmark(event.target.value);
  };
  const latitudeInputHandler = (event) => {
    setLatitude(event.target.value);
  };
  const longitudeInputHandler = (event) => {
    setLongitude(event.target.value);
  };

  const navigate = useNavigate();
  const token = getAuthToken();
  const addLocationInfoHandler = (event) => {
    event.preventDefault();
    const locationInfo = {
      email: email,
      city: city,
      area: area,
      pincode: pincode,
      address: address,
      landmark: landmark,
      latitude: latitude,
      longitude: longitude,
    };

    fetch("https://realbackend-j2fs.onrender.com/api/property/add/location-info", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(locationInfo),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setPopUp({
      title: "Success",
      message: "Property added successfully✅✅",
      btn1: "Done👍",
    });
  };

  const loadGeneralInfoHandler = (event) => {
    event.preventDefault();
    fetch("https://realbackend-j2fs.onrender.com/api/property/add/general-info", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("../general-info", {
          state: {
            generalInfo: { ...data },
          },
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const cancelHandler = () => {
    setPopUp();
  };

  const successHandler = () => {
    navigate("../../../../user");
  };

  return (
    <>
      {popUp && (
        <ErrorModal
          title={popUp.title}
          message={popUp.message}
          onCancel={cancelHandler}
          onSuccess={successHandler}
          btn1={popUp.btn1}
        />
      )}
      <form className={classes["add-form"]} onSubmit={addLocationInfoHandler}>
        <section className={classes["form-controls"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="mobile">
              Email<span className={classes.asterisk}>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={emailInputHandler}
              value={email}
              required
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="city">
              City<span className={classes.asterisk}>*</span>
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              onChange={cityInputHandler}
              value={city}
              required
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="area">Area</label>
            <input
              type="text"
              name="area"
              id="area"
              placeholder="Area"
              onChange={areaInputHandler}
              value={area}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="Pincode"
              onChange={pincodeInputHandler}
              value={pincode}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              onChange={addressInputHandler}
              value={address}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              name="landmark"
              id="landmark"
              placeholder="Landmark"
              onChange={landmarkInputHandler}
              value={landmark}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              name="latitude"
              id="latitude"
              placeholder="Latitude"
              onChange={latitudeInputHandler}
              value={latitude}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              name="longitude"
              id="longitude"
              placeholder="Longitude"
              onChange={longitudeInputHandler}
              value={longitude}
            />
          </div>
        </section>

        <div className={classes["form-actions"]}>
          <Button
            className={classes["previous-btn"]}
            onClick={loadGeneralInfoHandler}
          >
            Previous
          </Button>
          <Button className={classes["add-btn"]}>Add Property</Button>
        </div>
      </form>
    </>
  );
};

export default LocationInfoForm;
