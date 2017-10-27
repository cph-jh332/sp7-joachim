//Create a new file App2.js, and copy all from this file into is

import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Prompt } from "react-router-dom";

//Todo: This component must be completed
class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "book": { title: "", info: "" }, isDirty: false }
    }

    onSave = () => {
        this.props.bookStore.addBook({id: 0, title: this.state.title, info: this.state.info});
        this.props.onAddBook();
        this.setState({isDirty: false});
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'title'){
            this.setState({
                title: value,
                isDirty: true
            })
        }else if(name === 'info'){
            this.setState({
                info: value,
                isDirty: true
            })
        }
    }



    render() {
        return (
            <div>
                Title: <input name="title"  onChange={this.onChange}/>
                Info: <input name="info" onChange={this.onChange}/>
                <button onClick={this.onSave}>Save</button>
                {
         <Prompt
         when={this.state.isDirty}
         message="Yoy have unsaved data that will be lost!"
         />}
            </div>
        )
    }
}


//Views start
const Home = () => (
    <div>
        <h2>Home View</h2>
        <p>Info about this site</p>
    </div>
)

const Company = () => {
    return (
        <div>
            <h2>About Us</h2>
            <p>Our about page</p>
        </div>
    )
}
class Product extends React.Component {
    constructor(props) {
        super(props);
        console.log("props",props);
        this.state = { bookStore: props.bookStore }
    }

    onBookWasAdded = ()=>{
        //Nice and easy way to force a rerender
        this.forceUpdate();
    }

    onDelete(e){
        e.preventDefault();
        this.props.bookStore.deleteBook(e.target.title);
        this.forceUpdate();
    }

    render() {
        const books = this.state.bookStore.books;
        let bookStore = this.state.bookStore;
        const match = this.props.match;
        return (<div>
            <h2>Our Products</h2>
            <h4>All our great books </h4>
            <ul>
                {books.map((book) => <li key={book.id}>
                    <NavLink activeClassName="activeV2"
                             to={`${match.url}/detail/${book.id}`}>{book.title}</NavLink> <button onClick={this.onDelete.bind(this)} title={book.title}>Delete</button></li>)}
            </ul>
            <Link to={`${match.url}/add`}>Add book</Link>

            <div style={{ backgroundColor: "lightGray", padding: 5, marginTop: 10 }}>
                <Route path={`${match.url}/add`} render={(props) => <AddBook bookStore={bookStore}
                                                                             onAddBook={this.onBookWasAdded} />} />
                <Route path={`${match.url}/detail/:id`} render={(props) => {
                    return (<Details {...props} bookStore={bookStore}/>)
                }} />
            </div>
        </div>)
    }
}
//Views end

class Details extends React.Component {

    render() {
        let id = this.props.match.params.id;
        let book = this.props.bookStore.books.filter((book) => {
            return book.id === Number(id);
        })[0];
        return (
            <div style={{ padding: 4 }}>
                <h4 style={{ color: "steelblue" }}>Detailed info for the title: {book.title}</h4>
                <p>Info: {book.info}</p>
                <br />
                <Link to="/products">Products</Link>
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <ul className="header">
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
                    <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
                </ul>
            </div>
        );
    }
}

//DataStore for this Demo
//Place in a file bookStore.js

//Export the instance when placed in a separate file
//End of BookStore

//Replace the render method in index.js with this and import App2.js


export default class App2 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router >
                <div>
                    <Header />
                    <Switch>
                        <Route path="/products" render={(props) => (<Product {...props} bookStore={this.props.bookStore} />)} />
                        <Route path="/company" component={Company} />
                        <Route component={Home}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}