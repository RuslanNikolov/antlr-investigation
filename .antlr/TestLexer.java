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
		PLAIN_PARAM_WORD=5, DELIM=6, LEFT_ARR_BRACKET=7, LEFT_OBJ_BRACKET=8, RIGHT_OBJ_BRACKET=9, 
		SINGLE_QUOTE=10, WS=11, RIGHT_INSTRPARAMS_BRACKET=12, ARR_ITEM_SEPARATOR=13, 
		RIGHT_ARR_BRACKET=14;
	public static final int
		INSTR_PARAMS_MODE=1, ARRAY_VALUE_MODE=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "INSTR_PARAMS_MODE", "ARRAY_VALUE_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", "WS_PARAM_VALUE", 
			"PLAIN_PARAM_WORD", "DELIM", "LEFT_ARR_BRACKET", "LEFT_OBJ_BRACKET", 
			"RIGHT_OBJ_BRACKET", "SINGLE_QUOTE", "WS", "RIGHT_INSTRPARAMS_BRACKET", 
			"ARR_WS_PARAM_VALUE", "ARR_PLAIN_PARAM_WORD", "ARR_LEFT_OBJ_BRACKET", 
			"ARR_RIGHT_OBJ_BRACKET", "ARR_DELIM", "ARR_ITEM_SEPARATOR", "ARR_SINGLE_QUOTE", 
			"ARR_WS", "RIGHT_ARR_BRACKET"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, "'['", null, "')'", "'''", 
			null, "');'", null, "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INSTRCODE", "INSTR_GROUPS_SEPARATOR", "LEFT_INSTRPARAMS_BRACKET", 
			"WS_PARAM_VALUE", "PLAIN_PARAM_WORD", "DELIM", "LEFT_ARR_BRACKET", "LEFT_OBJ_BRACKET", 
			"RIGHT_OBJ_BRACKET", "SINGLE_QUOTE", "WS", "RIGHT_INSTRPARAMS_BRACKET", 
			"ARR_ITEM_SEPARATOR", "RIGHT_ARR_BRACKET"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20\177\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\6\2\61\n\2\r\2"+
		"\16\2\62\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\6\5>\n\5\r\5\16\5?\3\5\3"+
		"\5\3\6\6\6E\n\6\r\6\16\6F\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13"+
		"\3\13\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17"+
		"\3\17\3\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22"+
		"\3\23\3\23\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26"+
		"\2\2\27\5\3\7\4\t\5\13\6\r\7\17\b\21\t\23\n\25\13\27\f\31\r\33\16\35\2"+
		"\37\2!\2#\2%\2\'\17)\2+\2-\20\5\2\3\4\6\b\2//\62;??B\\aac|\5\2\62;C\\"+
		"c|\4\2<<??\5\2\13\f\17\17\"\"\2\u0080\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2"+
		"\2\2\3\13\3\2\2\2\3\r\3\2\2\2\3\17\3\2\2\2\3\21\3\2\2\2\3\23\3\2\2\2\3"+
		"\25\3\2\2\2\3\27\3\2\2\2\3\31\3\2\2\2\3\33\3\2\2\2\4\35\3\2\2\2\4\37\3"+
		"\2\2\2\4!\3\2\2\2\4#\3\2\2\2\4%\3\2\2\2\4\'\3\2\2\2\4)\3\2\2\2\4+\3\2"+
		"\2\2\4-\3\2\2\2\5\60\3\2\2\2\7\64\3\2\2\2\t\66\3\2\2\2\13:\3\2\2\2\rD"+
		"\3\2\2\2\17H\3\2\2\2\21J\3\2\2\2\23N\3\2\2\2\25P\3\2\2\2\27R\3\2\2\2\31"+
		"T\3\2\2\2\33X\3\2\2\2\35]\3\2\2\2\37a\3\2\2\2!e\3\2\2\2#i\3\2\2\2%m\3"+
		"\2\2\2\'q\3\2\2\2)s\3\2\2\2+w\3\2\2\2-{\3\2\2\2/\61\t\2\2\2\60/\3\2\2"+
		"\2\61\62\3\2\2\2\62\60\3\2\2\2\62\63\3\2\2\2\63\6\3\2\2\2\64\65\7=\2\2"+
		"\65\b\3\2\2\2\66\67\7*\2\2\678\3\2\2\289\b\4\2\29\n\3\2\2\2:=\5\27\13"+
		"\2;>\t\2\2\2<>\5\31\f\2=;\3\2\2\2=<\3\2\2\2>?\3\2\2\2?=\3\2\2\2?@\3\2"+
		"\2\2@A\3\2\2\2AB\5\27\13\2B\f\3\2\2\2CE\t\3\2\2DC\3\2\2\2EF\3\2\2\2FD"+
		"\3\2\2\2FG\3\2\2\2G\16\3\2\2\2HI\t\4\2\2I\20\3\2\2\2JK\7]\2\2KL\3\2\2"+
		"\2LM\b\b\3\2M\22\3\2\2\2NO\7*\2\2O\24\3\2\2\2PQ\7+\2\2Q\26\3\2\2\2RS\7"+
		")\2\2S\30\3\2\2\2TU\t\5\2\2UV\3\2\2\2VW\b\f\4\2W\32\3\2\2\2XY\7+\2\2Y"+
		"Z\7=\2\2Z[\3\2\2\2[\\\b\r\5\2\\\34\3\2\2\2]^\5\13\5\2^_\3\2\2\2_`\b\16"+
		"\6\2`\36\3\2\2\2ab\5\r\6\2bc\3\2\2\2cd\b\17\7\2d \3\2\2\2ef\5\23\t\2f"+
		"g\3\2\2\2gh\b\20\b\2h\"\3\2\2\2ij\5\25\n\2jk\3\2\2\2kl\b\21\t\2l$\3\2"+
		"\2\2mn\5\17\7\2no\3\2\2\2op\b\22\n\2p&\3\2\2\2qr\7=\2\2r(\3\2\2\2st\5"+
		"\27\13\2tu\3\2\2\2uv\b\24\13\2v*\3\2\2\2wx\5\31\f\2xy\3\2\2\2yz\b\25\f"+
		"\2z,\3\2\2\2{|\7_\2\2|}\3\2\2\2}~\b\26\5\2~.\3\2\2\2\t\2\3\4\62=?F\r\7"+
		"\3\2\7\4\2\b\2\2\6\2\2\t\6\2\t\7\2\t\n\2\t\13\2\t\b\2\t\f\2\t\r\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}