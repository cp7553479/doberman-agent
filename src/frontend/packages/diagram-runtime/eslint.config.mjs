import rules from '../ui/eslint.config.mjs';
export default [...rules, { ignores: ['**/._*', 'assets/**'] }];
