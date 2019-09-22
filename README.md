# React Guide to Development

### Debugging react
- To debug files on firefox access `Debugger` and open react files under `<File location>` and add breakpoints to debug the files.
- You can also install and use `react-develope-tools` extensions for both `firefox` or `chrome`. 

### Setting up project
- Install `create-react-app` by running `npm install -g create-react-app`.
- Once installed run `npx create-react-app <app-name>` to create the default application.
- Go to the app folder and run `npm start` to start the server. This is a live server and updates the application whenever changes are made to the application files.

### Lifecycle Hooks
- `constructor(props)` (Default ES6 class feature)
  - call `super(props)` inside to avoid side effects
  - Use to initiate state
- `getDerivedStateFromProps(props, state)`
  - Sync state between props passed in and current state
- `shouldComponentUpdate(nextProps, nextState)`
  - Can be used to set if react should update component in next cycle.
- `render()`
  - Prepare and structure JSX code
- Render Child components of `render`
- `componentDidMount()`
  - Don't update state here as it will call `render()` again
- `componentWillUnmount()`
  - Call for cleanup operations

- During update, another 2 methods are called after `getDerivedStateFromProps(props, state)` and `render()`. 
- `getSnapshotBeforeUpdate(prevProps, prevState)`
  - Use for last minute DOM ops such as scrolling position.
- `componentDidUpdate(prevProps, prevState, snapshot)`
  - Don't call setState synchronously but instead call it as a callback of something 
  - snapshot is returned from `getSnapshotBeforeUpdate()`

### React funcational components lifecycle
- `useEffect(func, [variablesOnWhichChangedFuncMustRun])` runs for every render in the functional component. 
- wrap `React.memo(<exportComponent>)` to cache component and only rerender when there is a change to props!

### Higher order component
- Components that wrap other components are called higher order component.
- Can be used to group multiple elements into a single component.
- Can also be used to handle errors and display application if no error and show a default page like 'Error: page not found' during an error.
- Can also be used to redirect to login page or application page based on login status.
- Use `<InnerComponent {...props} />` to spread the props operator and pass it to the inner element as props directly.

### State
- On class based components, states are defined in constructor call and accessible using `this.state`. 
- Use `this.setState({<changingFeatureKey>: <newValue>})`. SetState merges changes into existing state object based on the key value, so entire state object need not be passed.
- Use `prevState` in `this.setState((prevState, props) => {})` inorder to avoid using old state data when there needs to be continuity like in a counter increment or decrement.
- On functional components, use `[<statePointer>, <functionToUpdateState>] = useState({<initialState>})`. The first parameter in return array can be used to access the state at any given time and the second parameter can be called to update the state. 
- Unlike class based components, functional components setState need to be passed entire object to avoid overwrite.

### Reference to elements
- Use `ref={(element) => { //access element }}` to get access to reference to an element and access it in `componentDidMount()` to code. Also use `refVar = React.createElementRef` and pass this to `ref={refVar}`.
- For functional components, import `useRef` from react and call it `refVar = useRef(null)` and then pass `ref={refVar}` to use the reference variable. Access the variable only inside `useEffect()` instead of directly accessing in the function as the DOM is created only in the return statement.

### prop-types
- Use this module while building library or to simply add checks
- `import PropTypes from 'prop-types'` to import
- Extend component after definition by adding `propTypes` defining the types. `Component.propTypes = { click: PropTypes.func, age: PropTypes.number }`

### Design specs
- Avoid as much as possible to have multiple state components and use dumb functions when possible.
- Render function should be pure with no modifications occuring during `render()`
