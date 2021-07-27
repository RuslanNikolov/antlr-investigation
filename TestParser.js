// Generated from TestParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TestParserListener from './TestParserListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u00111\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0006\u0002\u0011\n\u0002\r\u0002\u000e\u0002",
    "\u0012\u0003\u0003\u0003\u0003\u0007\u0003\u0017\n\u0003\f\u0003\u000e",
    "\u0003\u001a\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005&\n\u0005\u0003\u0006\u0003\u0006\u0007\u0006*\n\u0006\f",
    "\u0006\u000e\u0006-\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u00023\u0002\u0010",
    "\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002\u0002\u0002\u0006\u001d",
    "\u0003\u0002\u0002\u0002\b%\u0003\u0002\u0002\u0002\n\'\u0003\u0002",
    "\u0002\u0002\f\r\u0007\u0003\u0002\u0002\r\u0011\u0005\u0004\u0003\u0002",
    "\u000e\u0011\u0007\u0003\u0002\u0002\u000f\u0011\u0005\u0004\u0003\u0002",
    "\u0010\f\u0003\u0002\u0002\u0002\u0010\u000e\u0003\u0002\u0002\u0002",
    "\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002",
    "\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002",
    "\u0013\u0003\u0003\u0002\u0002\u0002\u0014\u0018\u0007\u0005\u0002\u0002",
    "\u0015\u0017\u0005\u0006\u0004\u0002\u0016\u0015\u0003\u0002\u0002\u0002",
    "\u0017\u001a\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002",
    "\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001b\u0003\u0002\u0002\u0002",
    "\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0011\u0002\u0002",
    "\u001c\u0005\u0003\u0002\u0002\u0002\u001d\u001e\u0007\b\u0002\u0002",
    "\u001e\u001f\u0007\t\u0002\u0002\u001f \u0005\b\u0005\u0002 \u0007\u0003",
    "\u0002\u0002\u0002!&\u0007\b\u0002\u0002\"&\u0007\u0006\u0002\u0002",
    "#&\u0007\u0007\u0002\u0002$&\u0005\n\u0006\u0002%!\u0003\u0002\u0002",
    "\u0002%\"\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002%$\u0003",
    "\u0002\u0002\u0002&\t\u0003\u0002\u0002\u0002\'+\u0007\n\u0002\u0002",
    "(*\u0005\u0006\u0004\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002./\u0007\u000b\u0002\u0002/\u000b",
    "\u0003\u0002\u0002\u0002\u0007\u0010\u0012\u0018%+"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class TestParser extends antlr4.Parser {

    static grammarFileName = "TestParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, "')'", "'''", "'['", "']'", null, null, 
                            "');'" ];
    static symbolicNames = [ null, "INSTRCODE", "SEMICOLON", "LEFT_INSTRPARAMS_BRACKET", 
                             "WS_PARAM_VALUE", "ARRAY_PARAM_VALUE", "PARAM_NAME", 
                             "DELIM", "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", 
                             "SINGLE_QUOTE", "LEFT_SQ_BRACKET", "RIGHT_SQ_BRACKET", 
                             "WS", "INSTR_PARAMS_SEMICOLON", "RIGHT_INSTRPARAMS_BRACKET" ];
    static ruleNames = [ "universeParam", "instrParamsGroup", "instrParam", 
                         "paramValue", "object" ];

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
	        this.state = 14; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 10;
	                this.match(TestParser.INSTRCODE);
	                this.state = 11;
	                this.instrParamsGroup();
	                break;

	            case 2:
	                this.state = 12;
	                this.match(TestParser.INSTRCODE);
	                break;

	            case 3:
	                this.state = 13;
	                this.instrParamsGroup();
	                break;

	            }
	            this.state = 16; 
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
	        this.state = 18;
	        this.match(TestParser.LEFT_INSTRPARAMS_BRACKET);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.PARAM_NAME) {
	            this.state = 19;
	            this.instrParam();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
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
	        this.state = 27;
	        this.match(TestParser.PARAM_NAME);
	        this.state = 28;
	        this.match(TestParser.DELIM);
	        this.state = 29;
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
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TestParser.PARAM_NAME:
	            localctx = new NormalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.match(TestParser.PARAM_NAME);
	            break;
	        case TestParser.WS_PARAM_VALUE:
	            localctx = new WhitespaceparamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.match(TestParser.WS_PARAM_VALUE);
	            break;
	        case TestParser.ARRAY_PARAM_VALUE:
	            localctx = new ArrayvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.match(TestParser.ARRAY_PARAM_VALUE);
	            break;
	        case TestParser.LEFT_OBJ_BRACKET:
	            localctx = new ObjectvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.object();
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



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TestParser.RULE_object);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(TestParser.LEFT_OBJ_BRACKET);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.PARAM_NAME) {
	            this.state = 38;
	            this.instrParam();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
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


}

TestParser.EOF = antlr4.Token.EOF;
TestParser.INSTRCODE = 1;
TestParser.SEMICOLON = 2;
TestParser.LEFT_INSTRPARAMS_BRACKET = 3;
TestParser.WS_PARAM_VALUE = 4;
TestParser.ARRAY_PARAM_VALUE = 5;
TestParser.PARAM_NAME = 6;
TestParser.DELIM = 7;
TestParser.LEFT_OBJ_BRACKET = 8;
TestParser.RIGHT_OBJ_BRACKET = 9;
TestParser.SINGLE_QUOTE = 10;
TestParser.LEFT_SQ_BRACKET = 11;
TestParser.RIGHT_SQ_BRACKET = 12;
TestParser.WS = 13;
TestParser.INSTR_PARAMS_SEMICOLON = 14;
TestParser.RIGHT_INSTRPARAMS_BRACKET = 15;

TestParser.RULE_universeParam = 0;
TestParser.RULE_instrParamsGroup = 1;
TestParser.RULE_instrParam = 2;
TestParser.RULE_paramValue = 3;
TestParser.RULE_object = 4;

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

	PARAM_NAME() {
	    return this.getToken(TestParser.PARAM_NAME, 0);
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

	PARAM_NAME() {
	    return this.getToken(TestParser.PARAM_NAME, 0);
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


}

TestParser.NormalContext = NormalContext;

class ObjectvalContext extends ParamValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
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


}

TestParser.ObjectvalContext = ObjectvalContext;

class ArrayvalContext extends ParamValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ARRAY_PARAM_VALUE() {
	    return this.getToken(TestParser.ARRAY_PARAM_VALUE, 0);
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


}

TestParser.WhitespaceparamContext = WhitespaceparamContext;

class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_object;
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
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitObject(this);
		}
	}


}




TestParser.UniverseParamContext = UniverseParamContext; 
TestParser.InstrParamsGroupContext = InstrParamsGroupContext; 
TestParser.InstrParamContext = InstrParamContext; 
TestParser.ParamValueContext = ParamValueContext; 
TestParser.ObjectContext = ObjectContext; 
