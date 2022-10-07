angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter) {
    $scope.app = "Lista Telefonica"
    $scope.contatos = [
        {nome: uppercaseFilter("Pedro"), telefone: "99998888", cor:"blue", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: "Ana", telefone: "99998877", cor: "red", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
        {nome: "Maria", telefone: "99998866", cor: "yellow", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}}
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 1},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 3},
        {nome: "Claro", codigo: 21, categoria: "Celular", preco: 1},
        {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
        {nome: "Embratel", codigo: 22, categoria: "Fixo", preco: 2}
    ];


    $scope.adicionarContato = function (contato) {
        
        contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if (!contato.selecionado) return contato;
        });
        
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
        
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDeOrdenacao = !$scope.direcaoDeOrdenacao;
    };
    
});