import './SearchBox.css'

function SearchBox() {
  return (
    <div className='hero-container'>
        <input placeholder='Search For Food' type="text"/>
        <button>Search</button>
    </div>
  )
}

export default SearchBox