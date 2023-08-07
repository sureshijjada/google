// Write your code here

// const SuggestionItem = props => {
//   const {suggestion, onFullSuggestion} = props

//   const onClickFullSuggestion = () => {
//     onFullSuggestion(suggestion)
//   }

//   return (
//     <li className="suggestion-item">
//       <p className="suggestion-name">{suggestion}</p>
//       <img
//         className="arrow-image"
//         src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
//         alt="arrow"
//         onClick={onClickFullSuggestion}
//       />
//     </li>
//   )
// }

// export default SuggestionItem
import './index.css'

const SuggestionItem = props => {
  const {Suggestion, onFinal} = props
  const {suggestion} = Suggestion

  const onFullData = () => {
    onFinal(suggestion)
  }

  return (
    <li className="li">
      <div className="subcard">
        <div>
          <p className="paragraph">{suggestion}</p>
        </div>
        <div>
          <button className="button" type="button" onClick={onFullData}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
              alt="arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SuggestionItem
