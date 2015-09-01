/**
 * 
 */
package criminals.face.domain;

/**
 * 
 * @author andre.i.albuquerque
 *
 */
public class Criminal {
	
	private String nome;
	
	private String cpf;
	
	private String rg;
	
	private String endereco;

	/**
	 * @return the nome
	 */
	public String getNome() {
		return nome;
	}

	/**
	 * @param nome the nome to set
	 */
	public void setNome(String nome) {
		this.nome = nome;
	}

	/**
	 * @return the cpf
	 */
	public String getCpf() {
		return cpf;
	}

	/**
	 * @param cpf the cpf to set
	 */
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	/**
	 * @return the rg
	 */
	public String getRg() {
		return rg;
	}

	/**
	 * @param rg the rg to set
	 */
	public void setRg(String rg) {
		this.rg = rg;
	}

	/**
	 * @return the endereco
	 */
	public String getEndereco() {
		return endereco;
	}

	/**
	 * @param endereco the endereco to set
	 */
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	@Override
	public String toString() {
		return "Criminal [nome=" + nome + ", cpf=" + cpf + ", rg=" + rg
				+ ", endereco=" + endereco + "]";
	}
	

}
