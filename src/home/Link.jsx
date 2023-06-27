import { useState } from 'react'

export default function Link(props) {

  const [isCopied, setIsCopied] = useState(false)

  function copy(e){
    let list = e.target.parentNode.parentNode.childNodes
    list.forEach(element => {
      element.childNodes[2].style.backgroundColor = '#2acfcf'
      element.childNodes[2].innerText = 'Copy'
    });
    navigator.clipboard.writeText(props.shortUrl)
    e.target.style.backgroundColor = '#3b3054'
    e.target.innerText = 'Copied!'
  }

  return (
    <li className="link" key={props.k}>
      <span className="full-url">{props.fullUrl}</span>
      <span className="short-url"><a target="blank" href={props.shortUrl}>{props.shortUrl}</a></span>
      <button onClick={copy} className="copy-button">Copy</button>
    </li>
  )
}
