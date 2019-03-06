import React, { Component } from "react";

import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchData } from "../actions";

import Loader from 'react-loader-spinner';

class CharacterListView extends Component {

  componentDidMount() {
    this.props.fetchData;
  }

  render() {
    if (this.props.fetching) {
      return <Loader type='Ball-Triangle' color='#00BFFF' height='90' width='60' />
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    }
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    fetching: state.fetching,
    error: state.error,
  }
}

// the characters and the fetching boolean
export default connect(mapStateToProps, { fetchData })(CharacterListView);
