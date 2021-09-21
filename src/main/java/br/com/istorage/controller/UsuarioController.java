package br.com.istorage.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.istorage.dto.UsuarioDTO;
import br.com.istorage.dto.UsuarioSenhaDTO;
import br.com.istorage.model.Usuario;
import br.com.istorage.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;

	@GetMapping
	public ResponseEntity<List<UsuarioDTO>> findAll() {
		List<Usuario> list = this.usuarioService.consultarTodosUsuarios();
		List<UsuarioDTO> listDTO = list.stream().map(objeto -> new UsuarioDTO(objeto)).collect(Collectors.toList());

		return ResponseEntity.ok().body(listDTO);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<UsuarioDTO> consultarUsuario(@PathVariable int id) {
		Usuario usuario = this.usuarioService.consultarUsuarioId(id);
		UsuarioDTO usuarioDto = new UsuarioDTO(usuario);
		return ResponseEntity.ok().body(usuarioDto);
	}

	@PostMapping
	public ResponseEntity<UsuarioSenhaDTO> salvarUsuario(@RequestBody UsuarioSenhaDTO usuario) {
		Usuario user = this.usuarioService.salvarUsuario(usuario);
		UsuarioSenhaDTO userDto = user.toSenhaDTO();
		return ResponseEntity.ok().body(userDto);
	}

	@PatchMapping(value = "{id}")
	public ResponseEntity<UsuarioDTO> atualizarUsuario(@PathVariable int id, @RequestBody UsuarioSenhaDTO usuario) {
		Usuario user = this.usuarioService.atualizarUsuario(id, usuario);
		UsuarioDTO userDto = user.toDto();
		return ResponseEntity.ok().body(userDto);
	}

	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable int id) {
		this.usuarioService.delete(id);
	}

}
