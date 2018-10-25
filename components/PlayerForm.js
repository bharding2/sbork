import React, { Component } from 'react';
import PlayerRow from './PlayerRow';
import './PlayerForm.css';

class PlayerForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onChange={ this.props.handleChange } onSubmit={ this.props.handleSubmit }>
        <p>
          <label htmlFor="name">name</label>
          <textarea id="name" value={ this.props.userInput.name } />
        </p>
        <p>
          <label htmlFor="position">position</label>
          <textarea id="position" value={ this.props.userInput.position } />
        </p>
        <p>
          <label htmlFor="height">height</label>
          <textarea id="height" value={ this.props.userInput.height } />
        </p>
        <p>
          <label htmlFor="weight">weight</label>
          <textarea id="weight" value={ this.props.userInput.weight } />
        </p>
        <p>
          <label htmlFor="fortyYard">fortyYard</label>
          <textarea id="fortyYard" value={ this.props.userInput.fortyYard } />
        </p>
        <p>
          <label htmlFor="tenYard">tenYard</label>
          <textarea id="tenYard" value={ this.props.userInput.tenYard } />
        </p>
        <p>
          <label htmlFor="benchPress">benchPress</label>
          <textarea id="benchPress" value={ this.props.userInput.benchPress } />
        </p>
        <p>
          <label htmlFor="verticalJump">verticalJump</label>
          <textarea id="verticalJump" value={ this.props.userInput.verticalJump } />
        </p>
        <p>
          <label htmlFor="broadJump">broadJump</label>
          <textarea id="broadJump" value={ this.props.userInput.broadJump } />
        </p>
        <p>
          <label htmlFor="threeCone">threeCone</label>
          <textarea id="threeCone" value={ this.props.userInput.threeCone } />
        </p>
        <p>
          <label htmlFor="shortShuttle">shortShuttle</label>
          <textarea id="shortShuttle" value={ this.props.userInput.shortShuttle } />
        </p>
        <input type="submit" value="Create Player" />
      </form>
    );
  }
}

export default PlayerForm;