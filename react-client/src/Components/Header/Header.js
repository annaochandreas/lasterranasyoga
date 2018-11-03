import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  console.log(props);

  let menu = props.menu.map((item, i) => {
    return (
      <li key={ item.key }><Link to={ item.route }>{ item.name }</Link></li>
    )
  })

  return (
    <div className="Header">
      <div className="Header__logo"><img src={ props.logo } alt="logo" /></div>
      <div className="Header__menu">
        <ul className="Header__list">{ menu }</ul>
      </div>
    </div>
  )
}

export default Header;
