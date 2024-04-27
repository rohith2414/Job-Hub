import React from "react";

const Registration = () => {
  return (
    <div className="registers">
      <div className="register1">
        <h2 className="font-bold">Recruiters</h2>
        <div className="form-group">
          <label htmlFor="inputAddress">Email</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="abc@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">password</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Department</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="management,marketing .."
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Job Role</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="content creator,developer .."
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>

      <div className="register2">
        <h2 className="font-bold">Job Seekers</h2>
        <div className="form-group">
          <label htmlFor="inputAddress">Email</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="abc@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">password</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Department</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="management,marketing .."
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Job Role</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="content creator,developer .."
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Registration;
