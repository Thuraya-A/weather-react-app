import React from "react";

export default function SearchEngine(props) {
  return (
    <form
      onSubmit={getApi}
      action="Search for city"
      className="row g-3 align-items-center"
      id="search-form"
    >
      <div className="mb-3 col-lg-6 col-md-6 col-sm-12 search-bar">
        <input
          onChange={updateCity}
          type="text"
          className="form-control"
          id="search-input"
          placeholder="Search for city"
        />
      </div>
      <div className="col-lg-auto col-md-auto col-sm-4 form-text go">
        <button type="submit" className="btn btn-primary go-button">
          Go
        </button>
      </div>
      <div className="col-lg-auto col-md-auto col-sm-6 form-text current">
        <button type="submit" className="btn btn-primary go-button">
          Current
        </button>
      </div>
    </form>
  );
}
