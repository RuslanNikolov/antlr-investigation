// Generated from c:\Development\Practice\antlr-mega-tutorial-master\test\TestParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "TestParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000e,\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0007\u0002",
    "\u000e\n\u0002\f\u0002\u000e\u0002\u0011\u000b\u0002\u0003\u0003\u0005",
    "\u0003\u0014\n\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0006\u0004\u001d\n\u0004\r\u0004",
    "\u000e\u0004\u001e\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006*",
    "\n\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002",
    "\u0002,\u0002\u000f\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002",
    "\u0002\u0002\u0006\u001a\u0003\u0002\u0002\u0002\b\"\u0003\u0002\u0002",
    "\u0002\n)\u0003\u0002\u0002\u0002\f\u000e\u0005\u0004\u0003\u0002\r",
    "\f\u0003\u0002\u0002\u0002\u000e\u0011\u0003\u0002\u0002\u0002\u000f",
    "\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010",
    "\u0003\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0012",
    "\u0014\u0007\u0003\u0002\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0003\u0002\u0002\u0002\u0014\u0016\u0003\u0002\u0002\u0002\u0015",
    "\u0017\u0005\u0006\u0004\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018",
    "\u0019\u0007\u0005\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a",
    "\u001c\u0007\u0004\u0002\u0002\u001b\u001d\u0005\b\u0005\u0002\u001c",
    "\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e",
    "\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f",
    " \u0003\u0002\u0002\u0002 !\u0007\u000b\u0002\u0002!\u0007\u0003\u0002",
    "\u0002\u0002\"#\u0007\u0007\u0002\u0002#$\u0007\n\u0002\u0002$%\u0005",
    "\n\u0006\u0002%\t\u0003\u0002\u0002\u0002&*\u0007\u0007\u0002\u0002",
    "\'*\u0007\b\u0002\u0002(*\u0007\t\u0002\u0002)&\u0003\u0002\u0002\u0002",
    ")\'\u0003\u0002\u0002\u0002)(\u0003\u0002\u0002\u0002*\u000b\u0003\u0002",
    "\u0002\u0002\u0007\u000f\u0013\u0016\u001e)"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'('", "';'", null, null, null, null, null, 
                     "')'", "'['", "']'" ];

var symbolicNames = [ null, "INSTRCODE", "LEFT_BRACKET", "SEMICOLON", "WS", 
                      "PARAMWORD", "WSWORD", "ARRAY", "DELIM", "RIGHT_BRACKET", 
                      "LEFT_SQUARE_BRACKET", "RIGHT_SQUARE_BRACKET", "S" ];

var ruleNames =  [ "universeParam", "universe", "instrParams", "instrParam", 
                   "paramVal" ];

function TestParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TestParser.prototype = Object.create(antlr4.Parser.prototype);
TestParser.prototype.constructor = TestParser;

Object.defineProperty(TestParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

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
TestParser.LEFT_SQUARE_BRACKET = 10;
TestParser.RIGHT_SQUARE_BRACKET = 11;
TestParser.S = 12;

TestParser.RULE_universeParam = 0;
TestParser.RULE_universe = 1;
TestParser.RULE_instrParams = 2;
TestParser.RULE_instrParam = 3;
TestParser.RULE_paramVal = 4;


function UniverseParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestParser.RULE_universeParam;
    return this;
}

UniverseParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UniverseParamContext.prototype.constructor = UniverseParamContext;

UniverseParamContext.prototype.universe = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UniverseContext);
    } else {
        return this.getTypedRuleContext(UniverseContext,i);
    }
};




TestParser.UniverseParamContext = UniverseParamContext;

TestParser.prototype.universeParam = function() {

    var localctx = new UniverseParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TestParser.RULE_universeParam);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TestParser.INSTRCODE) | (1 << TestParser.LEFT_BRACKET) | (1 << TestParser.SEMICOLON))) !== 0)) {
            this.state = 10;
            this.universe();
            this.state = 15;
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
};


function UniverseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestParser.RULE_universe;
    return this;
}

UniverseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UniverseContext.prototype.constructor = UniverseContext;

UniverseContext.prototype.SEMICOLON = function() {
    return this.getToken(TestParser.SEMICOLON, 0);
};

UniverseContext.prototype.INSTRCODE = function() {
    return this.getToken(TestParser.INSTRCODE, 0);
};

UniverseContext.prototype.instrParams = function() {
    return this.getTypedRuleContext(InstrParamsContext,0);
};




TestParser.UniverseContext = UniverseContext;

TestParser.prototype.universe = function() {

    var localctx = new UniverseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TestParser.RULE_universe);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TestParser.INSTRCODE) {
            this.state = 16;
            this.match(TestParser.INSTRCODE);
        }

        this.state = 20;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TestParser.LEFT_BRACKET) {
            this.state = 19;
            this.instrParams();
        }

        this.state = 22;
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
};


function InstrParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestParser.RULE_instrParams;
    return this;
}

InstrParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstrParamsContext.prototype.constructor = InstrParamsContext;

InstrParamsContext.prototype.LEFT_BRACKET = function() {
    return this.getToken(TestParser.LEFT_BRACKET, 0);
};

InstrParamsContext.prototype.RIGHT_BRACKET = function() {
    return this.getToken(TestParser.RIGHT_BRACKET, 0);
};

InstrParamsContext.prototype.instrParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstrParamContext);
    } else {
        return this.getTypedRuleContext(InstrParamContext,i);
    }
};




TestParser.InstrParamsContext = InstrParamsContext;

TestParser.prototype.instrParams = function() {

    var localctx = new InstrParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TestParser.RULE_instrParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(TestParser.LEFT_BRACKET);
        this.state = 26; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 25;
            this.instrParam();
            this.state = 28; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===TestParser.PARAMWORD);
        this.state = 30;
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
};


function InstrParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestParser.RULE_instrParam;
    return this;
}

InstrParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstrParamContext.prototype.constructor = InstrParamContext;

InstrParamContext.prototype.PARAMWORD = function() {
    return this.getToken(TestParser.PARAMWORD, 0);
};

InstrParamContext.prototype.DELIM = function() {
    return this.getToken(TestParser.DELIM, 0);
};

InstrParamContext.prototype.paramVal = function() {
    return this.getTypedRuleContext(ParamValContext,0);
};




TestParser.InstrParamContext = InstrParamContext;

TestParser.prototype.instrParam = function() {

    var localctx = new InstrParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TestParser.RULE_instrParam);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(TestParser.PARAMWORD);
        this.state = 33;
        this.match(TestParser.DELIM);
        this.state = 34;
        this.paramVal();
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
};


function ParamValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestParser.RULE_paramVal;
    return this;
}

ParamValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamValContext.prototype.constructor = ParamValContext;


 
ParamValContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NormalContext(parser, ctx) {
	ParamValContext.call(this, parser);
    ParamValContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NormalContext.prototype = Object.create(ParamValContext.prototype);
NormalContext.prototype.constructor = NormalContext;

TestParser.NormalContext = NormalContext;

NormalContext.prototype.PARAMWORD = function() {
    return this.getToken(TestParser.PARAMWORD, 0);
};

function ArrayvalContext(parser, ctx) {
	ParamValContext.call(this, parser);
    ParamValContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayvalContext.prototype = Object.create(ParamValContext.prototype);
ArrayvalContext.prototype.constructor = ArrayvalContext;

TestParser.ArrayvalContext = ArrayvalContext;

ArrayvalContext.prototype.ARRAY = function() {
    return this.getToken(TestParser.ARRAY, 0);
};

function WhitespaceparamContext(parser, ctx) {
	ParamValContext.call(this, parser);
    ParamValContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhitespaceparamContext.prototype = Object.create(ParamValContext.prototype);
WhitespaceparamContext.prototype.constructor = WhitespaceparamContext;

TestParser.WhitespaceparamContext = WhitespaceparamContext;

WhitespaceparamContext.prototype.WSWORD = function() {
    return this.getToken(TestParser.WSWORD, 0);
};


TestParser.ParamValContext = ParamValContext;

TestParser.prototype.paramVal = function() {

    var localctx = new ParamValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TestParser.RULE_paramVal);
    try {
        this.state = 39;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TestParser.PARAMWORD:
            localctx = new NormalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            this.match(TestParser.PARAMWORD);
            break;
        case TestParser.WSWORD:
            localctx = new WhitespaceparamContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.match(TestParser.WSWORD);
            break;
        case TestParser.ARRAY:
            localctx = new ArrayvalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 38;
            this.match(TestParser.ARRAY);
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
};


exports.TestParser = TestParser;
