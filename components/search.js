export default function Search() {
  return <div className="search">
    <input placeholder="Search" onChange={e => e.target.name = e.target.value}/>
    <span><i className="fas fa-search"/></span>
  </div>
}
