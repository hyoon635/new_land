export interface people {
  generation: number;
  profile_img: string;
  name: string;
  family: string;
  family_eng: string;
  house_owner: boolean;
  abode: string;
  mother: string;
  mother_family: string;
  father: string;
  father_family: string;
  couple: string;
  couple_family: string;
  couple_color: string;
  couple_class: string;
  marriedLine: boolean;
  hasChild: boolean;
  change_class: string;
  death: string;
  divorce: string;
}

export const PEOPLELIST: people[] = [
  {
    generation: 0,
    profile_img: 'pink_0_aubrey',
    name: '오브리',
    family: '핑크',
    family_eng: 'pink',
    house_owner: true,
    abode: 'pink',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '트레버',
    couple_family: '골드',
    couple_color: 'gold',
    couple_class: '귀족',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'pink_0_ella',
    name: '엘라',
    family: '핑크',
    family_eng: 'pink',
    house_owner: false,
    abode: 'brown',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '차밍',
    couple_family: '브라운',
    couple_color: 'brown',
    couple_class: '귀족',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'pink_1_iris',
    name: '아이리스',
    family: '핑크',
    family_eng: 'pink',
    house_owner: true,
    abode: 'pink',
    mother: '오브리',
    mother_family: 'pink',
    father: '트레버',
    father_family: 'gold',
    couple: '비비안',
    couple_family: '블랙',
    couple_color: 'black',
    couple_class: '귀족',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'pink_1_victoria',
    name: '빅토리아',
    family: '핑크',
    family_eng: 'pink',
    house_owner: false,
    abode: 'silver',
    mother: '오브리',
    mother_family: 'pink',
    father: '트레버',
    father_family: 'gold',
    couple: '라파엘',
    couple_family: '실버',
    couple_color: 'silver',
    couple_class: '상인',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: '',
    name: '블레어',
    family: '핑크',
    family_eng: 'pink',
    house_owner: false,
    abode: 'pink',
    mother: '아이리스',
    mother_family: 'pink',
    father: '비비안',
    father_family: 'black',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'brown_0_chaming',
    name: '차밍',
    family: '브라운',
    family_eng: 'brown',
    house_owner: true,
    abode: 'brown',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '엘라',
    couple_family: '핑크',
    couple_color: 'pink',
    couple_class: '왕족',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'brown_0_george',
    name: '조지',
    family: '브라운',
    family_eng: 'brown',
    house_owner: false,
    abode: 'black',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '릴리안',
    couple_family: '블랙',
    couple_color: 'black',
    couple_class: '귀족',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'brown_1_ailee',
    name: '에일리',
    family: '브라운',
    family_eng: 'brown',
    house_owner: true,
    abode: 'brown',
    mother: '엘라',
    mother_family: 'pink',
    father: '차밍',
    father_family: 'brown',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'brown_1_pie',
    name: '파이',
    family: '브라운',
    family_eng: 'brown',
    house_owner: false,
    abode: 'brown',
    mother: '엘라',
    mother_family: 'pink',
    father: '차밍',
    father_family: 'brown',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'brown_1_kate',
    name: '케이트',
    family: '브라운',
    family_eng: 'brown',
    house_owner: false,
    abode: 'brown',
    mother: '엘라',
    mother_family: 'pink',
    father: '차밍',
    father_family: 'brown',
    couple: '케빈',
    couple_family: '골드',
    couple_color: 'gold',
    couple_class: '귀족',
    change_class: '',
    marriedLine: true,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'brown_1_richard',
    name: '리처드',
    family: '브라운',
    family_eng: 'brown',
    house_owner: false,
    abode: 'gold',
    mother: '엘라',
    mother_family: 'pink',
    father: '차밍',
    father_family: 'brown',
    couple: '자스민',
    couple_family: '골드',
    couple_color: 'gold',
    couple_class: '귀족',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '조슈아',
    family: '브라운',
    family_eng: 'brown',
    house_owner: false,
    abode: 'brown',
    mother: '에일리',
    mother_family: 'brown',
    father: '케빈',
    father_family: 'gold',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'gold_0_tiana',
    name: '티아나',
    family: '골드',
    family_eng: 'gold',
    house_owner: true,
    abode: 'gold',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '피터',
    couple_family: '블랙',
    couple_color: 'black',
    couple_class: '귀족',
    change_class: '거상 > (명예)귀족',
    marriedLine: true,
    hasChild: true,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'gold_0_trevor',
    name: '트레버',
    family: '골드',
    family_eng: 'gold',
    house_owner: false,
    abode: 'pink',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '오브리',
    couple_family: '핑크',
    couple_color: 'pink',
    couple_class: '왕족',
    change_class: '거상 > (명예)귀족',
    marriedLine: false,
    hasChild: false,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'gold_1_jasmine',
    name: '자스민',
    family: '골드',
    family_eng: 'gold',
    house_owner: true,
    abode: 'gold',
    mother: '티아나',
    mother_family: 'gold',
    father: '피터',
    father_family: 'black',
    couple: '리처드',
    couple_family: '브라운',
    couple_color: 'brown',
    couple_class: '귀족',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'gold_1_kevin',
    name: '케빈',
    family: '골드',
    family_eng: 'gold',
    house_owner: false,
    abode: 'brown',
    mother: '티아나',
    mother_family: 'gold',
    father: '피터',
    father_family: 'black',
    couple: '케이트',
    couple_family: '브라운',
    couple_color: 'brown',
    couple_class: '귀족',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '신시아',
    family: '골드',
    family_eng: 'gold',
    house_owner: true,
    abode: 'gold',
    mother: '자스민',
    mother_family: 'gold',
    father: '리처드',
    father_family: 'brown',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'black_0_lilian',
    name: '릴리안',
    family: '블랙',
    family_eng: 'black',
    house_owner: true,
    abode: 'black',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '조지',
    couple_family: '브라운',
    couple_color: 'brown',
    couple_class: '귀족',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'black_0_peter',
    name: '피터',
    family: '블랙',
    family_eng: 'black',
    house_owner: false,
    abode: 'gold',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '티아나',
    couple_family: '골드',
    couple_color: 'gold',
    couple_class: '거상 > (명예)귀족',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'black_1_vivian',
    name: '비비안',
    family: '블랙',
    family_eng: 'black',
    house_owner: true,
    abode: 'pink',
    mother: '릴리안',
    mother_family: 'black',
    father: '조지',
    father_family: 'brown',
    couple: '아이리스',
    couple_family: '핑크',
    couple_color: 'pink',
    couple_class: '왕족',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'black_2_ebony',
    name: '흑단',
    family: '블랙',
    family_eng: 'black',
    house_owner: true,
    abode: 'black',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '세야',
    couple_family: '블랙',
    couple_color: 'black',
    couple_class: '거상',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'black_2_seya',
    name: '세야',
    family: '블랙',
    family_eng: 'black',
    house_owner: false,
    abode: 'black',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '흑단',
    couple_family: '블랙',
    couple_color: 'black',
    couple_class: '거상',
    change_class: '',
    marriedLine: false,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: 'black_2_sandalwood',
    name: '백단',
    family: '블랙',
    family_eng: 'black',
    house_owner: false,
    abode: 'silver',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '달리아',
    couple_family: '실버',
    couple_color: 'silver',
    couple_class: '상인',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '제시',
    family: '블랙',
    family_eng: 'black',
    house_owner: false,
    abode: 'black',
    mother: '세야',
    mother_family: 'black',
    father: '백단',
    father_family: 'black',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'silver_0_kaylee',
    name: '케일리',
    family: '실버',
    family_eng: 'silver',
    house_owner: true,
    abode: 'silver',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '부',
    couple_family: '퍼플',
    couple_color: 'purple',
    couple_class: '농가',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'silver_0_kenny',
    name: '케니',
    family: '실버',
    family_eng: 'silver',
    house_owner: false,
    abode: 'green',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '헤나',
    couple_family: '그린',
    couple_color: 'green',
    couple_class: '빈민',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'silver_1_dahlia',
    name: '달리아',
    family: '퍼플',
    family_eng: 'silver',
    house_owner: true,
    abode: 'silver',
    mother: '케일리',
    mother_family: 'silver',
    father: '부',
    father_family: 'purple',
    couple: '백단',
    couple_family: '블랙',
    couple_color: 'black',
    couple_class: '거상',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'silver_1_raphael',
    name: '라파엘',
    family: '실버',
    family_eng: 'silver',
    house_owner: false,
    abode: 'silver',
    mother: '케일리',
    mother_family: 'silver',
    father: '부',
    father_family: 'purple',
    couple: '빅토리아',
    couple_family: '핑크',
    couple_color: 'pink',
    couple_class: '왕족',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '케니스',
    family: '실버',
    family_eng: 'silver',
    house_owner: false,
    abode: 'silver',
    mother: '빅토리아',
    mother_family: 'pink',
    father: '라파엘',
    father_family: 'silver',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'red_0_anne',
    name: '앤',
    family: '레드',
    family_eng: 'red',
    house_owner: true,
    abode: 'red',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '푸른',
    couple_family: '그린',
    couple_color: 'green',
    couple_class: '빈민',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'red_0_robert',
    name: '로버트',
    family: '레드',
    family_eng: 'red',
    house_owner: false,
    abode: 'purple',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '바이올렛',
    couple_family: '퍼플',
    couple_color: 'purple',
    couple_class: '농가',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'red_1_brooks',
    name: '브룩스',
    family: '레드',
    family_eng: 'red',
    house_owner: true,
    abode: 'red',
    mother: '앤',
    mother_family: 'red',
    father: '푸른',
    father_family: 'green',
    couple: '나디아',
    couple_family: '오렌지',
    couple_color: 'orange',
    couple_class: '농가',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'red_1_bread',
    name: '브레드',
    family: '레드',
    family_eng: 'red',
    house_owner: false,
    abode: 'red',
    mother: '앤',
    mother_family: 'red',
    father: '푸른',
    father_family: 'green',
    couple: '미아',
    couple_family: '오렌지',
    couple_color: 'orange',
    couple_class: '농가',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '애슈턴',
    family: '레드',
    family_eng: 'red',
    house_owner: false,
    abode: 'red',
    mother: '미아',
    mother_family: 'orange',
    father: '브레든',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'purple_0_violet',
    name: '바이올렛',
    family: '퍼플',
    family_eng: 'purple',
    house_owner: true,
    abode: 'purple',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '로버트',
    couple_family: '레드',
    couple_color: 'red',
    couple_class: '부농',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'purple_0_boo',
    name: '부',
    family: '퍼플',
    family_eng: 'purple',
    house_owner: false,
    abode: 'silver',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '케일리',
    couple_family: '실버',
    couple_color: 'silver',
    couple_class: '상인',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'purple_1_edan',
    name: '애단',
    family: '퍼플',
    family_eng: 'purple',
    house_owner: true,
    abode: 'purple',
    mother: '바이올렛',
    mother_family: 'purple',
    father: '로버트',
    father_family: 'red',
    couple: '만델리나',
    couple_family: '오렌지',
    couple_color: 'orange',
    couple_class: '농가',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'purple_1_renee',
    name: '르네',
    family: '퍼플',
    family_eng: 'purple',
    house_owner: false,
    abode: 'purple',
    mother: '바이올렛',
    mother_family: 'purple',
    father: '로버트',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '그린 모니카',
  },
  {
    generation: 1,
    profile_img: 'purple_1_eric',
    name: '에릭',
    family: '퍼플',
    family_eng: 'purple',
    house_owner: false,
    abode: 'purple',
    mother: '바이올렛',
    mother_family: 'purple',
    father: '로버트',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '제이드 ',
    family: '퍼플',
    family_eng: 'purple',
    house_owner: false,
    abode: 'purple',
    mother: '만델리나',
    mother_family: 'orange',
    father: '애단',
    father_family: 'purple',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'orange_0_novah',
    name: '노바',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: true,
    abode: 'orange',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '허수아비',
    couple_family: '오렌지',
    couple_color: 'orange',
    couple_class: '농가',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'orange_0_ scarecrow',
    name: '허수아비',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: false,
    abode: 'orange',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '노바',
    couple_family: '오렌지',
    couple_color: 'orange',
    couple_class: '농가',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'orange_0_mia',
    name: '미아',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: false,
    abode: 'red',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '브레드',
    couple_family: '레드',
    couple_color: 'red',
    couple_class: '부농',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'orange_0_nadia',
    name: '나디아',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: false,
    abode: 'red',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '브룩스',
    couple_family: '레드',
    couple_color: 'red',
    couple_class: '부농',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'orange_0_mandelina',
    name: '만델리나',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: false,
    abode: 'purple',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '애단',
    couple_family: '퍼플',
    couple_color: 'purple',
    couple_class: '농가',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: '',
    name: '다나',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: false,
    abode: 'orange',
    mother: '노바',
    mother_family: '오렌지',
    father: '허수아비',
    father_family: '오렌지',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'green_0_hena',
    name: '헤나',
    family: '그린',
    family_eng: 'green',
    house_owner: true,
    abode: 'green',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '케니',
    couple_family: '실버',
    couple_color: 'silver',
    couple_class: '상인',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '과열로인한 죽음',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'green_0_pulen',
    name: '푸른',
    family: '그린',
    family_eng: 'green',
    house_owner: false,
    abode: 'red',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '앤',
    couple_family: '레드',
    couple_color: 'red',
    couple_class: '부농',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'green_1_monica',
    name: '모니카',
    family: '그린',
    family_eng: 'green',
    house_owner: true,
    abode: 'green',
    mother: '헤나',
    mother_family: 'green',
    father: '케니',
    father_family: 'silver',
    couple: '매튜',
    couple_family: '블루',
    couple_color: 'blue',
    couple_class: '범죄',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '퍼플 르네',
  },
  {
    generation: 1,
    profile_img: 'green_1_peter',
    name: '피터',
    family: '그린',
    family_eng: 'green',
    house_owner: false,
    abode: 'blue',
    mother: '헤나',
    mother_family: 'green',
    father: '케니',
    father_family: 'silver',
    couple: '리나',
    couple_family: '블루',
    couple_color: 'blue',
    couple_class: '범죄',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'green_1_peace',
    name: '피스',
    family: '그린',
    family_eng: 'green',
    house_owner: false,
    abode: 'blue',
    mother: '헤나',
    mother_family: 'green',
    father: '조지',
    father_family: 'brown',
    couple: '케이틀린',
    couple_family: '블루',
    couple_color: 'blue',
    couple_class: '범죄',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '와이엇',
    family: '그린',
    family_eng: 'green',
    house_owner: false,
    abode: 'green',
    mother: '모니카',
    mother_family: 'green',
    father: '르네',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 0,
    profile_img: 'blue_0_sky',
    name: '스카이',
    family: '블루',
    family_eng: 'blue',
    house_owner: true,
    abode: 'blue',
    mother: '',
    mother_family: '',
    father: '',
    father_family: '',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: true,
    death: '노령으로 사망',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'blue_1_lina',
    name: '리나',
    family: '블루',
    family_eng: 'blue',
    house_owner: true,
    abode: 'blue',
    mother: '?',
    mother_family: '',
    father: '스카이',
    father_family: 'blue',
    couple: '피터',
    couple_family: '그린',
    couple_color: 'green',
    couple_class: '빈민',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'blue_1_matthew',
    name: '매튜',
    family: '블루',
    family_eng: 'blue',
    house_owner: false,
    abode: 'green',
    mother: '앤',
    mother_family: 'red',
    father: '스카이',
    father_family: 'blue',
    couple: '모니카',
    couple_family: '그린',
    couple_color: 'green',
    couple_class: '빈민',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: 'blue_1_caitlyn',
    name: '케이틀린',
    family: '블루',
    family_eng: 'blue',
    house_owner: false,
    abode: 'blue',
    mother: '바이올렛',
    mother_family: 'purple',
    father: '스카이',
    father_family: 'blue',
    couple: '피스',
    couple_family: '그린',
    couple_color: 'green',
    couple_class: '빈민',
    change_class: '',
    marriedLine: true,
    hasChild: true,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '리처드',
    family: '블루',
    family_eng: 'blue',
    house_owner: false,
    abode: 'blue',
    mother: '케이틀린',
    mother_family: 'blue',
    father: '피스',
    father_family: 'green',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '로건',
    family: '블루',
    family_eng: 'blue',
    house_owner: false,
    abode: 'blue',
    mother: '케이틀린',
    mother_family: 'blue',
    father: '피스',
    father_family: 'green',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '줄리안',
    family: '블랙',
    family_eng: 'black',
    house_owner: true,
    abode: 'black',
    mother: '세야',
    mother_family: 'black',
    father: '흑단   ',
    father_family: 'black',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '제니',
    family: '레드',
    family_eng: 'red',
    house_owner: false,
    abode: 'red',
    mother: '나디아',
    mother_family: 'orange',
    father: '브룩스   ',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '제레미',
    family: '퍼플',
    family_eng: 'purple',
    house_owner: false,
    abode: 'purple',
    mother: '만델리나',
    mother_family: 'orange',
    father: '애단   ',
    father_family: 'purple',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },

  {
    generation: 1,
    profile_img: '',
    name: '다니엘',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: false,
    abode: 'orange',
    mother: '노바',
    mother_family: '오렌지',
    father: '허수아비',
    father_family: '오렌지',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },

  {
    generation: 2,
    profile_img: '',
    name: '데릭',
    family: '그린',
    family_eng: 'green',
    house_owner: false,
    abode: 'green',
    mother: '모니카',
    mother_family: 'green',
    father: '매튜',
    father_family: 'blue',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },

  {
    generation: 1,
    profile_img: '',
    name: '바네사',
    family: '핑크',
    family_eng: 'pink',
    house_owner: false,
    abode: 'pink',
    mother: '아이리스',
    mother_family: 'pink',
    father: '비비안',
    father_family: 'black',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },

  {
    generation: 1,
    profile_img: '',
    name: '벤자민',
    family: '핑크',
    family_eng: 'pink',
    house_owner: false,
    abode: 'pink',
    mother: '아이리스',
    mother_family: 'pink',
    father: '비비안',
    father_family: 'black',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '일리아나',
    family: '브라운',
    family_eng: 'brown',
    house_owner: true,
    abode: 'brown',
    mother: '에일리',
    mother_family: 'brown',
    father: '케빈',
    father_family: 'gold',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '딜런',
    family: '실버',
    family_eng: 'silver',
    house_owner: false,
    abode: 'silver',
    mother: '달리아',
    mother_family: 'silver',
    father: '백단',
    father_family: 'black',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '헤이즐리',
    family: '실버',
    family_eng: 'silver',
    house_owner: false,
    abode: 'silver',
    mother: '달리아',
    mother_family: 'silver',
    father: '백단',
    father_family: 'black',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '피비',
    family: '레드',
    family_eng: 'red',
    house_owner: false,
    abode: 'red',
    mother: '나디아',
    mother_family: 'orange',
    father: '브룩스   ',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: '',
    name: '알레이나',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: true,
    abode: 'orange',
    mother: '노바',
    mother_family: '오렌지',
    father: '허수아비',
    father_family: '오렌지',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 1,
    profile_img: '',
    name: '카밀라',
    family: '오렌지',
    family_eng: 'orange',
    house_owner: false,
    abode: 'orange',
    mother: '노바',
    mother_family: '오렌지',
    father: '허수아비',
    father_family: '오렌지',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '벨린더',
    family: '그린',
    family_eng: 'green',
    house_owner: false,
    abode: 'green',
    mother: '모니카',
    mother_family: 'green',
    father: '르네',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '올리비아',
    family: '그린',
    family_eng: 'green',
    house_owner: true,
    abode: 'green',
    mother: '모니카',
    mother_family: 'green',
    father: '르네',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '다이어',
    family: '블루',
    family_eng: 'blue',
    house_owner: false,
    abode: 'blue',
    mother: '리나',
    mother_family: 'blue',
    father: '피터',
    father_family: 'green',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '아나베스',
    family: '블루',
    family_eng: 'blue',
    house_owner: false,
    abode: 'blue',
    mother: '리나',
    mother_family: 'blue',
    father: '피터',
    father_family: 'green',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '오거스트',
    family: '골드',
    family_eng: 'gold',
    house_owner: true,
    abode: 'gold',
    mother: '자스민',
    mother_family: 'gold',
    father: '리처드',
    father_family: 'brown',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
  {
    generation: 2,
    profile_img: '',
    name: '로만',
    family: '레드',
    family_eng: 'red',
    house_owner: true,
    abode: 'red',
    mother: '나디아',
    mother_family: 'orange',
    father: '브룩스   ',
    father_family: 'red',
    couple: '',
    couple_family: '',
    couple_color: '',
    couple_class: '',
    change_class: '',
    marriedLine: false,
    hasChild: false,
    death: '',
    divorce: '',
  },
];