module.exports = {
  root: true, // 表示当前目录即为根目录，ESLint 规则将被限制到该目录下
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  /* 解析器 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.json', '.vue'],
  },
  settings: {
    // 识别 @ alias
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.json', '.vue', '.jsx'],
      },
    },
  },
  /* ESLint 中基础配置需要继承的配置 */
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier', // 增加 prettier 相关的校验规则
    'plugin:prettier/recommended', // 开启 Prettier 插件推荐的规则
    'plugin:vue/essential',
  ],
  /* ESLint文件所依赖的插件 */
  plugins: ['prettier', 'vue', 'html', 'import', 'unused-imports'],
  /**
   * 定义规则
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-v-model-argument': 'off',
    'no-unused-vars': 'off',
    'no-case-declarations': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'space-before-function-paren': 'off',
    'class-methods-use-this': 'off',
    'vue/multi-word-component-names': 'off',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'vue/first-attribute-linebreak': ['error', { singleline: 'ignore', multiline: 'below' }],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // Node.js内置模块
          'external', // 第三方模块
          'internal', // 应用程序内部的模块
          'parent', // 父级目录中导入的模块
          ['sibling', 'index'], // 具有相同或更高目录的兄弟模块
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: '*.{scss,css,less,style,stylus}',
            group: 'parent',
          },
          {
            pattern: '*.{js}',
            group: 'sibling',
          },
        ],
        'newlines-between': 'always', // 在组之间插入空行
        pathGroupsExcludedImportTypes: ['sibling', 'index'],
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        }, // 对于每个组，按字母表顺序排序。
      },
    ],

    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-restricted-syntax': 'off',
    'default-case': 'off',
    'no-unused-expressions': 'off',
    'func-names': 'off',
  },
};
