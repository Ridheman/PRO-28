class Launcher{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA, 
            pointB:pointB,
            length:10,
            stiffness:0.5,
        }
        this.body = Constraint.create(option)
        this.pointB = pointB
        World.add(world,this.body)
    }
    attach(bodyb){
        this.body.bodyA = bodyb
    }
    display(){
        if(this.body.bodyA)
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    fly(){
    this.body.bodyA = null    
    }
}