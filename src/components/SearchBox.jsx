import './SearchBox.css'

function SearchBox() {
  return (
    <div className='hero-container'>
      <div>
        <input placeholder='Search For Food' type="text"/>
        <button>Search</button>
      </div>
    </div>
  )
}

export default SearchBox