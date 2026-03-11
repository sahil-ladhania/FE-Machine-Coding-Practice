import { useState, useEffect } from "react";

// Steps:
// 1. Create a state variable to hold the window width and height
// 2. Create a handler function that reads the current window width and height and updates the state
// 3. Inside a useEffect, call the handler once immediately to set the initial size
// 4. Attach the handler as a listener to the window resize event
// 5. Remove the resize listener when the component unmounts
// 6. Return the width and height

function useWindowSize() {
  // TODO: implement window size tracking logic
  // return { width, height }
}

export default useWindowSize;
