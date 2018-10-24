import React from 'react';

const Header = (props) => {

  let menu = props.menu.map((item, i) => {
    return (
      <li key={ item.key } onClick={ item.changeView } className="header-container__list-item">{ item.name }</li>
    )
  })

  return (
    <div className="header-container">
      <div className="header-container__logo"><img src={ props.logo } /></div>
      <div className="header-container__menu">
        <ul className="header-container__list">{ menu }</ul>
      </div>
    </div>
  )
}

export default Header;
