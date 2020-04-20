import React from "react";

function NotFound(props) {
  const { type } = props;

  return (
    <div className="not-found rounded-borders">
      <h2>404</h2>
      <p>{`${type.charAt(0).toUpperCase()}${type
        .substring(1)
        .toLowerCase()} not found`}</p>
    </div>
  );
}

export default NotFound;
