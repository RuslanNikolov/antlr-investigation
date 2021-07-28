// Generated from TestLexer.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0010R\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003",
    "\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006",
    "\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b",
    "\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f",
    "\u0003\u0002\u0006\u0002\"\n\u0002\r\u0002\u000e\u0002#\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0006\u0005/\n\u0005\r\u0005\u000e\u00050\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0006\u00066\n\u0006\r\u0006\u000e\u0006",
    "7\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0002\u0010\u0004\u0003",
    "\u0006\u0004\b\u0005\n\u0006\f\u0007\u000e\b\u0010\t\u0012\n\u0014\u000b",
    "\u0016\f\u0018\r\u001a\u000e\u001c\u000f\u001e\u0010\u0004\u0002\u0003",
    "\u0006\b\u0002//2;??B\\aac|\u0005\u00022;C\\c|\u0004\u0002<<??\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002T\u0002\u0004\u0003\u0002\u0002",
    "\u0002\u0002\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003\u0002\u0002",
    "\u0002\u0003\n\u0003\u0002\u0002\u0002\u0003\f\u0003\u0002\u0002\u0002",
    "\u0003\u000e\u0003\u0002\u0002\u0002\u0003\u0010\u0003\u0002\u0002\u0002",
    "\u0003\u0012\u0003\u0002\u0002\u0002\u0003\u0014\u0003\u0002\u0002\u0002",
    "\u0003\u0016\u0003\u0002\u0002\u0002\u0003\u0018\u0003\u0002\u0002\u0002",
    "\u0003\u001a\u0003\u0002\u0002\u0002\u0003\u001c\u0003\u0002\u0002\u0002",
    "\u0003\u001e\u0003\u0002\u0002\u0002\u0004!\u0003\u0002\u0002\u0002",
    "\u0006%\u0003\u0002\u0002\u0002\b\'\u0003\u0002\u0002\u0002\n+\u0003",
    "\u0002\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000e9\u0003\u0002\u0002",
    "\u0002\u0010;\u0003\u0002\u0002\u0002\u0012=\u0003\u0002\u0002\u0002",
    "\u0014?\u0003\u0002\u0002\u0002\u0016A\u0003\u0002\u0002\u0002\u0018",
    "C\u0003\u0002\u0002\u0002\u001aE\u0003\u0002\u0002\u0002\u001cI\u0003",
    "\u0002\u0002\u0002\u001eM\u0003\u0002\u0002\u0002 \"\t\u0002\u0002\u0002",
    "! \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#!\u0003\u0002",
    "\u0002\u0002#$\u0003\u0002\u0002\u0002$\u0005\u0003\u0002\u0002\u0002",
    "%&\u0007=\u0002\u0002&\u0007\u0003\u0002\u0002\u0002\'(\u0007*\u0002",
    "\u0002()\u0003\u0002\u0002\u0002)*\b\u0004\u0002\u0002*\t\u0003\u0002",
    "\u0002\u0002+.\u0005\u0018\f\u0002,/\t\u0002\u0002\u0002-/\u0005\u001a",
    "\r\u0002.,\u0003\u0002\u0002\u0002.-\u0003\u0002\u0002\u0002/0\u0003",
    "\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u000223\u0005\u0018\f\u00023\u000b\u0003\u0002",
    "\u0002\u000246\t\u0003\u0002\u000254\u0003\u0002\u0002\u000267\u0003",
    "\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u0002",
    "8\r\u0003\u0002\u0002\u00029:\t\u0004\u0002\u0002:\u000f\u0003\u0002",
    "\u0002\u0002;<\u0007*\u0002\u0002<\u0011\u0003\u0002\u0002\u0002=>\u0007",
    "+\u0002\u0002>\u0013\u0003\u0002\u0002\u0002?@\u0007]\u0002\u0002@\u0015",
    "\u0003\u0002\u0002\u0002AB\u0007_\u0002\u0002B\u0017\u0003\u0002\u0002",
    "\u0002CD\u0007)\u0002\u0002D\u0019\u0003\u0002\u0002\u0002EF\t\u0005",
    "\u0002\u0002FG\u0003\u0002\u0002\u0002GH\b\r\u0003\u0002H\u001b\u0003",
    "\u0002\u0002\u0002IJ\u0007=\u0002\u0002JK\u0003\u0002\u0002\u0002KL",
    "\b\u000e\u0003\u0002L\u001d\u0003\u0002\u0002\u0002MN\u0007+\u0002\u0002",
    "NO\u0007=\u0002\u0002OP\u0003\u0002\u0002\u0002PQ\b\u000f\u0004\u0002",
    "Q\u001f\u0003\u0002\u0002\u0002\b\u0002\u0003#.07\u0005\u0007\u0003",
    "\u0002\b\u0002\u0002\u0006\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class TestLexer extends antlr4.Lexer {

    static grammarFileName = "TestLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "INSTR_PARAMS_MODE" ];
	static literalNames = [ null, null, null, null, null, null, null, null, 
                         "')'", "'['", "']'", "'''", null, null, "');'" ];
	static symbolicNames = [ null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
                          "WS_PARAM_VALUE", "PLAIN_PARAM_WORD", "DELIM", 
                          "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", "LEFT_ARR_BRACKET", 
                          "RIGHT_ARR_BRACKET", "SINGLE_QUOTE", "WS", "INSTR_PARAMS_SEMICOLON", 
                          "RIGHT_INSTRPARAMS_BRACKET" ];
	static ruleNames = [ "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
                      "WS_PARAM_VALUE", "PLAIN_PARAM_WORD", "DELIM", "LEFT_OBJ_BRACKET", 
                      "RIGHT_OBJ_BRACKET", "LEFT_ARR_BRACKET", "RIGHT_ARR_BRACKET", 
                      "SINGLE_QUOTE", "WS", "INSTR_PARAMS_SEMICOLON", "RIGHT_INSTRPARAMS_BRACKET" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

TestLexer.EOF = antlr4.Token.EOF;
TestLexer.INSTRCODE = 1;
TestLexer.INSTR_GROUPS_SEPARATOR = 2;
TestLexer.LEFT_INSTRPARAMS_BRACKET = 3;
TestLexer.WS_PARAM_VALUE = 4;
TestLexer.PLAIN_PARAM_WORD = 5;
TestLexer.DELIM = 6;
TestLexer.LEFT_OBJ_BRACKET = 7;
TestLexer.RIGHT_OBJ_BRACKET = 8;
TestLexer.LEFT_ARR_BRACKET = 9;
TestLexer.RIGHT_ARR_BRACKET = 10;
TestLexer.SINGLE_QUOTE = 11;
TestLexer.WS = 12;
TestLexer.INSTR_PARAMS_SEMICOLON = 13;
TestLexer.RIGHT_INSTRPARAMS_BRACKET = 14;

TestLexer.INSTR_PARAMS_MODE = 1;




