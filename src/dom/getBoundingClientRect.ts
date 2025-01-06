import { isString } from 'asura-eye'

export function getBoundingClientRect(likeDom?: any): DOMRect | undefined {
  if (likeDom.getBoundingClientRect) {
    return likeDom.getBoundingClientRect()
  }
  if (isString(likeDom)) {
    const dom = document.querySelector(likeDom)
    if (dom?.getBoundingClientRect) {
      return dom.getBoundingClientRect()
    }
    return
  }
  if (typeof window !== 'undefined') {
    return window.document.body.getBoundingClientRect()
  }
}
