// Generated from c:\Development\Practice\antlr-mega-tutorial-master\test\TestParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TestParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INSTRCODE=1, LEFT_BRACKET=2, SEMICOLON=3, WS=4, PARAMWORD=5, WSWORD=6, 
		ARRAY=7, DELIM=8, RIGHT_BRACKET=9, LEFT_SQUARE_BRACKET=10, RIGHT_SQUARE_BRACKET=11, 
		S=12;
	public static final int
		RULE_universeParam = 0, RULE_universe = 1, RULE_instrParams = 2, RULE_instrParam = 3, 
		RULE_paramVal = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"universeParam", "universe", "instrParams", "instrParam", "paramVal"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'('", "';'", null, null, null, null, null, "')'", "'['", 
			"']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INSTRCODE", "LEFT_BRACKET", "SEMICOLON", "WS", "PARAMWORD", "WSWORD", 
			"ARRAY", "DELIM", "RIGHT_BRACKET", "LEFT_SQUARE_BRACKET", "RIGHT_SQUARE_BRACKET", 
			"S"
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

	@Override
	public String getGrammarFileName() { return "TestParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TestParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class UniverseParamContext extends ParserRuleContext {
		public List<UniverseContext> universe() {
			return getRuleContexts(UniverseContext.class);
		}
		public UniverseContext universe(int i) {
			return getRuleContext(UniverseContext.class,i);
		}
		public UniverseParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_universeParam; }
	}

	public final UniverseParamContext universeParam() throws RecognitionException {
		UniverseParamContext _localctx = new UniverseParamContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_universeParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INSTRCODE) | (1L << LEFT_BRACKET) | (1L << SEMICOLON))) != 0)) {
				{
				{
				setState(10);
				universe();
				}
				}
				setState(15);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UniverseContext extends ParserRuleContext {
		public TerminalNode SEMICOLON() { return getToken(TestParser.SEMICOLON, 0); }
		public TerminalNode INSTRCODE() { return getToken(TestParser.INSTRCODE, 0); }
		public InstrParamsContext instrParams() {
			return getRuleContext(InstrParamsContext.class,0);
		}
		public UniverseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_universe; }
	}

	public final UniverseContext universe() throws RecognitionException {
		UniverseContext _localctx = new UniverseContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_universe);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INSTRCODE) {
				{
				setState(16);
				match(INSTRCODE);
				}
			}

			setState(20);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LEFT_BRACKET) {
				{
				setState(19);
				instrParams();
				}
			}

			setState(22);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstrParamsContext extends ParserRuleContext {
		public TerminalNode LEFT_BRACKET() { return getToken(TestParser.LEFT_BRACKET, 0); }
		public TerminalNode RIGHT_BRACKET() { return getToken(TestParser.RIGHT_BRACKET, 0); }
		public List<InstrParamContext> instrParam() {
			return getRuleContexts(InstrParamContext.class);
		}
		public InstrParamContext instrParam(int i) {
			return getRuleContext(InstrParamContext.class,i);
		}
		public InstrParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrParams; }
	}

	public final InstrParamsContext instrParams() throws RecognitionException {
		InstrParamsContext _localctx = new InstrParamsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_instrParams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			match(LEFT_BRACKET);
			setState(26); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(25);
				instrParam();
				}
				}
				setState(28); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PARAMWORD );
			setState(30);
			match(RIGHT_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstrParamContext extends ParserRuleContext {
		public TerminalNode PARAMWORD() { return getToken(TestParser.PARAMWORD, 0); }
		public TerminalNode DELIM() { return getToken(TestParser.DELIM, 0); }
		public ParamValContext paramVal() {
			return getRuleContext(ParamValContext.class,0);
		}
		public InstrParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrParam; }
	}

	public final InstrParamContext instrParam() throws RecognitionException {
		InstrParamContext _localctx = new InstrParamContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_instrParam);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			match(PARAMWORD);
			setState(33);
			match(DELIM);
			setState(34);
			paramVal();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamValContext extends ParserRuleContext {
		public ParamValContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramVal; }
	 
		public ParamValContext() { }
		public void copyFrom(ParamValContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NormalContext extends ParamValContext {
		public TerminalNode PARAMWORD() { return getToken(TestParser.PARAMWORD, 0); }
		public NormalContext(ParamValContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayvalContext extends ParamValContext {
		public TerminalNode ARRAY() { return getToken(TestParser.ARRAY, 0); }
		public ArrayvalContext(ParamValContext ctx) { copyFrom(ctx); }
	}
	public static class WhitespaceparamContext extends ParamValContext {
		public TerminalNode WSWORD() { return getToken(TestParser.WSWORD, 0); }
		public WhitespaceparamContext(ParamValContext ctx) { copyFrom(ctx); }
	}

	public final ParamValContext paramVal() throws RecognitionException {
		ParamValContext _localctx = new ParamValContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_paramVal);
		try {
			setState(39);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARAMWORD:
				_localctx = new NormalContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(36);
				match(PARAMWORD);
				}
				break;
			case WSWORD:
				_localctx = new WhitespaceparamContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(37);
				match(WSWORD);
				}
				break;
			case ARRAY:
				_localctx = new ArrayvalContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(38);
				match(ARRAY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\16,\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\7\2\16\n\2\f\2\16\2\21\13\2\3\3\5\3\24"+
		"\n\3\3\3\5\3\27\n\3\3\3\3\3\3\4\3\4\6\4\35\n\4\r\4\16\4\36\3\4\3\4\3\5"+
		"\3\5\3\5\3\5\3\6\3\6\3\6\5\6*\n\6\3\6\2\2\7\2\4\6\b\n\2\2\2,\2\17\3\2"+
		"\2\2\4\23\3\2\2\2\6\32\3\2\2\2\b\"\3\2\2\2\n)\3\2\2\2\f\16\5\4\3\2\r\f"+
		"\3\2\2\2\16\21\3\2\2\2\17\r\3\2\2\2\17\20\3\2\2\2\20\3\3\2\2\2\21\17\3"+
		"\2\2\2\22\24\7\3\2\2\23\22\3\2\2\2\23\24\3\2\2\2\24\26\3\2\2\2\25\27\5"+
		"\6\4\2\26\25\3\2\2\2\26\27\3\2\2\2\27\30\3\2\2\2\30\31\7\5\2\2\31\5\3"+
		"\2\2\2\32\34\7\4\2\2\33\35\5\b\5\2\34\33\3\2\2\2\35\36\3\2\2\2\36\34\3"+
		"\2\2\2\36\37\3\2\2\2\37 \3\2\2\2 !\7\13\2\2!\7\3\2\2\2\"#\7\7\2\2#$\7"+
		"\n\2\2$%\5\n\6\2%\t\3\2\2\2&*\7\7\2\2\'*\7\b\2\2(*\7\t\2\2)&\3\2\2\2)"+
		"\'\3\2\2\2)(\3\2\2\2*\13\3\2\2\2\7\17\23\26\36)";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}