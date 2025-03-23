<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Adicionais
{
    private $id_adicionais;
    private $nome;
    private $preco;

    public function __get($attr)
    {
        return $this->$attr;
    }
    public function __set($attr, $value)
    {
        $this->$attr = $value;
    }
    public function getAll()
    {
        $conexao = new Conexao();

        $conn = $conexao->conectar();

        $query = 'SELECT id_adicionais, nome, preco FROM adicionais';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>