/**
 * @title toBase64
 * @description 子串 转换为 base64
 * @param {string} value
 * @param {'utf-8'|'utf-16'} [encode='utf-8']
 * @returns {string}
 */
export function toBase64(
  value: string,
  encode: 'utf-8' | 'utf-16' = 'utf-8',
): string {
  try {
    if (encode === 'utf-8') {
      return btoa(
        encodeURIComponent(value).replace(
          /%([0-9A-F]{2})/g,
          (match, p1: string) => String.fromCharCode(('0x' + p1) as any),
        ),
      )
    }
    if (encode === 'utf-16') {
      const encode = encodeURI(value)
      return window.btoa(encode)
    }
    return ''
  } catch (error) {
    return ''
  }
}

/**
 * @title toBase64
 * @description base64 转 子串
 * @param {string} value
 * @param {'utf-8'|'utf-16'} [encode='utf-8']
 * @returns {string}
 */
export function base64ToString(
  value: string,
  encode: 'utf-8' | 'utf-16' = 'utf-8',
): string {
  try {
    if (encode === 'utf-8') {
      return decodeURIComponent(
        atob(value)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join(''),
      )
    }
    if (encode === 'utf-16') {
      const decode = window.atob(value)
      return decodeURI(decode)
    }
    return ''
  } catch (error) {
    return ''
  }
}
