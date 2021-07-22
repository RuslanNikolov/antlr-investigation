import TestParserListener from "./TestParserListener.js";
import {getChilds} from './test/test.spec.js'
import TestParser from './TestParser.js'

// This class defines a complete listener for a parse tree produced by TestParser.
export default class MyTestListener extends TestParserListener {
  universes = [];
  // Enter a parse tree produced by TestParser#universeParam.
  exitUniverseParam(ctx) {}

  // Enter a parse tree produced by TestParser#universe.
  exitUniverse(ctx) {
    const instrCode = ctx.INSTRCODE(0) ? ctx.INSTRCODE(0).getText() : '';
    const instrParamsCtx = ctx.instrParams(0);
    if(instrParamsCtx) {
      const instrParamsCtxs = instrParamsCtx.instrParam(0).paramVal();
      if(instrParamsCtxs instanceof TestParser.ArrayvalContext) {
        console.log('array val',instrParamsCtxs.getText())
      }
      
    }

    // console.log('is instrParamsCtxs whitespace',instrParamsCtxs instanceof TestParser.WhitespaceparamContext)
    // const paramPairs = paramsCtx.instrParam()
    // console.log('paramPairs',paramPairs)
  }

  // Enter a parse tree produced by TestParser#instrParams.
  exitNormal(ctx) {
	}

  exitWhitespaceparam(ctx) {
	}
}
