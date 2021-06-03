import React, { useState } from "react";

import Badge from "../../components/Badge/Badge.js";
import NavBar from "../../components/NavBar/NavBar.js";
import BadgeForm from "../../components/BadgeForm/BadgeForm";

import "./BadgeNew.css";

function BadeNew(props) {
  const [data, setData] = useState({
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  });

  function handleChange(e) {
    setData({
      ...data,
      form: {
        ...data.form,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <div className="Badge">
      <div className="BadgeNew">
        <NavBar />
        <div className="BadgeNew__hero">
          <img
            className="img-fluid"
            src="https://raw.githubusercontent.com/Sparragus/platzi-badges/master/src/images/badge-header.svg"
            alt="Logo platzi conf"
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={data.form.firstName}
              lastName={data.form.lastName}
              jobTitle={data.form.jobTitle}
              twitter={data.form.twitter}
              email={data.form.email}
            />
          </div>

          <div className="col">
            <BadgeForm onChange={handleChange} formValue={data.form} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadeNew;
