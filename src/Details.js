import React from "react";

const Details = props => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 6)}</code>
    </pre>
  );
};

export default Details;
