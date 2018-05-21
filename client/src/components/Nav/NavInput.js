import React from "react";

export const NavInput = props => (
  <input
    onChange={props.handleInputChange}
    value={props.value}
    class="form-control mr-sm-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    id="search"
  />
);
