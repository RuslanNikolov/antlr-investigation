import TestParserListener from "./TestParserListener.js";
import {getChilds} from './test/test.spec.js'

// This class defines a complete listener for a parse tree produced by TestParser.
export default class MyTestListener extends TestParserListener {
  universes = [];
  // Enter a parse tree produced by TestParser#universeParam.
  exitUniverseParam(ctx) {}

  // Enter a parse tree produced by TestParser#universe.
  exitUniverse(ctx) {

  }

  // Enter a parse tree produced by TestParser#instrParams.
  exitNormal(ctx) {
	}

  exitWhitespaceparam(ctx) {
	}
}
