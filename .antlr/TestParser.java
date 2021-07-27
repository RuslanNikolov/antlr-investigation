// Generated from c:\Development\Practice\antlr-investigation\TestParser.g4 by ANTLR 4.8
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
		INSTRCODE=1, SEMICOLON=2, LEFT_INSTRPARAMS_BRACKET=3, WS_PARAM_VALUE=4, 
		ARRAY_PARAM_VALUE=5, PARAM_NAME=6, DELIM=7, LEFT_OBJ_BRACKET=8, RIGHT_OBJ_BRACKET=9, 
		SINGLE_QUOTE=10, LEFT_SQ_BRACKET=11, RIGHT_SQ_BRACKET=12, WS=13, INSTR_PARAMS_SEMICOLON=14, 
		RIGHT_INSTRPARAMS_BRACKET=15;
	public static final int
		RULE_universeParam = 0, RULE_instrParamsGroup = 1, RULE_instrParam = 2, 
		RULE_paramValue = 3, RULE_object = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"universeParam", "instrParamsGroup", "instrParam", "paramValue", "object"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, "')'", "'''", "'['", 
			"']'", null, null, "');'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INSTRCODE", "SEMICOLON", "LEFT_INSTRPARAMS_BRACKET", "WS_PARAM_VALUE", 
			"ARRAY_PARAM_VALUE", "PARAM_NAME", "DELIM", "LEFT_OBJ_BRACKET", "RIGHT_OBJ_BRACKET", 
			"SINGLE_QUOTE", "LEFT_SQ_BRACKET", "RIGHT_SQ_BRACKET", "WS", "INSTR_PARAMS_SEMICOLON", 
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
		public List<TerminalNode> INSTRCODE() { return getTokens(TestParser.INSTRCODE); }
		public TerminalNode INSTRCODE(int i) {
			return getToken(TestParser.INSTRCODE, i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(TestParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(TestParser.SEMICOLON, i);
		}
		public List<InstrParamsGroupContext> instrParamsGroup() {
			return getRuleContexts(InstrParamsGroupContext.class);
		}
		public InstrParamsGroupContext instrParamsGroup(int i) {
			return getRuleContext(InstrParamsGroupContext.class,i);
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
			setState(15); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(15);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					{
					setState(10);
					match(INSTRCODE);
					setState(11);
					instrParamsGroup();
					}
					}
					break;
				case 2:
					{
					setState(12);
					match(INSTRCODE);
					setState(13);
					match(SEMICOLON);
					}
					break;
				case 3:
					{
					setState(14);
					instrParamsGroup();
					}
					break;
				}
				}
				setState(17); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==INSTRCODE || _la==LEFT_INSTRPARAMS_BRACKET );
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

	public static class InstrParamsGroupContext extends ParserRuleContext {
		public TerminalNode LEFT_INSTRPARAMS_BRACKET() { return getToken(TestParser.LEFT_INSTRPARAMS_BRACKET, 0); }
		public TerminalNode RIGHT_INSTRPARAMS_BRACKET() { return getToken(TestParser.RIGHT_INSTRPARAMS_BRACKET, 0); }
		public List<InstrParamContext> instrParam() {
			return getRuleContexts(InstrParamContext.class);
		}
		public InstrParamContext instrParam(int i) {
			return getRuleContext(InstrParamContext.class,i);
		}
		public InstrParamsGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrParamsGroup; }
	}

	public final InstrParamsGroupContext instrParamsGroup() throws RecognitionException {
		InstrParamsGroupContext _localctx = new InstrParamsGroupContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_instrParamsGroup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(19);
			match(LEFT_INSTRPARAMS_BRACKET);
			setState(23);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PARAM_NAME) {
				{
				{
				setState(20);
				instrParam();
				}
				}
				setState(25);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(26);
			match(RIGHT_INSTRPARAMS_BRACKET);
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
		public TerminalNode PARAM_NAME() { return getToken(TestParser.PARAM_NAME, 0); }
		public TerminalNode DELIM() { return getToken(TestParser.DELIM, 0); }
		public ParamValueContext paramValue() {
			return getRuleContext(ParamValueContext.class,0);
		}
		public InstrParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrParam; }
	}

	public final InstrParamContext instrParam() throws RecognitionException {
		InstrParamContext _localctx = new InstrParamContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_instrParam);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(PARAM_NAME);
			setState(29);
			match(DELIM);
			setState(30);
			paramValue();
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

	public static class ParamValueContext extends ParserRuleContext {
		public ParamValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramValue; }
	 
		public ParamValueContext() { }
		public void copyFrom(ParamValueContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NormalContext extends ParamValueContext {
		public TerminalNode PARAM_NAME() { return getToken(TestParser.PARAM_NAME, 0); }
		public NormalContext(ParamValueContext ctx) { copyFrom(ctx); }
	}
	public static class ObjectvalContext extends ParamValueContext {
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ObjectvalContext(ParamValueContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayvalContext extends ParamValueContext {
		public TerminalNode ARRAY_PARAM_VALUE() { return getToken(TestParser.ARRAY_PARAM_VALUE, 0); }
		public ArrayvalContext(ParamValueContext ctx) { copyFrom(ctx); }
	}
	public static class WhitespaceparamContext extends ParamValueContext {
		public TerminalNode WS_PARAM_VALUE() { return getToken(TestParser.WS_PARAM_VALUE, 0); }
		public WhitespaceparamContext(ParamValueContext ctx) { copyFrom(ctx); }
	}

	public final ParamValueContext paramValue() throws RecognitionException {
		ParamValueContext _localctx = new ParamValueContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_paramValue);
		try {
			setState(36);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARAM_NAME:
				_localctx = new NormalContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(32);
				match(PARAM_NAME);
				}
				break;
			case WS_PARAM_VALUE:
				_localctx = new WhitespaceparamContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(33);
				match(WS_PARAM_VALUE);
				}
				break;
			case ARRAY_PARAM_VALUE:
				_localctx = new ArrayvalContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(34);
				match(ARRAY_PARAM_VALUE);
				}
				break;
			case LEFT_OBJ_BRACKET:
				_localctx = new ObjectvalContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(35);
				object();
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

	public static class ObjectContext extends ParserRuleContext {
		public TerminalNode LEFT_OBJ_BRACKET() { return getToken(TestParser.LEFT_OBJ_BRACKET, 0); }
		public TerminalNode RIGHT_OBJ_BRACKET() { return getToken(TestParser.RIGHT_OBJ_BRACKET, 0); }
		public List<InstrParamContext> instrParam() {
			return getRuleContexts(InstrParamContext.class);
		}
		public InstrParamContext instrParam(int i) {
			return getRuleContext(InstrParamContext.class,i);
		}
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(LEFT_OBJ_BRACKET);
			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PARAM_NAME) {
				{
				{
				setState(39);
				instrParam();
				}
				}
				setState(44);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(45);
			match(RIGHT_OBJ_BRACKET);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\21\62\4\2\t\2\4\3"+
		"\t\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\2\3\2\6\2\22\n\2\r\2\16\2\23"+
		"\3\3\3\3\7\3\30\n\3\f\3\16\3\33\13\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3"+
		"\5\3\5\5\5\'\n\5\3\6\3\6\7\6+\n\6\f\6\16\6.\13\6\3\6\3\6\3\6\2\2\7\2\4"+
		"\6\b\n\2\2\2\64\2\21\3\2\2\2\4\25\3\2\2\2\6\36\3\2\2\2\b&\3\2\2\2\n(\3"+
		"\2\2\2\f\r\7\3\2\2\r\22\5\4\3\2\16\17\7\3\2\2\17\22\7\4\2\2\20\22\5\4"+
		"\3\2\21\f\3\2\2\2\21\16\3\2\2\2\21\20\3\2\2\2\22\23\3\2\2\2\23\21\3\2"+
		"\2\2\23\24\3\2\2\2\24\3\3\2\2\2\25\31\7\5\2\2\26\30\5\6\4\2\27\26\3\2"+
		"\2\2\30\33\3\2\2\2\31\27\3\2\2\2\31\32\3\2\2\2\32\34\3\2\2\2\33\31\3\2"+
		"\2\2\34\35\7\21\2\2\35\5\3\2\2\2\36\37\7\b\2\2\37 \7\t\2\2 !\5\b\5\2!"+
		"\7\3\2\2\2\"\'\7\b\2\2#\'\7\6\2\2$\'\7\7\2\2%\'\5\n\6\2&\"\3\2\2\2&#\3"+
		"\2\2\2&$\3\2\2\2&%\3\2\2\2\'\t\3\2\2\2(,\7\n\2\2)+\5\6\4\2*)\3\2\2\2+"+
		".\3\2\2\2,*\3\2\2\2,-\3\2\2\2-/\3\2\2\2.,\3\2\2\2/\60\7\13\2\2\60\13\3"+
		"\2\2\2\7\21\23\31&,";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}