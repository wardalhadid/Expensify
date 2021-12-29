import React from "react";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info} </p>
  </div>
);

 const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private Info. Please don't share</p>}
      <WrappedComponent {...props}/>
    </div>
  );
 };

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ?
      <WrappedComponent {...props}/> :
      <p>Please log in to see info...</p>
      }
    </div>
  );
 };

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

export default AuthInfo;