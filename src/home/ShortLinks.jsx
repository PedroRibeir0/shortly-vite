
export default function ShortLinks(props) {

  const style = {
    backgroundImage : 'url("/images/bg-shorten-mobile.svg")'
  }

  return (
    <div className="short-links" style={style}>
      <input required className="link-input" type="text" placeholder="Shorten a link here..."/>
      <span className="warning">Please add a link</span>
      <button onClick={props.short} className="shorten-it-button">Shorten It!</button>
    </div>
  )
}
