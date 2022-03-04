import React, { Component } from 'react';
import { navbarItems  } from './navbarItems';
import { connect } from 'react-redux';
import { changeActiveNavTab } from '../../actions';
import './navbar.css';

class Navbar extends Component {

    renderList () {
        return navbarItems.map(item => {
            return (
                <li 
                    className={`flex ${item.id === this.props.activeTab ? 'active' : ''}`}
                    key={item.name}
                    onClick={() => this.changeTab(item.id)}
                >
                    <a href={item.link}>{item.name}</a>
                </li>
            );
        })
    }

    changeTab (tabNumber) {
        this.props.changeActiveNavTab(tabNumber);
    }

    render() {
        return (
        <nav className="navbar">
            <ul className="nav-container">
                {this.renderList()}
            </ul>
        </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return { activeTab: state.nav.activeTab }
}

export default connect(mapStateToProps, { changeActiveNavTab })(Navbar);