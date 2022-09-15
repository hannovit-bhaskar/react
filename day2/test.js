// when we create object of class then a constructor automatically call of that class
class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    joiningYear(){
        return 2020 - this.experience;
    }

    static add(a,b){
        return a+b;
    }
}
class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,linkedin){
        super(givenName,givenExperience,givenDivision);
        this.language = language;
        this.linkedin = linkedin;
    }
    favoriteLanguage(){
        if(this.language == 'Java'){
            return "Java";  // we cannot use this inside a static method
        }else{
            return "JavaScript"
        }
    }
    static multiply(a,b){
        return a*b;
    }
}
shivam = new Programmer("Shivam",3,"Lays","Go","mahorji21")
console.log(shivam)