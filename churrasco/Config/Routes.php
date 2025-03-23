<?php
namespace Config;
use App\Controllers\Index\IndexController;

// Mapeamento de rotas para controladores
$rotas = [
    '/' => 'IndexController@index',
    '/carnes' => 'IndexController@carnes',
    '/adicionais' => 'IndexController@adicionais',
    '/salada' => 'IndexController@salada',
    '/bebidas' => 'IndexController@bebidas',
    '/sobremesas' => 'IndexController@sobremesas',
    '/contato' => 'IndexController@contato',
    '/pedido' => 'IndexController@pedido',
    '/fazerPedido' => 'IndexController@fazerPedido'
];

return $rotas;
?>