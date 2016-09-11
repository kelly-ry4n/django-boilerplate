const React = require('react')
const ReactDOM = require('react-dom')
const app = require('./app')
const Redux = require('redux')
const IpsumReducer = require('./reducers')
const ReduxThunk = require('redux-thunk').default
const ipsumActions = require('./actions')
const ReactRedux = require('react-redux')
const $ = require('jquery')
const ReactRouter = require('react-router')

const Router = ReactRouter.Router
const Route = ReactRouter.Route
const Link = ReactRouter.Link
const browserHistory = ReactRouter.browerHistory

require('../scss/example/example.scss')
require('../scss/materialize/sass/materialize.scss')
require('materialize-css')

$(document).ready( () => {

    window.store = Redux.createStore(
        IpsumReducer.Reducer,
        Redux.applyMiddleware(ReduxThunk),
    )


    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={app.ExampleComponent}> </Route>
                <Route path="about" component={app.About}></Route>
            </Router>
        </ReactRedux.Provider>,
        document.getElementById('react-app')
    )
    store.dispatch(ipsumActions.beginLoad())
})

