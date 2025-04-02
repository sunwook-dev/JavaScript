let replayService = (function () {
  function create() {
    console.log('create');
  }
  function update() {
    console.log('update');
  }
  function getList(parm, callback) {
    let data = '결과값: ' + parm;
    callback(data); //callback 이라는 파라미터에 data값을 넣는다.
  }

  return {  //객체
    create: create, //키값(속성값): 함수
    update: update,
    getList: getList
  }
})();

//replayService가 return 객체를 가지고 있으므로 객체의 속성값인 create를 가져올수 있다.
replayService.create();

function show() {
  replayService.getList('kosa', function (result) { 
    console.log('내가 원하는 형태의 출력: ' + result);
    //getList 함수 호출시 callback(data)는 아래를 실행함.
    //function (result) { 
    //console.log('내가 원하는 형태의 출력: ' + result);
  })
}
show();
