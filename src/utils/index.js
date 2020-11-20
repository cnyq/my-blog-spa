/*
 * @Author       : yanqun
 * @Date         : 2020-11-20 15:33:02
 * @LastEditTime : 2020-11-20 15:37:27
 * @Description  : 公共方法
 */

export function formatTime(time, format) {
	let currentFormat = format || 'yyyy-MM-dd HH:mm:ss'
	let date = new Date(time)
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'H+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
		'f+': date.getMilliseconds() // 毫秒
	};
	if (/(y+)/.test(currentFormat)) {
		currentFormat = currentFormat.replace(RegExp.$1, (String(date.getFullYear())).substr(4 - RegExp.$1.length));
	}
	for (let k in o) {
		if (new RegExp('(' + k + ')').test(currentFormat)) {
			currentFormat = currentFormat.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr((String(o[k])).length)));
		}
	}
	return currentFormat;
}

export function formatDateRange(timeArr, format = 'yyyy-MM-dd HH:mm:ss') {
	if (!Array.isArray(timeArr)) {
		throw new Error('formatDateRange function argument is not an Date Array')
	}
	if (!(timeArr[0] instanceof Date) || !(timeArr[1] instanceof Date)) {
		throw new Error('formatDateRange function argument is not an Date Array')
	}
	let startTime = timeArr[0].getTime()
	let EndTime = timeArr[1].getTime() + (1000 * 60 * 60 * 24 - 1)
	return [
		formatTime(startTime, format),
		formatTime(EndTime, format)
	]
}

/**
 * @name url参数转Object
 * @param {string} url
 */
export function param2Obj(url) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse(
		'{"' +
		decodeURIComponent(search)
			.replace(/"/g, '\\"')
			.replace(/&/g, '","')
			.replace(/=/g, '":"')
			.replace(/\+/g, ' ') +
		'"}'
	)
}

/**
 * @name Object转url参数
 * @param {Object} object
 */
export function obj2params(object) {
	let params = '';

	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			params += '&' + key + '=' + object[key]
		}
	}
	return params.slice(1)
}

/**
 * @name 限制只能输入正数，最多保留两位小数
 * @param {Number} value 需要转换的数值
 * @param {Number} maxNumber 限制最大的数值（上限值）  默认无限制
 * @param {Boolean} isIncludeMax 是否限制上限值 默认不限制
 */
export function formatTwoDecimal(value, maxNumber, isIncludeMax) {
	let sValue = String(value)
	sValue = sValue.replace(/[^\d.]/g, '');
	sValue = sValue.replace(/\.{2,}/g, '.');
	sValue = sValue.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
	sValue = sValue.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
	if (sValue.indexOf('.') < 0 && sValue !== '') {
		sValue = parseInt(sValue, 10);
	}
	// 设置最大限制
	if (maxNumber) {
		const bool = isIncludeMax ? Number(sValue) >= maxNumber : Number(sValue) > maxNumber;
		if (bool) {
			let valueString = String(sValue)
			sValue = valueString.slice(0, valueString.length - 1)
		}
	}
	if (sValue === '.') {
		sValue = '0.'
	}
	return Number(sValue)
}
