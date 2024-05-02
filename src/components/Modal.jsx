import React from "react";
import "./Modal.css";

export const Modal = () => {
  
  return (
    <div className="modal-container">
      <div className="modal">
        <form action="">
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input name="page" id="page" />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status" id="status" >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};
