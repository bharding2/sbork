import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { Player } from './SborkApp';
import './PlayerForm.scss'

interface Props {
  addPlayer: (newPlayer: Player) => void;
}

export const PlayerForm: FunctionComponent<Props> = (props: Props) => {
  const [newPlayer, setNewPlayer] = useState<Player>({name: ''} as Player);

  const handleChange = (event) => {
    const userInputPlayer = {
      ...newPlayer,
      [event.target.getAttribute('name')]: event.target.value,
    }

    setNewPlayer(userInputPlayer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addPlayer(newPlayer);
    setNewPlayer({name: ''} as Player);
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
            value={ newPlayer.name }
          />
        </p>
        <p>
          <label htmlFor="position">position</label>
          <textarea
            onChange={ handleChange } 
            name="position"
            value={ newPlayer.position }
          />
        </p>
        <p>
          <label htmlFor="height">height</label>
          <textarea
            onChange={ handleChange } 
            name="height"
            value={ newPlayer.height }
          />
        </p>
        <p>
          <label htmlFor="weight">weight</label>
          <textarea
            onChange={ handleChange } 
            name="weight"
            value={ newPlayer.weight }
          />
        </p>
        <p>
          <label htmlFor="fortyYard">fortyYard</label>
          <textarea
            onChange={ handleChange } 
            name="fortyYard"
            value={ newPlayer.fortyYard }
          />
        </p>
        <p>
          <label htmlFor="tenYard">tenYard</label>
          <textarea
            onChange={ handleChange } 
            name="tenYard"
            value={ newPlayer.tenYard }
          />
        </p>
        <p>
          <label htmlFor="benchPress">benchPress</label>
          <textarea
            onChange={ handleChange } 
            name="benchPress"
            value={ newPlayer.benchPress }
          />
        </p>
        <p>
          <label htmlFor="verticalJump">verticalJump</label>
          <textarea
            onChange={ handleChange } 
            name="verticalJump"
            value={ newPlayer.verticalJump }
          />
        </p>
        <p>
          <label htmlFor="broadJump">broadJump</label>
          <textarea
            onChange={ handleChange } 
            name="broadJump"
            value={ newPlayer.broadJump }
          />
        </p>
        <p>
          <label htmlFor="threeCone">threeCone</label>
          <textarea
            onChange={ handleChange } 
            name="threeCone"
            value={ newPlayer.threeCone }
          />
        </p>
        <p>
          <label htmlFor="shortShuttle">shortShuttle</label>
          <textarea
            onChange={ handleChange } 
            name="shortShuttle"
            value={ newPlayer.shortShuttle }
          />
        </p>
        <input 
          type="submit"
          value="CreatePlayer"
        />
      </form>
    </div>
  );
}