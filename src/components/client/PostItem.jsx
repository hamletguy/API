import React from "react";

const ClientItem = (props) => {
  const { post } = props;
  const { name, email, phone, website, address } = post;
  const { street, city, zipcode } = address;
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        marginRight: "3rem",
        marginBottom: "3rem",
      }}
    >
      <div className="card-header">{name}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
        <li className="list-group-item">{website}</li>
        <li className="list-group-item">{city}</li>
        <li className="list-group-item">{street}</li>
        <li className="list-group-item">{zipcode}</li>
      </ul>
    </div>
  );
};

export default ClientItem;
