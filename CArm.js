class cArm{
    constructor(body1,body2){
        var options= {
                bodyA : body1,
                bodyB : body2,
                stiffness:.5,
                length: 20
        
                
            }
            this.sling=Constraint.create(options)
        
            
            
        
            World.add(world,this.sling)
        }
        display(){
        
            if(this.sling.bodyA){
                var firstpos = this.sling.bodyA.position;
                var secpos = this.sling.bodyB.position;
                push()
                stroke("#54270F")
                strokeWeight(7)
                line(firstpos.x-15,firstpos.y,secpos.x-15,secpos.y)
             pop()
            }
                 
                  
            
        }
        fly(){
            this.sling.bodyA=null
        }
        
        attach(body1){
        this.sling.bodyA=body1
        }
        }
