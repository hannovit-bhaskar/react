
## Create a simple function component which shows “hello world” in the screen

## Create a class component which shows “Hello, universe” in the screends

| Functional component | Class component |
| --------------- | --------------- |
| A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). | A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). |
| There is no render method used in functional components. | It must have the render() method returning JSX (which is syntactically similar to HTML) |
| Functional component run from top to bottom and once the function is returned it cant be kept alive. | Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component. | 
| Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI. | Also known as Stateful components because they implement logic and state. |
| React lifecycle methods (for example, componentDidMount) cannot be used in functional components. | React lifecycle methods can be used inside class components (for example, componentDidMount). |
| React lifecycle methods can be used inside class components (for example, componentDidMount). | It requires different syntax inside a class component to implement hooks. |
| It requires different syntax inside a class component to implement hooks. | It requires different syntax inside a class component to implement hooks. |
| Constructors are not used. | Constructor are used as it needs to store state.  |