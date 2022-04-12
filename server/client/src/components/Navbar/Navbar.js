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
        this.navLinkRefArray = React.createRef();
        this.hoverTabRef = React.createRef(null);
        this.previousHoverTabRef = React.createRef(null);
        this.hoverTimeout = React.createRef(null);
        this.previousTab = React.createRef(null);
     }
    
    componentDidMount () {
        this.navLinkRefArray.current = [];
        navbarItems.map(item => {
            this.navLinkRefArray.current.push(`nav-link-${item.id}`)
            return null;
        });
        this.changeTabAnimation(this.props.activeTab);
    }

    componentDidUpdate () {
        this.changeTabAnimation(this.props.activeTab);
    }

    animationAdder = (tabId, type) => {
            const tab = document.getElementById(`nav-link-${tabId}`);
            const currentTabClassName = tab.className;
            let newTabClassName = 'nav-link';
            currentTabClassName.includes('atab') ? newTabClassName += ' atab' : newTabClassName += ' itab';
            newTabClassName += ' ' + type;
            tab.className = newTabClassName;
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
                this.toggleRef.current.setAttribute('aria-expanded', 'false')
            }
    }

    

    mouseOverTab (id) {
        if(this.hoverTimeout.current) {
            clearTimeout(this.hoverTimeout.current);
        }
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

    mouseOutTab (id) {
        this.hoverTimeout.current = setTimeout(() => {
            this.hoverTabRef.current = null;
            this.previousHoverTabRef.current = null;
            this.animationAdder(id, "deactivate-up");
        }, 500)
    }

    changeTabAnimation(id) {
        const activeTab = document.getElementById(`nav-span-${id}`)
        let previousActiveTab = null;
        
        if (this.previousTab.current !== null) {
            previousActiveTab = document.getElementById(`nav-span-${this.previousTab.current}`);
        }

        if (id > this.previousTab.current) {
            if (this.previousTab.current===null) {
                activeTab.className="nav-li nav-li-initial";
            }
            if (previousActiveTab !== null) {
                previousActiveTab.className = "nav-li nav-li-deactivate-left";
                activeTab.className = "nav-li nav-li-activate-left"
            }
            this.previousTab.current = id;
            return
        }
        
        if (id < this.previousTab.current) {
            if (this.previousTab.current===null) {
                activeTab.className="nav-li nav-li-initial";
            }
            if (previousActiveTab !== null) {
                previousActiveTab.className = "nav-li nav-li-deactivate-right";
                activeTab.className = "nav-li nav-li-activate-right"
            }
            this.previousTab.current = id;
        }
    }

    renderList () {
        // very important className stays on one line
        return navbarItems.map(item => {
            return (
                <li 
                    key={item.name}
                >
                    <span 
                        id={`nav-span-${item.id}`}
                        className="nav-li">
                    <a 
                        onMouseOver={()=> {
                            this.mouseOverTab(item.id);
                        }}
                        onMouseOut={()=> {
                            this.mouseOutTab(item.id);
                        }}
                        id = {`nav-link-${item.id}`}
                        className="nav-link"
                        href={item.link}>{item.name} 
                    </a>
                    </span>
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
            <div className="nav-container-outer">
                <ul className="nav-container">
                    {this.renderList()}
                </ul>
            </div>
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