import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div
        key={alert.id}
        className={`alert alert-${alert.type} bg-red-600 text-white p-4 m-3 text-center text-xl`}
        role="alert"
        aria-live="assertive">
        <FontAwesomeIcon icon={faInfoCircle} /> {alert.message}
      </div>
    ))
  );
};

export default Alerts;
