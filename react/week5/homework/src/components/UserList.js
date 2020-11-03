import React from "react";

function UserList(props) {
  console.log(props);
  return (
    <div>
      <img src={props.avatar_url} alt="Profile picture of searched user" />
      <a href={props.html_url}>{props.html_url}</a> 
    </div>
  );
}
export default UserList;
