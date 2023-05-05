So in total to add a logic thorugh redux we needed to make steps:
*  action.js file:  Declare our reducer actions (like a REDUCER EVENT ) in format:
    and export this function 
    export const createTodo = text => ({
        type: CREATE_TODO,
        payload: { text },
    });

* reducers.js - declare our reducer class:
    export const todoReducer = (state = [], action) => {
        /* state is a list, action is a string...*/
        return newState (the same type as first param)
    }

* store.js - configure function `configureStore` which works with our `reducers`

* adjust mapping in each React-component e.g. TodoList.js (there are two buttons `onRemovePressed` and `onCompletePressed`)

So on the highest entry-point level: (index.js):
1.    import { configureStore } from './store';
    <Provider store={store}> <=highest level of the react-componenets with attribtue store
        </App>

2. In insidedes of App-component you won't see anything related to the redux storage! But just calling other components;
3. All other components: e.g.: could have something like mapping:
        const mapStateToProps = state => ({
            todos: state.todos,
        });

        const mapDispatchToProps = dispatch => ({
            onCreatePressed: text => dispatch(createTodo(text)),
        });

        export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
        <!-- Don't forget to owerwirte export of our reactCompnent by `connect` wrapper-->

Don't forget to install in Chrome the `redux-devtools` extension