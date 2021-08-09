import assert from "assert";
import antlr4 from "antlr4";
import fs from "fs";
import path from "path";
const { CommonTokenStream, InputStream } = antlr4;
import TestLexer from "../TestLexer.js";
import TestParser from "../TestParser.js";
import MyTestVisitor from "../MyTestParserVisitor.js";
import MyTestParserListener from "../MyTestParserListener.js";

const testString = fs.readFileSync(path.resolve("test.txt"), "utf8");

export const getChildsStringified = (param) =>
  Array(param.getChildCount())
    .fill(null)
    .map((e, i) => param.getChild(i).getText());

export const getChilds = (param) =>
  Array(param.getChildCount())
    .fill(null)
    .map((e, i) => param.getChild(i));

function parse(input) {
  const chars = new InputStream(input, true);
  const lexer = new TestLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new TestParser(tokens);
  parser.buildParseTrees = true;
  // keep the order of lines, for the next 6-7 rows, because it matters, for some reason
  const myTestParserListener = new MyTestParserListener();
  const tree = parser.universeParam();

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(myTestParserListener, tree);

  const myTestVisitor = new MyTestVisitor();
  myTestVisitor.visit(tree);
}

describe.only("test", function () {
  it("simple test", () => {
    parse(testString);
  });

  // it("single instrument | params could be lower or uppercase", () => {
  //   const testInputContract: IInputContract = customInputContract({
  //     universe: "US10YT=RR",
  //     options: "InstrumentTag:tag rateStructure:basic",
  //   });
  //   const expectedRequestInput: FCRequestInput = customRequestInput({
  //     universe: [
  //       {
  //         instrumentType: "bond",
  //         instrumentDefinition: {
  //           instrumentCode: "US10YT=RR",
  //           instrumentTag: "tag",
  //           rateStructure: "basic",
  //         },
  //       },
  //     ],
  //   });

  //   expect(getRequestInput(testInputContract)).to.deep.equal(
  //     expectedRequestInput
  //   );
  // });
});

// getChilds(tree).forEach((child) => {
//   const instrCode =
//     child instanceof TestParser.UniverseUserDefinedContext
//       ? ""
//       : child.INSTRCODE().getText();
//   if (!(child instanceof TestParser.UniverseWithOnlyCodeContext)) {
//     const instrParamsGroup = child.instrParamsGroup();
//     console.log(
//       "this",
//       instrParamsGroup.instrParam().map((e) => {
//         const [paramKey, paramVal] = [
//           e.PLAIN_PARAM_WORD().getText(),
//           e.paramValue().getText(),
//         ];
//         if (paramKey === "anotherKey") {
//           console.log(getChildsStringified(e.paramValue()));
//         }
//         return [paramKey, paramVal];
//       })
//     );
//   }
// });

// US10YT;UK12YT=RR
