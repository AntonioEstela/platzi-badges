import React from "react";

export default function BadgeForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.formValue);
  }

  return (
    <div>
      <h1>New Attendant</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label className="form-label">First Name</label>
          <input
            onChange={props.onChange}
            type="text"
            className="form-control"
            name="firstName"
            value={props.formValue.firstName}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Last Name</label>
          <input
            onChange={props.onChange}
            type="text"
            className="form-control"
            name="lastName"
            value={props.formValue.lastName}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Email</label>
          <input
            onChange={props.onChange}
            type="email"
            className="form-control"
            name="email"
            value={props.formValue.email}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Job Title</label>
          <input
            onChange={props.onChange}
            type="text"
            className="form-control"
            name="jobTitle"
            value={props.formValue.jobTitle}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Twitter</label>
          <input
            onChange={props.onChange}
            type="text"
            className="form-control"
            name="twitter"
            value={props.formValue.twitter}
          />
        </div>
        <div className="mt-3 mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
