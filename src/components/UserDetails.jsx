import { useAuthenticator } from "@aws-amplify/ui-react";
import React from "react";


const UserDetails = ({ signOut }) => {
  const { user } = useAuthenticator((context) => [context.user]);
  user.FName = user.attributes.given_name;
  user.LName = user.attributes.family_name;
  user.Email = user.attributes.email;
  user.Username = user.username;
  user.password = user.password;



  return () => {
<>
<h2>Welcome {user.FName} {user.LName}!</h2>
<p>Email: {user.Email}</p>
<p>Username: {user.Username}</p>
</>
  };
}

export default UserDetails;