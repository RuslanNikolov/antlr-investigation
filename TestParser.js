// Generated from TestParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TestParserListener from './TestParserListener.js';
import TestParserVisitor from './TestParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0011J\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0006\u0002\u0012\n\u0002\r\u0002\u000e\u0002",
    "\u0013\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u001b\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004\u001f\n\u0004",
    "\f\u0004\u000e\u0004\"\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005*\n\u0005\f\u0005\u000e",
    "\u0005-\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u00065\n\u0006\u0003\u0007\u0003\u0007",
    "\u0006\u00079\n\u0007\r\u0007\u000e\u0007:\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\bC\n\b\f\b\u000e\bF\u000b\b\u0003\b",
    "\u0003\b\u0003\b\u0002\u0002\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0002",
    "\u0002L\u0002\u0011\u0003\u0002\u0002\u0002\u0004\u001a\u0003\u0002",
    "\u0002\u0002\u0006\u001c\u0003\u0002\u0002\u0002\b%\u0003\u0002\u0002",
    "\u0002\n4\u0003\u0002\u0002\u0002\f6\u0003\u0002\u0002\u0002\u000e>",
    "\u0003\u0002\u0002\u0002\u0010\u0012\u0005\u0004\u0003\u0002\u0011\u0010",
    "\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0011",
    "\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0003",
    "\u0003\u0002\u0002\u0002\u0015\u0016\u0007\u0003\u0002\u0002\u0016\u001b",
    "\u0005\u0006\u0004\u0002\u0017\u0018\u0007\u0003\u0002\u0002\u0018\u001b",
    "\u0007\u0004\u0002\u0002\u0019\u001b\u0005\u0006\u0004\u0002\u001a\u0015",
    "\u0003\u0002\u0002\u0002\u001a\u0017\u0003\u0002\u0002\u0002\u001a\u0019",
    "\u0003\u0002\u0002\u0002\u001b\u0005\u0003\u0002\u0002\u0002\u001c ",
    "\u0007\u0005\u0002\u0002\u001d\u001f\u0005\b\u0005\u0002\u001e\u001d",
    "\u0003\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002\u0002 \u001e\u0003",
    "\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!#\u0003\u0002\u0002\u0002",
    "\" \u0003\u0002\u0002\u0002#$\u0007\r\u0002\u0002$\u0007\u0003\u0002",
    "\u0002\u0002%&\u0007\u0006\u0002\u0002&\'\u0007\b\u0002\u0002\'+\u0005",
    "\n\u0006\u0002(*\u0007\f\u0002\u0002)(\u0003\u0002\u0002\u0002*-\u0003",
    "\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",\t\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002.5\u0007\u0006",
    "\u0002\u0002/0\u0007\u0007\u0002\u000201\u0007\u0010\u0002\u000215\u0007",
    "\u0011\u0002\u000225\u0005\u000e\b\u000235\u0005\f\u0007\u00024.\u0003",
    "\u0002\u0002\u00024/\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u0002",
    "43\u0003\u0002\u0002\u00025\u000b\u0003\u0002\u0002\u000268\u0007\n",
    "\u0002\u000279\u0005\b\u0005\u000287\u0003\u0002\u0002\u00029:\u0003",
    "\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002",
    ";<\u0003\u0002\u0002\u0002<=\u0007\u000b\u0002\u0002=\r\u0003\u0002",
    "\u0002\u0002>?\u0007\t\u0002\u0002?D\u0005\n\u0006\u0002@A\u0007\u000e",
    "\u0002\u0002AC\u0005\n\u0006\u0002B@\u0003\u0002\u0002\u0002CF\u0003",
    "\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002",
    "EG\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002GH\u0007\u000f\u0002",
    "\u0002H\u000f\u0003\u0002\u0002\u0002\t\u0013\u001a +4:D"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class TestParser extends antlr4.Parser {

    static grammarFileName = "TestParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, "'['", 
                            null, "')'", null, "');'", null, "']'" ];
    static symbolicNames = [ null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", 
                             "LEFT_INSTRPARAMS_BRACKET", "PLAIN_PARAM_WORD", 
                             "WHITESPACE_SINGLE_QUOTE", "DELIM", "LEFT_ARR_BRACKET", 
                             "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", "WS", 
                             "RIGHT_INSTRPARAMS_BRACKET", "ARR_ITEM_SEPARATOR", 
                             "RIGHT_ARR_BRACKET", "WS_PARAM_VALUE_CONTENT", 
                             "WH_END_SINGLE_QUOTE" ];
    static ruleNames = [ "universeParam", "universe", "instrParamsGroup", 
                         "instrParam", "paramValue", "objectParamValue", 
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
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.universe();
	            this.state = 17; 
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



	universe() {
	    let localctx = new UniverseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TestParser.RULE_universe);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UniverseWithParamsContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.match(TestParser.INSTRCODE);
	            this.state = 20;
	            this.instrParamsGroup();
	            break;

	        case 2:
	            localctx = new UniverseWithOnlyCodeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21;
	            this.match(TestParser.INSTRCODE);
	            this.state = 22;
	            this.match(TestParser.INSTR_GROUPS_SEPARATOR);
	            break;

	        case 3:
	            localctx = new UniverseUserDefinedContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.instrParamsGroup();
	            break;

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



	instrParamsGroup() {
	    let localctx = new InstrParamsGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TestParser.RULE_instrParamsGroup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(TestParser.LEFT_INSTRPARAMS_BRACKET);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.PLAIN_PARAM_WORD) {
	            this.state = 27;
	            this.instrParam();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
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
	    this.enterRule(localctx, 6, TestParser.RULE_instrParam);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(TestParser.PLAIN_PARAM_WORD);
	        this.state = 36;
	        this.match(TestParser.DELIM);
	        this.state = 37;
	        this.paramValue();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.WS) {
	            this.state = 38;
	            this.match(TestParser.WS);
	            this.state = 43;
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



	paramValue() {
	    let localctx = new ParamValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TestParser.RULE_paramValue);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TestParser.PLAIN_PARAM_WORD:
	            localctx = new NormalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(TestParser.PLAIN_PARAM_WORD);
	            break;
	        case TestParser.WHITESPACE_SINGLE_QUOTE:
	            localctx = new WhitespaceparamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.match(TestParser.WHITESPACE_SINGLE_QUOTE);
	            this.state = 46;
	            this.match(TestParser.WS_PARAM_VALUE_CONTENT);
	            this.state = 47;
	            this.match(TestParser.WH_END_SINGLE_QUOTE);
	            break;
	        case TestParser.LEFT_ARR_BRACKET:
	            localctx = new ArrayvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.arrayParamValue();
	            break;
	        case TestParser.LEFT_OBJ_BRACKET:
	            localctx = new ObjectvalContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 49;
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
	    this.enterRule(localctx, 10, TestParser.RULE_objectParamValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(TestParser.LEFT_OBJ_BRACKET);
	        this.state = 54; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 53;
	            this.instrParam();
	            this.state = 56; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===TestParser.PLAIN_PARAM_WORD);
	        this.state = 58;
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
	    this.enterRule(localctx, 12, TestParser.RULE_arrayParamValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(TestParser.LEFT_ARR_BRACKET);
	        this.state = 61;
	        this.paramValue();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TestParser.ARR_ITEM_SEPARATOR) {
	            this.state = 62;
	            this.match(TestParser.ARR_ITEM_SEPARATOR);
	            this.state = 63;
	            this.paramValue();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 69;
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
TestParser.PLAIN_PARAM_WORD = 4;
TestParser.WHITESPACE_SINGLE_QUOTE = 5;
TestParser.DELIM = 6;
TestParser.LEFT_ARR_BRACKET = 7;
TestParser.LEFT_OBJ_BRACKET = 8;
TestParser.RIGHT_OBJ_BRACKET = 9;
TestParser.WS = 10;
TestParser.RIGHT_INSTRPARAMS_BRACKET = 11;
TestParser.ARR_ITEM_SEPARATOR = 12;
TestParser.RIGHT_ARR_BRACKET = 13;
TestParser.WS_PARAM_VALUE_CONTENT = 14;
TestParser.WH_END_SINGLE_QUOTE = 15;

TestParser.RULE_universeParam = 0;
TestParser.RULE_universe = 1;
TestParser.RULE_instrParamsGroup = 2;
TestParser.RULE_instrParam = 3;
TestParser.RULE_paramValue = 4;
TestParser.RULE_objectParamValue = 5;
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

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitUniverseParam(this);
	    } else {
	        return visitor.visitChildren(this);
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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UniverseUserDefinedContext extends UniverseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	instrParamsGroup() {
	    return this.getTypedRuleContext(InstrParamsGroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterUniverseUserDefined(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitUniverseUserDefined(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitUniverseUserDefined(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TestParser.UniverseUserDefinedContext = UniverseUserDefinedContext;

class UniverseWithOnlyCodeContext extends UniverseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INSTRCODE() {
	    return this.getToken(TestParser.INSTRCODE, 0);
	};

	INSTR_GROUPS_SEPARATOR() {
	    return this.getToken(TestParser.INSTR_GROUPS_SEPARATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterUniverseWithOnlyCode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitUniverseWithOnlyCode(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitUniverseWithOnlyCode(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TestParser.UniverseWithOnlyCodeContext = UniverseWithOnlyCodeContext;

class UniverseWithParamsContext extends UniverseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INSTRCODE() {
	    return this.getToken(TestParser.INSTRCODE, 0);
	};

	instrParamsGroup() {
	    return this.getTypedRuleContext(InstrParamsGroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.enterUniverseWithParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestParserListener ) {
	        listener.exitUniverseWithParams(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestParserVisitor ) {
	        return visitor.visitUniverseWithParams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TestParser.UniverseWithParamsContext = UniverseWithParamsContext;

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

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestParser.WS);
	    } else {
	        return this.getToken(TestParser.WS, i);
	    }
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

	WHITESPACE_SINGLE_QUOTE() {
	    return this.getToken(TestParser.WHITESPACE_SINGLE_QUOTE, 0);
	};

	WS_PARAM_VALUE_CONTENT() {
	    return this.getToken(TestParser.WS_PARAM_VALUE_CONTENT, 0);
	};

	WH_END_SINGLE_QUOTE() {
	    return this.getToken(TestParser.WH_END_SINGLE_QUOTE, 0);
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
TestParser.UniverseContext = UniverseContext; 
TestParser.InstrParamsGroupContext = InstrParamsGroupContext; 
TestParser.InstrParamContext = InstrParamContext; 
TestParser.ParamValueContext = ParamValueContext; 
TestParser.ObjectParamValueContext = ObjectParamValueContext; 
TestParser.ArrayParamValueContext = ArrayParamValueContext; 
