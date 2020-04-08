
import React from'react'
export const Pokemon = ({ name, maxHP, maxCP, image, attacks }) => (  <div className="pokemon">
    <div className="pokemon__name">
      <p>{name}</p>
    </div>
    <div className="pokemon__meta">
      <span>{maxHP}</span>
      <span>{maxCP}</span>
    </div>
    <div className="pokemon__image">
      <img src={image} alt={name} />
    </div>
    <div className="pokemon__attacks">
      {
        attacks &&
        attacks.special
          .slice(0, 3)
          .map(attack => (
            <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
          ))}
    </div>
  </div>
);
