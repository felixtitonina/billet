module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {},
  globals: {
    describe: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    jest: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly'
  }
}
