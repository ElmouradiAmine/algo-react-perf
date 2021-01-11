import React, { useState, useEffect } from "react";
import axios from "axios";

// BAD EXAMPLE
// This is a bad use of useEffect, because it will run everytime the component updates,
// And that's not necessary because we only need to run this effect, only when the user changes.

const UserBadExample = (props) => {
  //...
  useEffect(() => {
    const subscription = props.user.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  });
  //...
  return <div></div>;
};

//SOLUTION EXAMPLE
// Make sure the effect only runs when the user changes.

const User = (props) => {
    //...
    useEffect(() => {
      const subscription = props.user.subscribe();
      return () => {
        subscription.unsubscribe();
      };
    }, [props.user]);
    //...
    return <div></div>;
  };
  