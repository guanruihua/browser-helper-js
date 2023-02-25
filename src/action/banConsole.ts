/**
 * @title banConsole
 * @description 禁用在浏览器打开控制台
 * @param timeout {number=3000}
 */
export function banConsole(timeout = 3000) {
	const check = function () {
		function doCheck(a: number) {
			(function () { return }["constructor"]("debugger")());
			doCheck(++a)
		}

		try {
			doCheck(0)
		} catch (err) {
			console.error(err)
		}
	}

	const timer = setInterval(function () {
		check()
	}, timeout);
	(window as any).__ban__console__timer__ = timer
}

/**
 * @title notBanConsole
 * @description 停止 `banConsole` 事件
 */
export function notBanConsole() {
	delete (window as any).__ban__console__timer__
	return
}
