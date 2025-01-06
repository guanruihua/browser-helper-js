import { isString } from 'asura-eye'
import type { LikeHTMLElement } from 'type'

export function getHTMLElement(likeDom?: LikeHTMLElement): HTMLElement | undefined {
  if (isString(likeDom)) {
    const dom = document.querySelector(likeDom)
    if (dom) {
      return dom as HTMLElement
    }
  }
  if (typeof window !== 'undefined') {
    return window.document.body
  }
}
