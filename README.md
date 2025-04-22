# DevelFood

O projeto "DevelFood" é um aplicativo mobile android de pedido de refeições usando a tecnologia React Native. Esse aplicativo permite aos usuários se cadastrarem no sistema DevelFood, realizar pedidos em retaurantes cadastrados, favoritar seus pratos favoritos e acompanhar o andamento de seus pedidos.

### Login e Cadastro

Usuários já cadastrados poderão acessar o aplicativo inserindo seu e-mail e senha na tela de Login. Uma vez logados, o apliactivo sempre abrirá diretamente na tela Home, a não ser que o usuário clique no botão de "Sair do aplicativo" na tela do perfil, delete o aplicativo ou limpe o cache.

Caso o usuário tenha esquecido sua senha, poderá ter a opção de recuperá-la, clicando no botão de "Esqueci minha senha". Ele será redirecionado para o fluxo de redefinição de senha.

Caso o usuário ainda não estiver cadastrado, poderá fazer isso ao clicar em "Cadastre-se aqui!". Ao fazer isso, será redirecionado para o fluxo de cadastro, que possui 4 telas: email e senha, dados pessoais, endereço e confirmação.

### HomePage

A tela principal (Home) é representada por uma casa na tabBar e é a rota default do aplicativo.

Nela temos a barra do endereço do usuário, mostrando suas principais características.

Logo abaixo temos os banners promocionais dos restaurantes, que mudam de posição seguindo uma animação em Carrossel. Caso o usuário clique em um banner, será redirecionado para a tela de perfil do restaurante que o banner faz referência.

As categorias são um jeito que o usuário pode usar para filtrar e encontrar o restaurante de onde quer pedir baseado no tipo de comida que ele vende. Atualmente, o filtro por categoria não está implementado.

A barra de pesquisa é outro jeito que facilita a busca por um restaurante específico. Ao usuário digitar mais do que 2 caracteres, o aplicativo busca somente os dados dos restaurantes que possuem aquela sequência de letras em seu nome, atualizando a lista de restaurantes. Caso há menos do que dois caracteres na barra, a busca não é feita e os dados correspondem a todos os restaurantes cadastrados.

A lista de restaurantes mostra as informações cruciais de cada restaurante (seu nome, categoria e média de avaliações, bem como uma imagem ilustrativa e se o restaurante é favorito pelo usuário ou não). Os cards, ao serem clicados, levam para a tela de perfil do restaurante, onde são mostradas informações sobre os pratos disponíveis.

Por sua vez, os cards dos pratos podem ser filtrados por nome e, ao serem clicados, redirecionam para a tela de detalhes do prato, onde o usuário pode favoritar e desfavoritar ele ao clicar no botão de coração no canto superior direito da tela. Tanto no card quanto na tela de detalhes é possivel adicionar o prato no carrinho, aumentar ou diminuir sua quantidade e até remover sua solicitação.

Se o cliente ainda estiver escolhendo o que pedir para completar seu pedido, uma barra de carrinho aparecerá na Home e no perfil do restaurante indicando quantos itens foram adicionados e qual o preço total do pedido até aquele momento, lembrando que um pedido só pode ser realizado por itens de um mesmo restaurante. Ao clicar no botão "Ver carrinho", o usuário é redirecionado para a tela de carrinho. A barra de carrinho poderá ser vista em outras partes da aplicação também.

### Favoritos

A tela de favoritos pode ser acessada clicando no ícone de coração na tabBar. Aqui será mostrado todos os pratos favoritados pelo usuário logado, sendo possível filtrar a lista por nome. O usuário poderá adicionar o prato diretamente para o seu carrinho ou entrar na tela de detalhes do prato.

### Histórico de Pedidos

A tela de histórico de pedidos organiza os pedidos realizados pelo usuário conforme sua data. Ela mostra os dados principais de pedidos, como o restaurante, o status, o número e os itens escolhidos.

Ao clicar no card do pedido, o usuário é redirecionado para a tela de detalhes do pedido, que mostra informações mais detalhadas, como o endereço onde o pedido foi entregue, o valor total e os dados de cada prato. Os ícones de status representam cada etapa na realização do pedido e são atualizados automáticamente conforme a resposta do servidor.

Quando um pedido é terminado (quando seu status retorna como "entregue") o usuário tem a opção de avaliar o restaurante responsável de 1 a 5 estrelas e deixar um comentário se quiser. Isso modificará a média de avaliações do restaurante.

### Perfil do usuário

A tela de perfil do usuário dá algumas opções como: editar suas próprias informações, ir para central de ajuda, ir para página de informações do projeto, sair do aplicativo (logout) e exclusão da conta.

Na tela de edição de cadastro (redirecionada ao clicar no botão "Editar perfil"), é mostrado todos os dados do cadastro atuais do usuário, dando a ele a oportunidade de modificar alguma informação (nome, sobrenome, e-mail e cpf não são permitidos).

### Carrinho

A tela de carrinho pode ser acessada pela barra de carrinho que aparece quando um pedido é iniciado. Nela é mostrado uma prévia do pedido para o usuário confirmar se é isso que ele deseja mesmo. Nesta prévia aparece o endereço da entrega, o restaurante selecionado, os itens adicionados (dando a opções de aumentar ou diminuir a quantidade e remover por completo) e o valor total da compra. Ao clicar em "Finalizar pedido", o aplicativo redirecionará para a tela de checkout, onde indica que o pedido foi realizado com sucesso e dá a opção do usuário navegar para a tela de detalhes do pedido que acabou de criar.

## Projeto

Projeto de treinamento prático para a turma VI de estágio da empresa DevelCode
Desenvolvedora: Luana Reginato Bassanesi
Patrinho/Orientador: Gustavo Lucas Sobbrero
Tecnologia: React Native (React CLI v. 0.73.6)

## API

Foi utilizado o serviço de 3 APIs Java diferentes, por ter outros 3 desenvolvedores Java na turma VI.
Separados pelas Branchs:

- Atílio
- José
- Luan
