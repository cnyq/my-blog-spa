/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 1. isChineseCharacter 检验是否为汉字
 * 2. isMobile 检验是否为手机号
 */

// 示例
/**
 * @name isChineseCharacter 检验是否为汉字
 * @param {string} word
 * @returns {Boolean}
 * @author HoChine
 */
export function isChineseCharacter(word) {
    return /^[\u4e00-\u9fa5]{0,}$/.test(word)
}

/**
 * @name isMobile 检验是否为手机号
 * @param {String || Number} mobile
 * @returns {Boolean}
 * @author HoChine
 */
export function isMobile(mobile) {
    return /^1[3456789]\d{9}$/.test(mobile)
}
