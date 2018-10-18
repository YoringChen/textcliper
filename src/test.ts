export default function foo (): number {
  const div = document.createElement('div')
  div.textContent = '12121'

  document.body.appendChild(div)

  return document.body.scrollHeight
}
