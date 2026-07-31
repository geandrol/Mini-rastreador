package com.geandro.rastreador.model;


import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "enderecos")
@Data
public class Endereco {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String rua;


    private String numero;


    private String bairro;


    private String cidade;


    private String complemento;


}