# eslint-plugin-tailwind-rules

🚫 ESLint plugin to prevent using `px` font sizes in Tailwind CSS. Use `rem` or `em` instead for better accessibility and responsiveness.

## Installation

To install the plugin, run the following command:

```sh
npm install --save-dev eslint-plugin-tailwind-rules
```

## Configuration

Once installed, you need to add the plugin to your ESLint configuration.

1. **In `.eslintrc.js`** (or your preferred ESLint config file, such as `.eslintrc.json` or `eslint.config.js`):

```js
module.exports = {
  plugins: ["tailwind-rules"], // Add the plugin
  rules: {
    "tailwind-rules/no-px-font-size": "warn", // Enable the rule
  },
};
```

2. **In `.eslintrc.json`**:

```json
{
  "plugins": ["tailwind-rules"],
  "rules": {
    "tailwind-rules/no-px-font-size": "warn"
  }
}
```

### Rule Options

- `"tailwind-rules/no-px-font-size": "warn"`: This will trigger a warning when `px` units are used in Tailwind class names.
- `"tailwind-rules/no-px-font-size": "error"`: This will trigger an error when `px` units are used in Tailwind class names.
- `"tailwind-rules/no-px-font-size": "off"`: This will disable the rule.

## Example

### ✅ Correct Usage (using `rem` or `em`):

```html
<p class="text-[1rem]">This is correct ✅</p>
<p class="text-[1.2rem]">Another correct example ✅</p>
```

### ❌ Incorrect Usage (using `px`):

```html
<p class="text-[16px]">This is incorrect ❌</p>
<p class="text-[14px]">Another incorrect example ❌</p>
```

## Why use this plugin?

- **Accessibility**: `rem` (relative to root font size) ensures better scaling for accessibility, as it adapts to the user's settings.
- **Responsiveness**: Using relative units like `rem` and `em` makes the layout more flexible and adaptive to different screen sizes and user preferences.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find a bug or want to suggest a feature, feel free to open an issue or submit a pull request.

## Links

- [Npm package](https://www.npmjs.com/package/eslint-plugin-tailwind-rules)
- [MIT License](https://opensource.org/licenses/MIT)
- [GitHub Repository](https://github.com/Rezazare76/tailwind-rules)
