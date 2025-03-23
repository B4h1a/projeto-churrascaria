# Projeto Churrascaria

Nome do Projeto é Projeto churrascaria ele tem como característica a arquitetura MVC(Model-View-Controller) de um Miniframewok criado por Matheus Yokoo. Projetado para simplicidade e flexibilidade, oferece uma estrutura organizada para o desenvolvimento ágil da aplicações web em PHP.

## Principais Características

- **Arquitetura MVC:** Segue o padrão Model-View-Controller para uma organização clara e modular do código.
  
- **Autoload:** Utiliza um sistema de autoload do Composer para carregar automaticamente as classes, facilitando o desenvolvimento e evitando a necessidade de incluir manualmente os arquivos.

- **Twig para Templates:** Integrado com o Twig, um mecanismo flexível para facilitar a criação de views.

- **Roteamento Dinâmico:** Implementa um sistema de roteamento que permite definir facilmente padrões de URL e associá-los a controladores e métodos específicos.

- **Estrutura de Diretórios Organizada:** Adota uma estrutura de diretórios clara e intuitiva para facilitar a navegação e manutenção do código-fonte.

## Como Usar

1. Baixar este repositório e coloca-lo em uma pasta chamada projeto churrasco.
2. Verifique se as dependências do Composer estão instaladas caso não estiverem, delete a pasta vendor e e o arquivo composer.lock e use o comando `composer install` ou `php composer.phar install`.
3. Para iniciar o servidor, use o comando `cd (caminho-para-a-pasta-churrasco)` para chegar ao diretório do projeto e logo após utilize `php -S localhost:(porta de sua escolha) -t public` no CMD para startar a aplicação.
4. Abra o Xampp e ligue o MySql para fazer a ligação da aplicação com o banco de dados.

## Dependências

É necessário ter o XAMPP instalado em sua máquina para a utilização do MySQL. A aplicação utiliza extensões com o Font Awesome, Bootstrap e JQuery. É recomendado visualizar esta aplicação com internet.

## Status do projeto

Projeto finalizado.

## Contato

Para alguma dúvida ou feedback, entre em contato com o email yokoomatheus@gmail.com.