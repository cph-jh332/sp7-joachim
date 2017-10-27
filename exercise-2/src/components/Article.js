import React from 'react';
import {Link, Route} from 'react-router-dom';

const data = require('../articles.json');

export default class Article extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                    <th>id</th>
                    <th>title</th>
                    </thead>

                    <tbody>
                        {data.article.map((article) => (<tr>
                            <td>{article.id}</td>
                            <td>{article.title}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}