import React from "react";

import Output from "./Output";

const OutputList = (props) => {
  return props.users.map((user) => {
    return <Output name={user.name} age={user.age} key={user.id} />;
  });
};

export default OutputList;
