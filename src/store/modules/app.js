function dateJudge() {
	let now = new Date(), hour = now.getHours()
	document.body.removeAttribute('class')
	if (hour > 9 && hour < 19) {
		document.getElementsByTagName('body')[0].className = 'light_theme'
		return 0
	} else {
		document.getElementsByTagName('body')[0].className = 'dark_theme'
		return 1
	}
}
const states = {
	themeState: dateJudge()
}

const mutations = {
	UPDATE_THEME_STATE(state, param) {
		document.body.removeAttribute('class')
		document.getElementsByTagName('body')[0].className = param ? 'dark_theme' : 'light_theme'
		state.themeState = param
	}
}
const actions = {
	updateThemeState({
		commit
	}, param) {
		commit('UPDATE_THEME_STATE', param)
	}
}

export default {
	namespaced: true,
	state: states,
	mutations,
	actions
}