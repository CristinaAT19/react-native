import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import useInput from "./hooks/useInput";
import useValidate from "./hooks/useValidate";
import styles from "./styles";

export default function App() {
  const nombre = useInput("");
  const edad = useInput(0);
  const { Validar, validate } = useValidate(null);
  return (
    <View style={styles.home}>
      {validate ? (
        <Text style={styles.home__mensaje}>
          ¡ Bienvenid@
          <Text style={styles.home__nombre}> {nombre.input} </Text>
          🥳 puedes acceder al sistema !
        </Text>
      ) : (
        <Text style={styles.home__mensaje}>
          Lo sentimos
          <Text style={styles.home__nombre}> {nombre.input} </Text>
          aun no eres mayor de edad para acceder al sistema 😣
        </Text>
      )}
      <TextInput
        style={styles.home__input}
        placeholder="Ingresar Nombre"
        onChangeText={nombre.ChangeInput}
      />
      <TextInput
        style={styles.home__input}
        placeholder="ingresar Edad"
        onChangeText={edad.ChangeInput}
      />
      <View style={styles.home__button}>
        <Button
          color="#007AFF"
          title="SUMAR"
          onPress={() => Validar(edad.input)}
        />
      </View>
    </View>
  );
}
