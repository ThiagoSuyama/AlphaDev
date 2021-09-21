package br.com.istorage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

import br.com.istorage.model.Usuario;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioSenhaDTO {

	private int id;
	private String username;
	private String nome;
	private String email;
	private String senha;

	public Usuario toEntity() {
		ModelMapper modelMapper = new ModelMapper();
		Usuario entity = modelMapper.map(this, Usuario.class);
		return entity;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
