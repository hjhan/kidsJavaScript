class Student{
    constructor(id,name,scores,gender,birthday){
        this.id = id;
        this.name = name;
        this.scores = scores;
        this.gender = gender;
        this.birthday = birthday;
    }
    getScore(s){
        return this.scores[s];
    }
    getAge(){
        var now = new Date();
        return now.getFullYear() - this.birthday.substr(0,4);
    }
    getGender()
    {
        return this.gender;
    }
    getAverage(){
        var avg = 0;
        var keys = Object.keys(scores);
        for ( k of keys ) {
            avg += scores[k];
        }
        return avg / keys.length;
    }
}

var scores = {"chinese":96,"math":100,"english":99};

var s = new Student(1,"Angela",scores,"Male","2008-09-11")
s.getAge();  //8
s.getScore("chinese");
s.getScore("english");
s.getScore("math");


class S{
    constructor(id)
    {
        this.id = id;
    }

    setName(name){
        this.name = name;
    }

    toString(){
        console.log(this.id + " " + this.name);
    }
}

var s = new S(1);
s.setName("Steve");
s.toString();