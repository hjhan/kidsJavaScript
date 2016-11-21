class Student{
    constructor(id,name,scores,gender,birthday){
        this.id = id;
        this.name = name;
        this.scores = scores;
        this.gender = gender;
        this.birthday = birthday;
    }
    getScore(s){
        return scores[s];
    }
    getAge(){
        var now = new Date();
        return now.getFullYear() - this.birthday.substr(0,4);
    }
}

var scores = {"chinese":96,"math":100,"english":99};

var s = new Student(1,"Angela",scores,"Male","2008-09-11")
s.getAge();  //8
s.getScore("chinese");
s.getScore("english");
s.getScore("math");
