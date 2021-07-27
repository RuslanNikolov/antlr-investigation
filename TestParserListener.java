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
	 * Enter a parse tree produced by {@link TestParser#instrParamsGroup}.
	 * @param ctx the parse tree
	 */
	void enterInstrParamsGroup(TestParser.InstrParamsGroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestParser#instrParamsGroup}.
	 * @param ctx the parse tree
	 */
	void exitInstrParamsGroup(TestParser.InstrParamsGroupContext ctx);
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
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 */
	void enterNormal(TestParser.NormalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code normal}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 */
	void exitNormal(TestParser.NormalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code whitespaceparam}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 */
	void enterWhitespaceparam(TestParser.WhitespaceparamContext ctx);
	/**
	 * Exit a parse tree produced by the {@code whitespaceparam}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 */
	void exitWhitespaceparam(TestParser.WhitespaceparamContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arrayval}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 */
	void enterArrayval(TestParser.ArrayvalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arrayval}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 */
	void exitArrayval(TestParser.ArrayvalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code objectval}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 */
	void enterObjectval(TestParser.ObjectvalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code objectval}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 */
	void exitObjectval(TestParser.ObjectvalContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestParser#object}.
	 * @param ctx the parse tree
	 */
	void enterObject(TestParser.ObjectContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestParser#object}.
	 * @param ctx the parse tree
	 */
	void exitObject(TestParser.ObjectContext ctx);
}