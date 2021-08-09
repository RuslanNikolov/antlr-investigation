// Generated from TestParser.g4 by ANTLR 4.9.2
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
		RULE_universeParam = 0, RULE_universe = 1, RULE_instrParamsGroup = 2, 
		RULE_instrParam = 3, RULE_paramValue = 4, RULE_objectParamValue = 5, RULE_arrayParamValue = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"universeParam", "universe", "instrParamsGroup", "instrParam", "paramValue", 
			"objectParamValue", "arrayParamValue"
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterUniverseParam(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitUniverseParam(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitUniverseParam(this);
			else return visitor.visitChildren(this);
		}
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
				{
				setState(14);
				universe();
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

	public static class UniverseContext extends ParserRuleContext {
		public UniverseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_universe; }
	 
		public UniverseContext() { }
		public void copyFrom(UniverseContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class UniverseUserDefinedContext extends UniverseContext {
		public InstrParamsGroupContext instrParamsGroup() {
			return getRuleContext(InstrParamsGroupContext.class,0);
		}
		public UniverseUserDefinedContext(UniverseContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterUniverseUserDefined(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitUniverseUserDefined(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitUniverseUserDefined(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class UniverseWithOnlyCodeContext extends UniverseContext {
		public TerminalNode INSTRCODE() { return getToken(TestParser.INSTRCODE, 0); }
		public TerminalNode INSTR_GROUPS_SEPARATOR() { return getToken(TestParser.INSTR_GROUPS_SEPARATOR, 0); }
		public UniverseWithOnlyCodeContext(UniverseContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterUniverseWithOnlyCode(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitUniverseWithOnlyCode(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitUniverseWithOnlyCode(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class UniverseWithParamsContext extends UniverseContext {
		public TerminalNode INSTRCODE() { return getToken(TestParser.INSTRCODE, 0); }
		public InstrParamsGroupContext instrParamsGroup() {
			return getRuleContext(InstrParamsGroupContext.class,0);
		}
		public UniverseWithParamsContext(UniverseContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterUniverseWithParams(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitUniverseWithParams(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitUniverseWithParams(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UniverseContext universe() throws RecognitionException {
		UniverseContext _localctx = new UniverseContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_universe);
		try {
			setState(24);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new UniverseWithParamsContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(19);
				match(INSTRCODE);
				setState(20);
				instrParamsGroup();
				}
				break;
			case 2:
				_localctx = new UniverseWithOnlyCodeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(21);
				match(INSTRCODE);
				setState(22);
				match(INSTR_GROUPS_SEPARATOR);
				}
				break;
			case 3:
				_localctx = new UniverseUserDefinedContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(23);
				instrParamsGroup();
				}
				break;
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterInstrParamsGroup(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitInstrParamsGroup(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitInstrParamsGroup(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InstrParamsGroupContext instrParamsGroup() throws RecognitionException {
		InstrParamsGroupContext _localctx = new InstrParamsGroupContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_instrParamsGroup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			match(LEFT_INSTRPARAMS_BRACKET);
			setState(30);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLAIN_PARAM_WORD) {
				{
				{
				setState(27);
				instrParam();
				}
				}
				setState(32);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(33);
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
		public TerminalNode PLAIN_PARAM_WORD() { return getToken(TestParser.PLAIN_PARAM_WORD, 0); }
		public TerminalNode DELIM() { return getToken(TestParser.DELIM, 0); }
		public ParamValueContext paramValue() {
			return getRuleContext(ParamValueContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(TestParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(TestParser.WS, i);
		}
		public InstrParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrParam; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterInstrParam(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitInstrParam(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitInstrParam(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InstrParamContext instrParam() throws RecognitionException {
		InstrParamContext _localctx = new InstrParamContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_instrParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(PLAIN_PARAM_WORD);
			setState(36);
			match(DELIM);
			setState(37);
			paramValue();
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(38);
				match(WS);
				}
				}
				setState(43);
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
		public TerminalNode PLAIN_PARAM_WORD() { return getToken(TestParser.PLAIN_PARAM_WORD, 0); }
		public NormalContext(ParamValueContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterNormal(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitNormal(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitNormal(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ObjectvalContext extends ParamValueContext {
		public ObjectParamValueContext objectParamValue() {
			return getRuleContext(ObjectParamValueContext.class,0);
		}
		public ObjectvalContext(ParamValueContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterObjectval(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitObjectval(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitObjectval(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ArrayvalContext extends ParamValueContext {
		public ArrayParamValueContext arrayParamValue() {
			return getRuleContext(ArrayParamValueContext.class,0);
		}
		public ArrayvalContext(ParamValueContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterArrayval(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitArrayval(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitArrayval(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class WhitespaceparamContext extends ParamValueContext {
		public TerminalNode WHITESPACE_SINGLE_QUOTE() { return getToken(TestParser.WHITESPACE_SINGLE_QUOTE, 0); }
		public TerminalNode WS_PARAM_VALUE_CONTENT() { return getToken(TestParser.WS_PARAM_VALUE_CONTENT, 0); }
		public TerminalNode WH_END_SINGLE_QUOTE() { return getToken(TestParser.WH_END_SINGLE_QUOTE, 0); }
		public WhitespaceparamContext(ParamValueContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterWhitespaceparam(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitWhitespaceparam(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitWhitespaceparam(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParamValueContext paramValue() throws RecognitionException {
		ParamValueContext _localctx = new ParamValueContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_paramValue);
		try {
			setState(50);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLAIN_PARAM_WORD:
				_localctx = new NormalContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				match(PLAIN_PARAM_WORD);
				}
				break;
			case WHITESPACE_SINGLE_QUOTE:
				_localctx = new WhitespaceparamContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				match(WHITESPACE_SINGLE_QUOTE);
				setState(46);
				match(WS_PARAM_VALUE_CONTENT);
				setState(47);
				match(WH_END_SINGLE_QUOTE);
				}
				break;
			case LEFT_ARR_BRACKET:
				_localctx = new ArrayvalContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(48);
				arrayParamValue();
				}
				break;
			case LEFT_OBJ_BRACKET:
				_localctx = new ObjectvalContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(49);
				objectParamValue();
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

	public static class ObjectParamValueContext extends ParserRuleContext {
		public TerminalNode LEFT_OBJ_BRACKET() { return getToken(TestParser.LEFT_OBJ_BRACKET, 0); }
		public TerminalNode RIGHT_OBJ_BRACKET() { return getToken(TestParser.RIGHT_OBJ_BRACKET, 0); }
		public List<InstrParamContext> instrParam() {
			return getRuleContexts(InstrParamContext.class);
		}
		public InstrParamContext instrParam(int i) {
			return getRuleContext(InstrParamContext.class,i);
		}
		public ObjectParamValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectParamValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterObjectParamValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitObjectParamValue(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitObjectParamValue(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ObjectParamValueContext objectParamValue() throws RecognitionException {
		ObjectParamValueContext _localctx = new ObjectParamValueContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_objectParamValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(LEFT_OBJ_BRACKET);
			setState(54); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(53);
				instrParam();
				}
				}
				setState(56); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PLAIN_PARAM_WORD );
			setState(58);
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

	public static class ArrayParamValueContext extends ParserRuleContext {
		public TerminalNode LEFT_ARR_BRACKET() { return getToken(TestParser.LEFT_ARR_BRACKET, 0); }
		public List<ParamValueContext> paramValue() {
			return getRuleContexts(ParamValueContext.class);
		}
		public ParamValueContext paramValue(int i) {
			return getRuleContext(ParamValueContext.class,i);
		}
		public TerminalNode RIGHT_ARR_BRACKET() { return getToken(TestParser.RIGHT_ARR_BRACKET, 0); }
		public List<TerminalNode> ARR_ITEM_SEPARATOR() { return getTokens(TestParser.ARR_ITEM_SEPARATOR); }
		public TerminalNode ARR_ITEM_SEPARATOR(int i) {
			return getToken(TestParser.ARR_ITEM_SEPARATOR, i);
		}
		public ArrayParamValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayParamValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).enterArrayParamValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestParserListener ) ((TestParserListener)listener).exitArrayParamValue(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestParserVisitor ) return ((TestParserVisitor<? extends T>)visitor).visitArrayParamValue(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArrayParamValueContext arrayParamValue() throws RecognitionException {
		ArrayParamValueContext _localctx = new ArrayParamValueContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_arrayParamValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(LEFT_ARR_BRACKET);
			setState(61);
			paramValue();
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ARR_ITEM_SEPARATOR) {
				{
				{
				setState(62);
				match(ARR_ITEM_SEPARATOR);
				setState(63);
				paramValue();
				}
				}
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(69);
			match(RIGHT_ARR_BRACKET);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\21J\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\6\2\22\n\2\r\2\16\2\23"+
		"\3\3\3\3\3\3\3\3\3\3\5\3\33\n\3\3\4\3\4\7\4\37\n\4\f\4\16\4\"\13\4\3\4"+
		"\3\4\3\5\3\5\3\5\3\5\7\5*\n\5\f\5\16\5-\13\5\3\6\3\6\3\6\3\6\3\6\3\6\5"+
		"\6\65\n\6\3\7\3\7\6\79\n\7\r\7\16\7:\3\7\3\7\3\b\3\b\3\b\3\b\7\bC\n\b"+
		"\f\b\16\bF\13\b\3\b\3\b\3\b\2\2\t\2\4\6\b\n\f\16\2\2\2L\2\21\3\2\2\2\4"+
		"\32\3\2\2\2\6\34\3\2\2\2\b%\3\2\2\2\n\64\3\2\2\2\f\66\3\2\2\2\16>\3\2"+
		"\2\2\20\22\5\4\3\2\21\20\3\2\2\2\22\23\3\2\2\2\23\21\3\2\2\2\23\24\3\2"+
		"\2\2\24\3\3\2\2\2\25\26\7\3\2\2\26\33\5\6\4\2\27\30\7\3\2\2\30\33\7\4"+
		"\2\2\31\33\5\6\4\2\32\25\3\2\2\2\32\27\3\2\2\2\32\31\3\2\2\2\33\5\3\2"+
		"\2\2\34 \7\5\2\2\35\37\5\b\5\2\36\35\3\2\2\2\37\"\3\2\2\2 \36\3\2\2\2"+
		" !\3\2\2\2!#\3\2\2\2\" \3\2\2\2#$\7\r\2\2$\7\3\2\2\2%&\7\6\2\2&\'\7\b"+
		"\2\2\'+\5\n\6\2(*\7\f\2\2)(\3\2\2\2*-\3\2\2\2+)\3\2\2\2+,\3\2\2\2,\t\3"+
		"\2\2\2-+\3\2\2\2.\65\7\6\2\2/\60\7\7\2\2\60\61\7\20\2\2\61\65\7\21\2\2"+
		"\62\65\5\16\b\2\63\65\5\f\7\2\64.\3\2\2\2\64/\3\2\2\2\64\62\3\2\2\2\64"+
		"\63\3\2\2\2\65\13\3\2\2\2\668\7\n\2\2\679\5\b\5\28\67\3\2\2\29:\3\2\2"+
		"\2:8\3\2\2\2:;\3\2\2\2;<\3\2\2\2<=\7\13\2\2=\r\3\2\2\2>?\7\t\2\2?D\5\n"+
		"\6\2@A\7\16\2\2AC\5\n\6\2B@\3\2\2\2CF\3\2\2\2DB\3\2\2\2DE\3\2\2\2EG\3"+
		"\2\2\2FD\3\2\2\2GH\7\17\2\2H\17\3\2\2\2\t\23\32 +\64:D";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}