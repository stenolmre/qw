export default function Search({ onChange }) {
  return <div className="search">
    <input placeholder="Search adventure" onChange={onChange}/>
    <span><i className="fas fa-search"/></span>
  </div>
}
