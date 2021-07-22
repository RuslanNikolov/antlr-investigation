// Generated from TestParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link TestParser}.
 */
public interface TestParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link TestParser#universeParam}.
	 * @param ctx the parse tree
	 */
	void enterUniverseParam(TestParser.UniverseParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestParser#universeParam}.
	 * @param ctx the parse tree
	 */
	void exitUniverseParam(TestParser.UniverseParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestParser#universe}.
	 * @param ctx the parse tree
	 */
	void enterUniverse(TestParser.UniverseContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestParser#universe}.
	 * @param ctx the parse tree
	 */
	void exitUniverse(TestParser.UniverseContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestParser#instrParams}.
	 * @param ctx the parse tree
	 */
	void enterInstrParams(TestParser.InstrParamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestParser#instrParams}.
	 * @param ctx the parse tree
	 */
	void exitInstrParams(TestParser.InstrParamsContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestParser#instrParam}.
	 * @param ctx the parse tree
	 */
	void enterInstrParam(TestParser.InstrParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestParser#instrParam}.
	 * @param ctx the parse tree
	 */
	void exitInstrParam(TestParser.InstrParamContext ctx);
	/**
	 * Enter a parse tree produced by the {@code normal}
	 * labeled alternative in {@link TestParser#paramVal}.
	 * @param ctx the parse tree
	 */
	void enterNormal(TestParser.NormalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code normal}
	 * labeled alternative in {@link TestParser#paramVal}.
	 * @param ctx the parse tree
	 */
	void exitNormal(TestParser.NormalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code whitespaceparam}
	 * labeled alternative in {@link TestParser#paramVal}.
	 * @param ctx the parse tree
	 */
	void enterWhitespaceparam(TestParser.WhitespaceparamContext ctx);
	/**
	 * Exit a parse tree produced by the {@code whitespaceparam}
	 * labeled alternative in {@link TestParser#paramVal}.
	 * @param ctx the parse tree
	 */
	void exitWhitespaceparam(TestParser.WhitespaceparamContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arrayval}
	 * labeled alternative in {@link TestParser#paramVal}.
	 * @param ctx the parse tree
	 */
	void enterArrayval(TestParser.ArrayvalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arrayval}
	 * labeled alternative in {@link TestParser#paramVal}.
	 * @param ctx the parse tree
	 */
	void exitArrayval(TestParser.ArrayvalContext ctx);
}