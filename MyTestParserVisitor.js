import TestParserVisitor from "./TestParserVisitor.js";
import log from "log-full";

// This class defines a complete listener for a parse tree produced by TestParser.
export default class MyTestParserVisitor extends TestParserVisitor {
  // Visit a parse tree produced by TestParser#universeParam.
  visitUniverseParam(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by TestParser#universeWithParams.
  visitUniverseWithParams(ctx) {
    return  {[ctx.INSTRCODE()]: this.visit(ctx.instrParamsGroup())};
  }

  // Visit a parse tree produced by TestParser#universeWithOnlyCode.
  visitUniverseWithOnlyCode(ctx) {
    return {[ctx.INSTRCODE()]: ''};
  }

  // Visit a parse tree produced by TestParser#universeUserDefined.
  visitUniverseUserDefined(ctx) {
    return {'': this.visit(ctx.instrParamsGroup())};
  }

  // Visit a parse tree produced by TestParser#instrParamsGroup.
  visitInstrParamsGroup(ctx) {

    return this.visitObjectParamValue(ctx);
  }

  // Visit a parse tree produced by TestParser#instrParam.
  visitInstrParam(ctx) {
    const instrParamObj = {
      [ctx.PLAIN_PARAM_WORD()]: this.visit(ctx.paramValue()),
    };
    return instrParamObj;
  }

  // Visit a parse tree produced by TestParser#normal.
  visitNormal(ctx) {
    return ctx.getText();
  }

  // Visit a parse tree produced by TestParser#whitespaceparam.
  visitWhitespaceparam(ctx) {
    return ctx.WS_PARAM_VALUE_CONTENT().getText();
  }

  // Visit a parse tree produced by TestParser#arrayval.
  visitArrayval(ctx) {
    return this.visit(ctx.arrayParamValue());
  }

  // Visit a parse tree produced by TestParser#objectval.
  visitObjectval(ctx) {
    return this.visit(ctx.objectParamValue());

  }

  // Visit a parse tree produced by TestParser#objectParamValue.
  visitObjectParamValue(ctx) {
    const newObj = ctx.instrParam().reduce(
      (init, next) => ({
        ...init,
        ...this.visitInstrParam(next),
      }),
      {}
    );

    return newObj;
  }

  // Visit a parse tree produced by TestParser#arrayParamValue.
  visitArrayParamValue(ctx) {
    return ctx.paramValue().map((paramValueCtx) => this.visit(paramValueCtx));
  }
}
