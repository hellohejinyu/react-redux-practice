import { connect } from '../react-redux'
import ThemeSwitch from '../components/ThemeSwitch'

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    },
    onTest: () => {
      dispatch({ type: 'test' })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)