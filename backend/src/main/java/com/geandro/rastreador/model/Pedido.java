package com.geandro.rastreador.model;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;


@Entity
@Table(name = "pedidos")
@Data
public class Pedido {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private LocalDateTime dataPedido;


    @Enumerated(EnumType.STRING)
    private StatusPedido status;


    /*
     * Cliente que realizou o pedido
     */
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario cliente;


    /*
     * Endereço onde será entregue
     */
    @OneToOne(
        cascade = CascadeType.ALL
    )
    private Endereco endereco;



    /*
     * Produtos do pedido
     */
    @OneToMany(
        mappedBy = "pedido",
        cascade = CascadeType.ALL
    )
    private List<ItemPedido> itens;


}