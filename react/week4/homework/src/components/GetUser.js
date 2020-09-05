import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import UserList from "./UserList";

function GetUser() {
  const [status, setStatus] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [value] = useDebounce(inputValue, 1000);
  const [userData, setUserData] = React.useState([]);

  useEffect(() => {
    if (!inputValue) return;

    const fetchData = async () => {
      setStatus("loading");

      const response = await fetch(
        `https://api.github.com/search/users?q=${value}`
      );
      const dataFromApi = await response.json();

      console.log(dataFromApi);
      setUserData(dataFromApi.items);
      setStatus("fetched");
    };
    fetchData();
  }, [value]);
  return (
    <div>
      <h1>Github Search</h1>
      <input
        type="text"
        name="query"
        placeholder="Enter username to search "
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
             <p>{status}</p> 
      {userData &&
        userData.map((user) => {
          return <UserList key={user.id} {...user} />;
        })}
    </div>
  );
}

export default GetUser;
