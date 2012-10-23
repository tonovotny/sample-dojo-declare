define(["dojo/_base/declare"], function (declare) {
    return declare([], {

        _name: null,

        _age: null,

        constructor: function(name, age){
            this._name = name;
            this._age = age;
        },

        alert: function () {
            alert(this._name + ' (' + this._age + ')');
        }

    });
});
