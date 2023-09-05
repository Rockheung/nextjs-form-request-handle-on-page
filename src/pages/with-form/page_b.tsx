import React from "react";

const PageB = () => {
  return (
    <form method="POST" action="/with-form/page_a">
      <input type="text" name="name" />
    </form>
  );
};

export default PageB;
