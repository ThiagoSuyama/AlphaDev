package br.com.istorage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.istorage.dto.UsuarioSenhaDTO;
import br.com.istorage.model.Usuario;
import br.com.istorage.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	public UsuarioRepository usuarioRepository;
	
	//@Autowired
	//public BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public Usuario salvarUsuario(UsuarioSenhaDTO usuario) {
		Usuario user = usuario.toEntity();
		//user.setSenha(bCryptPasswordEncoder.encode(user.getSenha()));
		return this.usuarioRepository.save(user);
	}
	
	public Usuario consultarUsuarioId(int id) {
		return this.usuarioRepository.findById(id).orElse(null);
	}
	
	public List<Usuario> consultarTodosUsuarios() {
		return this.usuarioRepository.findAll();
	}
	
	public void delete(int id) {
		this.usuarioRepository.deleteById(id);
	}
	
	public Usuario atualizarUsuario(int id, UsuarioSenhaDTO usuario) {
		Optional<Usuario> obj = this.usuarioRepository.findById(id);
		Usuario update = null;

		if (obj.isPresent()) {
			update = obj.get();
			update.setNome(usuario.getNome());
			if (usuario.getSenha() != null) {
				update.setSenha(usuario.getSenha());
			}
		}

		return this.usuarioRepository.save(update);
	}
	
	
}
