import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
// import { fetchData } from "../"

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      <Loader type='Ball-Triangle' color='#00BFFF' height='90' width='60' />
    }

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
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
