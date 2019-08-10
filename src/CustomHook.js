import React, { useState, useEffect } from "react";

const data = [{ id: 1, Name: "Raja" }, { id: 2, Name: "Kondla" }];

const getUser = id => {
  return data.find(cur => cur.id === id);
};

const useCustomHook = ({ Component, id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser(id));
  });

  return user === null ? <>Loading...</> : <Component user={user} />;
};

export default useCustomHook;
