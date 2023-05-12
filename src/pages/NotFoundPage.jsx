// import { Redirect } from "react-router-dom";
// import { useState, useEffect } from "react";
import error from "../assets/images/Group3.svg";

export default function NotFoundPage() {
  // const [redirected, setRedirected] = useState(false);

  // useEffect(() => {
  //   const redirectTimer = setTimeout(() => {
  //     setRedirected(true);
  //   }, 5000); // redirect after 5 seconds
  //   return () => clearTimeout(redirectTimer); // cleanup timer on unmount
  // }, []);

  // if (redirected) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="NotFoundPage">
      <img src={error}  alt="404" />
    </div>
  );
}
