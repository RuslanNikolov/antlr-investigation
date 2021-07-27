parser grammar TestParser;
options { tokenVocab=TestLexer; }

universeParam: ((INSTRCODE instrParamsGroup) | INSTRCODE SEMICOLON | instrParamsGroup )+ ;
instrParamsGroup: LEFT_INSTRPARAMS_BRACKET instrParam* RIGHT_INSTRPARAMS_BRACKET; // Enter param pairs lexer mode
instrParam: PARAM_NAME DELIM paramValue;
paramValue: PARAM_NAME #normal |
          WS_PARAM_VALUE #whitespaceparam |
          ARRAY_PARAM_VALUE #arrayval |
          object #objectval ;
object: LEFT_OBJ_BRACKET instrParam* RIGHT_OBJ_BRACKET;