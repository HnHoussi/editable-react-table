import React from "react";
import "./Modal.css";

export const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <form action="">
          <div>
            <label htmlFor="page">Page</label>
            <input name="page" id="page" />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select name="status" id="status" >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
