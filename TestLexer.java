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
		INSTRCODE=1, LEFT_BRACKET=2, SEMICOLON=3, WS=4, PARAMWORD=5, WSWORD=6, 
		ARRAY=7, DELIM=8, RIGHT_BRACKET=9, S=10;
	public static final int
		INPARAMPAIRS=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "INPARAMPAIRS"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INSTRCODE", "LEFT_BRACKET", "SEMICOLON", "WS", "PARAMWORD", "WSWORD", 
			"ARRAY", "DELIM", "RIGHT_BRACKET", "LEFT_SQUARE_BRACKET", "RIGHT_SQUARE_BRACKET", 
			"S"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'('", "';'", null, null, null, null, null, "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INSTRCODE", "LEFT_BRACKET", "SEMICOLON", "WS", "PARAMWORD", "WSWORD", 
			"ARRAY", "DELIM", "RIGHT_BRACKET", "S"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\fR\b\1\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\3\2\6\2\36\n\2\r\2\16\2\37\3\3\3\3\3\3\3\3\3\4\3"+
		"\4\3\5\3\5\3\5\3\5\3\6\6\6-\n\6\r\6\16\6.\3\7\3\7\3\7\6\7\64\n\7\r\7\16"+
		"\7\65\3\7\3\7\3\b\3\b\3\b\3\b\7\b>\n\b\f\b\16\bA\13\b\3\b\3\b\3\t\3\t"+
		"\3\n\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\r\2\2\16\4\3\6\4\b\5"+
		"\n\6\f\7\16\b\20\t\22\n\24\13\26\2\30\2\32\f\4\2\3\6\b\2//\62;??B\\aa"+
		"c|\5\2\13\f\17\17\"\"\5\2\62;C\\c|\4\2<<??\2S\2\4\3\2\2\2\2\6\3\2\2\2"+
		"\2\b\3\2\2\2\2\n\3\2\2\2\3\f\3\2\2\2\3\16\3\2\2\2\3\20\3\2\2\2\3\22\3"+
		"\2\2\2\3\24\3\2\2\2\3\32\3\2\2\2\4\35\3\2\2\2\6!\3\2\2\2\b%\3\2\2\2\n"+
		"\'\3\2\2\2\f,\3\2\2\2\16\60\3\2\2\2\209\3\2\2\2\22D\3\2\2\2\24F\3\2\2"+
		"\2\26J\3\2\2\2\30L\3\2\2\2\32N\3\2\2\2\34\36\t\2\2\2\35\34\3\2\2\2\36"+
		"\37\3\2\2\2\37\35\3\2\2\2\37 \3\2\2\2 \5\3\2\2\2!\"\7*\2\2\"#\3\2\2\2"+
		"#$\b\3\2\2$\7\3\2\2\2%&\7=\2\2&\t\3\2\2\2\'(\t\3\2\2()\3\2\2\2)*\b\5\3"+
		"\2*\13\3\2\2\2+-\t\4\2\2,+\3\2\2\2-.\3\2\2\2.,\3\2\2\2./\3\2\2\2/\r\3"+
		"\2\2\2\60\63\7)\2\2\61\64\t\4\2\2\62\64\5\32\r\2\63\61\3\2\2\2\63\62\3"+
		"\2\2\2\64\65\3\2\2\2\65\63\3\2\2\2\65\66\3\2\2\2\66\67\3\2\2\2\678\7)"+
		"\2\28\17\3\2\2\29:\5\26\13\2:?\5\f\6\2;<\7=\2\2<>\5\f\6\2=;\3\2\2\2>A"+
		"\3\2\2\2?=\3\2\2\2?@\3\2\2\2@B\3\2\2\2A?\3\2\2\2BC\5\30\f\2C\21\3\2\2"+
		"\2DE\t\5\2\2E\23\3\2\2\2FG\7+\2\2GH\3\2\2\2HI\b\n\4\2I\25\3\2\2\2JK\7"+
		"]\2\2K\27\3\2\2\2LM\7_\2\2M\31\3\2\2\2NO\t\3\2\2OP\3\2\2\2PQ\b\r\5\2Q"+
		"\33\3\2\2\2\t\2\3\37.\63\65?\6\7\3\2\2\3\2\6\2\2\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}