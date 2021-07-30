// Generated from TestParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TestParserListener from './TestParserListener.js';
import TestParserVisitor from './TestParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0013E\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0006\u0002\u0016\n\u0002\r\u0002\u000e\u0002\u0017\u0003\u0003\u0003",
    "\u0003\u0007\u0003\u001c\n\u0003\f\u0003\u000e\u0003\u001f\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005+\n\u0005",
    "\u0003\u0006\u0003\u0006\u0006\u0006/\n\u0006\r\u0006\u000e\u00060\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u00078",
    "\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b>\n\b\f\b\u000e\bA\u000b",
    "\b\u0003\b\u0003\b\u0003\b\u0002\u0002\t\u0002\u0004\u0006\b\n\f\u000e",
    "\u0002\u0002\u0002H\u0002\u0015\u0003\u0002\u0002\u0002\u0004\u0019",
    "\u0003\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002\u0002\b*\u0003\u0002",
    "\u0002\u0002\n,\u0003\u0002\u0002\u0002\f7\u0003\u0002\u0002\u0002\u000e",
    "9\u0003\u0002\u0002\u0002\u0010\u0011\u0007\u0003\u0002\u0002\u0011",
    "\u0016\u0005\u0004\u0003\u0002\u0012\u0013\u0007\u0003\u0002\u0002\u0013",
    "\u0016\u0007\u0004\u0002\u0002\u0014\u0016\u0005\u0004\u0003\u0002\u0015",
    "\u0010\u0003\u0002\u0002\u0002\u0015\u0012\u0003\u0002\u0002\u0002\u0015",
    "\u0014\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017",
    "\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018",
    "\u0003\u0003\u0002\u0002\u0002\u0019\u001d\u0007\u0005\u0002\u0002\u001a",
    "\u001c\u0005\u0006\u0004\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c",
    "\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0003\u0002\u0002\u0002\u001e \u0003\u0002\u0002\u0002\u001f",
    "\u001d\u0003\u0002\u0002\u0002 !\u0007\u0010\u0002\u0002!\u0005\u0003",
    "\u0002\u0002\u0002\"#\u0007\u0007\u0002\u0002#$\u0007\b\u0002\u0002",
    "$%\u0005\b\u0005\u0002%\u0007\u0003\u0002\u0002\u0002&+\u0007\u0007",
    "\u0002\u0002\'+\u0007\u0006\u0002\u0002(+\u0005\u000e\b\u0002)+\u0005",
    "\n\u0006\u0002*&\u0003\u0002\u0002\u0002*\'\u0003\u0002\u0002\u0002",
    "*(\u0003\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+\t\u0003\u0002",
    "\u0002\u0002,.\u0007\t\u0002\u0002-/\u0005\u0006\u0004\u0002.-\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u0002",
    "01\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000223\u0007\n\u0002",
    "\u00023\u000b\u0003\u0002\u0002\u000248\u0007\u0011\u0002\u000258\u0007",
    "\u0012\u0002\u000268\u0005\n\u0006\u000274\u0003\u0002\u0002\u00027",
    "5\u0003\u0002\u0002\u000276\u0003\u0002\u0002\u00028\r\u0003\u0002\u0002",
    "\u00029:\u0007\u000b\u0002\u0002:?\u0005\f\u0007\u0002;<\u0007\u0013",
    "\u0002\u0002<>\u0005\f\u0007\u0002=;\u0003\u0002\u0002\u0002>A\u0003",
    "\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002",
    "@B\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002BC\u0007\f\u0002",
    "\u0002C\u000f\u0003\u0002\u0002\u0002\t\u0015\u0017\u001d*07?"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class TestParser extends antlr4.Parser {

    static grammarFileName = "TestParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            "')'", "'['", "']'", "'''" ];
    static symbolicNames = [ null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", 
                             "LEFT_INSTRPARAMS_BRACKET", "WS_PARAM_VALUE", 
                             "PLAIN_PARAM_WORD", "DELIM", "LEFT_OBJ_BRACKET", 
                             "RIGHT_OBJ_BRACKET", "LEFT_ARR_BRACKET", "RIGHT_ARR_BRACKET", 
                             "SINGLE_QUOTE", "WS", "INSTR_PARAMS_SEMICOLON", 
                             "RIGHT_INSTRPARAMS_BRACKET", "ARR_PLAIN_PARAM_WORD", 
                             "ARR_WS_PARAM_VALUE", "ARR_ITEM_SEPARATOR" ];
    static ruleNames = [ "universeParam", "instrParamsGroup", "instrParam", 
                         "paramValue", "objectParamValue", "arrayItem", 
                         "arrayParamValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TestParser.ruleNames;
        this.literalNames = TestParser.literalNames;
        this.symbolicNames = TestParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	universeParam() {
	    let localctx = new UniverseParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TestParser.RULE_universeParam);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 19;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 14;
	                this.match(TestParser.INSTRCODE);
	                this.state = 15;
	                this.instrParamsGroup();
	                break;

	            case 2:
	                this.state = 16;
	                this.match(TestParser.INSTRCODE);
	                this.state = 17;
	                this.match(TestParser.INSTR_GROUPS_SEPARATOR);
	                break;

	            case 3:
	                this.state = 18;
	                this.instrParamsGroup();
	                break;

	            }
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===TestParser.INSTRCODE || _la===TestParser.LEFT_INSTRPARAMS_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrParamsGroup() {
	    let localctx = new InstrParamsGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TestParser.RULE_instrParamsGroup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(TestParser.LEFT_INSTRPARAMS_BRACKET);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.PLAIN_PARAM_WORD) {
	            this.state = 24;
	            this.instrParam();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(TestParser.RIGHT_INSTRPARAMS_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrParam() {
	    let localctx = new InstrParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TestParser.RULE_instrParam);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(TestParser.PLAIN_PARAM_WORD);
	        this.state = 33;
	        this.match(TestParser.DELIM);
	        this.state = 34;
	        this.paramValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramValue() {
	    let localctx = new ParamValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TestParser.RULE_paramValue);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TestParser.PLAIN_PARAM_WORD:
	            localctx = new NormalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(TestParser.PLAIN_PARAM_WORD);
	            break;
	        case TestParser.WS_PARAM_VALUE:
	            localctx = new WhitespaceparamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.match(TestParser.WS_PARAM_VALUE);
	            break;
	        case TestParser.LEFT_ARR_BRACKET:
	            localctx = new ArrayvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.arrayParamValue();
	            break;
	        case TestParser.LEFT_OBJ_BRACKET:
	            localctx = new ObjectvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 39;
	            this.objectParamValue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectParamValue() {
	    let localctx = new ObjectParamValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TestParser.RULE_objectParamValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(TestParser.LEFT_OBJ_BRACKET);
	        this.state = 44; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 43;
	            this.instrParam();
	            this.state = 46; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===TestParser.PLAIN_PARAM_WORD);
	        this.state = 48;
	        this.match(TestParser.RIGHT_OBJ_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayItem() {
	    let localctx = new ArrayItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TestParser.RULE_arrayItem);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TestParser.ARR_PLAIN_PARAM_WORD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(TestParser.ARR_PLAIN_PARAM_WORD);
	            break;
	        case TestParser.ARR_WS_PARAM_VALUE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.match(TestParser.ARR_WS_PARAM_VALUE);
	            break;
	        case TestParser.LEFT_OBJ_BRACKET:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.objectParamValue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayParamValue() {
	    let localctx = new ArrayParamValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TestParser.RULE_arrayParamValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(TestParser.LEFT_ARR_BRACKET);
	        this.state = 56;
	        this.arrayItem();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.ARR_ITEM_SEPARATOR) {
	            this.state = 57;
	            this.match(TestParser.ARR_ITEM_SEPARATOR);
	            this.state = 58;
	            this.arrayItem();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.match(TestParser.RIGHT_ARR_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TestParser.EOF = antlr4.Token.EOF;
TestParser.INSTRCODE = 1;
TestParser.INSTR_GROUPS_SEPARATOR = 2;
TestParser.LEFT_INSTRPARAMS_BRACKET = 3;
TestParser.WS_PARAM_VALUE = 4;
TestParser.PLAIN_PARAM_WORD = 5;
TestParser.DELIM = 6;
TestParser.LEFT_OBJ_BRACKET = 7;
TestParser.RIGHT_OBJ_BRACKET = 8;
TestParser.LEFT_ARR_BRACKET = 9;
TestParser.RIGHT_ARR_BRACKET = 10;
TestParser.SINGLE_QUOTE = 11;
TestParser.WS = 12;
TestParser.INSTR_PARAMS_SEMICOLON = 13;
TestParser.RIGHT_INSTRPARAMS_BRACKET = 14;
TestParser.ARR_PLAIN_PARAM_WORD = 15;
TestParser.ARR_WS_PARAM_VALUE = 16;
TestParser.ARR_ITEM_SEPARATOR = 17;

TestParser.RULE_universeParam = 0;
TestParser.RULE_instrParamsGroup = 1;
TestParser.RULE_instrParam = 2;
TestParser.RULE_paramValue = 3;
TestParser.RULE_objectParamValue = 4;
TestParser.RULE_arrayItem = 5;
TestParser.RULE_arrayParamValue = 6;

class UniverseParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_universeParam;
    }

	INSTRCODE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestParser.INSTRCODE);
	    } else {
	        return this.getToken(TestParser.INSTRCODE, i);
	    }
	};


	instrParamsGroup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstrParamsGroupContext);
	    } else {
	        return this.getTypedRuleContext(InstrParamsGroupContext,i);
	    }
	};

	INSTR_GROUPS_SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestParser.INSTR_GROUPS_SEPARATOR);
	    } else {
	        return this.getToken(TestParser.INSTR_GROUPS_SEPARATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterUniverseParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitUniverseParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitUniverseParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstrParamsGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_instrParamsGroup;
    }

	LEFT_INSTRPARAMS_BRACKET() {
	    return this.getToken(TestParser.LEFT_INSTRPARAMS_BRACKET, 0);
	};

	RIGHT_INSTRPARAMS_BRACKET() {
	    return this.getToken(TestParser.RIGHT_INSTRPARAMS_BRACKET, 0);
	};

	instrParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstrParamContext);
	    } else {
	        return this.getTypedRuleContext(InstrParamContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterInstrParamsGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitInstrParamsGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitInstrParamsGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstrParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_instrParam;
    }

	PLAIN_PARAM_WORD() {
	    return this.getToken(TestParser.PLAIN_PARAM_WORD, 0);
	};

	DELIM() {
	    return this.getToken(TestParser.DELIM, 0);
	};

	paramValue() {
	    return this.getTypedRuleContext(ParamValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterInstrParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitInstrParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitInstrParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_paramValue;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NormalContext extends ParamValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PLAIN_PARAM_WORD() {
	    return this.getToken(TestParser.PLAIN_PARAM_WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterNormal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitNormal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitNormal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TestParser.NormalContext = NormalContext;

class ObjectvalContext extends ParamValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	objectParamValue() {
	    return this.getTypedRuleContext(ObjectParamValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterObjectval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitObjectval(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitObjectval(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TestParser.ObjectvalContext = ObjectvalContext;

class ArrayvalContext extends ParamValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arrayParamValue() {
	    return this.getTypedRuleContext(ArrayParamValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterArrayval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitArrayval(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitArrayval(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TestParser.ArrayvalContext = ArrayvalContext;

class WhitespaceparamContext extends ParamValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WS_PARAM_VALUE() {
	    return this.getToken(TestParser.WS_PARAM_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterWhitespaceparam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitWhitespaceparam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitWhitespaceparam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TestParser.WhitespaceparamContext = WhitespaceparamContext;

class ObjectParamValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_objectParamValue;
    }

	LEFT_OBJ_BRACKET() {
	    return this.getToken(TestParser.LEFT_OBJ_BRACKET, 0);
	};

	RIGHT_OBJ_BRACKET() {
	    return this.getToken(TestParser.RIGHT_OBJ_BRACKET, 0);
	};

	instrParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstrParamContext);
	    } else {
	        return this.getTypedRuleContext(InstrParamContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterObjectParamValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitObjectParamValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitObjectParamValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_arrayItem;
    }

	ARR_PLAIN_PARAM_WORD() {
	    return this.getToken(TestParser.ARR_PLAIN_PARAM_WORD, 0);
	};

	ARR_WS_PARAM_VALUE() {
	    return this.getToken(TestParser.ARR_WS_PARAM_VALUE, 0);
	};

	objectParamValue() {
	    return this.getTypedRuleContext(ObjectParamValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterArrayItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitArrayItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitArrayItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayParamValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_arrayParamValue;
    }

	LEFT_ARR_BRACKET() {
	    return this.getToken(TestParser.LEFT_ARR_BRACKET, 0);
	};

	arrayItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArrayItemContext);
	    } else {
	        return this.getTypedRuleContext(ArrayItemContext,i);
	    }
	};

	RIGHT_ARR_BRACKET() {
	    return this.getToken(TestParser.RIGHT_ARR_BRACKET, 0);
	};

	ARR_ITEM_SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestParser.ARR_ITEM_SEPARATOR);
	    } else {
	        return this.getToken(TestParser.ARR_ITEM_SEPARATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterArrayParamValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitArrayParamValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitArrayParamValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TestParser.UniverseParamContext = UniverseParamContext; 
TestParser.InstrParamsGroupContext = InstrParamsGroupContext; 
TestParser.InstrParamContext = InstrParamContext; 
TestParser.ParamValueContext = ParamValueContext; 
TestParser.ObjectParamValueContext = ObjectParamValueContext; 
TestParser.ArrayItemContext = ArrayItemContext; 
TestParser.ArrayParamValueContext = ArrayParamValueContext; 
