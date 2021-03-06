# 메소드

## 메소드 인식

* 값 타입에 따라 오브젝트 생성
  * 오브젝트를 알아야 오브젝트에 속한 메소드 호출
  * 메소드 앞의 값 타입에 따라 오브젝트를 생성하고 오브젝트에 속한 메소드 호출
  * 문자열 타입 : String 오브젝트
  * 패턴 타입 : RegExp 오브젝트

## String과 RegExp

* 패턴 매치 매커니즘
  1. String 오브젝트에는 정규 표현식 기능이 없으므로 String 오브젝트에서 RegExp 인스턴스 생성
    * 패턴을 파라미터로 넘겨줌
  2. RegExp 인스턴스의 메소드를 호출
    * 매치 대상 문자열을 파라미터로 넘겨 줌
  3. RegExp 인스턴스에서 패턴 매치 결과를 반환
  4. String 인스턴스에서 반환된 값 정리
    * ex) replace() 이면 값 대체 처리
    * 반환할 형태(값, 배열, null등)를 처리

## match()

* 개요
  * 매치 대상에 패턴을 매치하고 매치 결과를 반환
  * 매치되지 않으면 null 반환
  * 파라미터 값이 문자열이면 문자열이 패턴

## search()

* 매치된 첫 문자의 인덱스 반환
* 다수가 매치되더라도 첫 번째 인덱스만 반환
* 매치되지 않으면 -1 반환
* 매치 대상에 문자열의 존재 여부를 체크할 때도 사용

* indexOf()와 차이
  * indexOf() : 시작 위치 조정 가능
  * search() : 다양한 패턴 사용 가능

## split()

* 개요
  * 매치 결과를 분리하여 배열로 반환
    * '12_34_56'.split(/_/);
  * 첫 번째 파라미터의 구분자로 매치 대상을 분리
  * 구분자는 반환하지 않음
  * 구분자 앞 또는 뒤에 문자열이 없으면 빈 엘리먼트 반환
  * 파라미터에 빈 문자열을 지정하면 매치 대상을 문자 단위로 분리

## replace()

* 개요
  * 매치된 문자열을 지정한 값으로 변경
    * '12_34_12'.replace('12', 77);
    * 두번쨰 파라미터에 문자열, 패턴, 함수등을 입력 가능

## test()

* 개요
  * 패턴 매치 대상을 매치하여 결과를 true/false로 반환

## exec()

* 개요
  * 매치가 되면 배열 엘리먼트 하나만 반환
  * 다수가 매치되더라도 엘리먼트 하나만 반환
