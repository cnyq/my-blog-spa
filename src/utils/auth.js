/*
 * @Author       : yanqun
 * @Date         : 2020-11-20 15:33:02
 * @LastEditTime : 2020-11-20 15:39:53
 * @Description  : 后台需要的存在 cookies 中,不需要的但前端需要存在 localStorage 中
 */

import Cookies from 'js-cookie'

const TokenKey = 'developer_token'
const menusKey = 'developer_menus'


export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function getMenus() {
    return JSON.parse(window.localStorage.getItem(menusKey) || '[]')
}
export function setMenus(menus = {}) {
    return window.localStorage.setItem(menusKey, JSON.stringify(menus))
}
