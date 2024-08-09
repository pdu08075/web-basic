/*
    타입선언 :
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
var variable;
variable = '문자열';
// variable = 1234;
function func(arg1, arg2) {
    return '문자열';
}
var arrowFunc = function (arg1, arg2) {
    return '문자열';
};
/*
    typescript의 타입
    - string: 문자열
    - number: 숫자
    - boolean: 논리
    - null: null
    - undefined: 정의되지 않음
    - object: 객체
    - array: 배열
    - enum: 열거형
    - void: 함수에서 반환값이 없음
    - any: 모든 타입
*/
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
var string1 = '';
var string2 = '';
string2 = string1;
// string1 = string2;
var Color;
(function (Color) {
    Color["RED"] = "#ff0000";
    Color["GREEN"] = "#00ff00";
    Color["BLUE"] = "#0000ff";
})(Color || (Color = {}));
var color = Color.RED;
console.log(color);
var anyType = 10;
anyType = '10';
var voidFunc = function () {
    return;
};
var func2 = function (arg) {
    return '';
};
var funcType;
funcType = func2;
// funcType = voidFunc;
/*
    타입추론 :
    - 타입을 선언하지 않고 변수에 값이 초기화되는 순간에 초기화된 값에 따라서 변수의 타입이 결정
*/
var stringVariable = '';
// stringVariable = 10;
var func3 = function (arg) {
    if (arg === 1)
        return 1;
    return '';
};
/*
    타입 변환 :
    - as 키워드로 형변환 가능 (객체일때 자주 사용), <> 연산자로 형변환 가능
*/
var PI = '3.14';
var piNumber = PI;
piNumber = PI;
piNumber = Number(PI);
/*
    유니온 타입
    - 복수의 타입을 지정하는 방법, | 사용
*/
var union;
union = 10;
union = '10';
// union = false;
// const number1: number = union as number;
/*
    리터럴 타입
    - 지정한 리터럴 값만 가질수 있는 타입
*/
var day;
day = '낮';
day = '밤';
// day = '아침';
