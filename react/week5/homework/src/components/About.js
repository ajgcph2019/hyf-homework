import React from "react";
function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        Many modern websites are actually made up of a single page, they just
        look like multiple pages because they contain components which render
        like separate pages. These are usually referred to as SPAs - single-page
        applications. At its core, what React Router does is conditionally
        render certain components to display depending on the route being used
        in the URL (/ for the home page, /about for the about page, etc.).
      </p>
    </div>
  );
}
export default About;
