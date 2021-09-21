package br.com.istorage.dto;

import org.modelmapper.ModelMapper;

import br.com.istorage.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
	
	private int id;
	private String username;
	private String nome;
	private String sobrenome;


	public UsuarioDTO(Usuario usuario) {
		this.id = usuario.getId();
		this.nome = usuario.getNome();
		this.sobrenome = usuario.getSobrenome();
	}

	public Usuario toEntity() {
		ModelMapper modelMapper = new ModelMapper();
		Usuario entity = modelMapper.map(this, Usuario.class);
		return entity;
	}
}

