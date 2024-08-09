/*
    클래스 정의 :
    - 속성 및 기능의 집합을 정의
*/
var Sample1 = /** @class */ (function () {
    function Sample1(field) {
        this.field = field;
    }
    Sample1.prototype.method = function (args) {
    };
    return Sample1;
}());
console.log('==================================================');
/*
    접근제어자
    - public: 클래스 내부, 자식 클래스 내부, 모든 위치
    - protected: 클래스 내부, 자식 클래스
    - private: 클래스 내부
    - TypeScript는 패키지라는 개념이 없기 때문에 기본값은 public으로 지정
*/
var Sample2 = /** @class */ (function () {
    function Sample2() {
        this.publicFeild = publicField;
        this.protectedField = protectedField;
        this.privateField = privateField;
    }
    return Sample2;
}());
var sample2Instance = new Sample2();
sample2Instance.publicField;
// sample2Instance.protected;       error
// sample2Instance.privateField;        error
console.log('==================================================');
/*
    생성자 매개변수에 접근 제어자 지정
    - 생성자의 매개변수에 접근 제어자를 지저애서 필드 선언 가능
*/
var Sample3 = /** @class */ (function () {
    function Sample3(publicField, protectedField, priavteField) {
        this.publicField = publicField;
        this.protectedField = protectedField;
        this.priavteField = priavteField;
    }
    return Sample3;
}());
console.log('==================================================');
/*
    readonly :
    - readonly가 선언된 클래스 속성은 선언 시 또는 생성자 내부에서만 값을 할당할 수 있음
    - 값을 재할당할 수 없고 오직 읽기만 가능
    - 상수 선언에 사용
*/
var Smaple4 = /** @class */ (function () {
    function Smaple4(field, field3) {
        this.field3 = field3;
        this.field1 = '읽기전용 1';
        this.field2 = field2;
    }
    return Smaple4;
}());
console.log('==================================================');
/*
    추상 클래스 :
    -
*/
console.log('==================================================');
