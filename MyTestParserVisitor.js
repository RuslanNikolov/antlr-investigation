import TestParserVisitor from "./TestParserVisitor.js";

// This class defines a complete listener for a parse tree produced by TestParser.
export default class MyTestParserVisitor extends TestParserVisitor {
  // Visit a parse tree produced by TestParser#universeParam.
  visitUniverseParam(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#universeWithParams.
  visitUniverseWithParams(ctx) {
    // const instrCode = ctx.INSTRCODE().getText();
    // const instrParamsGroupObj = this.visitInstrParamsGroup(ctx.instrParamsGroup());
    // instrParamsGroupObj.instrumentDefinition.instrumentCode = instrCode;
    // return instrParamsGroupObj;
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by TestParser#universeWithOnlyCode.
  visitUniverseWithOnlyCode(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#universeUserDefined.
  visitUniverseUserDefined(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#instrParamsGroup.
  visitInstrParamsGroup(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#instrParam.
  visitInstrParam(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#normal.
  visitNormal(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#whitespaceparam.
  visitWhitespaceparam(ctx) {
    const returnTargetValue = ctx.WS_PARAM_VALUE_CONTENT().getText();
    console.log('here',returnTargetValue);
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#arrayval.
  visitArrayval(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#objectval.
  visitObjectval(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#objectParamValue.
  visitObjectParamValue(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#arrayParamValue.
  visitArrayParamValue(ctx) {
    return this.visitChildren(ctx);
  }
}
