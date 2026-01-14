## Markdown Italic Parser

A specialised text processor that converts Markdown italic syntax into standard HTML ´<i>´ tags. This parser respects strict Markdown rules regarding whitespace and matching delimiters.

### Features

    - Symmetry Detection: Ensures that an underscore is closed by an underscore, and an asterisk by an asterisk.

    - Whitespace Sensitivity: Correctly ignores invalid Markdown like `* text *` while processing `*text*`.

    - Global Replacement: Handles multiple italicised sections within a single paragraph.

### How the Regex Works

The core of this utility is a sophisticated Regular Expression: `/([*_])(\S.*?|\S)\1/g`

    1.  `([*_])`: Captures the opening delimiter (either `*` or `_`) into Group 1.

    2.  `(\S.*?\S|\S)`: This is the content (Group 2).

        -   `\S.*?\S`: Matches content that starts and ends with non-space characters (handling internal spaces).

        -   `| \S`: An "OR" condition that allows for a single character (like `*i*`).

    3. `\1`: The Backreference. It forces the regex to look for whatever character was caught in Group 1 to close the tag.

### Usage

```JavaScript

function parseItalics(markdown) {
    const regex = /([*_])(\S.*?\S|\S)\1/g;

    return markdown.replace(regex, (match, delimiter, text) => {
        return `<i>${text}</i>`;
    });
}

// Examples:
parseItalics("This is *italic*");       // "This is <i>italic</i>"
parseItalics("Use _underscores_ too");  // "Use <i>underscores</i> too"
parseItalics("*Invalid * space");      // "*Invalid * space" (No change)
```

### What I Learned

1. Backreferences (`\1`)

I learned that Regex can "remember" what it matched earlier. This is crucial for Markdown because `*text_` is invalid, but `*text*` is valid. `\1` ensures the closing character matches the opening one exactly.

2. Lazy vs. Greedy Matching

By using `.*?` instead of `.*`, I learned how to stop the match at the nearest closing tag. Without the `?`, a sentence with two italic words would be swallowed into one giant `<i>` tag.

3. The Power of `replace()` Callbacks

Instead of just using `$1` or `$2`, I used a callback function inside `.replace()`. This gives much more control over how the matched groups are used to build the final string.
