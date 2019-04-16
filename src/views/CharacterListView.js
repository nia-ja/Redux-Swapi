import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        { this.props.fetching && (<p>Loading...</p>) }
        <CharacterList characters={this.props.characters} />
        {this.props.error && <p className="error">{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching
});

export default connect(
  mapStateToProps,
  { getCharacters}
)(CharacterListView);