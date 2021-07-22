import TestLexer from "./TestLexer.js";

export default class MyTestLexer extends TestLexer {
  myVariable;
  constructor(props) {
    super(props);
    this.myVariable = true;
  }
}
