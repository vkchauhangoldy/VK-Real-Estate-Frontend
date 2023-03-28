import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAuthToken } from "../../utils/auth";
import { calculateDaysLeft, views } from "../../utils/math";
import Button from "../UI/Button/Button";
import "./HomePage.css";
import PropertyDetailsHeadings, {
  AllPropertyDetailsList,
} from "./PropertyDetails";

const heading = {
  PPD_ID: "PPD ID",
  image: "Image",
  property_type: "Property",
  mobile: "Contact",
  total_area: "Area",
  views: "Views",
  status: "Status",
  days_left: "Days Left",
  action: "Action",
};

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [searchProperty, setSearchProperty] = useState([]);
  const searchInputRef = useRef();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("https://realbackend-j2fs.onrender.com/api/property/all");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        const propertyList = responseData.map((property) => {
          return {
            PPD_ID: property.PPD_ID,
            image: property.general_info.imageURL,
            property_type: property.basic_info.property_type,
            mobile: property.general_info.mobile,
            total_area: property.location_info.city,
            views: views(),
            status: `${
              calculateDaysLeft(property.date_of_expiry) === 0
                ? "Sold"
                : "Unsold"
            }`,
            days_left: calculateDaysLeft(property.date_of_expiry),
          };
        });

        setProperties(propertyList);
      } catch (error) {
        console.log(error.message);
      }
    };
    sendRequest();
  }, []);

  const searchHandler = (event) => {
    event.preventDefault();
    const searchValue = searchInputRef.current.value;
    const token = getAuthToken();
    fetch(`https://realbackend-j2fs.onrender.com/api/property/search/${searchValue}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const searchedProperty = {
          PPD_ID: data.PPD_ID,
          image: data.general_info.imageURL,
          property_type: data.basic_info.property_type,
          mobile: data.general_info.mobile,
          total_area: data.location_info.city,
          views: views(),
          status: `${
            calculateDaysLeft(data.date_of_expiry) === 0 ? "Sold" : "Unsold"
          }`,
          days_left: calculateDaysLeft(data.date_of_expiry),
        };

        setSearchProperty([searchedProperty]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const propertyFunc = (propertyDetail) => {
    return (
      <AllPropertyDetailsList
        key={propertyDetail.PPD_ID + Math.random().toString()}
        ppdID={propertyDetail.PPD_ID}
        image={propertyDetail.image}
        propertyType={propertyDetail.property_type}
        mobile={propertyDetail.mobile}
        totalArea={propertyDetail.total_area}
        views={propertyDetail.views}
        status={propertyDetail.status}
        daysLeft={propertyDetail.days_left}
      />
    );
  };

  const propertyHeading = (
    <PropertyDetailsHeadings
      ppdID={heading.PPD_ID}
      image={heading.image}
      propertyType={heading.property_type}
      mobile={heading.mobile}
      totalArea={heading.total_area}
      views={heading.views}
      status={heading.status}
      daysLeft={heading.days_left}
      action={heading.action}
    />
  );

  return (
    <>
      <section className="search-section">
        <form className="form" onSubmit={searchHandler}>
          <input
            type="text"
            name="PPD_ID"
            id="PPD_ID"
            placeholder="Search PPD ID"
            ref={searchInputRef}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <Link to="property/basic-info">
          <Button className="btn">+ Add Property</Button>
        </Link>
      </section>

      <section className="property-heading">{propertyHeading}</section>

      <section className="property-list-section">
        {properties.length === 0 && (
          <h1 className="items-found">No properties found</h1>
        )}
        {properties.length !== 0 && searchProperty.length !== 0 && (
          <ul className="property-list">
            {searchProperty.map((propertyDetail) =>
              propertyFunc(propertyDetail)
            )}
          </ul>
        )}
        {properties.length !== 0 && searchProperty.length === 0 && (
          <ul className="property-list">
            {properties.map((propertyDetail) => propertyFunc(propertyDetail))}
          </ul>
        )}
      </section>
    </>
  );
};

export default HomePage;
