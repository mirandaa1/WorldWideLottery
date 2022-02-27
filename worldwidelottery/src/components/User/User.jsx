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
  nationality,
}) {
  return (
    <div className="user">
      <img style={{ width: "60px", height: "60px" }} src={picture} alt="" />
      <div className="user__title">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>

      <p>{email}</p>
      <p>{gender}</p>
      <div className="user__phoneNumber">
        <p>{phoneNumber}</p>
        <p>{cell}</p>
      </div>
      <div className="user__location"></div>
      <p>{nationality}</p>
    </div>
  );
}

export default User;
