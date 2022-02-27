import React from "react";
import "./User.scss";

function User({
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
    <div className="user">
      <img src={picture} alt="" />
      <div
        className="title"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        Title
        <p>{title}</p>
        firstName
        <p>{firstName}</p>
        lastname
        <p>{lastName}</p>
      </div>
      <p>{email}</p>
      <p>{gender}</p>
      <div className="phoneNumber">
        Phone phonenumber
        <p>{phoneNumber}</p>
        cell
        <p>{cell}</p>
      </div>
      <div
        className="location"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        Location:
        <p>{city}</p>
        <p>{country}</p>
        <p>{postcode}</p>
      </div>
      <p>{nationality}</p>
    </div>
  );
}

export default User;
