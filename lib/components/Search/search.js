import React, { Component } from 'react'
import './Search.css';
import CompleteMe from '@ggoering/complete-me';
import cityList from '../../../cityList.js';

const cityTrie = new CompleteMe;
cityTrie.populate(cityList.data);

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  submitItems(props) {
    this.props.handleSubmit(this.state.input);
    this.setState({ input: '' });
  }

  suggestCities(input) {
    if (!isNaN(input.charAt(0))) {
      return '';
    } else {
      const city = cityTrie.suggest(input);
      return (
    <datalist id="cities">
      <option value={city[0]}/>
      <option value={city[1]}/>
      <option value={city[2]}/>
      <option value={city[3]}/>
      <option value={city[4]}/>
      <option value={city[5]}/>
      <option value={city[6]}/>
      <option value={city[7]}/>
      <option value={city[8]}/>
      <option value={city[9]}/>
    </datalist>);
    }
  }

  capitalize(input) {
    if (input && input.length >= 1) {
      const firstChar = input.charAt(0);
      const remainingStr = input.slice(1);
      input = firstChar.toUpperCase() + remainingStr;
    }
    return input;
  }

  render() {
    return (
    <section className="search-section">
      <input className="search-bar" type="text" list="cities" placeholder="City, State (or zipcode)"
        value = {this.state.input}
        onChange = { (event) => this.setState({
          input: this.capitalize(event.target.value),
        }) }
      />
    {this.suggestCities(this.state.input)}
      <input className="submit-button"
                  type="submit"
                  onClick= {() => this.submitItems()}
                  disabled= {!this.state.input}
                />

    </section>
  );
  }
}
