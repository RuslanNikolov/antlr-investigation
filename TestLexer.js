// Generated from TestLexer.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0010m\b\u0001\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004",
    "\u0003\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t",
    "\u0006\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004",
    "\u000b\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f",
    "\t\u000f\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012",
    "\u0004\u0013\t\u0013\u0003\u0002\u0006\u0002+\n\u0002\r\u0002\u000e",
    "\u0002,\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u00058\n\u0005",
    "\r\u0005\u000e\u00059\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006",
    "?\n\u0006\r\u0006\u000e\u0006@\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0002\u0002",
    "\u0014\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011",
    "\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u0002\u001f",
    "\u0002!\u0002#\u000f%\u0002\'\u0010\u0005\u0002\u0003\u0004\u0006\b",
    "\u0002//2;??B\\aac|\u0005\u00022;C\\c|\u0004\u0002<<??\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u0002n\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0003",
    "\u000b\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002\u0002\u0002\u0003",
    "\u000f\u0003\u0002\u0002\u0002\u0003\u0011\u0003\u0002\u0002\u0002\u0003",
    "\u0013\u0003\u0002\u0002\u0002\u0003\u0015\u0003\u0002\u0002\u0002\u0003",
    "\u0017\u0003\u0002\u0002\u0002\u0003\u0019\u0003\u0002\u0002\u0002\u0003",
    "\u001b\u0003\u0002\u0002\u0002\u0004\u001d\u0003\u0002\u0002\u0002\u0004",
    "\u001f\u0003\u0002\u0002\u0002\u0004!\u0003\u0002\u0002\u0002\u0004",
    "#\u0003\u0002\u0002\u0002\u0004%\u0003\u0002\u0002\u0002\u0004\'\u0003",
    "\u0002\u0002\u0002\u0005*\u0003\u0002\u0002\u0002\u0007.\u0003\u0002",
    "\u0002\u0002\t0\u0003\u0002\u0002\u0002\u000b4\u0003\u0002\u0002\u0002",
    "\r>\u0003\u0002\u0002\u0002\u000fB\u0003\u0002\u0002\u0002\u0011D\u0003",
    "\u0002\u0002\u0002\u0013H\u0003\u0002\u0002\u0002\u0015J\u0003\u0002",
    "\u0002\u0002\u0017L\u0003\u0002\u0002\u0002\u0019N\u0003\u0002\u0002",
    "\u0002\u001bR\u0003\u0002\u0002\u0002\u001dW\u0003\u0002\u0002\u0002",
    "\u001f[\u0003\u0002\u0002\u0002!_\u0003\u0002\u0002\u0002#c\u0003\u0002",
    "\u0002\u0002%g\u0003\u0002\u0002\u0002\'k\u0003\u0002\u0002\u0002)+",
    "\t\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-\u0006\u0003\u0002",
    "\u0002\u0002./\u0007=\u0002\u0002/\b\u0003\u0002\u0002\u000201\u0007",
    "*\u0002\u000212\u0003\u0002\u0002\u000223\b\u0004\u0002\u00023\n\u0003",
    "\u0002\u0002\u000247\u0005\u0017\u000b\u000258\t\u0002\u0002\u00026",
    "8\u0005\u0019\f\u000275\u0003\u0002\u0002\u000276\u0003\u0002\u0002",
    "\u000289\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;<\u0005\u0017\u000b\u0002<\f",
    "\u0003\u0002\u0002\u0002=?\t\u0003\u0002\u0002>=\u0003\u0002\u0002\u0002",
    "?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002A\u000e\u0003\u0002\u0002\u0002BC\t\u0004\u0002\u0002C\u0010\u0003",
    "\u0002\u0002\u0002DE\u0007]\u0002\u0002EF\u0003\u0002\u0002\u0002FG",
    "\b\b\u0003\u0002G\u0012\u0003\u0002\u0002\u0002HI\u0007*\u0002\u0002",
    "I\u0014\u0003\u0002\u0002\u0002JK\u0007+\u0002\u0002K\u0016\u0003\u0002",
    "\u0002\u0002LM\u0007)\u0002\u0002M\u0018\u0003\u0002\u0002\u0002NO\t",
    "\u0005\u0002\u0002OP\u0003\u0002\u0002\u0002PQ\b\f\u0004\u0002Q\u001a",
    "\u0003\u0002\u0002\u0002RS\u0007+\u0002\u0002ST\u0007=\u0002\u0002T",
    "U\u0003\u0002\u0002\u0002UV\b\r\u0005\u0002V\u001c\u0003\u0002\u0002",
    "\u0002WX\u0005\u000b\u0005\u0002XY\u0003\u0002\u0002\u0002YZ\b\u000e",
    "\u0006\u0002Z\u001e\u0003\u0002\u0002\u0002[\\\u0005\r\u0006\u0002\\",
    "]\u0003\u0002\u0002\u0002]^\b\u000f\u0007\u0002^ \u0003\u0002\u0002",
    "\u0002_`\u0005\u000f\u0007\u0002`a\u0003\u0002\u0002\u0002ab\b\u0010",
    "\b\u0002b\"\u0003\u0002\u0002\u0002cd\u0007_\u0002\u0002de\u0003\u0002",
    "\u0002\u0002ef\b\u0011\u0005\u0002f$\u0003\u0002\u0002\u0002gh\u0005",
    "\u0019\f\u0002hi\u0003\u0002\u0002\u0002ij\b\u0012\t\u0002j&\u0003\u0002",
    "\u0002\u0002kl\u0007=\u0002\u0002l(\u0003\u0002\u0002\u0002\t\u0002",
    "\u0003\u0004,79@\n\u0007\u0003\u0002\u0007\u0004\u0002\b\u0002\u0002",
    "\u0006\u0002\u0002\t\u0006\u0002\t\u0007\u0002\t\b\u0002\t\r\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class TestLexer extends antlr4.Lexer {

    static grammarFileName = "TestLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "INSTR_PARAMS_MODE", "ARRAY_VALUE_MODE" ];
	static literalNames = [ null, null, null, null, null, null, null, "'['", 
                         null, "')'", "'''", null, "');'", "']'" ];
	static symbolicNames = [ null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
                          "WS_PARAM_VALUE", "PLAIN_PARAM_WORD", "DELIM", 
                          "LEFT_ARR_BRACKET", "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", 
                          "SINGLE_QUOTE", "WS", "RIGHT_INSTRPARAMS_BRACKET", 
                          "RIGHT_ARR_BRACKET", "ARR_ITEM_SEPARATOR" ];
	static ruleNames = [ "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
                      "WS_PARAM_VALUE", "PLAIN_PARAM_WORD", "DELIM", "LEFT_ARR_BRACKET", 
                      "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", "SINGLE_QUOTE", 
                      "WS", "RIGHT_INSTRPARAMS_BRACKET", "ARR_WS_PARAM_VALUE", 
                      "ARR_PLAIN_PARAM_WORD", "ARR_DELIM", "RIGHT_ARR_BRACKET", 
                      "ARR_WS", "ARR_ITEM_SEPARATOR" ];

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
TestLexer.LEFT_ARR_BRACKET = 7;
TestLexer.LEFT_OBJ_BRACKET = 8;
TestLexer.RIGHT_OBJ_BRACKET = 9;
TestLexer.SINGLE_QUOTE = 10;
TestLexer.WS = 11;
TestLexer.RIGHT_INSTRPARAMS_BRACKET = 12;
TestLexer.RIGHT_ARR_BRACKET = 13;
TestLexer.ARR_ITEM_SEPARATOR = 14;

TestLexer.INSTR_PARAMS_MODE = 1;
TestLexer.ARRAY_VALUE_MODE = 2;




