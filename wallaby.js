module.exports = function () {
  process.env.JEST_MOCK = true
  process.env.NO_WATCHMAN = true
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.test.js',
      '!src/server.js',
      { pattern: '.env', instrument: false },
      'scripts/create-admin.js',
      'test/data/**/*',
      'test/helpers/**/*',
      'test/setupAndTeardown.js'
    ],
    tests: ['test/**/*.test.js', 'src/**/*.test.js'],
    env: { type: 'node' },
    testFramework: 'jest',
    autoDetect: true,
    workers: { initial: 1, regular: 1 }
  }
}
