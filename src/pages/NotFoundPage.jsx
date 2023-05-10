// import { Redirect } from "react-router-dom";
// import { useState, useEffect } from "react";

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
    <div>
      <h1>404 Error: Page Not Found</h1>
      <p>{"Sorry, we couldn't find the page you were looking for."}</p>
      <p>You will be redirected to the home page in 5 seconds.</p>
    </div>
  );
}
