GitHub Repository Link : https://github.com/itsmashiat/DevStack.git
Live Website Link : https://devstack-zeta.vercel.app/


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```


1. What is JSX, and why is it used in React?

=> JSX is basically an extension of Javascript that lets us write HTML-like code inside JavaScript. It makes writing React components easier and cleaner.


2. What is the difference between props and state?


=> Props are used to send data from one component to another. State is data that belongs to a component and can change.


3. What does the useState hook do, and where did you use it in this project?


=> useState is used to store data that can change in a component. I used it to store and update the data used in my project.


4. What does the useEffect hook do, and why did you need it to load the JSON data?


=> useEffect runs some code when the component loads or changes. I used it to load the JSON data when the page was opened.


5. Why does every item in a .map() list need a unique key prop?


=> The key helps React recognize each item in a list. It helps React update the correct item when something changes.


6. What is conditional rendering? Show one place you used it (example: the empty stack message).


=> Conditional rendering means showing something only when a certain condition is true. For example, I showed an “Empty Stack” message when there were no items in the stack.


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?


=> A parent sends data to a child using props. If the child needs to send data back, the parent can give the child a function through props.