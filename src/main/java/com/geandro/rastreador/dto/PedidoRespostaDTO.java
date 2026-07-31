package com.geandro.rastreador.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

import com.geandro.rastreador.model.StatusPedido;


@Data
public class PedidoRespostaDTO {


    private Long id;


    private LocalDateTime dataPedido;


    private StatusPedido status;


    private UsuarioRespostaDTO cliente;


    private List<ItemPedidoDTO> itens;


    private EnderecoEntregaDTO enderecoEntrega;


}
