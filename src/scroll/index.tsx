/**
 8. 是否滚动到页面底部
该方法用于判断页面是否已经底部：
const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
const bindTop = () => {
		// 方法一 这样可以实现，但是效果不太行
		window.scrollTo(0, 0)
		document.documentElement.scrollTop = 0;
			  
	// 方法二 通过计时器去滚动 视觉上会丝滑一些，没有太大的卡顿效果
	const timeTop = setInterval(() => {
		// 去控制他的滑行距离
		document.documentElement.scrollTop = scrollTopH.value -= 50
		// 当滑到顶部的时候记得清除计时器(*) 重点
		if (scrollTopH.value <= 0) {
			clearInterval(timeTop)
		}
	}, 10)


	平滑滚动到页面顶部
	const scrollToTop = () => {
		const c = document.documentElement.scrollTop || document.body.scrollTop
		if (c > 0) {
				window.requestAnimationFrame(scrollToTop)
				window.scrollTo(0, c - c / 8)
		}
}
scrollToTop()
 */

import { getHTMLElement } from '../dom'
import { LikeHTMLElement } from '../type'

/**
 * @title scrollTop
 * @description 回到顶部
 * @returns {void}
 */
export function scrollTop(likeDom?: LikeHTMLElement): void {
  const dom = getHTMLElement(likeDom)
  if (dom) {
    dom?.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

/**
 * @title scrollBottom
 * @description 回到底部
 * @returns {void}
 */
export function scrollBottom(likeDom?: LikeHTMLElement): void {
  const dom = getHTMLElement(likeDom)
  if (dom) {
    dom.scrollTo({ top: dom.scrollHeight ?? 0, behavior: 'smooth' })
  }
}

// 获取当前页面的滚动位置

export const getScrollPosition = (likeDom?: LikeHTMLElement) => {
  const el: any = getHTMLElement(likeDom)
  if (el) {
    const x = el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft
    const y = el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    return { x, y }
  }
}
// getScrollPosition(); // {x: 0, y: 200}
