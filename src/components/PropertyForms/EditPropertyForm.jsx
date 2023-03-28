import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import Button from "../UI/Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuthToken } from "../../utils/auth";

const EditPropertyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [propertyType, setPropertyType] = useState("");
  const [negotiable, setNegotiable] = useState("");
  const [price, setPrice] = useState("");
  const [ownership, setOwnership] = useState("");
  const [propertyAge, setPropertyAge] = useState("");
  const [propertyApproved, setPropertyApproved] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [bankLoan, setBankLoan] = useState("");

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

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [salesType, setSalesType] = useState("");
  const [featuredPackage, setFeaturedPackage] = useState("");
  const [ppdPackage, setPpdPackage] = useState("");

  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const propertyData = location.state.property_data;
  useEffect(() => {
    //BASIC INFO
    setPropertyType(propertyData.basic_info.property_type);
    setNegotiable(propertyData.basic_info.negotiable);
    setPrice(propertyData.basic_info.price);
    setOwnership(propertyData.basic_info.ownership);
    setPropertyAge(propertyData.basic_info.property_age);
    setPropertyApproved(propertyData.basic_info.property_approved);
    setPropertyDescription(propertyData.basic_info.property_description);
    setBankLoan(propertyData.basic_info.bank_loan);

    //PROPERTY DETAIL
    setLength(propertyData.property_detail.length);
    setBreadth(propertyData.property_detail.breadth);
    setTotalArea(propertyData.property_detail.total_area);
    setAreaUnit(propertyData.property_detail.area_unit);
    setNumberOfBhk(propertyData.property_detail.number_of_bhk);
    setNumberOfFloor(propertyData.property_detail.number_of_floor);
    setAttached(propertyData.property_detail.attached);
    setWesternToilet(propertyData.property_detail.western_toilet);
    setFurnished(propertyData.property_detail.furnished);
    setCarParking(propertyData.property_detail.car_parking);
    setLift(propertyData.property_detail.lift);
    setElectricity(propertyData.property_detail.electricity);
    setFacing(propertyData.property_detail.facing);

    // GENERAL INFO
    setName(propertyData.general_info.name);
    setMobile(propertyData.general_info.mobile);
    setPostedBy(propertyData.general_info.posted_by);
    setSalesType(propertyData.general_info.sales_type);
    setFeaturedPackage(propertyData.general_info.featured_package);
    setPpdPackage(propertyData.general_info.PPD_package);

    //LOCATION INFO
    setEmail(propertyData.location_info.email);
    setCity(propertyData.location_info.city);
    setArea(propertyData.location_info.area);
    setPincode(propertyData.location_info.pincode);
    setAddress(propertyData.location_info.address);
    setLandmark(propertyData.location_info.landmark);
    setLatitude(propertyData.location_info.latitude);
    setLongitude(propertyData.location_info.longitude);
  }, []);

  // BASIC INFO
  const propertyTypeInputHandler = (event) => {
    setPropertyType(event.target.value);
  };
  const negotiableInputHandler = (event) => {
    setNegotiable(event.target.value);
  };
  const priceInputHandler = (event) => {
    setPrice(event.target.value);
  };
  const ownershipInputHandler = (event) => {
    setOwnership(event.target.value);
  };
  const propertyAgeInputHandler = (event) => {
    setPropertyAge(event.target.value);
  };
  const propertyApprovedInputHandler = (event) => {
    setPropertyApproved(event.target.value);
  };
  const propertyDescriptionInputHandler = (event) => {
    setPropertyDescription(event.target.value);
  };
  const bankLoanInputHandler = (event) => {
    setBankLoan(event.target.value);
  };

  // PROPERTY DETAIL
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

  // GENERAL INFO
  const nameInputHandler = (event) => {
    setName(event.target.value);
  };
  const mobileInputHandler = (event) => {
    setMobile(event.target.value);
  };
  const postedByInputHandler = (event) => {
    setPostedBy(event.target.value);
  };
  const salesTypeInputHandler = (event) => {
    setSalesType(event.target.value);
  };
  const featuredPackageInputHandler = (event) => {
    setFeaturedPackage(event.target.value);
  };
  const ppdPackageInputHandler = (event) => {
    setPpdPackage(event.target.value);
  };

  // LOCAtION INFO
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

  const updatePropertyHandler = (event) => {
    event.preventDefault();
    const basic_info = {
      property_type: propertyType,
      negotiable: negotiable,
      price: price,
      ownership: ownership,
      property_age: propertyAge,
      property_approved: propertyApproved,
      property_description: propertyDescription,
      bank_loan: bankLoan,
    };

    const property_detail = {
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

    const general_info = {
      name: name,
      mobile: mobile,
      posted_by: postedBy,
      sales_type: salesType,
      featured_package: featuredPackage,
      PPD_package: ppdPackage,
      imageURL:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
    };

    const location_info = {
      email: email,
      city: city,
      area: area,
      pincode: pincode,
      address: address,
      landmark: landmark,
      latitude: latitude,
      longitude: longitude,
    };
    const PPD_ID = propertyData.PPD_ID;
    const updatedPropertyData = {
      basic_info: basic_info,
      property_detail: property_detail,
      general_info: general_info,
      location_info: location_info,
    };
    const token = getAuthToken();

    fetch(`https://realbackend-j2fs.onrender.com/api/property/edit/${PPD_ID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(updatedPropertyData),
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

    navigate("../..");
  };

  return (
    <form className={classes["add-form"]} onSubmit={updatePropertyHandler}>
      <h2>Basic Information</h2>
      <section className={classes["form-controls"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="PPD_ID">PPD ID</label>
          <input
            type="text"
            name="PPD_ID"
            id="PPD_ID"
            onChange={priceInputHandler}
            value={propertyData.PPD_ID}
            disabled
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="property_type">
            Property Type<span className={classes.asterisk}>*</span>
          </label>
          <select
            name="property_type"
            id="property_type"
            placeholder="Select Property Type"
            value={propertyType}
            onChange={propertyTypeInputHandler}
            required
          >
            <option value="">Select Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Plot">Plot</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="negotiable">Negotiable</label>
          <select
            name="negotiable"
            id="negotiable"
            placeholder="Select Negotiable"
            value={negotiable}
            onChange={negotiableInputHandler}
          >
            <option value="">Select Negotiable</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            min="1"
            step="1"
            placeholder="Example: 10000"
            onChange={priceInputHandler}
            value={price}
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="ownership">Ownership</label>
          <select
            name="ownership"
            id="ownership"
            placeholder="Select Ownership"
            onChange={ownershipInputHandler}
            value={ownership}
          >
            <option value="">Select Ownership</option>
            <option value="Single Ownership">Single Ownership</option>
            <option value="Joint Ownership">Joint Ownership</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="property_age">Property Age</label>
          <select
            name="property_age"
            id="property_age"
            placeholder="Select Property Age"
            onChange={propertyAgeInputHandler}
            value={propertyAge}
          >
            <option value="">Select Property Age</option>
            <option value="Less than 5 years">Less than 5 years</option>
            <option value="5 - 10 years">5 - 10 years</option>
            <option value="10 - 20 years">10 - 20 years</option>
            <option value="More than 20 years">More than 20 years</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="property_approved">Property Approved</label>
          <select
            name="property_approved"
            id="property_approved"
            placeholder="Property Approved"
            onChange={propertyApprovedInputHandler}
            value={propertyApproved}
          >
            <option value="">Property Approved</option>
            <option value="Approved">Approved</option>
            <option value="Not Approved">Not Approved</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="property_description">Property Description</label>
          <input
            type="text"
            name="property_description"
            id="property_description"
            placeholder="Write some description...."
            onChange={propertyDescriptionInputHandler}
            value={propertyDescription}
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="bank_loan">Bank Loan</label>
          <select
            name="bank_loan"
            id="bank_loan"
            placeholder="Bank Loan"
            onChange={bankLoanInputHandler}
            value={bankLoan}
          >
            <option value="">Bank Loan</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </section>
      <h2>Property Details</h2>
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
      <h2>General Information</h2>
      <section className={classes["form-controls"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="name">
            Name<span className={classes.asterisk}>*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={nameInputHandler}
            value={name}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="mobile">
            Mobile<span className={classes.asterisk}>*</span>
          </label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            placeholder="Enter Mobile Number"
            onChange={mobileInputHandler}
            value={mobile}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="posted_by">Posted By</label>
          <select
            name="posted_by"
            id="posted_by"
            placeholder="Posted By"
            onChange={postedByInputHandler}
            value={postedBy}
          >
            <option value="">Posted By</option>
            <option value="Owner">Owner</option>
            <option value="Broker">Broker</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="sales_type">Sales Type</label>
          <select
            name="sales_type"
            id="sales_type"
            placeholder="Sales Type"
            onChange={salesTypeInputHandler}
            value={salesType}
          >
            <option value="">Select Sales Type</option>
            <option value="Individual">Individual</option>
            <option value="Group">Group</option>
          </select>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="featured_package">
            Featured Package<span className={classes.asterisk}>*</span>
          </label>
          <input
            type="number"
            name="featured_package"
            id="featured_package"
            min="1000"
            step="100"
            placeholder="Example: 100000"
            onChange={featuredPackageInputHandler}
            value={featuredPackage}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="PPD_package">
            PPD Package<span className={classes.asterisk}>*</span>
          </label>
          <input
            type="number"
            name="PPD_package"
            id="PPD_package"
            min="1000"
            step="100"
            placeholder="Example: 100000"
            onChange={ppdPackageInputHandler}
            value={ppdPackage}
            required
          />
        </div>
      </section>
      <h2>Location Information</h2>
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

      <div
        className={`${classes["form-actions"]} ${classes["edit-form-action"]}`}
      >
        <Link to="../..">
          <Button className={classes["cancel-btn"]}>Cancel</Button>
        </Link>
        <Button className={classes["edit-btn"]}>Update</Button>
      </div>
    </form>
  );
};

export default EditPropertyForm;
