/*
2.	Class exercise link:  
educative-courses/20_Exercise_on_Classes.pdf at master · the-prksh/educative-courses · GitHub
*/ 
class Character{
    constructor(id, name, x ,y){
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
    }
    get position(){
        
    }
}
class PlayerCharacter extends Character{
    constructor(id, name, x , y){
        super(id, name , x , y)
    }
}
class NonPlayerCharacter extends Character{
    constructor(id, name, x , y){
        super(id, name , x , y)
    }
}
let player = new PlayerCharacter();
let non_player = new NonPlayerCharacter();