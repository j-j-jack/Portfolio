import React, { Component } from 'react';
import { navbarItems  } from './navbarItems';
import { connect } from 'react-redux';
import { changeActiveNavTab, openMobileNav } from '../../actions';
import '../css/navbar.css';

class Navbar extends Component {
     constructor (props) {
         super(props);
         this.navRef = React.createRef();
         this.toggleRef = React.createRef();
         
     }

    mobileNavToggle () {
        this.props.openMobileNav(!this.props.mobileNavOpen);
        const visibility = this.navRef.current.getAttribute('data-visible');
        if (visibility==="false"){
            this.navRef.current.setAttribute('data-visible', 'true');
            this.toggleRef.current.setAttribute('aria-expanded', 'true');
        }
        else if (visibility==="true") {
            this.navRef.current.setAttribute('data-visible', 'false');
            this.toggleRef.current.setAttribute('aria-expanded', 'false');

        }
        console.log(this.navRef.current.getAttribute('data-visible'));        
    }

    renderList () {
        return navbarItems.map(item => {
            return (
                <li 
                    className={`flex ${item.id === this.props.activeTab ? 'active' : ''}`}
                    key={item.name}
                >
                    <a href={item.link}>{item.name}</a>
                </li>
            );
        })
    }

    render() {
        return (
        <React.Fragment>
            <button
                ref={this.toggleRef}
                aria-controls="navbar" 
                aria-expanded="false" 
                className="mobile-nav-toggle"
                onClick={() => this.mobileNavToggle()}
                >
                <span className="sr-only">Menu</span>
            </button>
            <nav ref={this.navRef} className="navbar" data-visible="false">
                <ul className="nav-container">
                    {this.renderList()}
                </ul>
            </nav>
        </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        activeTab: state.nav.activeTab,
        mobileNavOpen: state.nav.mobileNavOpen
    }
}

export default connect(mapStateToProps, { changeActiveNavTab, openMobileNav })(Navbar);