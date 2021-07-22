// Generated from c:\Development\Practice\antlr-mega-tutorial-master\test\Test.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\t1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0006\u0002\u0013\n\u0002\r\u0002\u000e\u0002",
    "\u0014\u0003\u0002\u0003\u0002\u0006\u0002\u0019\n\u0002\r\u0002\u000e",
    "\u0002\u001a\u0003\u0002\u0007\u0002\u001e\n\u0002\f\u0002\u000e\u0002",
    "!\u000b\u0002\u0003\u0003\u0006\u0003$\n\u0003\r\u0003\u000e\u0003%",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0002\u0002\t\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0003\u0002\u0006",
    "\u0005\u00022;C\\c|\b\u0002//2;??B\\aac|\u0004\u0002<<??\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u00024\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0003\u0012\u0003\u0002\u0002\u0002\u0005#\u0003\u0002\u0002\u0002",
    "\u0007\'\u0003\u0002\u0002\u0002\t)\u0003\u0002\u0002\u0002\u000b+\u0003",
    "\u0002\u0002\u0002\r-\u0003\u0002\u0002\u0002\u000f/\u0003\u0002\u0002",
    "\u0002\u0011\u0013\t\u0002\u0002\u0002\u0012\u0011\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002",
    "\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002",
    "\u0002\u0016\u0018\u0005\u0007\u0004\u0002\u0017\u0019\t\u0002\u0002",
    "\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002",
    "\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002",
    "\u0002\u001b\u001f\u0003\u0002\u0002\u0002\u001c\u001e\u0005\u000f\b",
    "\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e!\u0003\u0002\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 \u0004\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "\"$\t\u0003\u0002\u0002#\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002",
    "\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\u0006\u0003",
    "\u0002\u0002\u0002\'(\t\u0004\u0002\u0002(\b\u0003\u0002\u0002\u0002",
    ")*\u0007=\u0002\u0002*\n\u0003\u0002\u0002\u0002+,\u0007*\u0002\u0002",
    ",\f\u0003\u0002\u0002\u0002-.\u0007+\u0002\u0002.\u000e\u0003\u0002",
    "\u0002\u0002/0\t\u0005\u0002\u00020\u0010\u0003\u0002\u0002\u0002\u0007",
    "\u0002\u0014\u001a\u001f%\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TestLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TestLexer.prototype = Object.create(antlr4.Lexer.prototype);
TestLexer.prototype.constructor = TestLexer;

Object.defineProperty(TestLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

TestLexer.EOF = antlr4.Token.EOF;
TestLexer.INSTRPARAM = 1;
TestLexer.INSTRCODE = 2;
TestLexer.DELIM = 3;
TestLexer.SEMICOLON = 4;
TestLexer.LEFT_BRACKET = 5;
TestLexer.RIGHT_BRACKET = 6;
TestLexer.WS = 7;

TestLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

TestLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

TestLexer.prototype.literalNames = [ null, null, null, null, "';'", "'('", 
                                     "')'" ];

TestLexer.prototype.symbolicNames = [ null, "INSTRPARAM", "INSTRCODE", "DELIM", 
                                      "SEMICOLON", "LEFT_BRACKET", "RIGHT_BRACKET", 
                                      "WS" ];

TestLexer.prototype.ruleNames = [ "INSTRPARAM", "INSTRCODE", "DELIM", "SEMICOLON", 
                                  "LEFT_BRACKET", "RIGHT_BRACKET", "WS" ];

TestLexer.prototype.grammarFileName = "Test.g4";


exports.TestLexer = TestLexer;

