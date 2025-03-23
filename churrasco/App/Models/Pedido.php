<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Pedido
{
    private $id_pedido;
    private $grupoCarnes;
    private $grupoAdicionais;
    private $grupoSalada;
    private $grupoBebidas;
    private $grupoSobremesas;
    private $nome;
    private $endereco;
    private $numero;
    private $complemento;
    private $telefone;
    private $preco_total;

    public function __get($attr)
    {
        return $this->$attr;
    }
    public function __set($attr, $value)
    {
        $this->$attr = $value;
    }
    public function gravarPedido()
    {
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'INSERT INTO pedidos(grupoCarnes, grupoAdicionais, grupoSalada, grupoBebidas, grupoSobremesas, nome, endereco, numero, complemento, telefone, preco_total)
                 VALUES 
                 (:grupoCarnes, :grupoAdicionais, :grupoSalada, :grupoBebidas, :grupoSobremesas, :nome, :endereco, :numero, :complemento, :telefone, :preco_total)';

        $stmt = $conn->prepare($query);

        $stmt->bindValue(':grupoCarnes', $this->grupoCarnes);
        $stmt->bindValue(':grupoAdicionais', $this->grupoAdicionais);
        $stmt->bindValue(':grupoSalada', $this->grupoSalada);
        $stmt->bindValue(':grupoBebidas', $this->grupoBebidas);
        $stmt->bindValue(':grupoSobremesas', $this->grupoSobremesas);
        $stmt->bindValue(':nome', $this->nome);
        $stmt->bindValue(':endereco', $this->endereco);
        $stmt->bindValue(':numero', $this->numero);
        $stmt->bindValue(':complemento', $this->complemento);
        $stmt->bindValue(':telefone', $this->telefone);
        $stmt->bindValue(':preco_total', $this->preco_total);

        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>