import { Button, Text, TextInput, View } from "react-native";
import useInput from "./hooks/useInput";
import useValidate from "./hooks/useValidate";
import styles from "./styles";

export default function App() {
  const nombre = useInput("");
  const edad = useInput(null);
  const { Validar, validate, reset } = useValidate(null);
  return (
    <View style={styles.home}>
      {validate == true ? (
        <Text style={styles.home__mensaje}>
          ¡ Bienvenid@
          <Text style={styles.home__nombre}> {nombre.input}</Text>
          🥳 puedes acceder al sistema !
        </Text>
      ) : validate == false ? (
        <Text style={styles.home__mensaje}>
          Lo sentimos
          <Text style={styles.home__nombre}> {nombre.input} </Text>
          aun no eres mayor de edad para acceder al sistema 😣
        </Text>
      ) : null}
      <TextInput
        value={nombre.input}
        placeholderTextColor="white"
        style={styles.home__input}
        placeholder="Ingresar Nombre"
        onChangeText={nombre.ChangeInput}
      />
      <TextInput
        value={edad.input}
        placeholderTextColor="white"
        style={styles.home__input}
        placeholder="Ingresar Edad"
        onChangeText={edad.ChangeInput}
      />
      <View style={styles.home__contButton}>
        <View style={styles.home__button}>
          <Button
            color="white"
            title="Validar"
            onPress={() => {
              Validar(edad.input);
            }}
          />
        </View>
        <View style={styles.home__button}>
          <Button
            color="white"
            title="Limpiar"
            onPress={() => {
              reset();
              nombre.ResetInput();
              edad.ResetInput();
            }}
          />
        </View>
      </View>
    </View>
  );
}
