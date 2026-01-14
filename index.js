// Markdown Italic Parser
// Given a string that may include some italic text in Markdown, return the equivalent HTML string.

// Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
// There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
// Convert all italic occurrences to HTML i tags and return the string.
// For example, given "*This is italic*", return "<i>This is italic</i>".

// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

// function parseItalics(markdown) {
//   console.log(markdown);
//   // find first [*_]
//   // no spaces
//   // capture group ([a-z\s])
//   // last [*_]
//   const regex = /[*_]([a-z\s])[*_]/;
//   console.log(markdown.match(regex));
//   return markdown;
// }

// function parseItalics(markdown) {
//   console.log(markdown);
//   // find first [*_]
//   // no spaces
//   // capture group ([a-z\s])
//   // last [*_]
//   const regex = /[*_]([^*_]+)[*_]/g;
//   console.log(markdown.match(regex));
//   return markdown;
// }

function parseItalics(markdown) {
  // Pattern:
  // 1. Symbol [*_]
  // 2. Capture group: Non-space (\S), then anything (.*?), then non-space (\S)
  // 3. Symbol [*_]
  const regex = /([*_])(\S.*?\S)\1/g;

  return markdown.replace(regex, (match, delimiter, text) => {
    return `<i>${text}</i>`;
  });
}
