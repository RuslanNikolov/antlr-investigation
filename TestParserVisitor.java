// Generated from TestParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link TestParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface TestParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link TestParser#universeParam}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUniverseParam(TestParser.UniverseParamContext ctx);
	/**
	 * Visit a parse tree produced by the {@code universeWithParams}
	 * labeled alternative in {@link TestParser#universe}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUniverseWithParams(TestParser.UniverseWithParamsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code universeWithOnlyCode}
	 * labeled alternative in {@link TestParser#universe}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUniverseWithOnlyCode(TestParser.UniverseWithOnlyCodeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code universeUserDefined}
	 * labeled alternative in {@link TestParser#universe}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUniverseUserDefined(TestParser.UniverseUserDefinedContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestParser#instrParamsGroup}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInstrParamsGroup(TestParser.InstrParamsGroupContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestParser#instrParam}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInstrParam(TestParser.InstrParamContext ctx);
	/**
	 * Visit a parse tree produced by the {@code normal}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNormal(TestParser.NormalContext ctx);
	/**
	 * Visit a parse tree produced by the {@code whitespaceparam}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhitespaceparam(TestParser.WhitespaceparamContext ctx);
	/**
	 * Visit a parse tree produced by the {@code arrayval}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayval(TestParser.ArrayvalContext ctx);
	/**
	 * Visit a parse tree produced by the {@code objectval}
	 * labeled alternative in {@link TestParser#paramValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectval(TestParser.ObjectvalContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestParser#objectParamValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectParamValue(TestParser.ObjectParamValueContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestParser#arrayParamValue}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayParamValue(TestParser.ArrayParamValueContext ctx);
}