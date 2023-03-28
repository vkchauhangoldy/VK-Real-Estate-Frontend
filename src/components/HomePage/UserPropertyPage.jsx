import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuthToken } from "../../utils/auth";
import { calculateDaysLeft, views } from "../../utils/math";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import "./HomePage.css";
import PropertyDetailsHeadings, {
  UserPropertyDetailsList,
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

const UserPropertyPage = () => {
  const [userProperties, setUserProperties] = useState([]);
  const [searchProperty, setSearchProperty] = useState([]);
  const [popUp, setPopUp] = useState();
  const searchInputRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("USER_ID");
    const token = getAuthToken();
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `https://realbackend-j2fs.onrender.com/api/property/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        const propertyList = responseData.map((property) => {
          const expiryDate = new Date(property.date_of_expiry);
          const currentDate = new Date();
          const difference = expiryDate.getTime() - currentDate.getTime();
          const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
          const mathRandom = Math.floor(Math.random() * 40) + 1;
          let views;
          if (mathRandom < 10) {
            views = `0${mathRandom}`;
          } else {
            views = `${mathRandom}`;
          }
          return {
            PPD_ID: property.PPD_ID,
            image: property.general_info.imageURL,
            property_type: property.basic_info.property_type,
            mobile: property.general_info.mobile,
            total_area: property.location_info.city,
            views: views,
            status: `${daysLeft === 0 ? "Sold" : "Unsold"}`,
            days_left: daysLeft,
          };
        });
        setUserProperties(propertyList);
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

  const deletePropertyHandler = (PPD_ID) => {
    setPopUp({
      title: "Delete property",
      message: `Are you sure want to delete property with (${PPD_ID})`,
      PPD_ID: PPD_ID,
      btn1: "Cancel",
      btn2: "Delete",
    });
  };

  const cancelHandler = () => {
    setPopUp();
  };

  const deleteHandler = (PPD_ID) => {
    const token = getAuthToken();
    fetch(`https://realbackend-j2fs.onrender.com/api/property/delete/${PPD_ID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopUp({
          title: "Success",
          message: `${data.message}✅`,
          btn1: "Done👍",
          btn2: undefined,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const editPropertyHandler = (PPD_ID) => {
    const token = getAuthToken();
    fetch(`https://realbackend-j2fs.onrender.com/api/property/search/${PPD_ID}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate(`edit`, {
          state: {
            property_data: data,
          },
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const successHandler = () => {
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
        let searchedProperty;
        if (!data) {
          searchedProperty = [
            {
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
            },
          ];
        } else {
          searchedProperty = [];
        }
        setSearchProperty(searchedProperty);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setPopUp();
    navigate("../property");
  };

  const propertyFunc = (propertyDetail) => {
    return (
      <UserPropertyDetailsList
        key={propertyDetail.PPD_ID + Math.random().toString()}
        ppdID={propertyDetail.PPD_ID}
        image={propertyDetail.image}
        propertyType={propertyDetail.property_type}
        mobile={propertyDetail.mobile}
        totalArea={propertyDetail.total_area}
        views={propertyDetail.views}
        status={propertyDetail.status}
        daysLeft={propertyDetail.days_left}
        onDelete={deletePropertyHandler}
        onEdit={editPropertyHandler}
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
      {popUp && (
        <ErrorModal
          title={popUp.title}
          message={popUp.message}
          ppdId={popUp.PPD_ID}
          onCancel={cancelHandler}
          onDelete={deleteHandler}
          onSuccess={successHandler}
          btn1={popUp.btn1}
          btn2={popUp.btn2}
        />
      )}
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
        <Link to="../property/basic-info">
          <Button className="btn">+ Add Property</Button>
        </Link>
      </section>

      <section className="property-heading">{propertyHeading}</section>

      <section className="property-list-section">
        {userProperties.length === 0 && (
          <h1 className="items-found">No properties found</h1>
        )}
        {userProperties.length !== 0 && searchProperty.length !== 0 && (
          <ul className="property-list">
            {searchProperty.map((propertyDetail) =>
              propertyFunc(propertyDetail)
            )}
          </ul>
        )}
        {userProperties.length !== 0 && searchProperty.length === 0 && (
          <ul className="property-list">
            {userProperties.map((propertyDetail) =>
              propertyFunc(propertyDetail)
            )}
          </ul>
        )}
      </section>
    </>
  );
};

export default UserPropertyPage;
