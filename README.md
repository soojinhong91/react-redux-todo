# Exercise

`store.getState()`
gives us current state

`<ul></ul>`
renders todos from Home. Home needs to get the state from the store.
(https://react-redux.js.org/using-react-redux/connect-mapstate)

- react-redux: Connect

  - Connect takes two arguments: 1. state, 2. dispatch

    1. be able to getState of store? : get the current state

    - `mapStateToProps` connects components to store (= getting somthing from redux and put it in to state)

    2. be able to dispatch store?
       : call action creator

    - `mapDispatchToProps`
      - (cf) `export default connect(null, napDispatchToProps`when we need only dispatch (without getState)

# Thanks to

노마드코더 (http://nomadcoders.co/) 초보자를 위한 리덕스 101
