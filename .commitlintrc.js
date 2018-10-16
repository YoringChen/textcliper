module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'change', 'refactor', 'revert', 'temp']],
    'subject-case': [0, 'always', []]
  }
}