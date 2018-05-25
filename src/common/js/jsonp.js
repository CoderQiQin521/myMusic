import originJsonp from 'jsonp'

/*
* @data: 在URL中拼接参数
* 采用promise方法
*/

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// g_tk: 1928093487,
//   inCharset: 'utf-8',
//   outCharset: 'utf-8',
//   notice: 0,
//   format: 'jsonp'

export function param(data) {
  var url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
