# Namaste React

This repository contains the code for the Namaste React course.

## Episode 01

- [x] 01_Theory/Episode-01/index.html
- [x] 01_Theory/Episode-01/script.js
- [x] 01_Theory/Episode-01/style.css

## Episode 02

# Parcel

- Dev Server
- Local Server  
- HMR - Hot Module Replacement (when we make changes to the code, it will automatically update the changes without reloading the page)
- Parcel use a File Watching Algorithm - written in C++ that why it will so HMR and faster than other bundlers.
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production bundles.


# Food Ordering APP

/**
 *  Header (Navbar)
 *   - Logo
 *   - Nav items (right side)
 *  Body
 *   - Search Bar
 *   - Resturant container
 *      - Resturant card
 *           - Img
 *           - Name
 *           - Rating
 *           - Cusines
 *  Footer
 *   - Copyright
 *   - social links
 *   - address
 *   - contact
 */

 # Exports/Imports

 There are Two types of Export/Import

- Default Export/Import 

  export default Component;
  import Component from "./path";

- Named Export/Import

  export const Component;
  import { Component } from "./path";

  # React Hooks

  - Hooks is just a normal js utility function which is given to us by react. It is pre-built, the only thing is tha function comes with some superpower. (the Function written logic behind the scene,  a utility function given by react)

 - useState() - It used to generate superpowerful react variables.
 - useEffect()

 ## conditional Rendering 

  - conditional render ing
  - if(listOfRestaurants.length === 0) {
  -  return <Shimmer />
  - }

  ## useEffect()

  ### When the Use Effect is called ?
  - So basically the useEffect called after every render of that component, but because we put the dependency array it changes the behaviour of its render

  - if no dependency array => useEffect called on Every Rendering cycle
  - if the dependency arraay is empty = [] => useEffect is called on initial render(just once)
  - if we put somwwthing inside the dependency array => then it will be only called when the dependency changes
  - E.g. [btnNameReact] => UseEffect called everytime the btnNameReact updates.

  -NOTE - hooks can called only inside a function component never call it outside, try it called it on the top, never called it inside if...else function it can create inconsistent in your progrm.

  ## Routing

  - There are two types of routing
    - Server side Routing
    - Client side Routing

# React Life Cycle Diagram

- [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]