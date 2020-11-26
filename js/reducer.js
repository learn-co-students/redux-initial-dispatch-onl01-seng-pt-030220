let state

//the default argument for state sets the undefined state to the object {count: 0}
function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

// provides an initial rendering of the state
// and gives us the ability to set our initial state in our reducer
dispatch({ type: '@@INIT' })