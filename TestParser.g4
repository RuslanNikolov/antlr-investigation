parser grammar TestParser;
options { tokenVocab=TestLexer; }

universeParam: (INSTRCODE instrParamsGroup | INSTRCODE INSTR_GROUPS_SEPARATOR | instrParamsGroup )+ ;
instrParamsGroup: LEFT_INSTRPARAMS_BRACKET instrParam* RIGHT_INSTRPARAMS_BRACKET; // Enter param pairs lexer mode
instrParam: PLAIN_PARAM_WORD DELIM paramValue WS*;
paramValue: PLAIN_PARAM_WORD #normal  |
            WS_PARAM_VALUE #whitespaceparam |
          arrayParamValue #arrayval |
          objectParamValue #objectval 
          ; 
objectParamValue: LEFT_OBJ_BRACKET instrParam+ RIGHT_OBJ_BRACKET;
arrayParamValue:  LEFT_ARR_BRACKET paramValue (ARR_ITEM_SEPARATOR paramValue)* RIGHT_ARR_BRACKET;