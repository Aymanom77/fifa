import React from 'react';
import Player from './Player';
import joueur from './joueur';


    function Playerlist() {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {joueur.map((joueur, index) => (
              <Player key={index} {...joueur} />
            ))}
          </div>
        );
      }

export default Playerlist;

