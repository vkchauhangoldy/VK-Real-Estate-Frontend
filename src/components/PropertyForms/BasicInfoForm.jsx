import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import Button from "../UI/Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuthToken } from "../../utils/auth";

const BasicInfoForm = () => {
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

  useEffect(() => {
    if (location.state !== null) {
      const basicInfoData = location.state.basicInfo[0].basic_info;
      setPropertyType(basicInfoData.property_type);
      setNegotiable(basicInfoData.negotiable);
      setPrice(basicInfoData.price);
      setOwnership(basicInfoData.ownership);
      setPropertyAge(basicInfoData.property_age);
      setPropertyApproved(basicInfoData.property_approved);
      setPropertyDescription(basicInfoData.property_description);
      setBankLoan(basicInfoData.bank_loan);
    }
  }, []);

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

  const addBasicInfoHandler = (event) => {
    event.preventDefault();
    const basicInfo = {
      property_type: propertyType,
      negotiable: negotiable,
      price: price,
      ownership: ownership,
      property_age: propertyAge,
      property_approved: propertyApproved,
      property_description: propertyDescription,
      bank_loan: bankLoan,
    };

    const token = getAuthToken();
    fetch("https://realbackend-j2fs.onrender.com/api/property/add/basic-info", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(basicInfo),
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

    navigate("../property-detail");
  };

  return (
    <form className={classes["add-form"]} onSubmit={addBasicInfoHandler}>
      <section className={classes["form-controls"]}>
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
      <div className={classes["form-actions"]}>
        <Link to="../..">
          <Button className={classes["cancel-btn"]}>Cancel</Button>
        </Link>
        <Button className={classes["save-btn"]}>Save & Continue</Button>
      </div>
    </form>
  );
};

export default BasicInfoForm;
