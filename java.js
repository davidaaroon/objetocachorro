function Animal(){
  this.nome = "lulu"
  this.raca = "cao"
  this.peso = 10
  this.idade = 5
  
  this.fazerXixi = function () {
    console.log("xiiiiiiiiiiiiii....")
  }

  this.comer = function(kg) {
    for(var i=0;i<kg; i++){
      this.mastigar(i)
    }
    console.log("nhame... nhame...")
    this.peso = this.peso + (kg / 2)
  }

  this.mastigar = function(i){
    console.logo(i + " - nhoc, nhoc...")
  }

}



let lulu = new Animal()
lulu.nome = "Pichuca"
lulu.raca = "Gato"
lulu.comer()


let xuxu = new Animal()
xuxu.nome = "Flora"
xuxu.raca = "Pitbull"
xuxu.comer()

