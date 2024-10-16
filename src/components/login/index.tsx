import { View, Text, TextInput, Button, StyleSheet} from 'react-native'
import React, { useState } from 'react'

export default function Login() {
  const [user, setUsername] = React.useState('');
  const [passw, setPassword] = React.useState('');

  const handleLogin = () => {
   console.log("Username: ", user)
   console.log("Password", passw)
  }
  return (
    <View style={styles.fixToText}>
      <TextInput
        onChangeText={setUsername}
        value={user}
        placeholder='Username'
      />
      <TextInput
        onChangeText={setPassword}
        value={passw}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  )
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: 'space-between',
  }
});