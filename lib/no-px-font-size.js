module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow px units in Tailwind class names",
      category: "Best Practices",
    },
    schema: [], // No options needed
  },
  create: function (context) {
    return {
      Literal(node) {
        if (typeof node.value === "string") {
          const pxRegex = /text-\[\d+px\]/g;
          let match;
          while ((match = pxRegex.exec(node.value)) !== null) {
            const startIndex = match.index + 1;
            const endIndex = startIndex + match[0].length;

            context.report({
              node,
              message:
                "Avoid using px in Tailwind class names. Use rem instead.",
              loc: {
                start: {
                  line: node.loc.start.line,
                  column: node.loc.start.column + startIndex,
                },
                end: {
                  line: node.loc.start.line,
                  column: node.loc.start.column + endIndex,
                },
              },
            });
          }
        }
      },
    };
  },
};
