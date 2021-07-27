parser grammar TestParser;
options { tokenVocab=TestLexer; language=JavaScript; }

universeParam: universe* ;
universe    : INSTRCODE? instrParams? SEMICOLON ;
instrParams: LEFT_BRACKET instrParam+ RIGHT_BRACKET;
instrParam: PARAMWORD DELIM paramValue;
object: LEFT_BRACKET instrParam* RIGHT_BRACKET;
paramValue: PARAMWORD #normal |
          WSWORD #whitespaceparam |
          ARRAY #arrayval |
          object #objectval ;