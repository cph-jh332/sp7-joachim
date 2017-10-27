import React, {Component} from 'react';
import {Link, HashRouter as Router, Route} from 'react-router-dom';
import Article from "./components/Article";
import Images from "./components/Images";
import About from "./components/About";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Router>
                        <ul>
                            <li><Link to="/">Images</Link></li>
                            <li><Link to="/articles">Articles</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </Router>
                </header>
                <Router>
                    <main>
                        <Route exact path="/" component={Images}/>
                        <Route path="/about" component={About}/>
                        <Route path="/articles" component={Article}/>
                    </main>
                </Router>
            </div>
        );
    }
}

export default App;
