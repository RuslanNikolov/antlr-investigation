import TestParserVisitor from "./TestParserVisitor.js";
import {getChilds} from './test/test.spec.js'

// This class defines a complete listener for a parse tree produced by TestParser.
export default class MyTestParserVisitor extends TestParserVisitor {
  // Visit a parse tree produced by TestParser#universeParam.
 visitUniverseParam(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#universe.
  visitUniverse(ctx) {
    console.log("visitor universe", ctx.getText());
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#instrParams.
  visitInstrParams(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#instrParam.
  visitInstrParam(ctx) {
    return this.visitChildren(ctx);
  } 
}
