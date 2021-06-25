import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/loader.svg";
import "./Loader.scss";

export function Loader() {
  return (
    <div className="loader">
      <Logo className="logo" />
    </div>
  );
}
