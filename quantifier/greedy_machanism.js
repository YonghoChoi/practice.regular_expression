/*
  1. 앞에서 부터 매치하면 .?가 모두 매치하므로 AB를 매치할 수 없어 매치가 실패된다.
  2. 패턴 전체가 매치되려면 반드시 AB가 매치되어야 한다.
    * 따라서 우선 AB를 매치하면 123이 남는다.
    * 그리고 .?를 사용하여 3을 매치
    * ?가 하나만 매치하므로 3만 매치하고 매치를 종료
*/
var result = '123ABCD'.match(/.?AB/);
js.log(result);