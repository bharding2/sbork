import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { Player } from './SborkApp';
import './PlayerForm.scss'

interface Props {
  player: Player
  addPlayer: (newPlayer: Player) => void;
  editPlayer: (newPlayer: Player) => void;
}

export const PlayerForm: FunctionComponent<Props> = (props: Props) => {
  const [newPlayer, setNewPlayer] = useState<Player>();

  useEffect(() => {
    if (props.player !== undefined) {
      setNewPlayer(props.player);
    }
  }, [props.player]);

  const handleChange = (event) => {
    const userInputPlayer = {
      ...newPlayer,
      [event.target.getAttribute('name')]: event.target.value,
    }

    setNewPlayer(userInputPlayer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.player !== undefined) {
      props.editPlayer(newPlayer);
    } else {
      props.addPlayer(newPlayer);
    }

    setNewPlayer(undefined);
  };

  return (
    <div className="PlayerForm">
      <form
        onSubmit={ handleSubmit }
      >
        <p>
          <label htmlFor="name">name</label>
          <textarea 
            onChange={ handleChange }
            name="name"
            value={ newPlayer && newPlayer.name || '' }
          />
        </p>
        <p>
          <label htmlFor="position">position</label>
          <textarea
            onChange={ handleChange } 
            name="position"
            value={ newPlayer && newPlayer.position || '' }
          />
        </p>
        <p>
          <label htmlFor="height">height</label>
          <textarea
            onChange={ handleChange } 
            name="height"
            value={ newPlayer && newPlayer.height || '' }
          />
        </p>
        <p>
          <label htmlFor="weight">weight</label>
          <textarea
            onChange={ handleChange } 
            name="weight"
            value={ newPlayer && newPlayer.weight || '' }
          />
        </p>
        <p>
          <label htmlFor="fortyYard">fortyYard</label>
          <textarea
            onChange={ handleChange } 
            name="fortyYard"
            value={ newPlayer && newPlayer.fortyYard || '' }
          />
        </p>
        <p>
          <label htmlFor="tenYard">tenYard</label>
          <textarea
            onChange={ handleChange } 
            name="tenYard"
            value={ newPlayer && newPlayer.tenYard || '' }
          />
        </p>
        <p>
          <label htmlFor="benchPress">benchPress</label>
          <textarea
            onChange={ handleChange } 
            name="benchPress"
            value={ newPlayer && newPlayer.benchPress || '' }
          />
        </p>
        <p>
          <label htmlFor="verticalJump">verticalJump</label>
          <textarea
            onChange={ handleChange } 
            name="verticalJump"
            value={ newPlayer && newPlayer.verticalJump || '' }
          />
        </p>
        <p>
          <label htmlFor="broadJump">broadJump</label>
          <textarea
            onChange={ handleChange } 
            name="broadJump"
            value={ newPlayer && newPlayer.broadJump || '' }
          />
        </p>
        <p>
          <label htmlFor="threeCone">threeCone</label>
          <textarea
            onChange={ handleChange } 
            name="threeCone"
            value={ newPlayer && newPlayer.threeCone || '' }
          />
        </p>
        <p>
          <label htmlFor="shortShuttle">shortShuttle</label>
          <textarea
            onChange={ handleChange } 
            name="shortShuttle"
            value={ newPlayer && newPlayer.shortShuttle || '' }
          />
        </p>
        <input 
          type="submit"
          value={ props.player !== undefined ? 'Edit Player' : 'Create Player' }
        />
      </form>
    </div>
  );
}