// Generated from TestParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TestParserListener from './TestParserListener.js';
import TestParserVisitor from './TestParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0010>\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0006\u0002",
    "\u0014\n\u0002\r\u0002\u000e\u0002\u0015\u0003\u0003\u0003\u0003\u0007",
    "\u0003\u001a\n\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005)\n\u0005\u0003\u0006",
    "\u0003\u0006\u0006\u0006-\n\u0006\r\u0006\u000e\u0006.\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u00077",
    "\n\u0007\f\u0007\u000e\u0007:\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0002\u0002@\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002\u0002\u0006",
    " \u0003\u0002\u0002\u0002\b(\u0003\u0002\u0002\u0002\n*\u0003\u0002",
    "\u0002\u0002\f2\u0003\u0002\u0002\u0002\u000e\u000f\u0007\u0003\u0002",
    "\u0002\u000f\u0014\u0005\u0004\u0003\u0002\u0010\u0011\u0007\u0003\u0002",
    "\u0002\u0011\u0014\u0007\u0004\u0002\u0002\u0012\u0014\u0005\u0004\u0003",
    "\u0002\u0013\u000e\u0003\u0002\u0002\u0002\u0013\u0010\u0003\u0002\u0002",
    "\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002",
    "\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002",
    "\u0002\u0016\u0003\u0003\u0002\u0002\u0002\u0017\u001b\u0007\u0005\u0002",
    "\u0002\u0018\u001a\u0005\u0006\u0004\u0002\u0019\u0018\u0003\u0002\u0002",
    "\u0002\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001e\u0003\u0002\u0002",
    "\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001e\u001f\u0007\u0010\u0002",
    "\u0002\u001f\u0005\u0003\u0002\u0002\u0002 !\u0007\u0007\u0002\u0002",
    "!\"\u0007\b\u0002\u0002\"#\u0005\b\u0005\u0002#\u0007\u0003\u0002\u0002",
    "\u0002$)\u0007\u0007\u0002\u0002%)\u0007\u0006\u0002\u0002&)\u0005\f",
    "\u0007\u0002\')\u0005\n\u0006\u0002($\u0003\u0002\u0002\u0002(%\u0003",
    "\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002",
    ")\t\u0003\u0002\u0002\u0002*,\u0007\t\u0002\u0002+-\u0005\u0006\u0004",
    "\u0002,+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.,\u0003\u0002",
    "\u0002\u0002./\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u000201\u0007",
    "\n\u0002\u00021\u000b\u0003\u0002\u0002\u000223\u0007\u000b\u0002\u0002",
    "38\u0005\b\u0005\u000245\u0007\u000f\u0002\u000257\u0005\b\u0005\u0002",
    "64\u0003\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002",
    "\u000289\u0003\u0002\u0002\u00029;\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002;<\u0007\f\u0002\u0002<\r\u0003\u0002\u0002\u0002\b\u0013",
    "\u0015\u001b(.8"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class TestParser extends antlr4.Parser {

    static grammarFileName = "TestParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            "')'", "'['", "']'", "'''", null, null, "');'" ];
    static symbolicNames = [ null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", 
                             "LEFT_INSTRPARAMS_BRACKET", "WS_PARAM_VALUE", 
                             "PLAIN_PARAM_WORD", "DELIM", "LEFT_OBJ_BRACKET", 
                             "RIGHT_OBJ_BRACKET", "LEFT_ARR_BRACKET", "RIGHT_ARR_BRACKET", 
                             "SINGLE_QUOTE", "WS", "INSTR_PARAMS_SEMICOLON", 
                             "RIGHT_INSTRPARAMS_BRACKET" ];
    static ruleNames = [ "universeParam", "instrParamsGroup", "instrParam", 
                         "paramValue", "objectParamValue", "arrayParamValue" ];

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
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 17;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 12;
	                this.match(TestParser.INSTRCODE);
	                this.state = 13;
	                this.instrParamsGroup();
	                break;

	            case 2:
	                this.state = 14;
	                this.match(TestParser.INSTRCODE);
	                this.state = 15;
	                this.match(TestParser.INSTR_GROUPS_SEPARATOR);
	                break;

	            case 3:
	                this.state = 16;
	                this.instrParamsGroup();
	                break;

	            }
	            this.state = 19; 
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
	        this.state = 21;
	        this.match(TestParser.LEFT_INSTRPARAMS_BRACKET);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.PLAIN_PARAM_WORD) {
	            this.state = 22;
	            this.instrParam();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
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
	        this.state = 30;
	        this.match(TestParser.PLAIN_PARAM_WORD);
	        this.state = 31;
	        this.match(TestParser.DELIM);
	        this.state = 32;
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TestParser.PLAIN_PARAM_WORD:
	            localctx = new NormalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.match(TestParser.PLAIN_PARAM_WORD);
	            break;
	        case TestParser.WS_PARAM_VALUE:
	            localctx = new WhitespaceparamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.match(TestParser.WS_PARAM_VALUE);
	            break;
	        case TestParser.LEFT_ARR_BRACKET:
	            localctx = new ArrayvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.arrayParamValue();
	            break;
	        case TestParser.LEFT_OBJ_BRACKET:
	            localctx = new ObjectvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
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
	        this.state = 40;
	        this.match(TestParser.LEFT_OBJ_BRACKET);
	        this.state = 42; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 41;
	            this.instrParam();
	            this.state = 44; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===TestParser.PLAIN_PARAM_WORD);
	        this.state = 46;
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



	arrayParamValue() {
	    let localctx = new ArrayParamValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TestParser.RULE_arrayParamValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(TestParser.LEFT_ARR_BRACKET);
	        this.state = 49;
	        this.paramValue();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.INSTR_PARAMS_SEMICOLON) {
	            this.state = 50;
	            this.match(TestParser.INSTR_PARAMS_SEMICOLON);
	            this.state = 51;
	            this.paramValue();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
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

TestParser.RULE_universeParam = 0;
TestParser.RULE_instrParamsGroup = 1;
TestParser.RULE_instrParam = 2;
TestParser.RULE_paramValue = 3;
TestParser.RULE_objectParamValue = 4;
TestParser.RULE_arrayParamValue = 5;

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

	paramValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamValueContext);
	    } else {
	        return this.getTypedRuleContext(ParamValueContext,i);
	    }
	};

	RIGHT_ARR_BRACKET() {
	    return this.getToken(TestParser.RIGHT_ARR_BRACKET, 0);
	};

	INSTR_PARAMS_SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestParser.INSTR_PARAMS_SEMICOLON);
	    } else {
	        return this.getToken(TestParser.INSTR_PARAMS_SEMICOLON, i);
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
TestParser.ArrayParamValueContext = ArrayParamValueContext; 
