import { helper } from '@ember/component/helper';

export default helper(function add([a, b]) {
  return Number(a) + Number(b);
});