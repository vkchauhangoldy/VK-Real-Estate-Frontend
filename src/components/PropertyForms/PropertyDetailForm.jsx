import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { getAuthToken } from "../../utils/auth";

const PropertyDetailForm = () => {
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [areaUnit, setAreaUnit] = useState("");
  const [numberOfBhk, setNumberOfBhk] = useState("");
  const [numberOfFloor, setNumberOfFloor] = useState("");
  const [attached, setAttached] = useState("");
  const [westernToilet, setWesternToilet] = useState("");
  const [furnished, setFurnished] = useState("");
  const [carParking, setCarParking] = useState("");
  const [lift, setLift] = useState("");
  const [electricity, setElectricity] = useState("");
  const [facing, setFacing] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const locationFunc = () => {
      if (location.state !== null) {
        const propertyDetailData =
          location.state.propertyDetail[0].property_detail;
        setLength(propertyDetailData.length);
        setBreadth(propertyDetailData.breadth);
        setTotalArea(propertyDetailData.total_area);
        setAreaUnit(propertyDetailData.area_unit);
        setNumberOfBhk(propertyDetailData.number_of_bhk);
        setNumberOfFloor(propertyDetailData.number_of_floor);
        setAttached(propertyDetailData.attached);
        setWesternToilet(propertyDetailData.western_toilet);
        setFurnished(propertyDetailData.furnished);
        setCarParking(propertyDetailData.car_parking);
        setLift(propertyDetailData.lift);
        setElectricity(propertyDetailData.electricity);
        setFacing(propertyDetailData.facing);
      }
    };
    locationFunc();
  }, []);

  const token = getAuthToken();

  const lengthInputHandler = (event) => {
    setLength(event.target.value);
  };
  const breadthInputHandler = (event) => {
    setBreadth(event.target.value);
  };
  const totalAreaInputHandler = (event) => {
    setTotalArea(event.target.value);
  };
  const areaUnitInputHandler = (event) => {
    setAreaUnit(event.target.value);
  };
  const numberOfBhkInputHandler = (event) => {
    setNumberOfBhk(event.target.value);
  };
  const numberOfFloorInputHandler = (event) => {
    setNumberOfFloor(event.target.value);
  };
  const attachedInputHandler = (event) => {
    setAttached(event.target.value);
  };
  const westernToiletInputHandler = (event) => {
    setWesternToilet(event.target.value);
  };
  const furnishedInputHandler = (event) => {
    setFurnished(event.target.value);
  };
  const carParkingInputHandler = (event) => {
    setCarParking(event.target.value);
  };
  const liftInputHandler = (event) => {
    setLift(event.target.value);
  };
  const electricityInputHandler = (event) => {
    setElectricity(event.target.value);
  };
  const facingInputHandler = (event) => {
    setFacing(event.target.value);
  };

  const addPropertyDetailHandler = (event) => {
    event.preventDefault();
    const propertyDetail = {
      length: length,
      breadth: breadth,
      total_area: totalArea,
      area_unit: areaUnit,
      number_of_bhk: numberOfBhk,
      number_of_floor: numberOfFloor,
      attached: attached,
      western_toilet: westernToilet,
      furnished: furnished,
      car_parking: carParking,
      lift: lift,
      electricity: electricity,
      facing: facing,
    };

    fetch("https://realbackend-j2fs.onrender.com/api/property/add/property-detail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(propertyDetail),
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
    navigate("../general-info");
  };

  const loadBasicInfoHandler = (event) => {
    event.preventDefault();
    fetch("https://realbackend-j2fs.onrender.com/api/property/add/basic-info", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("../basic-info", {
          state: {
            basicInfo: { ...data },
          },
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form className={classes["add-form"]} onSubmit={addPropertyDetailHandler}>
      <section className={classes["form-controls"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="length">
            Length<span className={classes.asterisk}>*</span>
          </label>
          <input
            type="number"
            name="length"
            id="length"
            min="1"
            step="0.01"
            placeholder="Example: 1000"
            onChange={lengthInputHandler}
            value={length}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="breadth">
            Breadth<span className={classes.asterisk}>*</span>
          </label>
          <input
            type="number"
            name="breadth"
            id="breadth"
            min="1"
            step="0.01"
            placeholder="Example: 1000"
            onChange={breadthInputHandler}
            value={breadth}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="total_area">
            Total Area<span className={classes.asterisk}>*</span>
          </label>
          <input
            type="number"
            name="total_area"
            id="total_area"
            min="1"
            step="0.01"
            placeholder="Example: 7500"
            onChange={totalAreaInputHandler}
            value={totalArea}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="area_unit">
            Area Unit<span className={classes.asterisk}>*</span>
          </label>
          <select
            name="area_unit"
            id="area_unit"
            placeholder="Area Unit"
            onChange={areaUnitInputHandler}
            value={areaUnit}
            required
          >
            <option value="">Area Unit</option>
            <option value="Square Feet (sq ft)">Square Feet (sq ft)</option>
            <option value="Square Yard">Square Yard</option>
            <option value="Square metre (sq m)">Square metre (sq m)</option>
            <option value="Acre">Acre</option>
            <option value="Hectare">Hectare</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="no_of_bhk">No of BHK</label>
          <select
            name="no_of_bhk"
            id="no_of_bhk"
            placeholder="Select Number of BHK"
            onChange={numberOfBhkInputHandler}
            value={numberOfBhk}
          >
            <option value="">Select Number of BHK</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="More than 4 BHK">More than 4 BHK</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="number_of_floor">Number of Floor</label>
          <select
            name="number_of_floor"
            id="number_of_floor"
            placeholder="Select Number of Floor"
            onChange={numberOfFloorInputHandler}
            value={numberOfFloor}
          >
            <option value="">Select Number of Floor</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="More than 4">More than 4</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="attached">Attached</label>
          <select
            name="attached"
            id="attached"
            placeholder="Select Attached"
            onChange={attachedInputHandler}
            value={attached}
          >
            <option value="">Select Attached</option>
            <option value="Attached">Attached</option>
            <option value="Not attached">Not attached</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="western_toilet">Western Toilet</label>
          <select
            name="western_toilet"
            id="western_toilet"
            placeholder="Select Western Toilet"
            onChange={westernToiletInputHandler}
            value={westernToilet}
          >
            <option value="">Select Western Toilet</option>
            <option value="Two-Piece">One-Piece</option>
            <option value="One-Piece">Two-Piece</option>
            <option value="Wall-Hung">Wall-Hung</option>
            <option value="Smart-Toilets">Smart-Toilets</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="furnished">Furnished</label>
          <select
            name="furnished"
            id="furnished"
            placeholder="Select Furnished"
            onChange={furnishedInputHandler}
            value={furnished}
          >
            <option value="">Select Furnished</option>
            <option value="Full furnished">Full furnished</option>
            <option value="Semi furnished">Semi furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="car_parking">Car Parking</label>
          <select
            name="car_parking"
            id="car_parking"
            placeholder="Select Car Parking"
            onChange={carParkingInputHandler}
            value={carParking}
          >
            <option value="">Select Car Parking</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="lift">Lift</label>
          <select
            name="lift"
            id="lift"
            placeholder="Select Lift"
            onChange={liftInputHandler}
            value={lift}
          >
            <option value="">Select Lift</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="electricity">Electricity</label>
          <input
            type="text"
            name="electricity"
            id="electricity"
            placeholder="Example: 3 phase"
            onChange={electricityInputHandler}
            value={electricity}
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="facing">Facing</label>
          <select
            name="facing"
            id="facing"
            placeholder="Select Facing"
            onChange={facingInputHandler}
            value={facing}
          >
            <option value="">Select Facing</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="North-east">North-east</option>
            <option value="North-west">North-west</option>
            <option value="South-east">South-east</option>
            <option value="South-west">South-west</option>
          </select>
        </div>
      </section>

      <div className={classes["form-actions"]}>
        <Button
          className={classes["previous-btn"]}
          onClick={loadBasicInfoHandler}
        >
          Previous
        </Button>
        <Button className={classes["save-btn"]}>Save & Continue</Button>
      </div>
    </form>
  );
};

export default PropertyDetailForm;
