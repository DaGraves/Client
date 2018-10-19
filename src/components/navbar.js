import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import Icon from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu';
import { ic_close } from 'react-icons-kit/md/ic_close'
import './navbar.css'; 

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, isCollapsed: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  handleMenu(){
    this.setState({ isCollapsed: !this.state.isCollapsed})
  }
  render(){

    let logInOut = (<NavLink to="/login">Login/Signup</NavLink>);

    let navLinks = '';

    if (this.props.loggedIn) {
      logInOut = (
        <NavLink to="/logout" onClick={() => this.logOut()}>Log out</NavLink>
      );

      navLinks = (
        <React.Fragment>
          <li>
            <NavLink to='/progress' activeClassName='is-active'>Progress</NavLink>
          </li>
          <li>
            <NavLink to='/practice' >Practice</NavLink>
          </li>
        </React.Fragment>
      );
    }

    let navbar = (
    
    <nav className='row'>
      <NavLink className='col-6 left' to='/'>Aprender</NavLink>
      <ul className='nav-ul col-6 right'>
        <li>
          <NavLink to='' >About</NavLink>
        </li>
          {navLinks}
        <li>
          {logInOut}
        </li>
      </ul>
    </nav>
    )

    if (this.state.width < 376) {
      if (!this.state.isCollapsed) {
        navbar = 
        <nav className='row small center'>
          <button onClick={()=>this.handleMenu()} className='menuToggle'><Icon icon={menu} size={25} /></button>
          </nav>
      } 
      else 
      {
      navbar = 
        <nav className='row small center'>
        <button onClick={() => this.handleMenu()} className='menuToggle'><Icon icon={ic_close} size={25} /></button>
          <NavLink className='col-6 center logo' to='/'><strong>Aprender!</strong></NavLink>
          <ul className='nav-ul col-6 center'>
            <li>
              <NavLink to='' >About</NavLink>
            </li>
            {navLinks}
            <li>
              {logInOut}
            </li>
          </ul>
        </nav>
    }
  }

    return (
      <header className='nav-bar'>
          { navbar }
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);