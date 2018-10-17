import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

    let logInOut = (<Link to="/login">Login/Signup</Link>);

    let navLinks = '';

    if (this.props.loggedIn) {
      logInOut = (
        <Link to="/logout" onClick={() => this.logOut()}>Log out</Link>
      );

      navLinks = (
        <React.Fragment>
          <li>
            <Link to='/progress' >Progress</Link>
          </li>
          <li>
            <Link to='/practice' >Practice</Link>
          </li>
        </React.Fragment>
      );
    }

    let navbar = (
    
    <nav className='row'>
      <Link className='col-6 left' to='/'><strong>Privet!</strong></Link>
      <ul className='nav-ul col-6 right'>
        <li>
          <Link to='' >About</Link>
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
          <Link className='col-6 center logo' to='/'><strong>Privet!</strong></Link>
          <ul className='nav-ul col-6 center'>
            <li>
              <Link to='' >About</Link>
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