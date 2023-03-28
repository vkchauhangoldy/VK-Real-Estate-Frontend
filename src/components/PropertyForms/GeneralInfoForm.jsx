import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { getAuthToken } from "../../utils/auth";

const GeneralInfoForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [salesType, setSalesType] = useState("");
  const [featuredPackage, setFeaturedPackage] = useState("");
  const [ppdPackage, setPpdPackage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const token = getAuthToken();

  useEffect(() => {
    const locationFunc = () => {
      if (location.state !== null) {
        const generalInfoData = location.state.generalInfo[0].general_info;
        setName(generalInfoData.name);
        setMobile(generalInfoData.mobile);
        setPostedBy(generalInfoData.posted_by);
        setSalesType(generalInfoData.sales_type);
        setFeaturedPackage(generalInfoData.featured_package);
        setPpdPackage(generalInfoData.PPD_package);
      }
    };
    locationFunc();
  }, [location.state]);

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
  const addGeneralInfoHandler = (event) => {
    event.preventDefault();
    const generalInfo = {
      name: name,
      mobile: mobile,
      posted_by: postedBy,
      sales_type: salesType,
      featured_package: featuredPackage,
      PPD_package: ppdPackage,
      imageURL:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
    };
    fetch("https://realbackend-j2fs.onrender.com/api/property/add/general-info", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(generalInfo),
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
    navigate("../location-info");
  };

  const loadPropertyDetailHandler = (event) => {
    event.preventDefault();
    fetch("https://realbackend-j2fs.onrender.com/api/property/add/property-detail", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("../property-detail", {
          state: {
            propertyDetail: { ...data },
          },
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form className={classes["add-form"]} onSubmit={addGeneralInfoHandler}>
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

      <div className={classes["form-actions"]}>
        <Button
          className={classes["previous-btn"]}
          onClick={loadPropertyDetailHandler}
        >
          Previous
        </Button>
        <Button className={classes["save-btn"]}>Save & Continue</Button>
      </div>
    </form>
  );
};

export default GeneralInfoForm;
