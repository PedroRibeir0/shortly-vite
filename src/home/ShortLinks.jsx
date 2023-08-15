
export default function ShortLinks({short, setLinkInput, linkInput}) {

  const style = {
    backgroundImage : 'url("/images/bg-shorten-mobile.svg")'
  }

  return (
    <div className="short-links" style={style}>
      <input 
      required 
      className="link-input" 
      type="text" 
      placeholder="Shorten a link here..."
      value={linkInput}
      onChange={e=>setLinkInput(e.target.value)}
      />
      <span className="warning">Please add a link</span>
      <button 
      onClick={short} 
      className="shorten-it-button">
        Shorten It!
      </button>
    </div>
  )
}
