class Form{
    constructor(){
this.input = createInput("Name")
this.button = createButton("Play")
this.greeting = createElement('h3')
    }
    hide(){
        this.input.hide()
        this.greeting.hide()
        this.button.hide()

    }
    display(){
        var title = createElement('h2')
        title.html("CAR RACING GAME")
        title.position(380,0)
       this.input.position(430,160)
      this.button.position(550,200)


        this.button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.updateCount(playerCount)
            var greeting=('h3')
            this.greeting.html("Hello "+player.name)
            this.greeting.position(430,160)
            
        })
    }
}