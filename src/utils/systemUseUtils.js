import defaultSettings from '@/global/settings'

// 获取 页面title
export function getPageTitle(title) {
    const defaultTitle = defaultSettings.title || '好生活 - 运营端管理系统'

    return `${defaultTitle}${title ? (' - ' + title) : ''}`
}

// 操作menus使用的方法
let tempMenus = {
    path2name: {
        demo: '示例'
    }, //根据路由查找当前页面 菜单
    path2paths: {} //根据路由查找面包屑
    // pathList: []
}

const recursive = (menus, name) => {
    menus.forEach((item) => {
        if (item.type === 1) {
            if (item.children) {
                recursive(item.children, name + '|' + item.name)
            }
        } else if (item.type === 2) {
            const url = item.component.slice(1)
            tempMenus.path2name[url] = item.name
            tempMenus.path2paths[url] = (name + '|' + item.name).slice(1)
            // 暂时不用，快捷搜索菜单功能已删除
            // tempMenus.pathList.push({
            //     value: item.name,
            //     path: item.path
            // })
        }
    })
}
export function sliceLastWord(name) {
    const tempName = name.match(/[A-Z]/g)
    if (tempName) {
        const lastUppercaseLetter = name.match(/[A-Z]/g).pop();
        const lastUppercaseLetterIndex = name.lastIndexOf(lastUppercaseLetter);
        return name.slice(0, lastUppercaseLetterIndex)
    }
    return name
}

export function menusMap(menus) {
    recursive(menus, '')
    return tempMenus
}
export function rolesMap(roles) {
    let tempRoles = {}

    roles.forEach((item) => {
        tempRoles[item] = true
    })
    return tempRoles
}
