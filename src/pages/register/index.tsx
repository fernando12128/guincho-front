import React, { useState } from "react"
import { ButtonText, Container, FooterText, Input, Title, ToggleButton } from "./styles";
import axios from "axios";

const API_URL = "http://localhost:4200"; //tem que definir essa api para funcionar o backend

const Register = () => {
	const [isCollaborator, setIsCollaborator] = useState(false);

	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [phone, setPhone] = useState()
	const [cnpj, setCnpj] = useState()

	const handleRegister = async () => {
		const userData = {
			email,
			password
		};

		try{
			const response = await axios.post(`${API_URL}/auth/register`, userData);
			console.log("Registrro feito com sucesso: ", response.data);

		} catch(error){
			console.error("Erro ao registra", error);
		}
	}
	return (
		<Container>
			<Title>Criar Conta</Title>
	
			<ToggleButton onPress={() => setIsCollaborator(!isCollaborator)}>
				<ButtonText>
					{isCollaborator ? 'Registro como Colaborador' : 'Registro como Cliente'}
				</ButtonText>
			</ToggleButton>

			<Input 
			placeholder='Nome Completo'
			value={name}
			onChangeText={setName}
			/>
			<Input 
			placeholder='Email'
			value={email}
			onChangeText={setEmail}
			/>
			<Input 
			placeholder='Senha'
			secureTextEntry
			value={password}
			onChangeText={setPassword}
			/>
			<Input 
			placeholder='Telefone'
			value={phone}
			onChangeText={setPhone}
			/>

			{isCollaborator && (
				<Input 
				placeholder='CNPJ'
				value={cnpj}
				onChangeText={setCnpj} />
			)}

			<ToggleButton onPress={handleRegister}>
				<ButtonText>Registrar</ButtonText>
			</ToggleButton>

			<FooterText>
				Já tem uma conta? Faça login
			</FooterText>
		</Container>
	)
}

export default Register