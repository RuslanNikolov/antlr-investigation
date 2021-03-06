lexer grammar TestLexer;

INSTRCODE: [a-zA-Z0-9_=\-@]+ ;
INSTR_GROUPS_SEPARATOR: ';';
LEFT_INSTRPARAMS_BRACKET: '(' -> pushMode(INSTR_PARAMS_MODE) ;

mode INSTR_PARAMS_MODE;
PLAIN_PARAM_WORD: [a-zA-Z0-9]+ ;
WHITESPACE_SINGLE_QUOTE: '\'' -> pushMode(WHITEPSPACE_PARAM_VALUE_MODE);
DELIM: '=' | ':' ; 

LEFT_ARR_BRACKET: '[' -> pushMode(ARRAY_VALUE_MODE);
LEFT_OBJ_BRACKET: '(';
RIGHT_OBJ_BRACKET: ')';

WS: [ \r\t\n] -> skip;
RIGHT_INSTRPARAMS_BRACKET: ');' -> popMode;


// using the type function signature, you actually generate the borrowed token
// ARR_WS_PARAM_VALUE: WS_PARAM_VALUE -> type(WS_PARAM_VALUE)
// its the same as writing: WS_PARAM_VALUE: SINGLE_QUOTE ([a-zA-Z0-9_=\-@] | WS)+ SINGLE_QUOTE
mode ARRAY_VALUE_MODE;
ARR_WH_SINGLE_QUOTE: WHITESPACE_SINGLE_QUOTE -> type(WHITESPACE_SINGLE_QUOTE);
ARR_PLAIN_PARAM_WORD: PLAIN_PARAM_WORD -> type(PLAIN_PARAM_WORD);

ARR_LEFT_OBJ_BRACKET: LEFT_OBJ_BRACKET -> type(LEFT_OBJ_BRACKET);
ARR_RIGHT_OBJ_BRACKET: RIGHT_OBJ_BRACKET -> type(RIGHT_OBJ_BRACKET);
ARR_DELIM: DELIM -> type(DELIM);
ARR_ITEM_SEPARATOR: ';';


ARR_WS: WS -> type(WS);
RIGHT_ARR_BRACKET: ']' -> popMode;

mode WHITEPSPACE_PARAM_VALUE_MODE;
WS_PARAM_VALUE_CONTENT: ([a-zA-Z0-9_=\-@] | WS)+;
WH_END_SINGLE_QUOTE: '\'' -> popMode;
