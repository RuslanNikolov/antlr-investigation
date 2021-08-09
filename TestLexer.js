// Generated from TestLexer.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0011\u007f\b\u0001\b\u0001\b\u0001\b\u0001\u0004\u0002",
    "\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005",
    "\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004",
    "\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e",
    "\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012",
    "\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t\u0014\u0004\u0015\t\u0015",
    "\u0004\u0016\t\u0016\u0003\u0002\u0006\u00022\n\u0002\r\u0002\u000e",
    "\u00023\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0006\u0005=\n\u0005\r\u0005\u000e\u0005>\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0006\u0015x\n\u0015\r\u0015\u000e\u0015y\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0002\u0002\u0017\u0006\u0003\b",
    "\u0004\n\u0005\f\u0006\u000e\u0007\u0010\b\u0012\t\u0014\n\u0016\u000b",
    "\u0018\f\u001a\r\u001c\u0002\u001e\u0002 \u0002\"\u0002$\u0002&\u000e",
    "(\u0002*\u000f,\u0010.\u0011\u0006\u0002\u0003\u0004\u0005\u0006\b\u0002",
    "//2;??B\\aac|\u0005\u00022;C\\c|\u0004\u0002<<??\u0005\u0002\u000b\f",
    "\u000f\u000f\"\"\u0002\u007f\u0002\u0006\u0003\u0002\u0002\u0002\u0002",
    "\b\u0003\u0002\u0002\u0002\u0002\n\u0003\u0002\u0002\u0002\u0003\f\u0003",
    "\u0002\u0002\u0002\u0003\u000e\u0003\u0002\u0002\u0002\u0003\u0010\u0003",
    "\u0002\u0002\u0002\u0003\u0012\u0003\u0002\u0002\u0002\u0003\u0014\u0003",
    "\u0002\u0002\u0002\u0003\u0016\u0003\u0002\u0002\u0002\u0003\u0018\u0003",
    "\u0002\u0002\u0002\u0003\u001a\u0003\u0002\u0002\u0002\u0004\u001c\u0003",
    "\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u0004 \u0003",
    "\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0004$\u0003\u0002",
    "\u0002\u0002\u0004&\u0003\u0002\u0002\u0002\u0004(\u0003\u0002\u0002",
    "\u0002\u0004*\u0003\u0002\u0002\u0002\u0005,\u0003\u0002\u0002\u0002",
    "\u0005.\u0003\u0002\u0002\u0002\u00061\u0003\u0002\u0002\u0002\b5\u0003",
    "\u0002\u0002\u0002\n7\u0003\u0002\u0002\u0002\f<\u0003\u0002\u0002\u0002",
    "\u000e@\u0003\u0002\u0002\u0002\u0010D\u0003\u0002\u0002\u0002\u0012",
    "F\u0003\u0002\u0002\u0002\u0014J\u0003\u0002\u0002\u0002\u0016L\u0003",
    "\u0002\u0002\u0002\u0018N\u0003\u0002\u0002\u0002\u001aR\u0003\u0002",
    "\u0002\u0002\u001cW\u0003\u0002\u0002\u0002\u001e[\u0003\u0002\u0002",
    "\u0002 _\u0003\u0002\u0002\u0002\"c\u0003\u0002\u0002\u0002$g\u0003",
    "\u0002\u0002\u0002&k\u0003\u0002\u0002\u0002(m\u0003\u0002\u0002\u0002",
    "*q\u0003\u0002\u0002\u0002,w\u0003\u0002\u0002\u0002.{\u0003\u0002\u0002",
    "\u000202\t\u0002\u0002\u000210\u0003\u0002\u0002\u000223\u0003\u0002",
    "\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u00024\u0007",
    "\u0003\u0002\u0002\u000256\u0007=\u0002\u00026\t\u0003\u0002\u0002\u0002",
    "78\u0007*\u0002\u000289\u0003\u0002\u0002\u00029:\b\u0004\u0002\u0002",
    ":\u000b\u0003\u0002\u0002\u0002;=\t\u0003\u0002\u0002<;\u0003\u0002",
    "\u0002\u0002=>\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003",
    "\u0002\u0002\u0002?\r\u0003\u0002\u0002\u0002@A\u0007)\u0002\u0002A",
    "B\u0003\u0002\u0002\u0002BC\b\u0006\u0003\u0002C\u000f\u0003\u0002\u0002",
    "\u0002DE\t\u0004\u0002\u0002E\u0011\u0003\u0002\u0002\u0002FG\u0007",
    "]\u0002\u0002GH\u0003\u0002\u0002\u0002HI\b\b\u0004\u0002I\u0013\u0003",
    "\u0002\u0002\u0002JK\u0007*\u0002\u0002K\u0015\u0003\u0002\u0002\u0002",
    "LM\u0007+\u0002\u0002M\u0017\u0003\u0002\u0002\u0002NO\t\u0005\u0002",
    "\u0002OP\u0003\u0002\u0002\u0002PQ\b\u000b\u0005\u0002Q\u0019\u0003",
    "\u0002\u0002\u0002RS\u0007+\u0002\u0002ST\u0007=\u0002\u0002TU\u0003",
    "\u0002\u0002\u0002UV\b\f\u0006\u0002V\u001b\u0003\u0002\u0002\u0002",
    "WX\u0005\u000e\u0006\u0002XY\u0003\u0002\u0002\u0002YZ\b\r\u0007\u0002",
    "Z\u001d\u0003\u0002\u0002\u0002[\\\u0005\f\u0005\u0002\\]\u0003\u0002",
    "\u0002\u0002]^\b\u000e\b\u0002^\u001f\u0003\u0002\u0002\u0002_`\u0005",
    "\u0014\t\u0002`a\u0003\u0002\u0002\u0002ab\b\u000f\t\u0002b!\u0003\u0002",
    "\u0002\u0002cd\u0005\u0016\n\u0002de\u0003\u0002\u0002\u0002ef\b\u0010",
    "\n\u0002f#\u0003\u0002\u0002\u0002gh\u0005\u0010\u0007\u0002hi\u0003",
    "\u0002\u0002\u0002ij\b\u0011\u000b\u0002j%\u0003\u0002\u0002\u0002k",
    "l\u0007=\u0002\u0002l\'\u0003\u0002\u0002\u0002mn\u0005\u0018\u000b",
    "\u0002no\u0003\u0002\u0002\u0002op\b\u0013\f\u0002p)\u0003\u0002\u0002",
    "\u0002qr\u0007_\u0002\u0002rs\u0003\u0002\u0002\u0002st\b\u0014\u0006",
    "\u0002t+\u0003\u0002\u0002\u0002ux\t\u0002\u0002\u0002vx\u0005\u0018",
    "\u000b\u0002wu\u0003\u0002\u0002\u0002wv\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002",
    "z-\u0003\u0002\u0002\u0002{|\u0007)\u0002\u0002|}\u0003\u0002\u0002",
    "\u0002}~\b\u0016\u0006\u0002~/\u0003\u0002\u0002\u0002\n\u0002\u0003",
    "\u0004\u00053>wy\r\u0007\u0003\u0002\u0007\u0005\u0002\u0007\u0004\u0002",
    "\b\u0002\u0002\u0006\u0002\u0002\t\u0007\u0002\t\u0006\u0002\t\n\u0002",
    "\t\u000b\u0002\t\b\u0002\t\f\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class TestLexer extends antlr4.Lexer {

    static grammarFileName = "TestLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "INSTR_PARAMS_MODE", "ARRAY_VALUE_MODE", 
                      "WHITEPSPACE_PARAM_VALUE_MODE" ];
	static literalNames = [ null, null, null, null, null, null, null, "'['", 
                         null, "')'", null, "');'", null, "']'" ];
	static symbolicNames = [ null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
                          "PLAIN_PARAM_WORD", "WHITESPACE_SINGLE_QUOTE", 
                          "DELIM", "LEFT_ARR_BRACKET", "LEFT_OBJ_BRACKET", 
                          "RIGHT_OBJ_BRACKET", "WS", "RIGHT_INSTRPARAMS_BRACKET", 
                          "ARR_ITEM_SEPARATOR", "RIGHT_ARR_BRACKET", "WS_PARAM_VALUE_CONTENT", 
                          "WH_END_SINGLE_QUOTE" ];
	static ruleNames = [ "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
                      "PLAIN_PARAM_WORD", "WHITESPACE_SINGLE_QUOTE", "DELIM", 
                      "LEFT_ARR_BRACKET", "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", 
                      "WS", "RIGHT_INSTRPARAMS_BRACKET", "ARR_WH_SINGLE_QUOTE", 
                      "ARR_PLAIN_PARAM_WORD", "ARR_LEFT_OBJ_BRACKET", "ARR_RIGHT_OBJ_BRACKET", 
                      "ARR_DELIM", "ARR_ITEM_SEPARATOR", "ARR_WS", "RIGHT_ARR_BRACKET", 
                      "WS_PARAM_VALUE_CONTENT", "WH_END_SINGLE_QUOTE" ];

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
TestLexer.PLAIN_PARAM_WORD = 4;
TestLexer.WHITESPACE_SINGLE_QUOTE = 5;
TestLexer.DELIM = 6;
TestLexer.LEFT_ARR_BRACKET = 7;
TestLexer.LEFT_OBJ_BRACKET = 8;
TestLexer.RIGHT_OBJ_BRACKET = 9;
TestLexer.WS = 10;
TestLexer.RIGHT_INSTRPARAMS_BRACKET = 11;
TestLexer.ARR_ITEM_SEPARATOR = 12;
TestLexer.RIGHT_ARR_BRACKET = 13;
TestLexer.WS_PARAM_VALUE_CONTENT = 14;
TestLexer.WH_END_SINGLE_QUOTE = 15;

TestLexer.INSTR_PARAMS_MODE = 1;
TestLexer.ARRAY_VALUE_MODE = 2;
TestLexer.WHITEPSPACE_PARAM_VALUE_MODE = 3;




