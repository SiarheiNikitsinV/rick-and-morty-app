import { connect } from "react-redux";

import List from "../../components/List";

const mapStateToProps = (state) => ({
  counter: state.counter,
  characters: state.characters,
});

const mapDispatchToProps = {
  add: () => ({
    type: "ADD",
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
