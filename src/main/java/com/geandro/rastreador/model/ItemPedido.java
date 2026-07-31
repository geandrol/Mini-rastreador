package com.geandro.rastreador.model;


import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "itens_pedido")
@Data
public class ItemPedido {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String produto;


    private Integer quantidade;


    private Double preco;



    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;


}