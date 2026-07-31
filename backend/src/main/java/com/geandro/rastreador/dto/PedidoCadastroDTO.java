package com.geandro.rastreador.dto;

import lombok.Data;

import java.util.List;


@Data
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


}