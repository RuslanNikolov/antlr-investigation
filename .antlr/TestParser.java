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
		INSTRCODE=1, INSTR_GROUPS_SEPARATOR=2, LEFT_INSTRPARAMS_BRACKET=3, WS_PARAM_VALUE=4, 
		PLAIN_PARAM_WORD=5, DELIM=6, LEFT_ARR_BRACKET=7, LEFT_OBJ_BRACKET=8, RIGHT_OBJ_BRACKET=9, 
		SINGLE_QUOTE=10, WS=11, RIGHT_INSTRPARAMS_BRACKET=12, ARR_ITEM_SEPARATOR=13, 
		RIGHT_ARR_BRACKET=14;
	public static final int
		RULE_universeParam = 0, RULE_instrParamsGroup = 1, RULE_instrParam = 2, 
		RULE_paramValue = 3, RULE_objectParamValue = 4, RULE_arrayParamValue = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"universeParam", "instrParamsGroup", "instrParam", "paramValue", "objectParamValue", 
			"arrayParamValue"
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
		public List<InstrParamsGroupContext> instrParamsGroup() {
			return getRuleContexts(InstrParamsGroupContext.class);
		}
		public InstrParamsGroupContext instrParamsGroup(int i) {
			return getRuleContext(InstrParamsGroupContext.class,i);
		}
		public List<TerminalNode> INSTR_GROUPS_SEPARATOR() { return getTokens(TestParser.INSTR_GROUPS_SEPARATOR); }
		public TerminalNode INSTR_GROUPS_SEPARATOR(int i) {
			return getToken(TestParser.INSTR_GROUPS_SEPARATOR, i);
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
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(17);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(12);
					match(INSTRCODE);
					setState(13);
					instrParamsGroup();
					}
					break;
				case 2:
					{
					setState(14);
					match(INSTRCODE);
					setState(15);
					match(INSTR_GROUPS_SEPARATOR);
					}
					break;
				case 3:
					{
					setState(16);
					instrParamsGroup();
					}
					break;
				}
				}
				setState(19); 
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
			setState(21);
			match(LEFT_INSTRPARAMS_BRACKET);
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLAIN_PARAM_WORD) {
				{
				{
				setState(22);
				instrParam();
				}
				}
				setState(27);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(28);
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
	}

	public final InstrParamContext instrParam() throws RecognitionException {
		InstrParamContext _localctx = new InstrParamContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_instrParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			match(PLAIN_PARAM_WORD);
			setState(31);
			match(DELIM);
			setState(32);
			paramValue();
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(33);
				match(WS);
				}
				}
				setState(38);
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
	}
	public static class ObjectvalContext extends ParamValueContext {
		public ObjectParamValueContext objectParamValue() {
			return getRuleContext(ObjectParamValueContext.class,0);
		}
		public ObjectvalContext(ParamValueContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayvalContext extends ParamValueContext {
		public ArrayParamValueContext arrayParamValue() {
			return getRuleContext(ArrayParamValueContext.class,0);
		}
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
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLAIN_PARAM_WORD:
				_localctx = new NormalContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				match(PLAIN_PARAM_WORD);
				}
				break;
			case WS_PARAM_VALUE:
				_localctx = new WhitespaceparamContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				match(WS_PARAM_VALUE);
				}
				break;
			case LEFT_ARR_BRACKET:
				_localctx = new ArrayvalContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				arrayParamValue();
				}
				break;
			case LEFT_OBJ_BRACKET:
				_localctx = new ObjectvalContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(42);
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
	}

	public final ObjectParamValueContext objectParamValue() throws RecognitionException {
		ObjectParamValueContext _localctx = new ObjectParamValueContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_objectParamValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(LEFT_OBJ_BRACKET);
			setState(47); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(46);
				instrParam();
				}
				}
				setState(49); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PLAIN_PARAM_WORD );
			setState(51);
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
	}

	public final ArrayParamValueContext arrayParamValue() throws RecognitionException {
		ArrayParamValueContext _localctx = new ArrayParamValueContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_arrayParamValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(LEFT_ARR_BRACKET);
			setState(54);
			paramValue();
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ARR_ITEM_SEPARATOR) {
				{
				{
				setState(55);
				match(ARR_ITEM_SEPARATOR);
				setState(56);
				paramValue();
				}
				}
				setState(61);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(62);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\20C\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\3\2\3\2\3\2\3\2\6\2\24\n\2\r\2"+
		"\16\2\25\3\3\3\3\7\3\32\n\3\f\3\16\3\35\13\3\3\3\3\3\3\4\3\4\3\4\3\4\7"+
		"\4%\n\4\f\4\16\4(\13\4\3\5\3\5\3\5\3\5\5\5.\n\5\3\6\3\6\6\6\62\n\6\r\6"+
		"\16\6\63\3\6\3\6\3\7\3\7\3\7\3\7\7\7<\n\7\f\7\16\7?\13\7\3\7\3\7\3\7\2"+
		"\2\b\2\4\6\b\n\f\2\2\2F\2\23\3\2\2\2\4\27\3\2\2\2\6 \3\2\2\2\b-\3\2\2"+
		"\2\n/\3\2\2\2\f\67\3\2\2\2\16\17\7\3\2\2\17\24\5\4\3\2\20\21\7\3\2\2\21"+
		"\24\7\4\2\2\22\24\5\4\3\2\23\16\3\2\2\2\23\20\3\2\2\2\23\22\3\2\2\2\24"+
		"\25\3\2\2\2\25\23\3\2\2\2\25\26\3\2\2\2\26\3\3\2\2\2\27\33\7\5\2\2\30"+
		"\32\5\6\4\2\31\30\3\2\2\2\32\35\3\2\2\2\33\31\3\2\2\2\33\34\3\2\2\2\34"+
		"\36\3\2\2\2\35\33\3\2\2\2\36\37\7\16\2\2\37\5\3\2\2\2 !\7\7\2\2!\"\7\b"+
		"\2\2\"&\5\b\5\2#%\7\r\2\2$#\3\2\2\2%(\3\2\2\2&$\3\2\2\2&\'\3\2\2\2\'\7"+
		"\3\2\2\2(&\3\2\2\2).\7\7\2\2*.\7\6\2\2+.\5\f\7\2,.\5\n\6\2-)\3\2\2\2-"+
		"*\3\2\2\2-+\3\2\2\2-,\3\2\2\2.\t\3\2\2\2/\61\7\n\2\2\60\62\5\6\4\2\61"+
		"\60\3\2\2\2\62\63\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\65\3\2\2\2\65"+
		"\66\7\13\2\2\66\13\3\2\2\2\678\7\t\2\28=\5\b\5\29:\7\17\2\2:<\5\b\5\2"+
		";9\3\2\2\2<?\3\2\2\2=;\3\2\2\2=>\3\2\2\2>@\3\2\2\2?=\3\2\2\2@A\7\20\2"+
		"\2A\r\3\2\2\2\t\23\25\33&-\63=";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}