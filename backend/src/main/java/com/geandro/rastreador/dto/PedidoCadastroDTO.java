package com.geandro.rastreador.dto;

import java.util.List;

public class PedidoCadastroDTO {

	/*
	 * Cliente que realizou pedido
	 */
	private Long clienteId;

	/*
	 * Produtos
	 */
	private List<ItemPedidoDTO> itens;

	/*
	 * Local entrega
	 */
	private EnderecoEntregaDTO enderecoEntrega;

	public Long getClienteId() {
		return clienteId;
	}

	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
	}

	public List<ItemPedidoDTO> getItens() {
		return itens;
	}

	public void setItens(List<ItemPedidoDTO> itens) {
		this.itens = itens;
	}

	public EnderecoEntregaDTO getEnderecoEntrega() {
		return enderecoEntrega;
	}

	public void setEnderecoEntrega(EnderecoEntregaDTO enderecoEntrega) {
		this.enderecoEntrega = enderecoEntrega;
	}
	
	

}