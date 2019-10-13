angular.module('app', [])
  .controller('padreCtrl', function($scope) {
    $scope.padre = "soy el padre"
    $scope.logPadre = function() {
      console.log("soy el padre")
    }
  })

  .controller('hijoCtrl', function($scope) {
    $scope.hijo = "soy el primer hijo"
    $scope.edad = "36"

    $scope.logHijo = function() {
      console.log($scope.hijo, $scope.edad)
    }
  })

  .controller('nietoCtrl', function($scope) {
    $scope.nieto = "soy el nieto"
    $scope.edad = "4"
    $scope.logNieto = function() {
      console.log($scope.nieto, $scope.edad, $scope.hijo)
    }
  })

  .controller('miCtrl', function($scope) {
    $scope.mensaje = "mensaje desde un controlador"
  })

  .controller('amigo', function($scope) {
    $scope.anuncio = "";
  })

  .controller('controlador', function($scope) {
    $scope.errorMinimo = false;
    $scope.$watch('password', function(nuevo, anterior) {
      if (!nuevo) return;
      if (nuevo.length < 6) {
        $scope.errorMinimo = true;
      } else {
        $scope.errorMinimo = false;
      }
    })
  })


  .controller('algo', function($scope) {
    $scope.coincidencia = false;
    $scope.$watchGroup(['password', 'password2'], function(nuevos, anteriores) {
      if (!nuevos) return;
      if (nuevos[0] === nuevos[1]) {
        $scope.coincidencia = true;
      } else {
        $scope.coincidencia = false;
      }
    })
  })

  .controller('insertando', function($scope){
    $scope.comentarioNew={}

    $scope.comentarios=[]
    $scope.inserta= function (){
    $scope.comentarios.push($scope.comentarioNew)
    $scope.comentarioNew={}
    }
    $scope.limpiaTabla= function(){
      $scope.comentarios=[]
    }
  })

  .controller('otro', function($scope){
    $scope.informacion =[
      {life: 'secret of the meaning'},
      {space: 'sort kind of everything'},
      {blackHole: 'the door from another dimetion'}
    ];

    $scope.descubre= function(){
      $scope.cambia=!$scope.cambia
    }
  })
