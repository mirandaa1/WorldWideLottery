import React from "react";
import "./User.scss";
import PhoneIcon from "@material-ui/icons/Phone";

function User({
  picture,
  title,
  firstName,
  lastName,
  email,
  gender,
  phoneNumber,
  cell,
  nationality,
  country,
  postcode,
  city,
}) {
  return (
    <div className="user">
      <img style={{ width: "60px", height: "60px" }} src={picture} alt="" />
      <div className="user__title">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>

      <p>
        {" "}
        <b>Email</b> : {email}
      </p>
      <p>
        <b>Gender</b> : {gender}
      </p>
      <div className="user__phoneNumber">
        <p>
          <b>Phone</b> : {phoneNumber}
        </p>
        <p>
          {" "}
          <b>Cell</b> : {cell}
        </p>
      </div>
      <div className="user__location"></div>
      <p>
        {" "}
        <b>Nationality</b> : {nationality}
      </p>
      <p>
        {" "}
        <b>Country</b> : {country}
      </p>
      <p>
        {" "}
        <b>City</b> : {city}
      </p>
      <p>
        {" "}
        <b>Postcode</b> : {postcode}
      </p>
    </div>
  );
}

export default User;
