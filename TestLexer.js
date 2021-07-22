// Generated from TestLexer.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\fR\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0006\u0002\u001e\n\u0002\r\u0002\u000e",
    "\u0002\u001f\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0006\u0006-\n\u0006\r\u0006\u000e\u0006.\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0006\u00074\n\u0007\r\u0007\u000e\u00075\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b>\n\b\f\b\u000e\bA\u000b\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0002\u0002",
    "\u000e\u0004\u0003\u0006\u0004\b\u0005\n\u0006\f\u0007\u000e\b\u0010",
    "\t\u0012\n\u0014\u000b\u0016\u0002\u0018\u0002\u001a\f\u0004\u0002\u0003",
    "\u0006\b\u0002//2;??B\\aac|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0005",
    "\u00022;C\\c|\u0004\u0002<<??\u0002S\u0002\u0004\u0003\u0002\u0002\u0002",
    "\u0002\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003\u0002\u0002\u0002",
    "\u0002\n\u0003\u0002\u0002\u0002\u0003\f\u0003\u0002\u0002\u0002\u0003",
    "\u000e\u0003\u0002\u0002\u0002\u0003\u0010\u0003\u0002\u0002\u0002\u0003",
    "\u0012\u0003\u0002\u0002\u0002\u0003\u0014\u0003\u0002\u0002\u0002\u0003",
    "\u001a\u0003\u0002\u0002\u0002\u0004\u001d\u0003\u0002\u0002\u0002\u0006",
    "!\u0003\u0002\u0002\u0002\b%\u0003\u0002\u0002\u0002\n\'\u0003\u0002",
    "\u0002\u0002\f,\u0003\u0002\u0002\u0002\u000e0\u0003\u0002\u0002\u0002",
    "\u00109\u0003\u0002\u0002\u0002\u0012D\u0003\u0002\u0002\u0002\u0014",
    "F\u0003\u0002\u0002\u0002\u0016J\u0003\u0002\u0002\u0002\u0018L\u0003",
    "\u0002\u0002\u0002\u001aN\u0003\u0002\u0002\u0002\u001c\u001e\t\u0002",
    "\u0002\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
    "\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002",
    "\u0002\u0002 \u0005\u0003\u0002\u0002\u0002!\"\u0007*\u0002\u0002\"",
    "#\u0003\u0002\u0002\u0002#$\b\u0003\u0002\u0002$\u0007\u0003\u0002\u0002",
    "\u0002%&\u0007=\u0002\u0002&\t\u0003\u0002\u0002\u0002\'(\t\u0003\u0002",
    "\u0002()\u0003\u0002\u0002\u0002)*\b\u0005\u0003\u0002*\u000b\u0003",
    "\u0002\u0002\u0002+-\t\u0004\u0002\u0002,+\u0003\u0002\u0002\u0002-",
    ".\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/\r\u0003\u0002\u0002\u000203\u0007)\u0002\u000214\t\u0004\u0002",
    "\u000224\u0005\u001a\r\u000231\u0003\u0002\u0002\u000232\u0003\u0002",
    "\u0002\u000245\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003",
    "\u0002\u0002\u000267\u0003\u0002\u0002\u000278\u0007)\u0002\u00028\u000f",
    "\u0003\u0002\u0002\u00029:\u0005\u0016\u000b\u0002:?\u0005\f\u0006\u0002",
    ";<\u0007=\u0002\u0002<>\u0005\f\u0006\u0002=;\u0003\u0002\u0002\u0002",
    ">A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002",
    "\u0002@B\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002BC\u0005\u0018",
    "\f\u0002C\u0011\u0003\u0002\u0002\u0002DE\t\u0005\u0002\u0002E\u0013",
    "\u0003\u0002\u0002\u0002FG\u0007+\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HI\b\n\u0004\u0002I\u0015\u0003\u0002\u0002\u0002JK\u0007]\u0002\u0002",
    "K\u0017\u0003\u0002\u0002\u0002LM\u0007_\u0002\u0002M\u0019\u0003\u0002",
    "\u0002\u0002NO\t\u0003\u0002\u0002OP\u0003\u0002\u0002\u0002PQ\b\r\u0003",
    "\u0002Q\u001b\u0003\u0002\u0002\u0002\t\u0002\u0003\u001f.35?\u0005",
    "\u0007\u0003\u0002\u0002\u0003\u0002\u0006\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class TestLexer extends antlr4.Lexer {

    static grammarFileName = "TestLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "INPARAMPAIRS" ];
	static literalNames = [ null, null, "'('", "';'", null, null, null, null, 
                         null, "')'" ];
	static symbolicNames = [ null, "INSTRCODE", "LEFT_BRACKET", "SEMICOLON", 
                          "WS", "PARAMWORD", "WSWORD", "ARRAY", "DELIM", 
                          "RIGHT_BRACKET", "S" ];
	static ruleNames = [ "INSTRCODE", "LEFT_BRACKET", "SEMICOLON", "WS", "PARAMWORD", 
                      "WSWORD", "ARRAY", "DELIM", "RIGHT_BRACKET", "LEFT_SQUARE_BRACKET", 
                      "RIGHT_SQUARE_BRACKET", "S" ];

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
TestLexer.LEFT_BRACKET = 2;
TestLexer.SEMICOLON = 3;
TestLexer.WS = 4;
TestLexer.PARAMWORD = 5;
TestLexer.WSWORD = 6;
TestLexer.ARRAY = 7;
TestLexer.DELIM = 8;
TestLexer.RIGHT_BRACKET = 9;
TestLexer.S = 10;

TestLexer.INPARAMPAIRS = 1;




