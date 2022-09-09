const person={
    name: prompt('Shenoni Emrin Tuaj'),
    surname: prompt('Shenoni Mbiemrin Tuaj'),
    
    emri:function(){
        return person.name;
    },
    mbiemri:function(){
        return person.surname;
    }
}
const{emri,mbiemri}=person;
document.write('Përshëndetje : '+emri()+ " "+mbiemri());



