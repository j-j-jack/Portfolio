import React, { Component } from 'react';
import { navbarItems  } from './navbarItems';
import { connect } from 'react-redux';
import { changeActiveNavTab, openMobileNav } from '../../actions';
import "../css/glitch-colors.css";
import '../css/navbar.css';

class Navbar extends Component {
     constructor (props) {
        super(props);
        this.navRef = React.createRef();
        this.toggleRef = React.createRef();
        this.navLinkRefArray = React.createRef();
        this.hoverTabRef = React.createRef(null);
        this.previousHoverTabRef = React.createRef(null);
        this.hoverFunctionQueue = React.createRef([]);
     }
    
    componentDidMount () {
        this.navLinkRefArray.current = [];
        navbarItems.map(item => {
            this.navLinkRefArray.current.push(`nav-link-${item.id}`)
            return null;
        });
    }

    animationAdder = (tabId, type) => {
            const tab = document.getElementById(`nav-link-${tabId}`);
            const currentTabClassName = tab.className;
            let newTabClassName = 'nav-link';
            currentTabClassName.includes('atab') ? newTabClassName += ' atab' : newTabClassName += ' itab';
            newTabClassName += ' ' + type;
            console.log('current>>>>', newTabClassName);
            tab.className = newTabClassName;
    }

    mobileNavToggle () {
        if (this.mouseOverEnabled.current === true) {
            this.props.openMobileNav(!this.props.mobileNavOpen);
            const visibility = this.navRef.current.getAttribute('data-visible');
            if (visibility==="false"){
                this.navRef.current.setAttribute('data-visible', 'true');
                this.toggleRef.current.setAttribute('aria-expanded', 'true');
            }
            else if (visibility==="true") {
                this.navRef.current.setAttribute('data-visible', 'false');
                this.toggleRef.current.setAttribute('aria-expanded', 'false')
            }
        }
    }

    

    mouseOverTab (id) {
        if (this.hoverTabRef.current === null) {
            this.animationAdder(id, "activate-down");
            this.hoverTabRef.current = id;
            this.previousHoverTabRef.current = id;
            return;
        }

        this.previousHoverTabRef.current = this.hoverTabRef.current;
        this.hoverTabRef.current = id;

        if (this.hoverTabRef.current === this.previousHoverTabRef.current) {
            return;
        }
        
        if (this.hoverTabRef.current !== this.previousHoverTabRef.current) {
            if(this.hoverTabRef.current > this.previousHoverTabRef.current) {
                
                this.animationAdder(this.hoverTabRef.current, "activate-left");
                this.animationAdder(this.previousHoverTabRef.current, "deactivate-left");
            } else {
                this.animationAdder(this.hoverTabRef.current, "activate-right");
                this.animationAdder(this.previousHoverTabRef.current, "deactivate-right");
            }
        }
    }

    renderList () {
        // very important className stays on one line
        return navbarItems.map(item => {
            return (
                <li 
                    className="flex"
                    key={item.name}
                >
                    <a 
                        onMouseOver={()=> {
                            this.mouseOverTab(item.id);
                        }}
                        id = {`nav-link-${item.id}`}
                        className={`nav-link ${item.id === this.props.activeTab ? 'atab' : 'itab'}`}
                        href={item.link}>{item.name} 
                    </a>
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