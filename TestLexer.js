// Generated from TestLexer.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0012f\b\u0001\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004",
    "\u0003\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t",
    "\u0006\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004",
    "\u000b\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f",
    "\t\u000f\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0006\u0002",
    "\'\n\u0002\r\u0002\u000e\u0002(\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0006\u00054\n\u0005\r\u0005\u000e\u00055\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006>\n\u0006\f\u0006",
    "\u000e\u0006A\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0006",
    "\u0007F\n\u0007\r\u0007\u000e\u0007G\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0002\u0002\u0012",
    "\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t",
    "\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010",
    "!\u0011#\u0012\u0005\u0002\u0003\u0004\u0006\b\u0002//2;??B\\aac|\u0005",
    "\u00022;C\\c|\u0004\u0002<<??\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "h\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0003\u000b\u0003\u0002\u0002",
    "\u0002\u0003\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003\u0002\u0002",
    "\u0002\u0003\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003\u0002\u0002",
    "\u0002\u0003\u0015\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002",
    "\u0002\u0003\u0019\u0003\u0002\u0002\u0002\u0003\u001b\u0003\u0002\u0002",
    "\u0002\u0003\u001d\u0003\u0002\u0002\u0002\u0003\u001f\u0003\u0002\u0002",
    "\u0002\u0003!\u0003\u0002\u0002\u0002\u0004#\u0003\u0002\u0002\u0002",
    "\u0005&\u0003\u0002\u0002\u0002\u0007*\u0003\u0002\u0002\u0002\t,\u0003",
    "\u0002\u0002\u0002\u000b0\u0003\u0002\u0002\u0002\r9\u0003\u0002\u0002",
    "\u0002\u000fE\u0003\u0002\u0002\u0002\u0011I\u0003\u0002\u0002\u0002",
    "\u0013K\u0003\u0002\u0002\u0002\u0015M\u0003\u0002\u0002\u0002\u0017",
    "O\u0003\u0002\u0002\u0002\u0019Q\u0003\u0002\u0002\u0002\u001bU\u0003",
    "\u0002\u0002\u0002\u001dW\u0003\u0002\u0002\u0002\u001f[\u0003\u0002",
    "\u0002\u0002!_\u0003\u0002\u0002\u0002#d\u0003\u0002\u0002\u0002%\'",
    "\t\u0002\u0002\u0002&%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002",
    "\u0002(&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)\u0006\u0003",
    "\u0002\u0002\u0002*+\u0007=\u0002\u0002+\b\u0003\u0002\u0002\u0002,",
    "-\u0007*\u0002\u0002-.\u0003\u0002\u0002\u0002./\b\u0004\u0002\u0002",
    "/\n\u0003\u0002\u0002\u000203\u0005\u0017\u000b\u000214\t\u0003\u0002",
    "\u000224\u0005\u001d\u000e\u000231\u0003\u0002\u0002\u000232\u0003\u0002",
    "\u0002\u000245\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003",
    "\u0002\u0002\u000267\u0003\u0002\u0002\u000278\u0005\u0017\u000b\u0002",
    "8\f\u0003\u0002\u0002\u00029:\u0005\u0019\f\u0002:?\u0005\u000f\u0007",
    "\u0002;<\u0007=\u0002\u0002<>\u0005\u000f\u0007\u0002=;\u0003\u0002",
    "\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003",
    "\u0002\u0002\u0002@B\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002",
    "BC\u0005\u001b\r\u0002C\u000e\u0003\u0002\u0002\u0002DF\t\u0003\u0002",
    "\u0002ED\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GE\u0003\u0002",
    "\u0002\u0002GH\u0003\u0002\u0002\u0002H\u0010\u0003\u0002\u0002\u0002",
    "IJ\t\u0004\u0002\u0002J\u0012\u0003\u0002\u0002\u0002KL\u0007*\u0002",
    "\u0002L\u0014\u0003\u0002\u0002\u0002MN\u0007+\u0002\u0002N\u0016\u0003",
    "\u0002\u0002\u0002OP\u0007)\u0002\u0002P\u0018\u0003\u0002\u0002\u0002",
    "QR\u0007]\u0002\u0002RS\u0003\u0002\u0002\u0002ST\b\f\u0003\u0002T\u001a",
    "\u0003\u0002\u0002\u0002UV\u0007_\u0002\u0002V\u001c\u0003\u0002\u0002",
    "\u0002WX\t\u0005\u0002\u0002XY\u0003\u0002\u0002\u0002YZ\b\u000e\u0004",
    "\u0002Z\u001e\u0003\u0002\u0002\u0002[\\\u0007=\u0002\u0002\\]\u0003",
    "\u0002\u0002\u0002]^\b\u000f\u0004\u0002^ \u0003\u0002\u0002\u0002_",
    "`\u0007+\u0002\u0002`a\u0007=\u0002\u0002ab\u0003\u0002\u0002\u0002",
    "bc\b\u0010\u0005\u0002c\"\u0003\u0002\u0002\u0002de\u0007=\u0002\u0002",
    "e$\u0003\u0002\u0002\u0002\n\u0002\u0003\u0004(35?G\u0006\u0007\u0003",
    "\u0002\u0007\u0004\u0002\b\u0002\u0002\u0006\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class TestLexer extends antlr4.Lexer {

    static grammarFileName = "TestLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "INSTR_PARAMS_MODE", "IN_ARRAY_VALUE" ];
	static literalNames = [ null, null, null, null, null, null, null, null, 
                         null, "')'", "'''", "'['", "']'", null, null, "');'" ];
	static symbolicNames = [ null, "INSTRCODE", "SEMICOLON", "LEFT_INSTRPARAMS_BRACKET", 
                          "WS_PARAM_VALUE", "ARRAY_PARAM_VALUE", "PARAM_NAME", 
                          "DELIM", "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", 
                          "SINGLE_QUOTE", "LEFT_SQ_BRACKET", "RIGHT_SQ_BRACKET", 
                          "WS", "INSTR_PARAMS_SEMICOLON", "RIGHT_INSTRPARAMS_BRACKET", 
                          "ARRAY_ITEM_SEMICOLON" ];
	static ruleNames = [ "INSTRCODE", "SEMICOLON", "LEFT_INSTRPARAMS_BRACKET", 
                      "WS_PARAM_VALUE", "ARRAY_PARAM_VALUE", "PARAM_NAME", 
                      "DELIM", "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", 
                      "SINGLE_QUOTE", "LEFT_SQ_BRACKET", "RIGHT_SQ_BRACKET", 
                      "WS", "INSTR_PARAMS_SEMICOLON", "RIGHT_INSTRPARAMS_BRACKET", 
                      "ARRAY_ITEM_SEMICOLON" ];

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
TestLexer.SEMICOLON = 2;
TestLexer.LEFT_INSTRPARAMS_BRACKET = 3;
TestLexer.WS_PARAM_VALUE = 4;
TestLexer.ARRAY_PARAM_VALUE = 5;
TestLexer.PARAM_NAME = 6;
TestLexer.DELIM = 7;
TestLexer.LEFT_OBJ_BRACKET = 8;
TestLexer.RIGHT_OBJ_BRACKET = 9;
TestLexer.SINGLE_QUOTE = 10;
TestLexer.LEFT_SQ_BRACKET = 11;
TestLexer.RIGHT_SQ_BRACKET = 12;
TestLexer.WS = 13;
TestLexer.INSTR_PARAMS_SEMICOLON = 14;
TestLexer.RIGHT_INSTRPARAMS_BRACKET = 15;
TestLexer.ARRAY_ITEM_SEMICOLON = 16;

TestLexer.INSTR_PARAMS_MODE = 1;
TestLexer.IN_ARRAY_VALUE = 2;




