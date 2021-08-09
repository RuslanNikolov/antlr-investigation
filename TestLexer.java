// Generated from TestLexer.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TestLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INSTRCODE=1, INSTR_GROUPS_SEPARATOR=2, LEFT_INSTRPARAMS_BRACKET=3, PLAIN_PARAM_WORD=4, 
		WHITESPACE_SINGLE_QUOTE=5, DELIM=6, LEFT_ARR_BRACKET=7, LEFT_OBJ_BRACKET=8, 
		RIGHT_OBJ_BRACKET=9, WS=10, RIGHT_INSTRPARAMS_BRACKET=11, ARR_ITEM_SEPARATOR=12, 
		RIGHT_ARR_BRACKET=13, WS_PARAM_VALUE_CONTENT=14, WH_END_SINGLE_QUOTE=15;
	public static final int
		INSTR_PARAMS_MODE=1, ARRAY_VALUE_MODE=2, WHITEPSPACE_PARAM_VALUE_MODE=3;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "INSTR_PARAMS_MODE", "ARRAY_VALUE_MODE", "WHITEPSPACE_PARAM_VALUE_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", "PLAIN_PARAM_WORD", 
			"WHITESPACE_SINGLE_QUOTE", "DELIM", "LEFT_ARR_BRACKET", "LEFT_OBJ_BRACKET", 
			"RIGHT_OBJ_BRACKET", "WS", "RIGHT_INSTRPARAMS_BRACKET", "ARR_WH_SINGLE_QUOTE", 
			"ARR_PLAIN_PARAM_WORD", "ARR_LEFT_OBJ_BRACKET", "ARR_RIGHT_OBJ_BRACKET", 
			"ARR_DELIM", "ARR_ITEM_SEPARATOR", "ARR_WS", "RIGHT_ARR_BRACKET", "WS_PARAM_VALUE_CONTENT", 
			"WH_END_SINGLE_QUOTE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, "'['", null, "')'", null, "');'", 
			null, "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
			"PLAIN_PARAM_WORD", "WHITESPACE_SINGLE_QUOTE", "DELIM", "LEFT_ARR_BRACKET", 
			"LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", "WS", "RIGHT_INSTRPARAMS_BRACKET", 
			"ARR_ITEM_SEPARATOR", "RIGHT_ARR_BRACKET", "WS_PARAM_VALUE_CONTENT", 
			"WH_END_SINGLE_QUOTE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TestLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TestLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\21\177\b\1\b\1\b"+
		"\1\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t"+
		"\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21"+
		"\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\6\2\62\n\2"+
		"\r\2\16\2\63\3\3\3\3\3\4\3\4\3\4\3\4\3\5\6\5=\n\5\r\5\16\5>\3\6\3\6\3"+
		"\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\f"+
		"\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3"+
		"\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22\3\23\3\23\3\23\3"+
		"\23\3\24\3\24\3\24\3\24\3\25\3\25\6\25x\n\25\r\25\16\25y\3\26\3\26\3\26"+
		"\3\26\2\2\27\6\3\b\4\n\5\f\6\16\7\20\b\22\t\24\n\26\13\30\f\32\r\34\2"+
		"\36\2 \2\"\2$\2&\16(\2*\17,\20.\21\6\2\3\4\5\6\b\2//\62;??B\\aac|\5\2"+
		"\62;C\\c|\4\2<<??\5\2\13\f\17\17\"\"\2\177\2\6\3\2\2\2\2\b\3\2\2\2\2\n"+
		"\3\2\2\2\3\f\3\2\2\2\3\16\3\2\2\2\3\20\3\2\2\2\3\22\3\2\2\2\3\24\3\2\2"+
		"\2\3\26\3\2\2\2\3\30\3\2\2\2\3\32\3\2\2\2\4\34\3\2\2\2\4\36\3\2\2\2\4"+
		" \3\2\2\2\4\"\3\2\2\2\4$\3\2\2\2\4&\3\2\2\2\4(\3\2\2\2\4*\3\2\2\2\5,\3"+
		"\2\2\2\5.\3\2\2\2\6\61\3\2\2\2\b\65\3\2\2\2\n\67\3\2\2\2\f<\3\2\2\2\16"+
		"@\3\2\2\2\20D\3\2\2\2\22F\3\2\2\2\24J\3\2\2\2\26L\3\2\2\2\30N\3\2\2\2"+
		"\32R\3\2\2\2\34W\3\2\2\2\36[\3\2\2\2 _\3\2\2\2\"c\3\2\2\2$g\3\2\2\2&k"+
		"\3\2\2\2(m\3\2\2\2*q\3\2\2\2,w\3\2\2\2.{\3\2\2\2\60\62\t\2\2\2\61\60\3"+
		"\2\2\2\62\63\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\7\3\2\2\2\65\66\7"+
		"=\2\2\66\t\3\2\2\2\678\7*\2\289\3\2\2\29:\b\4\2\2:\13\3\2\2\2;=\t\3\2"+
		"\2<;\3\2\2\2=>\3\2\2\2><\3\2\2\2>?\3\2\2\2?\r\3\2\2\2@A\7)\2\2AB\3\2\2"+
		"\2BC\b\6\3\2C\17\3\2\2\2DE\t\4\2\2E\21\3\2\2\2FG\7]\2\2GH\3\2\2\2HI\b"+
		"\b\4\2I\23\3\2\2\2JK\7*\2\2K\25\3\2\2\2LM\7+\2\2M\27\3\2\2\2NO\t\5\2\2"+
		"OP\3\2\2\2PQ\b\13\5\2Q\31\3\2\2\2RS\7+\2\2ST\7=\2\2TU\3\2\2\2UV\b\f\6"+
		"\2V\33\3\2\2\2WX\5\16\6\2XY\3\2\2\2YZ\b\r\7\2Z\35\3\2\2\2[\\\5\f\5\2\\"+
		"]\3\2\2\2]^\b\16\b\2^\37\3\2\2\2_`\5\24\t\2`a\3\2\2\2ab\b\17\t\2b!\3\2"+
		"\2\2cd\5\26\n\2de\3\2\2\2ef\b\20\n\2f#\3\2\2\2gh\5\20\7\2hi\3\2\2\2ij"+
		"\b\21\13\2j%\3\2\2\2kl\7=\2\2l\'\3\2\2\2mn\5\30\13\2no\3\2\2\2op\b\23"+
		"\f\2p)\3\2\2\2qr\7_\2\2rs\3\2\2\2st\b\24\6\2t+\3\2\2\2ux\t\2\2\2vx\5\30"+
		"\13\2wu\3\2\2\2wv\3\2\2\2xy\3\2\2\2yw\3\2\2\2yz\3\2\2\2z-\3\2\2\2{|\7"+
		")\2\2|}\3\2\2\2}~\b\26\6\2~/\3\2\2\2\n\2\3\4\5\63>wy\r\7\3\2\7\5\2\7\4"+
		"\2\b\2\2\6\2\2\t\7\2\t\6\2\t\n\2\t\13\2\t\b\2\t\f\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}