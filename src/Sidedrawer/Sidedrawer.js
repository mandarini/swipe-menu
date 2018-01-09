import React, {Component} from 'react';
import './sidedrawer.css';

class Sidedrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    path: '/home',
                    title: 'Home',
                    description: 'Homepage'
                },
                {
                    path: '/test1',
                    title: 'Test 1',
                    description: 'Test Page 1'
                },
                {
                    path: '/test2',
                    title: 'Test 2',
                    description: 'Test Page 2'
                },
                {
                    path: '/test3',
                    title: 'Test 3',
                    description: 'Test Page 3'
                },
                {
                    path: '/test4',
                    title: 'Test 4',
                    description: 'Test Page 4'
                }
            ]
        }
        ;
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <div className="nav-head">
                    <span className="bar-title-nav">Title</span>
                </div>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>
                            <a href={item.path}>
                                <p className="title">{item.title}</p>
                                <p className="subtitle">{item.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Sidedrawer;
