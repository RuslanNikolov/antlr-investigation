// Generated from TestParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TestParserListener from './TestParserListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\r:\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b",
    "\u0002\u0003\u0003\u0005\u0003\u0016\n\u0003\u0003\u0003\u0005\u0003",
    "\u0019\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0006",
    "\u0004\u001f\n\u0004\r\u0004\u000e\u0004 \u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u0006-\n\u0006\f\u0006\u000e\u00060\u000b\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u00078\n\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b",
    "\n\f\u0002\u0002\u0002;\u0002\u0011\u0003\u0002\u0002\u0002\u0004\u0015",
    "\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002\u0002\b$\u0003",
    "\u0002\u0002\u0002\n(\u0003\u0002\u0002\u0002\f7\u0003\u0002\u0002\u0002",
    "\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002",
    "\u0010\u0013\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002",
    "\u0013\u0011\u0003\u0002\u0002\u0002\u0014\u0016\u0007\u0003\u0002\u0002",
    "\u0015\u0014\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002",
    "\u0016\u0018\u0003\u0002\u0002\u0002\u0017\u0019\u0005\u0006\u0004\u0002",
    "\u0018\u0017\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002",
    "\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0005\u0002\u0002",
    "\u001b\u0005\u0003\u0002\u0002\u0002\u001c\u001e\u0007\u0004\u0002\u0002",
    "\u001d\u001f\u0005\b\u0005\u0002\u001e\u001d\u0003\u0002\u0002\u0002",
    "\u001f \u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003",
    "\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"#\u0007\u000b\u0002\u0002",
    "#\u0007\u0003\u0002\u0002\u0002$%\u0007\u0007\u0002\u0002%&\u0007\n",
    "\u0002\u0002&\'\u0007\r\u0002\u0002\'\t\u0003\u0002\u0002\u0002(.\u0007",
    "\u0004\u0002\u0002)*\u0007\u0007\u0002\u0002*+\u0007\n\u0002\u0002+",
    "-\u0005\f\u0007\u0002,)\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/1\u0003\u0002",
    "\u0002\u00020.\u0003\u0002\u0002\u000212\u0007\u000b\u0002\u00022\u000b",
    "\u0003\u0002\u0002\u000238\u0007\u0007\u0002\u000248\u0007\b\u0002\u0002",
    "58\u0007\t\u0002\u000268\u0005\n\u0006\u000273\u0003\u0002\u0002\u0002",
    "74\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000276\u0003\u0002\u0002",
    "\u00028\r\u0003\u0002\u0002\u0002\b\u0011\u0015\u0018 .7"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class TestParser extends antlr4.Parser {

    static grammarFileName = "TestParser.g4";
    static literalNames = [ null, null, "'('", "';'", null, null, null, 
                            null, null, "')'" ];
    static symbolicNames = [ null, "INSTRCODE", "LEFT_BRACKET", "SEMICOLON", 
                             "WS", "PARAMWORD", "WSWORD", "ARRAY", "DELIM", 
                             "RIGHT_BRACKET", "S", "PARAMVAL" ];
    static ruleNames = [ "universeParam", "universe", "instrParams", "instrParam", 
                         "object", "paramValue" ];

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
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TestParser.INSTRCODE) | (1 << TestParser.LEFT_BRACKET) | (1 << TestParser.SEMICOLON))) !== 0)) {
	            this.state = 12;
	            this.universe();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	universe() {
	    let localctx = new UniverseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TestParser.RULE_universe);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===TestParser.INSTRCODE) {
	            this.state = 18;
	            this.match(TestParser.INSTRCODE);
	        }

	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===TestParser.LEFT_BRACKET) {
	            this.state = 21;
	            this.instrParams();
	        }

	        this.state = 24;
	        this.match(TestParser.SEMICOLON);
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



	instrParams() {
	    let localctx = new InstrParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TestParser.RULE_instrParams);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(TestParser.LEFT_BRACKET);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.instrParam();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===TestParser.PARAMWORD);
	        this.state = 32;
	        this.match(TestParser.RIGHT_BRACKET);
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
	    this.enterRule(localctx, 6, TestParser.RULE_instrParam);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(TestParser.PARAMWORD);
	        this.state = 35;
	        this.match(TestParser.DELIM);
	        this.state = 36;
	        this.match(TestParser.PARAMVAL);
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
	        this.state = 38;
	        this.match(TestParser.LEFT_BRACKET);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.PARAMWORD) {
	            this.state = 39;
	            this.match(TestParser.PARAMWORD);
	            this.state = 40;
	            this.match(TestParser.DELIM);
	            this.state = 41;
	            this.paramValue();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
	        this.match(TestParser.RIGHT_BRACKET);
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
	    this.enterRule(localctx, 10, TestParser.RULE_paramValue);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TestParser.PARAMWORD:
	            localctx = new NormalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.match(TestParser.PARAMWORD);
	            break;
	        case TestParser.WSWORD:
	            localctx = new WhitespaceparamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.match(TestParser.WSWORD);
	            break;
	        case TestParser.ARRAY:
	            localctx = new ArrayvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.match(TestParser.ARRAY);
	            break;
	        case TestParser.LEFT_BRACKET:
	            localctx = new ObjectvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 52;
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


}

TestParser.EOF = antlr4.Token.EOF;
TestParser.INSTRCODE = 1;
TestParser.LEFT_BRACKET = 2;
TestParser.SEMICOLON = 3;
TestParser.WS = 4;
TestParser.PARAMWORD = 5;
TestParser.WSWORD = 6;
TestParser.ARRAY = 7;
TestParser.DELIM = 8;
TestParser.RIGHT_BRACKET = 9;
TestParser.S = 10;
TestParser.PARAMVAL = 11;

TestParser.RULE_universeParam = 0;
TestParser.RULE_universe = 1;
TestParser.RULE_instrParams = 2;
TestParser.RULE_instrParam = 3;
TestParser.RULE_object = 4;
TestParser.RULE_paramValue = 5;

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

	universe = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UniverseContext);
	    } else {
	        return this.getTypedRuleContext(UniverseContext,i);
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



class UniverseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_universe;
    }

	SEMICOLON() {
	    return this.getToken(TestParser.SEMICOLON, 0);
	};

	INSTRCODE() {
	    return this.getToken(TestParser.INSTRCODE, 0);
	};

	instrParams() {
	    return this.getTypedRuleContext(InstrParamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterUniverse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitUniverse(this);
		}
	}


}



class InstrParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestParser.RULE_instrParams;
    }

	LEFT_BRACKET() {
	    return this.getToken(TestParser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(TestParser.RIGHT_BRACKET, 0);
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
	        listener.enterInstrParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitInstrParams(this);
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

	PARAMWORD() {
	    return this.getToken(TestParser.PARAMWORD, 0);
	};

	DELIM() {
	    return this.getToken(TestParser.DELIM, 0);
	};

	PARAMVAL() {
	    return this.getToken(TestParser.PARAMVAL, 0);
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

	LEFT_BRACKET() {
	    return this.getToken(TestParser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(TestParser.RIGHT_BRACKET, 0);
	};

	PARAMWORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestParser.PARAMWORD);
	    } else {
	        return this.getToken(TestParser.PARAMWORD, i);
	    }
	};


	DELIM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestParser.DELIM);
	    } else {
	        return this.getToken(TestParser.DELIM, i);
	    }
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

	PARAMWORD() {
	    return this.getToken(TestParser.PARAMWORD, 0);
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

	ARRAY() {
	    return this.getToken(TestParser.ARRAY, 0);
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

	WSWORD() {
	    return this.getToken(TestParser.WSWORD, 0);
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


TestParser.UniverseParamContext = UniverseParamContext; 
TestParser.UniverseContext = UniverseContext; 
TestParser.InstrParamsContext = InstrParamsContext; 
TestParser.InstrParamContext = InstrParamContext; 
TestParser.ObjectContext = ObjectContext; 
TestParser.ParamValueContext = ParamValueContext; 
