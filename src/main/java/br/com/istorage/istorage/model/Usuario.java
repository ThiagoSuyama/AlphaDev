package br.com.istorage.istorage.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_funcionarios")
@Entity
public class Usuario {
	
	@Id
	@GeneratedValue ( strategy = GenerationType.SEQUENCE, generator = "usuario_seq_id" )
	@SequenceGenerator ( sequenceName = "usuario_seq_id", name = "usuario_seq_id", allocationSize = 1 )
	private int id;
	
	private String nome;
	private String sobrenome;
	private String rg;
	private String cpf;
	private String telefone;
	private String cep;
	//private telefone_id;
	//private endereco_id
	

	
}
	