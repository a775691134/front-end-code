'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'Scott';
var greeting = 'hello ${name}';
console.log(greeting);

var Foo = function () {
    function Foo() {
        _classCallCheck(this, Foo);
    }

    _createClass(Foo, [{
        key: 'method',
        value: function method() {}
    }]);

    return Foo;
}();

var name1 = 'zach';
while (true) {
    var _name = 'obama';
    console.log(name); //obama
    break;
}
console.log(name); //zach

var Animal = function () {
    function Animal() {
        _classCallCheck(this, Animal);

        this.type = 'animal';
    }

    _createClass(Animal, [{
        key: 'says',
        value: function says(say) {
            console.log(this.type + ' says ' + say);
        }
    }]);

    return Animal;
}();

var animal = new Animal();
animal.says('hello'); //animal says hello

var Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat() {
        _classCallCheck(this, Cat);

        var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this));

        _this.type = 'cat';
        return _this;
    }

    return Cat;
}(Animal);

var cat = new Cat();
cat.says('hello'); //cat says hello
