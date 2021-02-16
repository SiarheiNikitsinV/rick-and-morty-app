import { connect } from "react-redux";

import { getCharacters } from "../../selectors/listSelectors";

import List from "../../components/List";

const mapStateToProps = (state) => ({
  characters: getCharacters(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
