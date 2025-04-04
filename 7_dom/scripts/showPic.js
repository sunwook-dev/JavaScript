function showPic(obj){		//이벤트 핸들러 함수, obj는 클랙한 a태그를 가리킴
  const source  = obj.getAttribute("href");	//a태그의 href 속성값을 가져옴
  const placeholder = document.getElementById("placeholder");	//img 태그를 가져옴
  placeholder.setAttribute("src", source);
  //img 태그의 src 속성값을 변경함
  //src속성 값으로 source를 넣어주겠다

//이미지가 선택될때마다 Choose an image의 텍스트를 바꾸자
const text = obj.getAttribute("title");	//a태그의 title 속성값을 가져옴
const description = document.getElementById("description");	//p 태그를 가져옴
  description.innerHTML = text;	//p 태그의 내용을 변경함
  //description.insertAdjacentHTML("beforeend", text);	//p 태그의 내용을 변경함
}

function prepareGallery() {
  const imagegallery = document.getElementById("imagegallery");	//ul 태그를 가져옴
  const links = imagegallery.getElementsByTagName("a");	//ul 태그의 자식 a 태그를 가져옴
  
  for (let i = 0; i < links.length; i++) {	//for문을 돌면서
    links[i].addEventListener("click", function(e) {	//a 태그에 이벤트 리스너를 추가함				
      e.preventDefault();	//기본 동작을 막음, a 태그를 클릭했을때 페이지가 이동하는 것을 막음
      showPic(this);	//showPic(this)로 클릭한 a 태그를 넘겨줌
    }, false);	//false는 버블링을 의미함, true는 캡쳐링을 의미함				
  }
}

window.onload = prepareGallery;  //페이지가 로드되면 imageGallery 함수를 실행함