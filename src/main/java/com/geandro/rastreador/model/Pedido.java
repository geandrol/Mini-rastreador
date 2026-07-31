package com.geandro.rastreador.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Pedido feito por um cliente, contendo itens e endereco de entrega.
 * O status controla o ciclo de vida do pedido (RECEBIDO -> EM_PREPARO ->
 * SAIU_PARA_ENTREGA -> ENTREGUE, ou CANCELADO a qualquer momento).
 */
public class Pedido {

    private Long id;
    private Cliente cliente;
    private List<ItemPedido> itens = new ArrayList<>();
    private Endereco enderecoEntrega;
    private StatusPedido status = StatusPedido.RECEBIDO;
    private LocalDateTime dataCriacao;
    private LocalDateTime dataAtualizacao;

    public Pedido() {
    }

    public Pedido(Long id, Cliente cliente, List<ItemPedido> itens, Endereco enderecoEntrega) {
        this.id = id;
        this.cliente = cliente;
        this.itens = itens != null ? itens : new ArrayList<>();
        this.enderecoEntrega = enderecoEntrega;
        this.status = StatusPedido.RECEBIDO;
        this.dataCriacao = LocalDateTime.now();
        this.dataAtualizacao = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public List<ItemPedido> getItens() {
        return itens;
    }

    public void setItens(List<ItemPedido> itens) {
        this.itens = itens;
    }

    public Endereco getEnderecoEntrega() {
        return enderecoEntrega;
    }

    public void setEnderecoEntrega(Endereco enderecoEntrega) {
        this.enderecoEntrega = enderecoEntrega;
    }

    public StatusPedido getStatus() {
        return status;
    }

    public void setStatus(StatusPedido status) {
        this.status = status;
        this.dataAtualizacao = LocalDateTime.now();
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDateTime dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public LocalDateTime getDataAtualizacao() {
        return dataAtualizacao;
    }

    public void setDataAtualizacao(LocalDateTime dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }

    /**
     * Metodo utilitario para adicionar um item ao pedido.
     */
    public void adicionarItem(ItemPedido item) {
        this.itens.add(item);
    }
}
