package com.geandro.rastreador.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.geandro.rastreador.dto.UsuarioCadastroDTO;
import com.geandro.rastreador.dto.UsuarioLoginDTO;
import com.geandro.rastreador.model.Usuario;
import com.geandro.rastreador.service.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

	private final UsuarioService service;
	
	public UsuarioController(UsuarioService service) {
		this.service = service;
	}

	/*
	 * Cadastro usuário
	 */
	@PostMapping("/cadastro")
	public ResponseEntity<Usuario> cadastrar(@RequestBody UsuarioCadastroDTO dto) {

		Usuario usuario = service.cadastrar(dto);

		return ResponseEntity.status(HttpStatus.CREATED).body(usuario);

	}

	/*
	 * Login
	 */
	@PostMapping("/login")
	public ResponseEntity<Usuario> login(@RequestBody UsuarioLoginDTO dto) {

		Usuario usuario = service.login(dto);

		return ResponseEntity.ok(usuario);

	}

}