# Exercise

`store.getState()`
gives us current state

`<ul></ul>`
renders todos from Home. Home needs to get the state from the store.

- [react-redux](https://react-redux.js.org/using-react-redux/connect-mapstate): Connect

  - Connect takes two arguments: 1. state, 2. dispatch

    1. be able to getState of store? : get the current state

    - `mapStateToProps` connects components to store (= getting somthing from redux and put it in to state)

    2. be able to dispatch store?
       : call action creator

    - `mapDispatchToProps`
      - (cf) `export default connect(null, napDispatchToProps`when we need only dispatch (without getState)

# [Redux Toolkit](https://redux-toolkit.js.org/introduction/quick-start)

A package to make code DRY (like a package)

- ` npm install @reduxjs/toolkit`

1. `createAction` any information you want to send to action will be sent with payload
2. `createReducer` instead of switch. Also, we can mutate state! (feat.immer.js) - Careful not to mutate + return. It should be either return new state or mutate state.
3. `configureStore` instead of `const store = createStore(reducer);`
4. `createSlice` This creates reducer as well as action.

# Reference

- 노마드코더 (http://nomadcoders.co/) 초보자를 위한 리덕스 101
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related)
