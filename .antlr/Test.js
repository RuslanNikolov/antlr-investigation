// Generated from c:\Development\Practice\antlr-mega-tutorial-master\test\Test.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "Test.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000b3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0007\u0004\u001d\n\u0004\f\u0004\u000e\u0004",
    " \u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007,\n\u0007\f\u0007\u000e\u0007/\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0004\u001e-\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0003",
    "\u0003\u0002\u0007\b\u00021\u0002\u0011\u0003\u0002\u0002\u0002\u0004",
    "\u0014\u0003\u0002\u0002\u0002\u0006\u001e\u0003\u0002\u0002\u0002\b",
    "!\u0003\u0002\u0002\u0002\n&\u0003\u0002\u0002\u0002\f(\u0003\u0002",
    "\u0002\u0002\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002",
    "\u0002\u0002\u0010\u0013\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002",
    "\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002",
    "\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014\u0015\u0007\u0003",
    "\u0002\u0002\u0015\u0016\u0007\t\u0002\u0002\u0016\u0017\u0007\u0004",
    "\u0002\u0002\u0017\u0018\u0005\u0006\u0004\u0002\u0018\u0019\u0007\u0005",
    "\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a\u001d\u0005\b",
    "\u0005\u0002\u001b\u001d\u000b\u0002\u0002\u0002\u001c\u001a\u0003\u0002",
    "\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d \u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002",
    "\u0002\u0002\u001f\u0007\u0003\u0002\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002!\"\u0005\n\u0006\u0002\"#\u0007\t\u0002\u0002#$\u0007\u0006",
    "\u0002\u0002$%\u0005\f\u0007\u0002%\t\u0003\u0002\u0002\u0002&\'\t\u0002",
    "\u0002\u0002\'\u000b\u0003\u0002\u0002\u0002(-\u0007\u0004\u0002\u0002",
    "),\u0005\f\u0007\u0002*,\u000b\u0002\u0002\u0002+)\u0003\u0002\u0002",
    "\u0002+*\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002.0\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u000201\u0007\u0005\u0002\u00021\r\u0003\u0002\u0002\u0002",
    "\u0007\u0011\u001c\u001e+-"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'class'", "'{'", "'}'", "'()'", "'int'", "'void'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "ID", "WS", 
                      "ANY" ];

var ruleNames =  [ "file", "clazz", "ignore", "method", "type", "block" ];

function Test (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

Test.prototype = Object.create(antlr4.Parser.prototype);
Test.prototype.constructor = Test;

Object.defineProperty(Test.prototype, "atn", {
	get : function() {
		return atn;
	}
});

Test.EOF = antlr4.Token.EOF;
Test.T__0 = 1;
Test.T__1 = 2;
Test.T__2 = 3;
Test.T__3 = 4;
Test.T__4 = 5;
Test.T__5 = 6;
Test.ID = 7;
Test.WS = 8;
Test.ANY = 9;

Test.RULE_file = 0;
Test.RULE_clazz = 1;
Test.RULE_ignore = 2;
Test.RULE_method = 3;
Test.RULE_type = 4;
Test.RULE_block = 5;


function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Test.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.clazz = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClazzContext);
    } else {
        return this.getTypedRuleContext(ClazzContext,i);
    }
};




Test.FileContext = FileContext;

Test.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Test.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Test.T__0) {
            this.state = 12;
            this.clazz();
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


function ClazzContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Test.RULE_clazz;
    return this;
}

ClazzContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClazzContext.prototype.constructor = ClazzContext;

ClazzContext.prototype.ID = function() {
    return this.getToken(Test.ID, 0);
};

ClazzContext.prototype.ignore = function() {
    return this.getTypedRuleContext(IgnoreContext,0);
};




Test.ClazzContext = ClazzContext;

Test.prototype.clazz = function() {

    var localctx = new ClazzContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, Test.RULE_clazz);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(Test.T__0);
        this.state = 19;
        this.match(Test.ID);
        this.state = 20;
        this.match(Test.T__1);
        this.state = 21;
        this.ignore();
        this.state = 22;
        this.match(Test.T__2);
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


function IgnoreContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Test.RULE_ignore;
    return this;
}

IgnoreContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IgnoreContext.prototype.constructor = IgnoreContext;

IgnoreContext.prototype.method = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MethodContext);
    } else {
        return this.getTypedRuleContext(MethodContext,i);
    }
};




Test.IgnoreContext = IgnoreContext;

Test.prototype.ignore = function() {

    var localctx = new IgnoreContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, Test.RULE_ignore);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 26;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 24;
                    this.method();
                    break;

                case 2:
                    this.state = 25;
                    this.matchWildcard();
                    break;

                } 
            }
            this.state = 30;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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


function MethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Test.RULE_method;
    return this;
}

MethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodContext.prototype.constructor = MethodContext;

MethodContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

MethodContext.prototype.ID = function() {
    return this.getToken(Test.ID, 0);
};

MethodContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




Test.MethodContext = MethodContext;

Test.prototype.method = function() {

    var localctx = new MethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, Test.RULE_method);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.type();
        this.state = 32;
        this.match(Test.ID);
        this.state = 33;
        this.match(Test.T__3);
        this.state = 34;
        this.block();
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


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Test.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;





Test.TypeContext = TypeContext;

Test.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, Test.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        _la = this._input.LA(1);
        if(!(_la===Test.T__4 || _la===Test.T__5)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Test.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};




Test.BlockContext = BlockContext;

Test.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, Test.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(Test.T__1);
        this.state = 43;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 41;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 39;
                    this.block();
                    break;

                case 2:
                    this.state = 40;
                    this.matchWildcard();
                    break;

                } 
            }
            this.state = 45;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 46;
        this.match(Test.T__2);
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


exports.Test = Test;
