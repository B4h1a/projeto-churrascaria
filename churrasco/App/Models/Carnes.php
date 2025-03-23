<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Carnes
{
    private $id_carnes;
    private $nome;
    private $preco;
    private $tipo;

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

        $query = 'SELECT id_carnes, nome, preco, tipo FROM carnes';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>