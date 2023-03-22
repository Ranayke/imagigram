import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const Register = () => {

    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const handleSubmit = () => {
        return;
    }

    return (
        <View>
            <TextInput placeholder="Nome" onChangeText={setName}/>
            <TextInput placeholder="E-mail" onChangeText={setEmail}/>
            <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry/>
            <Button title="Submit" onPress={handleSubmit}/>
        </View>
    );
};

export default Register;
