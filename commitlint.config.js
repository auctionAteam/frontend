export default {
  extends: ['@commitlint/config-conventional'], // 기본적인 커밋 메시지 규칙들을 제공해줌
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'refactor', 'build']],
  },
};
