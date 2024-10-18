import {styleTags, tags as t} from "@lezer/highlight"


export const mpHighlight =  styleTags({
  Keyword: t.keyword,
  Number: t.number,
  String: t.string,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
  ".": t.operator,
  ";": t.separator,
  Variable: t.variableName,
  Function: t.function,
  Comment: t.lineComment,
})
