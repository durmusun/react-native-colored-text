# React Native Colored Text

![React Native Colored Text](https://img.shields.io/badge/react--native-v0.74.1-blue.svg)
![npm](https://img.shields.io/npm/v/@durmusun/react-native-colored-text.svg)
![License](https://img.shields.io/npm/l/@durmusun/react-native-colored-text.svg)

Bring your text to life! `@durmusun/react-native-colored-text` is a dynamic component that allows you to easily color and style specific parts of your text content in your React Native applications using custom tags. It's time to say goodbye to boring, monochrome text!

## Why `@durmusun/react-native-colored-text`?

- **Easy to Use:** Instantly color your texts with an intuitive and simple API.
- **Dynamic and Flexible:** Define as many custom tags as you want and assign different styles to each.
- **Performance-Oriented:** Its lightweight and high-performance structure does not affect the speed of your application.
- **Unleash Your Creativity:** Emphasize your texts, highlight important words, or just add color to your application!

## Installation

```bash
yarn add @durmusun/react-native-colored-text
# or
npm install @durmusun/react-native-colored-text
```

## Usage

Including the `ColoredText` component in your project is very easy. Here is a basic example:

```jsx
import ColoredText from '@durmusun/react-native-colored-text';

const App = () => (
  <ColoredText
    style={{fontSize: 20, color: 'white'}}
    tagStyles={{
      highlight: {color: 'red'},
    }}
  >
    Hello <highlight>World</highlight>!
  </ColoredText>
);
```

### Advanced Examples

Unleash your imagination and turn your texts into a work of art!

**Using Multiple Colors and Styles**

```jsx
<ColoredText
  style={{fontSize: 24, textAlign: 'center'}}
  tagStyles={{
    keyword: {color: '#FFD700', fontWeight: 'bold'},
    tech: {color: '#61DAFB', fontStyle: 'italic'},
    platform: {textDecorationLine: 'underline', color: '#77dd77'}
  }}
>
  Color your <tech>React Native</tech> applications on <platform>iOS and Android</platform> with this <keyword>awesome</keyword> component.
</ColoredText>
```

**Nested Tags**

You can achieve more complex looks by combining different styles.

```jsx
<ColoredText
  style={{fontSize: 18}}
  tagStyles={{
    bold: {fontWeight: 'bold'},
    primary: {color: 'blue'},
    secondary: {color: 'green'}
  }}
>
  This text can be <bold><primary>both bold</primary> and <secondary>colored</secondary></bold>.
</ColoredText>
```

**Dynamic Content**

Perfect for highlighting usernames, tags, or search results.

```jsx
const username = 'Guest';

<ColoredText
  style={{fontSize: 16}}
  tagStyles={{user: {color: 'orange', fontWeight: 'bold'}}}
>
  Welcome, <user>{username}</user>!
</ColoredText>
```

## API

| Prop        | Type              | Description                                                                                                |
|-------------|-------------------|------------------------------------------------------------------------------------------------------------|
| `style`     | `TextStyle`       | The general text style of the component.                                                                   |
| `tagStyles` | `Object`          | An object containing the style objects corresponding to your custom tags. The key is the tag name.         |
| `children`  | `React.ReactNode` | The text content to be colored and styled. Use your custom tags in the format `<tagname>...</tagname>`. |

## Contributing

Contributions are welcome! Please feel free to open a pull request or create an issue.

## License

This project is licensed under the MIT License.