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


# Whenever a state variable changes react will rerender the component 

# React uses Reconciliation Algorithm also known as React Fiber
- React creates a virtual DOM

- virtual DOM is the representation of the actual DOM 

github
acdlite/react-fiber-architecture