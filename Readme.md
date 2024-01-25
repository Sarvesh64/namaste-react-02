# Namaste React 

# Parcel 
- Dev Build
- Local Server
- HMR = Hot Module Replacement (refreshes browser on saving.) 
- File Watching Alorithm = written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code from project
- different dev and prod bundles

# Namaste Food 

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 *      -img
 *      - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 * - Copyrights
 * - Links
 * - Address
 * - Contact
 */

 # Two types of exports and imports

 - Default Export/Import

 export default Component
import Component from './path

 - Named Export/Import

 export const Component
 import {Component} from './path

 # React Hooks
- Normal JS utility functions

- useState() - Super Powerfull State Variables in react
- useEffect()

    - Two arguments are passed in useEffect
    1. Callback function
    2. Dependency

# What is a Hook
- it is a normal javascript function

# Whenever a state variable changes react will rerender the component 

# React uses Reconciliation Algorithm also known as React Fiber
- React creates a virtual DOM

- virtual DOM is the representation of the actual DOM 

github
acdlite/react-fiber-architecture

# Using Microservices
 
- Seperation of Concerns
- Single Responsibility Principle


# Episode 6 
- Optional Chaining
- Use State
- updating values in State'
- Adding Shimmer
- Conditional Rendering

# Episode 7

- if no dependency array => useEffect is called on every render
- if dependency array is empty => useEffect is called on only initial render(just once)
- if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
    
    -npm i react-router-dom

    - <Link> does not refreshes the whole page it just changes the component
    - <a href > refreshes the whole page.

    - 2 types of routing in web apps 
        - Client side routing -> refreshes the whole page only once. 
        - Server side routing -> page is being fetched from the server such as: switching from index.html to home.html

# Dynamic Routing