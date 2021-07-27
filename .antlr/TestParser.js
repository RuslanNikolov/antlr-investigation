// Generated from c:\Development\Practice\antlr-investigation\TestParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "TestParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003\u0002",
    "\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b\u0002\u0003",
    "\u0003\u0005\u0003\u0016\n\u0003\u0003\u0003\u0005\u0003\u0019\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0006\u0004\u001f\n",
    "\u0004\r\u0004\u000e\u0004 \u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0007\u0006+",
    "\n\u0006\f\u0006\u000e\u0006.\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u00076\n\u0007\u0003",
    "\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0002\u00029\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0004\u0015\u0003\u0002\u0002\u0002\u0006",
    "\u001c\u0003\u0002\u0002\u0002\b$\u0003\u0002\u0002\u0002\n(\u0003\u0002",
    "\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000e\u0010\u0005\u0004\u0003",
    "\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0013\u0003\u0002\u0002",
    "\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002",
    "\u0002\u0012\u0003\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002",
    "\u0002\u0014\u0016\u0007\u0003\u0002\u0002\u0015\u0014\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0018\u0003\u0002\u0002",
    "\u0002\u0017\u0019\u0005\u0006\u0004\u0002\u0018\u0017\u0003\u0002\u0002",
    "\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0007\u0005\u0002\u0002\u001b\u0005\u0003\u0002\u0002",
    "\u0002\u001c\u001e\u0007\u0004\u0002\u0002\u001d\u001f\u0005\b\u0005",
    "\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\"\u0003",
    "\u0002\u0002\u0002\"#\u0007\u000b\u0002\u0002#\u0007\u0003\u0002\u0002",
    "\u0002$%\u0007\u0007\u0002\u0002%&\u0007\n\u0002\u0002&\'\u0005\f\u0007",
    "\u0002\'\t\u0003\u0002\u0002\u0002(,\u0007\u0004\u0002\u0002)+\u0005",
    "\b\u0005\u0002*)\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002,",
    "*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-/\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002/0\u0007\u000b\u0002\u00020\u000b\u0003",
    "\u0002\u0002\u000216\u0007\u0007\u0002\u000226\u0007\b\u0002\u00023",
    "6\u0007\t\u0002\u000246\u0005\n\u0006\u000251\u0003\u0002\u0002\u0002",
    "52\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000254\u0003\u0002\u0002",
    "\u00026\r\u0003\u0002\u0002\u0002\b\u0011\u0015\u0018 ,5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'('", "';'", null, null, null, null, null, 
                     "')'" ];

var symbolicNames = [ null, "INSTRCODE", "LEFT_BRACKET", "SEMICOLON", "WS", 
                      "PARAMWORD", "WSWORD", "ARRAY", "DELIM", "RIGHT_BRACKET", 
                      "S" ];

var ruleNames =  [ "universeParam", "universe", "instrParams", "instrParam", 
                   "object", "paramValue" ];

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
TestParser.S = 10;

TestParser.RULE_universeParam = 0;
TestParser.RULE_universe = 1;
TestParser.RULE_instrParams = 2;
TestParser.RULE_instrParam = 3;
TestParser.RULE_object = 4;
TestParser.RULE_paramValue = 5;


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

InstrParamContext.prototype.paramValue = function() {
    return this.getTypedRuleContext(ParamValueContext,0);
};




TestParser.InstrParamContext = InstrParamContext;

TestParser.prototype.instrParam = function() {

    var localctx = new InstrParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TestParser.RULE_instrParam);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(TestParser.PARAMWORD);
        this.state = 35;
        this.match(TestParser.DELIM);
        this.state = 36;
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
};


function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.LEFT_BRACKET = function() {
    return this.getToken(TestParser.LEFT_BRACKET, 0);
};

ObjectContext.prototype.RIGHT_BRACKET = function() {
    return this.getToken(TestParser.RIGHT_BRACKET, 0);
};

ObjectContext.prototype.instrParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstrParamContext);
    } else {
        return this.getTypedRuleContext(InstrParamContext,i);
    }
};




TestParser.ObjectContext = ObjectContext;

TestParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TestParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(TestParser.LEFT_BRACKET);
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TestParser.PARAMWORD) {
            this.state = 39;
            this.instrParam();
            this.state = 44;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 45;
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


function ParamValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestParser.RULE_paramValue;
    return this;
}

ParamValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamValueContext.prototype.constructor = ParamValueContext;


 
ParamValueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NormalContext(parser, ctx) {
	ParamValueContext.call(this, parser);
    ParamValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NormalContext.prototype = Object.create(ParamValueContext.prototype);
NormalContext.prototype.constructor = NormalContext;

TestParser.NormalContext = NormalContext;

NormalContext.prototype.PARAMWORD = function() {
    return this.getToken(TestParser.PARAMWORD, 0);
};

function ObjectvalContext(parser, ctx) {
	ParamValueContext.call(this, parser);
    ParamValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectvalContext.prototype = Object.create(ParamValueContext.prototype);
ObjectvalContext.prototype.constructor = ObjectvalContext;

TestParser.ObjectvalContext = ObjectvalContext;

ObjectvalContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

function ArrayvalContext(parser, ctx) {
	ParamValueContext.call(this, parser);
    ParamValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayvalContext.prototype = Object.create(ParamValueContext.prototype);
ArrayvalContext.prototype.constructor = ArrayvalContext;

TestParser.ArrayvalContext = ArrayvalContext;

ArrayvalContext.prototype.ARRAY = function() {
    return this.getToken(TestParser.ARRAY, 0);
};

function WhitespaceparamContext(parser, ctx) {
	ParamValueContext.call(this, parser);
    ParamValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhitespaceparamContext.prototype = Object.create(ParamValueContext.prototype);
WhitespaceparamContext.prototype.constructor = WhitespaceparamContext;

TestParser.WhitespaceparamContext = WhitespaceparamContext;

WhitespaceparamContext.prototype.WSWORD = function() {
    return this.getToken(TestParser.WSWORD, 0);
};


TestParser.ParamValueContext = ParamValueContext;

TestParser.prototype.paramValue = function() {

    var localctx = new ParamValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TestParser.RULE_paramValue);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TestParser.PARAMWORD:
            localctx = new NormalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.match(TestParser.PARAMWORD);
            break;
        case TestParser.WSWORD:
            localctx = new WhitespaceparamContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.match(TestParser.WSWORD);
            break;
        case TestParser.ARRAY:
            localctx = new ArrayvalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 49;
            this.match(TestParser.ARRAY);
            break;
        case TestParser.LEFT_BRACKET:
            localctx = new ObjectvalContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 50;
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
};


exports.TestParser = TestParser;
