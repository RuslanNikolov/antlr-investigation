import assert from "assert";
import antlr4 from "antlr4";
import fs from "fs";
import path from "path";
const { CommonTokenStream, InputStream } = antlr4;
import TestLexer from "../TestLexer.js";
import TestParser from "../TestParser.js";
import MyTestVisitor from "../MyTestParserVisitor.js";
import MyTestParserListener from "../MyTestParserListener.js";
import MyTestLexer from '../MyTestLexer.js';

const testString = fs.readFileSync(path.resolve("test.txt"), "utf8");

export const getChilds = (param) =>
Array(param.getChildCount())
.fill(null)
.map((e, i) => param.getChild(i).getText());

function parse(input) {
  const chars = new InputStream(input, true);
  const lexer = new MyTestLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new TestParser(tokens);
  parser.buildParseTrees = true;
  const myTestParserListener = new MyTestParserListener();
  const tree = parser.universeParam();

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(myTestParserListener, tree);

  const myTestVisitor = new MyTestVisitor();
  myTestVisitor.visit(tree);

  console.log('myTestVisitor',myTestVisitor.universes)
}

describe.only("test", function () {
  it("simple test", () => {
    parse(testString);
  });
});

// US10YT;UK12YT=RR
