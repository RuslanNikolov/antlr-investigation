lexer grammar TestLexer;

INSTRCODE: [a-zA-Z0-9_=\-@]+ ;
LEFT_BRACKET: '(' -> pushMode(INPARAMPAIRS);
SEMICOLON: ';';
WS: [ \r\t\n] -> channel(HIDDEN);

mode INPARAMPAIRS;
PARAMWORD: [a-zA-Z0-9]+ ;
WSWORD: '\'' ([a-zA-Z0-9] | S)+ '\'';
ARRAY: LEFT_SQUARE_BRACKET PARAMWORD (';' PARAMWORD)* RIGHT_SQUARE_BRACKET;
DELIM: '=' | ':' ;
RIGHT_BRACKET: ')' -> popMode;
fragment LEFT_SQUARE_BRACKET: '[';
fragment RIGHT_SQUARE_BRACKET: ']';
S: [ \r\t\n] -> channel(HIDDEN);


// mode INPARAMPAIRS;
// PARAMWORD: [a-zA-Z0-9]+ ;
// WSWORD: '\'' ([a-zA-Z0-9] | S)+ '\'' {if(this.myVariable === true) { console.log('hooray'); };};
// ARRAY: '[' PARAMWORD (';' PARAMWORD)* ']';
// DELIM: '=' | ':' {myVariable===true}?;
// RIGHT_BRACKET: ')' -> popMode;
// LEFT_SQUARE_BRACKET: '[';
// RIGHT_SQUARE_BRACKET: ']';
// S: [ \r\t\n] -> channel(HIDDEN);
