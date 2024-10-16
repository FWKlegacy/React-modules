
//constructor function that can be used to create many objects 
//prototype is used to add properties to an object
//prototype can also be use to add new method to an object
function Person(first,last,age,eye){
    this.firstName= first;
    this.lastName= last;
    this.age= age;
    this.eyeColor= eye;
}

Person.prototype.nationality="Kenyan";

Person.prototype.name = function(){
    return this.firstName +"" +this.lastName
}

const myFather = new Person("John","Mbadi",52,"Black");
const myMother = new Person("Jane","Mbadi",48,"Black");
function Father() {
    return (
     <>
        <p>
            My father's name is {myFather.name()} and his age plus 10 is {myFather.age + 10}.
        </p>
        <p>
        My  mother is {myMother.firstName} and her age plus 10 is {myMother.age + 10}.
    </p>
     
     </>
    );
}

export default Father;