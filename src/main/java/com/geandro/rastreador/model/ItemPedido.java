package com.geandro.rastreador.model;

import java.math.BigDecimal;

/**
 * Item que compoe um pedido (produto, quantidade e preco unitario).
 */
public class ItemPedido {

    private Long id;
    private String nomeProduto;
    private Integer quantidade;
    private BigDecimal precoUnitario;

    public ItemPedido() {
    }

    public ItemPedido(Long id, String nomeProduto, Integer quantidade, BigDecimal precoUnitario) {
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public BigDecimal getPrecoUnitario() {
        return precoUnitario;
    }

    public void setPrecoUnitario(BigDecimal precoUnitario) {
        this.precoUnitario = precoUnitario;
    }

    /**
     * Calcula o subtotal do item (quantidade x preco unitario).
     */
    public BigDecimal getSubtotal() {
        if (quantidade == null || precoUnitario == null) {
            return BigDecimal.ZERO;
        }
        return precoUnitario.multiply(BigDecimal.valueOf(quantidade));
    }
}
