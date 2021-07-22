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
		INSTRCODE=1, LEFT_BRACKET=2, SEMICOLON=3, WS=4, PARAMWORD=5, PARAMWORDD=6, 
		WSWORD=7, ARRAY=8, DELIM=9, RIGHT_BRACKET=10, S=11;
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
			"INSTRCODE", "LEFT_BRACKET", "SEMICOLON", "WS", "PARAMWORD", "PARAMWORDD", 
			"WSWORD", "ARRAY", "DELIM", "RIGHT_BRACKET", "LEFT_SQUARE_BRACKET", "RIGHT_SQUARE_BRACKET", 
			"S"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'('", "';'", null, null, null, null, null, null, "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INSTRCODE", "LEFT_BRACKET", "SEMICOLON", "WS", "PARAMWORD", "PARAMWORDD", 
			"WSWORD", "ARRAY", "DELIM", "RIGHT_BRACKET", "S"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\rY\b\1\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\3\2\6\2 \n\2\r\2\16\2!\3\3\3\3\3\3\3\3"+
		"\3\4\3\4\3\5\3\5\3\5\3\5\3\6\6\6/\n\6\r\6\16\6\60\3\7\6\7\64\n\7\r\7\16"+
		"\7\65\3\b\3\b\3\b\6\b;\n\b\r\b\16\b<\3\b\3\b\3\t\3\t\3\t\3\t\7\tE\n\t"+
		"\f\t\16\tH\13\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3"+
		"\16\3\16\3\16\3\16\2\2\17\4\3\6\4\b\5\n\6\f\7\16\b\20\t\22\n\24\13\26"+
		"\f\30\2\32\2\34\r\4\2\3\7\b\2//\62;??B\\aac|\5\2\13\f\17\17\"\"\5\2\62"+
		";C\\c|\6\2\62;C\\aac|\4\2<<??\2[\2\4\3\2\2\2\2\6\3\2\2\2\2\b\3\2\2\2\2"+
		"\n\3\2\2\2\3\f\3\2\2\2\3\16\3\2\2\2\3\20\3\2\2\2\3\22\3\2\2\2\3\24\3\2"+
		"\2\2\3\26\3\2\2\2\3\34\3\2\2\2\4\37\3\2\2\2\6#\3\2\2\2\b\'\3\2\2\2\n)"+
		"\3\2\2\2\f.\3\2\2\2\16\63\3\2\2\2\20\67\3\2\2\2\22@\3\2\2\2\24K\3\2\2"+
		"\2\26M\3\2\2\2\30Q\3\2\2\2\32S\3\2\2\2\34U\3\2\2\2\36 \t\2\2\2\37\36\3"+
		"\2\2\2 !\3\2\2\2!\37\3\2\2\2!\"\3\2\2\2\"\5\3\2\2\2#$\7*\2\2$%\3\2\2\2"+
		"%&\b\3\2\2&\7\3\2\2\2\'(\7=\2\2(\t\3\2\2\2)*\t\3\2\2*+\3\2\2\2+,\b\5\3"+
		"\2,\13\3\2\2\2-/\t\4\2\2.-\3\2\2\2/\60\3\2\2\2\60.\3\2\2\2\60\61\3\2\2"+
		"\2\61\r\3\2\2\2\62\64\t\5\2\2\63\62\3\2\2\2\64\65\3\2\2\2\65\63\3\2\2"+
		"\2\65\66\3\2\2\2\66\17\3\2\2\2\67:\7)\2\28;\t\4\2\29;\5\34\16\2:8\3\2"+
		"\2\2:9\3\2\2\2;<\3\2\2\2<:\3\2\2\2<=\3\2\2\2=>\3\2\2\2>?\7)\2\2?\21\3"+
		"\2\2\2@A\5\30\f\2AF\5\f\6\2BC\7=\2\2CE\5\f\6\2DB\3\2\2\2EH\3\2\2\2FD\3"+
		"\2\2\2FG\3\2\2\2GI\3\2\2\2HF\3\2\2\2IJ\5\32\r\2J\23\3\2\2\2KL\t\6\2\2"+
		"L\25\3\2\2\2MN\7+\2\2NO\3\2\2\2OP\b\13\4\2P\27\3\2\2\2QR\7]\2\2R\31\3"+
		"\2\2\2ST\7_\2\2T\33\3\2\2\2UV\t\3\2\2VW\3\2\2\2WX\b\16\3\2X\35\3\2\2\2"+
		"\n\2\3!\60\65:<F\5\7\3\2\2\3\2\6\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}