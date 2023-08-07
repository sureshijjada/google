// Write your code here
// import {Component} from 'react'
// import SuggestionItem from '../SuggestionItem'

// class GoogleSuggestions extends Component {
//   state = {
//     searchInput: '',
//   }

//   onChangeInput = event => {
//     this.setState({
//       searchInput: event.target.value,
//     })
//   }

//   onFullSuggestion = suggestion => {
//     this.setState({searchInput: suggestion})
//   }

//   render() {
//     const {searchInput} = this.state
//     const {suggestionsList} = this.props
//     const filteredList = suggestionsList.filter(each =>
//       each.suggestion.toUpperCase().includes(searchInput.toUpperCase()),
//     )

//     return (
//       <div className="google-suggestions-container">
//         <img
//           className="google-image"
//           src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
//           alt="google logo"
//         />
//         <div className="suggestion-container">
//           <div className="input-container">
//             <img
//               className="input-image"
//               src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
//               alt="search icon"
//             />
//             <input
//               className="input-text"
//               type="search"
//               placeholder="Search Google"
//               value={searchInput}
//               onChange={this.onChangeInput}
//             />
//           </div>
//           <ul className="suggestions-list">
//             {filteredList.map(each => (
//               <SuggestionItem
//                 key={each.id}
//                 suggestion={each.suggestion}
//                 onFullSuggestion={this.onFullSuggestion}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default GoogleSuggestions
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {text: ''}

  onChange = event => {
    this.setState({text: event.target.value})
  }

  onFinal = suggestion => {
    this.setState({text: suggestion})
  }

  render() {
    const {text} = this.state
    const {suggestionsList} = this.props
    const newList = suggestionsList.filter(item =>
      item.suggestion.toUpperCase().includes(text.toUpperCase()),
    )
    return (
      <div className="container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="img"
          />
          <div className="subcard">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="subimg"
              />
              <input
                type="search"
                placeholder="Search Google"
                onChange={this.onChange}
                value={text}
              />
            </div>
            <div>
              <ul className="ulcard">
                {newList.map(item => (
                  <SuggestionItem
                    Suggestion={item}
                    key={item.id}
                    text={text}
                    onFinal={this.onFinal}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
