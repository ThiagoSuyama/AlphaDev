package br.com.istorage.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.modelmapper.ModelMapper;

import br.com.istorage.dto.UsuarioDTO;
import br.com.istorage.dto.UsuarioSenhaDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_funcionarios")
@Entity
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_seq_id")
	@SequenceGenerator(sequenceName = "usuario_seq_id", name = "usuario_seq_id", allocationSize = 1)
	private int id;
	
	@Column(name = "USERNAME")
	private String username;
	
	@Column(name = "NOME")
	private String nome;
	
	@Column(name = "SOBRENOME")
	private String sobrenome;
	
	@Column(name = "SENHA")
	private String senha;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public UsuarioSenhaDTO toSenhaDTO() {
		ModelMapper modelMapper = new ModelMapper();
		UsuarioSenhaDTO entity = modelMapper.map(this, UsuarioSenhaDTO.class);
		return entity;
	}
	
	public UsuarioDTO toDto() {
		ModelMapper modelMapper = new ModelMapper();
		UsuarioDTO entity = modelMapper.map(this, UsuarioDTO.class);
		return entity;
	}

}
