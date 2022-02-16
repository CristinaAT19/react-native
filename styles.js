import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#282C34",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },
  home__input: {
    borderBottomWidth: 5,
    color: "white",
    padding: 10,
    fontSize: 20,
    minWidth: 210,
    textAlign: "center",
  },
  home__contButton: {
    flexDirection: "row",
  },
  home__button: {
    backgroundColor: "black",
    borderRadius: 4,
    margin: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  home__mensaje: {
    color: "white",
    fontSize: 23,
  },
  home__nombre: {
    color: "#61DAFB",
    fontSize: 35,
  },
  home__textButton: {
    fontSize: 40,
    color: "white",
  },
});
export default styles;
