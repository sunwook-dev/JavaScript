//Array => map() : 배열의 각 요소를 제어(수정) 하고자 할떄
// let iveMember = ['유진', '원영', '가을', '레이', '리즈', '이서'];
// console.log(iveMember.map((x) => '아이브: ${x}'));

// 아이브는 한국 아이돌이고
// 아이브라는 이름의 걸그룹이다.
// 아이브는 여자 아이돌이다.
const iveMembers = [
  {
      name: '안유진',
      year: 2003,
  },
  {
      name: '가을',
      year: 2002,
  },
  {
      name: '레이',
      year: 2004,
  },
  {
      name: '장원영',
      year: 2004,
  },
  {
      name: '리즈',
      year: 2004,
  },
  {
      name: '이서',
      year: 2007,
  },
]

// BTS는 한국 아이돌이고
// 방탄소년단이라는 이름의 보이그룹이다.
// BTS는 남자 아이돌이다.
const btsMembers = [
  {
      name: '진',
      year: 1992,
  },
  {
      name: '슈가',
      year: 1993,
  },
  {
      name: '제이홉',
      year: 1994,
  },
  {
      name: 'RM',
      year: 1994,
  },
  {
      name: '지민',
      year: 1995,
  },
  {
      name: '뷔',
      year: 1995,
  },
  {
      name: '정국',
      year: 1997,
  },
]

class Country{
    name;
    idolGroups; //List

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

//여러명의 아이돌그룹이 idolGroups에들어감
class IdolGroup{
    name;
    members;  

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

//한명의 아이돌이 아이돌 그룹에 들어감
class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

//남자 아이돌
class MaleIdol extends Idol {
    sing() {
        return `${this.name}이 노래를 부릅니다.`;
    }
}

//여자 아이돌
class FemaleIdol extends Idol {
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

//map : 각요소별로 생성
//
const civeMembers = iveMembers.map((x) => new FemaleIdol(x['name'], x['year']));
// [] : 배열로 표현
const cbtsMembers = btsMembers.map((x) => new MaleIdol(x['name'], x['year']));

const btsGroup = new IdolGroup("BTS", cbtsMembers);
const iveGroup = new IdolGroup("IVE", civeMembers);

const korea = new Country('대한민국', [btsGroup, iveGroup]);

console.log(korea);