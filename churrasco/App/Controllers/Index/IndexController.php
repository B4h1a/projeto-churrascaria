<?php
namespace App\Controllers\Index;
use App\Models\Carnes;
use App\Models\Adicionais;
use App\Models\Salada;
use App\Models\Bebidas;
use App\Models\Sobremesas;
use App\Models\Pedido;
use Twig\Environment;

class IndexController{
    private $twig;

    public function __construct(Environment $twig) {
        $this->twig = $twig;
    }
    public function index() {
        echo $this->twig->render('index.twig');
    }
    public function carnes() {
        echo $this->twig->render('carnes.twig');
    }
    public function adicionais() {
        echo $this->twig->render('adicionais.twig');
    }
    public function salada() {
        echo $this->twig->render('salada.twig');
    }
    public function bebidas() {
        echo $this->twig->render('Bebidas.twig');
    }
    public function sobremesas() {
        echo $this->twig->render('sobremesas.twig');
    }
    public function contato() {
        echo $this->twig->render('contato.twig');
    }
    public function pedido() {
        $carnes = new Carnes();
        $adicionais = new Adicionais();
        $salada = new Salada();
        $bebidas = new Bebidas();
        $sobremesas = new Sobremesas();

        $listaCarnes = $carnes->getAll();
        $listaAdicionais = $adicionais->getAll();
        $listaSalada = $salada->getAll();
        $listaBebidas = $bebidas->getAll();
        $listaSobremesas = $sobremesas->getAll();
        
        echo $this->twig->render(('pedido.twig'), [ 'listaCarnes' => $listaCarnes, 'listaAdicionais' => $listaAdicionais, 'listaSalada' => $listaSalada, 'listaBebidas' => $listaBebidas, 'listaSobremesas' => $listaSobremesas]);
    }
    public function fazerPedido() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $pedido = new Pedido();
    
            $pedidoJSON = $_POST['pedido'];
    
            $pedidoArray = json_decode($pedidoJSON, true);
    
            $pedido->__set('nome', $pedidoArray['cliente'][0]['nome']);
            $pedido->__set('endereco', $pedidoArray['cliente'][0]['endereco']);
            $pedido->__set('numero', $pedidoArray['cliente'][0]['numero']);
            $pedido->__set('complemento', $pedidoArray['cliente'][0]['complemento']);
            $pedido->__set('telefone', $pedidoArray['cliente'][0]['telefone']);
            
            $grupoCarnes = $this->stringsPedido($pedidoArray['carnes']);
            $grupoAdicionais = $this->stringsPedido($pedidoArray['adicionais']);
            $grupoSalada = $this->stringsPedido($pedidoArray['salada']);
            $grupoBebidas = $this->stringsPedido($pedidoArray['bebidas']);
            $grupoSobremesas = $this->stringsPedido($pedidoArray['sobremesas']);

            $stringCarnes = implode(' - ', $grupoCarnes);
            $stringAdicionais = implode(' - ', $grupoAdicionais);
            $stringSalada = implode(' - ', $grupoSalada);
            $stringBebidas = implode(' - ', $grupoBebidas);
            $stringSobremesas = implode(' - ', $grupoSobremesas);

            $pedido->__set('grupoCarnes', $stringCarnes);
            $pedido->__set('grupoAdicionais', $stringAdicionais);
            $pedido->__set('grupoSalada', $stringSalada);
            $pedido->__set('grupoBebidas', $stringBebidas);
            $pedido->__set('grupoSobremesas', $stringSobremesas);

            $carnes = $pedido->__get('grupoCarnes');
            $adicionais = $pedido->__get('grupoAdicionais');
            $salada = $pedido->__get('grupoSalada');
            $bebidas = $pedido->__get('grupoBebidas');
            $sobremesas = $pedido->__get('grupoSobremesas');

            $pedido->__set('preco_total', $pedidoArray['preco'][0]['preco_total']);

            $preco = $pedido->__get('preco_total');

            $pedido->gravarPedido();

            echo json_encode(['success' => true, 'resultadoPositivo' => 'Seu pedido foi realizado com sucesso!']);
    
        } else {
            echo 'Método de requisição inválido.';
        }
    }
    public function stringsPedido($tipos) {
        $grupo = [];
        foreach ($tipos as $tipo) {
            $item = $tipo['item'];
            $grupo[] = $item;
        }
        return $grupo;
    }
}
?>