/*
 * @Author       : yanqun
 * @Date         : 2020-10-28 16:46:11
 * @LastEditTime : 2020-10-28 16:55:48
 * @Description  : 过滤器封装
 */

/**
 * @name 格式字数加...
 * @param {string} value 文本内容
 * @param {number} num 需要格式多少个字,默认为10
 */

const ellipsis = (value, num)=>{
  const nums = num || 10;
  if (!value) return '';
  if (value.length > nums) {
    return value.slice(0, nums) + '...';
  }
  return value;
}

 
export default {
  ellipsis
}