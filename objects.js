/**
 * Created by joebals on 8/9/2017.
 */

var person = {
    firstName: 'Joe',
    lastName: 'Balingit',
    fullName: function(){
        return person.firstName + ' ' +person.lastName;
    }

}

console.log(person.fullName());