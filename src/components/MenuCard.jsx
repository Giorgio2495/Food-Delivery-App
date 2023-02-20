import React from 'react';

const MenuCard = ({imgSrc, name, name1, name2, isActive}) => {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
        <div className='imgBox'>
            <img src={imgSrc} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{name1}</p>
        <p>{name2}</p>
    </div>
  );
}

export default MenuCard;