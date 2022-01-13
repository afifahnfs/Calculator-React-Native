import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
  },

  screen: {
    flex: 0.8,
    justifyContent: 'center',
  },

  contain: {
    flex: 1
  },

  row: {
    flexDirection: "row",
  },

  wrapBtn: {
    flex: 1,
    justifyContent: 'center'

  },

  result: {
    backgroundColor: "darkblue",
    color: "white",
    padding: 5,
    paddingLeft: 20,
    fontSize: 34,
  },

  text: {
    fontSize: 28,
    color: 'white',
  },

  textNumber: {
    fontSize: 28,
    color: 'black',
  },

  button: {
    color: 'white',
    backgroundColor: "rgb(133, 155, 228)",
    width: 'auto',
    height: 80,
    borderWidth: 2,
    fontSize: 24,
    borderColor: "darkblue",
    textAlign: 'center',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center'
  },

  btnOperator: {
    color: 'white',
    backgroundColor: "rgb(41, 44, 226)",
    width: 'auto',
    height: 80,
    borderWidth: 3,
    borderColor: "darkblue",
    textAlign: 'center',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center'
  },

});
