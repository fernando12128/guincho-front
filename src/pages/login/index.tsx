import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import axios from "axios";
import { ButtonContainer, ButtonText, Container, Input, LinkText, Title } from "./styles";

const API_URL = "http://localhost:4200"; //tem que definir essa api para funcionar o backend


const LoginScreen = ({ navigation }) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
  
  const handleLogin = async () => {
    try {
     
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      console.log("Login realizado com sucesso:", response.data);
      
      setError("");
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setError("Falha no login. Verifique suas credenciais.");
    }
  };

	
	return (
	  <Container>
			<Title>Login</Title>
		
			<Input
				placeholder="E-mail"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
			/>

			<Input
				placeholder="Senha"
				value={password}
				onChangeText={setPassword}
				secureTextEntry={!showPassword}
			/>

			<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
				<LinkText>{showPassword ? 'Ocultar senha' : 'Mostrar senha'}</LinkText>
			</TouchableOpacity>

			<ButtonContainer onPress={handleLogin}>
				<ButtonText>Entrar</ButtonText>
			</ButtonContainer>

			<TouchableOpacity>
				<LinkText>Esqueci minha senha</LinkText>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate('Register') }>
				<LinkText>Não tem uma conta? Cadastre-se</LinkText>
			</TouchableOpacity>

		</Container>
			
	)
  }
  
  
  export default LoginScreen