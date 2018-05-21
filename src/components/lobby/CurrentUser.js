import React from 'react';

const CurrentUser = props => (
  <section className="">
    {props.uid ?
      "user is logged in" :
      "please log in to view battles and sheets."}
  </section>
);

export default CurrentUser;
