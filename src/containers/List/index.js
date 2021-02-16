import { connect } from "react-redux";

import List from "../../components/List";

const mapStateToProps = (state) => ({
  characters: state.characters,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
