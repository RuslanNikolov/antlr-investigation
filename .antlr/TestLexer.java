// Generated from c:\Development\Practice\antlr-investigation\TestLexer.g4 by ANTLR 4.8
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
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INSTRCODE=1, INSTR_GROUPS_SEPARATOR=2, LEFT_INSTRPARAMS_BRACKET=3, WS_PARAM_VALUE=4, 
		PLAIN_PARAM_WORD=5, DELIM=6, LEFT_OBJ_BRACKET=7, RIGHT_OBJ_BRACKET=8, 
		LEFT_ARR_BRACKET=9, RIGHT_ARR_BRACKET=10, SINGLE_QUOTE=11, WS=12, INSTR_PARAMS_SEMICOLON=13, 
		RIGHT_INSTRPARAMS_BRACKET=14;
	public static final int
		INSTR_PARAMS_MODE=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "INSTR_PARAMS_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", "WS_PARAM_VALUE", 
			"PLAIN_PARAM_WORD", "DELIM", "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", 
			"LEFT_ARR_BRACKET", "RIGHT_ARR_BRACKET", "SINGLE_QUOTE", "WS", "INSTR_PARAMS_SEMICOLON", 
			"RIGHT_INSTRPARAMS_BRACKET"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "')'", "'['", "']'", 
			"'''", null, null, "');'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
			"WS_PARAM_VALUE", "PLAIN_PARAM_WORD", "DELIM", "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", 
			"LEFT_ARR_BRACKET", "RIGHT_ARR_BRACKET", "SINGLE_QUOTE", "WS", "INSTR_PARAMS_SEMICOLON", 
			"RIGHT_INSTRPARAMS_BRACKET"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20P\b\1\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\6\2\"\n\2\r\2\16\2#\3\3"+
		"\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\6\5/\n\5\r\5\16\5\60\3\5\3\5\3\6\6\6"+
		"\66\n\6\r\6\16\6\67\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f"+
		"\3\r\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\2\2\20\4\3\6\4\b\5"+
		"\n\6\f\7\16\b\20\t\22\n\24\13\26\f\30\r\32\16\34\17\36\20\4\2\3\6\b\2"+
		"//\62;??B\\aac|\5\2\62;C\\c|\4\2<<??\5\2\13\f\17\17\"\"\2R\2\4\3\2\2\2"+
		"\2\6\3\2\2\2\2\b\3\2\2\2\3\n\3\2\2\2\3\f\3\2\2\2\3\16\3\2\2\2\3\20\3\2"+
		"\2\2\3\22\3\2\2\2\3\24\3\2\2\2\3\26\3\2\2\2\3\30\3\2\2\2\3\32\3\2\2\2"+
		"\3\34\3\2\2\2\3\36\3\2\2\2\4!\3\2\2\2\6%\3\2\2\2\b\'\3\2\2\2\n+\3\2\2"+
		"\2\f\65\3\2\2\2\169\3\2\2\2\20;\3\2\2\2\22=\3\2\2\2\24?\3\2\2\2\26A\3"+
		"\2\2\2\30C\3\2\2\2\32E\3\2\2\2\34I\3\2\2\2\36K\3\2\2\2 \"\t\2\2\2! \3"+
		"\2\2\2\"#\3\2\2\2#!\3\2\2\2#$\3\2\2\2$\5\3\2\2\2%&\7=\2\2&\7\3\2\2\2\'"+
		"(\7*\2\2()\3\2\2\2)*\b\4\2\2*\t\3\2\2\2+.\5\30\f\2,/\t\2\2\2-/\5\32\r"+
		"\2.,\3\2\2\2.-\3\2\2\2/\60\3\2\2\2\60.\3\2\2\2\60\61\3\2\2\2\61\62\3\2"+
		"\2\2\62\63\5\30\f\2\63\13\3\2\2\2\64\66\t\3\2\2\65\64\3\2\2\2\66\67\3"+
		"\2\2\2\67\65\3\2\2\2\678\3\2\2\28\r\3\2\2\29:\t\4\2\2:\17\3\2\2\2;<\7"+
		"*\2\2<\21\3\2\2\2=>\7+\2\2>\23\3\2\2\2?@\7]\2\2@\25\3\2\2\2AB\7_\2\2B"+
		"\27\3\2\2\2CD\7)\2\2D\31\3\2\2\2EF\t\5\2\2FG\3\2\2\2GH\b\r\3\2H\33\3\2"+
		"\2\2IJ\7=\2\2J\35\3\2\2\2KL\7+\2\2LM\7=\2\2MN\3\2\2\2NO\b\17\4\2O\37\3"+
		"\2\2\2\b\2\3#.\60\67\5\7\3\2\b\2\2\6\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}