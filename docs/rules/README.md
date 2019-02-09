# Available Rules

- 🌟 mark: the rule which is enabled by `eslint-comments/recommended` preset.
- ✒️ mark: the rule which is fixable by `eslint --fix` command.

## Best Practices

| Rule ID | Description |    |
|:--------|:------------|:---|
| [eslint-comments/<wbr>disable-enable-pair](./disable-enable-pair.html) | require a `eslint-enable` comment for every `eslint-disable` comment | 🌟 |
| [eslint-comments/<wbr>no-aggregating-enable](./no-aggregating-enable.html) | disallow a `eslint-enable` comment for multiple `eslint-disable` comments | 🌟 |
| [eslint-comments/<wbr>no-duplicate-disable](./no-duplicate-disable.html) | disallow duplicate `eslint-disable` comments | 🌟 |
| [eslint-comments/<wbr>no-unlimited-disable](./no-unlimited-disable.html) | disallow `eslint-disable` comments without rule names | 🌟 |
| [eslint-comments/<wbr>no-unused-disable](./no-unused-disable.html) | disallow unused `eslint-disable` comments | ✒️ |
| [eslint-comments/<wbr>no-unused-enable](./no-unused-enable.html) | disallow unused `eslint-enable` comments | 🌟 |

## Stylistic Issues

| Rule ID | Description |    |
|:--------|:------------|:---|
| [eslint-comments/<wbr>no-restricted-disable](./no-restricted-disable.html) | disallow `eslint-disable` comments about specific rules |  |
| [eslint-comments/<wbr>no-use](./no-use.html) | disallow ESLint directive-comments |  |

