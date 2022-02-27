import React from "react";
import "./WinnerUser.scss";

function WinnerUser({
  picture,
  title,
  firstName,
  lastName,
  email,
  gender,
  phoneNumber,
  cell,
  city,
  country,
  postcode,
  nationality,
}) {
  return (
    <div>
      <img style={{ width: "60px", height: "60px" }} src={picture} alt="" />
      <div>
        <p>{title}</p>

        <p>{firstName}</p>

        <p>{lastName}</p>
      </div>

      <p>{email}</p>
      <p>{gender}</p>
      <div>
        <p>{phoneNumber}</p>
        <p>{cell}</p>
      </div>
      <div>
        <p>{city}</p>
        <p>{country}</p>
        <p>{postcode}</p>
      </div>
      <p>{nationality}</p>
    </div>
  );
}

export default WinnerUser;
