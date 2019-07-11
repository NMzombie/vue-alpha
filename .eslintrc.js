// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-multiple-empty-lines": [0, {"max": 3}],//空行最多不能超过3行
    "no-mixed-spaces-and-tabs": [0, "smart-tabs"],//当 tab 是为了对齐，允许混合使用空格和 tab。
    "semi": [ 0, "always"],//必须分号结束！
    "indent": [0,4],//tab键4个空格,
    'no-irregular-whitespace ':'off',
    'eslint-disable-next-line':0,
    'space-infix-ops':0,
    'no-unused-vars':0,
    'no-trailing-spaces':0,
    'key-spacing':0,
    'object-property-newline':0,
    'no-undef':0,
    'comma-spacing':0,
    'space-before-function-paren':0,
    'space-before-blocks':0,
    'keyword-spacing':0,
    'no-multi-spaces':0,
    'spaced-comment':0
  }
}
