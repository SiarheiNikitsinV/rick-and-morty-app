import { connect } from "react-redux";

import { getCharacters, getIsLoading } from "../../selectors/listSelectors";

import List from "../../components/List";

const mapStateToProps = (state) => ({
  characters: getCharacters(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
