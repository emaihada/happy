import { VocabItem } from '../types';

export const CHAPTERS_WITHOUT_INSTRUMENTS = [
  { id: 'ch01', name: '용어의 구성', desc: '접두사·접미사·어근의 기본 구성' },
  { id: 'ch02', name: '두개골과 구강구조', desc: '두개골·구강·치아 구조와 명칭' }
];

export const VOCAB_DATA: VocabItem[] = [
  // === Chapter 03 : 진단편 기초용어 ===
  {
    id: 'ch03-01',
    eng: 'Dental mirror',
    pron: '데시 멀 미러 [déntl mírər]',
    kor: '치의경 (치경)',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '구강 내부를 반사하여 관찰하고 입술이나 뺨을 당기는 데 사용하는 거울 기구'
  },
  {
    id: 'ch03-02',
    eng: 'Pincette',
    pron: '핀셋 [pínsét]',
    kor: '핀셋',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '솜이나 거즈 등 작은 재료를 집거나 구강 안으로 옮겨 넣고 꺼내는 집게 모양 기구'
  },
  {
    id: 'ch03-03',
    eng: 'Explorer',
    pron: '익스플로러 [iksplɔ́ːrər]',
    kor: '탐침',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '끝이 뾰족한 기구로 치아 표면의 충치 결손부나 치석 유무, 수복물 경계부 등을 탐색하는 교감 기구'
  },
  {
    id: 'ch03-04',
    eng: 'Periodontal probe',
    pron: '페리오돈탈 프로브 [pèrioudɑ́ntl proub]',
    kor: '치주 탐침',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '치주낭 깊이를 측정할 수 있도록 눈금이 표시된 자 형태의 가는 막대형 기구'
  },
  {
    id: 'ch03-05',
    eng: 'Sphygmomanometer',
    pron: '스피그모마노미터 [sfìgmoumænɑ́mitər]',
    kor: '혈압계',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '환자의 혈압(수축기/이완기 혈압)을 측정하기 위한 진단 기기'
  },
  {
    id: 'ch03-06',
    eng: 'Stethoscope',
    pron: '스떼토스코프 [stéθəskòup]',
    kor: '청진기',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '심장음, 호흡음 등을 청취하여 신체 건강 상태를 확인하는 기구'
  },
  {
    id: 'ch03-07',
    eng: 'Thermometer',
    pron: '써모미터 [θərmɑ́mitər]',
    kor: '체온계',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '환자의 기초 체온을 측정하는 열 측정 장치'
  },
  {
    id: 'ch03-08',
    eng: 'Electric pulp tester',
    pron: '일렉트릭 펄프 테스터 [iléktsik pʌlp téstər]',
    kor: '전기치수검사기 (EPT)',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '치아 치수의 생활력(신경이 살아있는가 여부)을 전기 자극으로 간편하게 판단하는 진단 기기'
  },
  {
    id: 'ch03-09',
    eng: 'Dental unit chair',
    pron: '덴탈 유니트 체어 [déntl júːnit tʃɛər]',
    kor: '치과 유니트 체어',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '환자가 앉거나 눕는 의자 및 가래침 배출구, 기본 핸드피스 장치 등이 결합된 치과 종합 진료 장비'
  },
  {
    id: 'ch03-10',
    eng: 'Dental X-ray equipment',
    pron: '덴탈 엑스레이 이큅먼트 [déntl éksréi ikwípmənt]',
    kor: '치과 방사선 촬영 장비',
    chapterId: 'ch03',
    chapterName: '진단편 기초용어',
    description: '구강 내부 및 안면 영역의 골격 구조 등을 뢴트겐선으로 사진 촬영하는 기기'
  },

  // === Chapter 04 : 치료편 기초용어 ===
  {
    id: 'ch04-01',
    eng: 'Suction machine',
    pron: '석션 머신 [sʌ́kʃən məʃíːn]',
    kor: '흡입기',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '치료 중 구강 내 발생하는 습기, 물, 타액, 피 등을 고성능 진공 압축으로 빨아들이는 장비'
  },
  {
    id: 'ch04-02',
    eng: 'High volume evacuator',
    pron: '하이블륨 이배큐에이터 [hái vɑ́ljuːm ivǽkjuèitər]',
    kor: '대용량 흡입기 (HVE)',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '치과 진료 시 분사되는 미스트나 치아 삭제 부스러기 등을 신속히 대량 제거하는 강력 진공 장비'
  },
  {
    id: 'ch04-03',
    eng: 'Suction tip',
    pron: '석션 팁 [sʌ́kʃən tìp]',
    kor: '흡입기 팁',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '흡입 장치 연장호스 끝부분에 장착하여 환자 구안으로 투입되는 금속 혹은 일회용 빨대 통로 기구'
  },
  {
    id: 'ch04-04',
    eng: 'Saliva ejector',
    pron: '살리바 이제이터 [səláivə idʒéktər]',
    kor: '타액흡입기 (침흡입기)',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '가늘고 구부리기 쉬운 팁을 사용해 환자 구강 바닥 쪽의 침(타액)을 지속적으로 배출하는 기구'
  },
  {
    id: 'ch04-05',
    eng: 'Cotton roll',
    pron: '코튼 롤 [kɑ́tn ròul]',
    kor: '롤코튼 (솜롤)',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '치아 치료 부위에 타액이 흘러 들지 못하도록 막고 건조함을 유지하기 위해 뺨 안쪽에 삽입하는 원통형 압축 솜'
  },
  {
    id: 'ch04-06',
    eng: 'Autoclave',
    pron: '오토클레브 [ɔ́ːtouklèiv]',
    kor: '고압증기 멸균기',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '고온, 고압의 포화 수증기를 사용하여 치과 기구에 붙은 모든 미생물과 포자를 사멸시키는 멸균 장비'
  },
  {
    id: 'ch04-07',
    eng: 'Chemiclave',
    pron: '케미클레브 [kémiklèiv]',
    kor: '화학증기 멸균기',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '기구가 부식되거나 무뎌지는 현상을 최소화하도록 알코올 기반 특수 화학 약제를 가열 기화시키는 멸균 장비'
  },
  {
    id: 'ch04-08',
    eng: 'Ultraviolet disinfector',
    pron: '얼트라바이올렛 디스인펙터 [ʌ̀ltrəváiəlits dìsinféktər]',
    kor: '자외선 소독기',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '자외선(UV-C) 파장을 조사하여 보관 중인 치과 기구 표면의 미생물을 살균하는 소독 장치'
  },
  {
    id: 'ch04-09',
    eng: 'Sterilizing forceps',
    pron: '스테릴라이징 포셉 [stérilàiziŋ fɔ́ːrseps]',
    kor: '멸균 소독 집게 (소독 포셉)',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '소독 및 멸균된 치료 기구를 오염 없이 위생적으로 건져 올리거나 옮길 때 사용하는 길쭉한 보조용 집게'
  },
  {
    id: 'ch04-10',
    eng: 'Mask',
    pron: '마스크 [mǽsk]',
    kor: '경구 마스크',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '의료진이 호흡 기관으로 흡입하거나 배출하는 비말과 분진을 차단해 교차감염을 예방하는 안면 착용 보호구'
  },
  {
    id: 'ch04-11',
    eng: 'Glove',
    pron: '글러브 [glʌ́v]',
    kor: '의료용 장갑',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '라텍스나 니트릴 성분으로 만들어져 혈액, 타액 전염성 물질로부터 손을 차단하는 일회용 멸균/비멸균 장갑'
  },
  {
    id: 'ch04-12',
    eng: 'Goggle',
    pron: '고글 [gɑ́gl]',
    kor: '보안경 (보안 가리개)',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '진료 시 삭제 부스러기나 분사 물질, 혈액 및 약품이 눈에 들어가지 않도록 보호하는 특수 안경'
  },
  {
    id: 'ch04-13',
    eng: 'Face shield',
    pron: '페이스 쉴드 [féis ʃíːld]',
    kor: '안면 유해 차단대 (페이스 쉴드)',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '안면 전체를 투명한 플라스틱 막으로 막아 의료진의 얼굴을 비말과 비산 파편으로부터 위생 보호하는 장비'
  },
  {
    id: 'ch04-14',
    eng: 'Apron',
    pron: '에이프런 [éiprən]',
    kor: '에이프런 (앞치마)',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '진료용 의자에 앉은 환자의 옷을 타액, 혈액, 삭제 파편 등으로부터 오염 예방하고자 가슴에 씌우는 보호용 포'
  },
  {
    id: 'ch04-15',
    eng: 'Barrier film',
    pron: '배리어 필름 [bǽriər fìlm]',
    kor: '감염 차단막 (배리어 필름)',
    chapterId: 'ch04',
    chapterName: '치료편 기초용어',
    description: '자주 손이 닿는 콘트롤 판넬이나 라이트 손잡이 등에 투명 필름을 부착하여 교차 오염을 방지하는 감염 예방재'
  },

  // === Chapter 05 : 치과방사선학 ===
  {
    id: 'ch05-01',
    eng: 'X-ray machine',
    pron: '엑스레이 머신 [éksréi məʃíːn]',
    kor: '방사선 발생 장치 (X-ray 촬영기)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '뢴트겐선(뢴트겐 방사선)을 외부로 제어 방사하여 뼈와 치아의 투과 형상을 만드는 전기 장비'
  },
  {
    id: 'ch05-02',
    eng: 'Tube head',
    pron: '튜브 헤드 [tjúːb héd]',
    kor: '관두',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: 'X선관이 위치한 금속 하우징 실린더 챔버로 방사선이 방출되는 핵심 머리 장치'
  },
  {
    id: 'ch05-03',
    eng: 'Extension arm',
    pron: '익스텐션 암 [iksténʃən ɑ́ːrm]',
    kor: '연장 지지판 (연장 암)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '벽이나 장비 하우징에 연결되어, 튜브 헤드를 올바른 촬영 각도로 가변 고정하게 해주는 자바라식 관절 지지대'
  },
  {
    id: 'ch05-04',
    eng: 'Control panel',
    pron: '컨트롤 패널 [kəntróul pǽnl]',
    kor: '제어 장치판 (컨트롤 패널)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '노출 시간(초), 양극 전압(kVp), 관전류(mA) 등 방사선 강도를 정밀 세팅하는 전자식 패널 제어장치'
  },
  {
    id: 'ch05-05',
    eng: 'Position indication device',
    pron: '포지션 인디케이션 디바이스 [pəzíʃən ìndikéiʃən diváis]',
    kor: '조사통 (PID / 원추 조사통/원통)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '관두 끝에 부착되어 투사 전 방향을 정비 정렬하고 유해 산란선을 축소하는 원통 또는 직사각형 지시기구'
  },
  {
    id: 'ch05-06',
    eng: 'X-ray film',
    pron: '엑스레이 필름 [éksréi fìlm]',
    kor: '치과 방사선 필름 (X-ray 필름)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '방사선을 받아 감광되는 감광 유제층과 감광 지지대로 일루미네이션 영상을 기록하는 화학 필름'
  },
  {
    id: 'ch05-07',
    eng: 'Film cassette',
    pron: '필름 카세트 [fìlm kəsét]',
    kor: '필름 카세트 (카세트박스)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '구강 외 파노라마 및 세팔로 촬영 시 외광을 엄격 차단하고 필름과 증감지를 밀착 보관하는 평형 하드용기'
  },
  {
    id: 'ch05-08',
    eng: 'Intensifying screen',
    pron: '인텐시파이잉 스크린 [inténsəfàiiŋ skríːn]',
    kor: '증감지 (감광 증가 스크린)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '엑스선을 가시광선으로 전환시켜 적은 방사선량에도 필름 인상이 잘 나오도록 피폭을 줄여주는 형광제 코팅지'
  },
  {
    id: 'ch05-09',
    eng: 'Mini dark room',
    pron: '미니 다크 룸 [míni dɑ́ːrk rùːm]',
    kor: '소형 탈상 암실 (간이 암실)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '대형 암실이 없는 진소규모 클리닉에서 필름의 빛 오염 없이 현상·정착액 처리를 편리하게 조작하는 상자형 소형 차광장치'
  },
  {
    id: 'ch05-10',
    eng: 'Developer',
    pron: '디벨로퍼 [divéləpər]',
    kor: '현상액',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '감광된 은 할로겐 화합물을 환원 은 결정체(검은색)로 전환시키는 화학 현상 화학 처리제'
  },
  {
    id: 'ch05-11',
    eng: 'Fixer',
    pron: '픽서 [fíksər]',
    kor: '정착액',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '감광되지 않고 남아있는 은 화합물을 씻어내어 영구 고정함으로써 사진 무늬가 빛에 날아가지 않게 보존하는 정착 화학 보조제'
  },
  {
    id: 'ch05-12',
    eng: 'Automatic developer',
    pron: '오토매틱 디벨로퍼 [ɔ̀ːtəmǽtik divéləpər]',
    kor: '자동 현상기',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '촬영 완료된 필름을 꽂으면 수초간 자동으로 현상, 세척, 정착, 건조 과정을 기계 유닛 안에서 기계 조작 완료하는 장치'
  },
  {
    id: 'ch05-13',
    eng: 'Film hanger',
    pron: '필름 행어 [fìlm hǽŋər]',
    kor: '필름 건조 집걸이 (현상용 필름 행어)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '수동 현상 시 여러 개의 작은 인트라오랄 필름을 고정해 현상 탱크 액에 동시에 넣었다 건조하게 거치하는 클립식 행어 집게'
  },
  {
    id: 'ch05-14',
    eng: 'Viewbox',
    pron: '뷰박스 [vjúːbɑ̀ks]',
    kor: '필름 판독용 조명판 (관찰상 판독등)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '현상된 투명 방사선 필름 사진을 배후 전광판의 유광 흰 우유색 발광배경으로 명료하게 해상도 판독하는 등상 기구'
  },
  {
    id: 'ch05-15',
    eng: 'Film mounter',
    pron: '필름 마운터 [fìlm máuntər]',
    kor: '필름 편철 틀 (마운팅 가이드 보조관)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '수십 장씩 나오는 작은 치아 필름들을 좌/우 구화상 해부학적 배열에 맞춰 끼워 보관하는 플라스틱 포켓 거치 슬롯'
  },
  {
    id: 'ch05-16',
    eng: 'Digital radiographic sensor',
    pron: '디지털 래디오그래픽 센서 [dídʒitl rèidiougrǽfik sénsər]',
    kor: '구강 내 디지털 이미지 시디 센서 (전자 감열판)',
    chapterId: 'ch05',
    chapterName: '치과방사선학',
    description: '필름 대신 엑스선을 감지하는 전자식 센서로 컴퓨터 화면에 즉각적으로 구강 엑스선 사진을 송신하는 최첨단 감광 센서'
  },

  // === Chapter 06 : 치과보존학 ===
  {
    id: 'ch06-01',
    eng: 'Rubber dam',
    pron: '러버 댐 [rʌ́bər dǽm]',
    kor: '러버댐 (방습 고무막)',
    chapterId: 'ch06',
    chapterName: '치과보존학',
    description: '치료할 치아만 고무판 밖으로 노출시키고 입안 전체를 덮어 비말 오염과 부식 약제의 식도 흡입을 막는 직사각형 고무 시트장치'
  },
  {
    id: 'ch06-02',
    eng: 'Matrix',
    pron: '매트릭스 [méitriks]',
    kor: '격벽 (인접면 성형 격벽)',
    chapterId: 'ch06',
    chapterName: '치과보존학',
    description: '치아 측벽이 썩어 충전 시 인접면 경계벽 형태를 지탱하기 위해 임시로 두르는 금속판 또는 플라스틱 밴드 성형 보조재'
  },
  {
    id: 'ch06-03',
    eng: 'Pin',
    pron: '핀 [pín]',
    kor: '핀 (보조용 고정 핀/치관 보강용)',
    chapterId: 'ch06',
    chapterName: '치과보존학',
    description: '머리 치관 조직이 심하게 파손되었을 때 레진 충전물의 탈락 방지 보강 지지기반을 세우고자 상아질 벽에 조여 박는 아주 미세한 유해 지지 핀'
  },
  {
    id: 'ch06-04',
    eng: 'Post',
    pron: '포스트 [póust]',
    kor: '포스트 (지주 기둥/근관 고정 기둥)',
    chapterId: 'ch06',
    chapterName: '치과보존학',
    description: '신경치료 후 빈 근관 통로에 든든하게 박아 넣어 상부 크라운 수복 보철 축을 유지하는 금속 또는 섬유유리 지름 기둥'
  },

  // === Chapter 07 : 치과보철학 ===
  {
    id: 'ch07-01',
    eng: 'Alginate mixer',
    pron: '알지네이트 믹서 [ǽldʒinèit míksər]',
    kor: '알지네이트 혼합 기계 (인상제 자동 진탕기)',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '인상제 분말과 물을 공기 기포의 유입 없이 조밀하고 신속 매끄럽게 교반 혼합해 주는 원심 자전기'
  },
  {
    id: 'ch07-02',
    eng: 'Spatula',
    pron: '스패출러 [spǽtʃulə]',
    kor: '스패출러 (치과용 가르고 조작하는 나이프/칼)',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '고무 사발에 인상제나 석고 가루를 밀착 반죽하거나 평평하게 다듬기 위해 널찍한 탄력성 날을 갖춘 막대형 반죽 도구'
  },
  {
    id: 'ch07-03',
    eng: 'Rubber bowl',
    pron: '러버 보울 [rʌ́bər bóul]',
    kor: '고무 그릇 (러버 보울/진탕 사발)',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '말랑한 탄성이 있어 스패출러를 대고 짓이기며 반죽할 수 있도록 특수 제조된 두꺼운 반구형 고무 사발'
  },
  {
    id: 'ch07-04',
    eng: 'Vibrator',
    pron: '바이브레이터 [váibreitər]',
    kor: '석고 모형 진동 기계',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '반죽된 석고를 인상 음형에 조밀하게 부을 때, 잔여 거품(기포)을 내보내고 조밀하게 침전되도록 진동을 가하는 하측 진동장비'
  },
  {
    id: 'ch07-05',
    eng: 'Stock tray',
    pron: '스탁 트레이 [stɑ́k tréi]',
    kor: '기성 인상 받침 판 (기성 본뜨기 트레이)',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '인상재를 가득 담아 구강 안에 장입할 수 있도록 구강 아치 크기별로 규격 생산된 금속 및 플라스틱 말발굽 접시틀'
  },
  {
    id: 'ch07-06',
    eng: 'Individual tray',
    pron: '인디비듀얼 트레이 [ìndivídʒuəl tréi]',
    kor: '개별 맞춤 틀 (개인 맞춤 인상 트레이)',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '정밀 보철을 위해 예비 석고 모형을 근간 삼아 자가 광중합 레진으로 오직 환자 구강 곡률에 똑같이 맞춤 성형한 개인 전용 트레이'
  },
  {
    id: 'ch07-07',
    eng: 'Articulator',
    pron: '아틱큘레이터 [ɑːrtíkjulèitər]',
    kor: '교합 측정 분석기 (교합기)',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '구강 외 보철물 제작 시, 환자의 상하악 턱뼈 이동 기전과 고경 교합 접촉 상태를 정밀 재현하는 가상 관절 장비'
  },
  {
    id: 'ch07-08',
    eng: 'Wax spatula',
    pron: '왁스 스패출러 [wǽks spǽtʃulə]',
    kor: '납 조각 미세 고정 칼 (왁스 스패출러)',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '왁스를 알코올 램프로 부드럽게 가열 녹이거나 모형 조각 면을 미세하게 연출 다듬는 장치 조각 나이프'
  },
  {
    id: 'ch07-09',
    eng: 'Polishing bur',
    pron: '폴리싱 버 [pɑ́liʃiŋ bə́ːr]',
    kor: '보철물 미장 연마용 버',
    chapterId: 'ch07',
    chapterName: '치과보철학',
    description: '보철이나 레진 치면 표면에 광택을 주거나 거친 돌출 부스러기를 맨질하게 매만져 주는 연사 연마 기구'
  },

  // === Chapter 08 : 치주학 ===
  {
    id: 'ch08-01',
    eng: 'Sickle scaler',
    pron: '식클 스케일러 [síkl skéilər]',
    kor: '낫 모양 치석 갈퀴 (식클 스케일러)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '단면이 삼각형이며 낫모양으로 굽은 두 날로 눈에 보이는 치은연상의 유해 딱딱한 치석을 낚아채 정밀 파지 파쇄하는 칼갈이 기구'
  },
  {
    id: 'ch08-02',
    eng: 'Universal curette',
    pron: '유니버셜 큐렛 [jùːnəvə́ːrsl kjuːrét]',
    kor: '전 전천후 치주 소반 칼 (유니버셜 큐렛)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '기구 날 끝이 둥글고 양면 다 예리하게 칼 가공되어 치은 하방 뿌리 주변 치석을 상처 없이 모든 영역에 전천후 치료 제거할 수 있는 큐렛식 정밀 기구'
  },
  {
    id: 'ch08-03',
    eng: 'Area-specific curette',
    pron: '에이리어 스페시픽 큐렛 [ɛ́əriə spəsífik kjuːrét]',
    kor: '부위별 전용 치주 긁어냄 큐렛 (그레이시 큐렛)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '인접 굴곡 부위마다 각도가 고정되어 오직 특정 전후 구치 인접 치면을 전용으로 긁어 청소하기 위한 외날 특화형 큐렛'
  },
  {
    id: 'ch08-04',
    eng: 'Periodontal file',
    pron: '페리오돈탈 파일 [pèrioudɑ́ntl fàil]',
    kor: '치주 밀착 연질 다듬개 (치주 줄)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '미세 톱날이나 주름 주름 깎이 결이 나있어 아주 거친 치석 덩어리를 으깨거나 수술 중 연골 모서리를 둥글게 밀어 줄질 하는 바 형태 기구'
  },
  {
    id: 'ch08-05',
    eng: 'Hoe scaler',
    pron: '호 스케일러 [hóu skéilər]',
    kor: '괭이 모양 스케일러',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '괭이 형상 90도로 꺾인 넓은 날을 이용해 치근 표면의 도드라진 넓은 치석 편을 당겨서 떨어뜨리는 기구'
  },
  {
    id: 'ch08-06',
    eng: 'Chisel scaler',
    pron: '치즐 스케일러 [tʃízl skéilər]',
    kor: '끌 모양 스케일러',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '끌처럼 날이 일직선 형태를 이루고 있어 하악 전치부 인접면 사이에 끼여 막대 밀고 가며 쐐기형 치석을 탈락시키는 전방 압축형 기구'
  },
  {
    id: 'ch08-07',
    eng: 'Ultrasonic scaler',
    pron: '얼트라소닉 스케일러 [ʌ̀ltrəsɑ́nik skéilər]',
    kor: '초음파 미세 가동 스케일러 (초음파 스케일러)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '1초에 미세 수만 번 진동하는 고전 고주파 에너지를 금속 팁에 싣고 주위에 수막 분사를 일으켜 통증 유해 치석을 즉각 파쇄 가공해 물 세척하는 첨단 장비기구'
  },
  {
    id: 'ch08-08',
    eng: 'Pocket marker',
    pron: '포켓 마커 [pɑ́kit mɑ́ːrkər]',
    kor: '치주낭 표시 집게핀 (포켓 마커)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '치은절제술 시, 치주 pocket 깊이에 맞춰 외측 잇몸 면에 미세 콕 찔러 출혈 천공점을 유발하고 수술 가이드 라인을 잡아주는 지침 핀겸자'
  },
  {
    id: 'ch08-09',
    eng: 'Interdental knife',
    pron: '인터덴탈 나이프 [ìntərdéntl nàif]',
    kor: '치간 치주수술용 단도 칼 (치간 나이프)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '치아 사이 볼록한 치간유두나 좁고 깊은 인접 잇몸 연조직을 틈새 침투적으로 정밀 조각 절개하는 창끝형 특수 치주 칼'
  },
  {
    id: 'ch08-10',
    eng: 'Kirkland knife',
    pron: '써클랜드 나이프 [kə́ːrklənd nàif]',
    kor: '잇몸 절개 수술 전용 칼 (커클랜드 치주도)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '조개껍데기 같은 타원형 날이 측벽을 향해 있어 잇몸을 넓고 시원하게 반월형 절개하여 박리 보조하는 외과 치주 나이프'
  },
  {
    id: 'ch08-11',
    eng: 'Surgical blade',
    pron: '서지컬 블레이드 [sə́ːrdʒikl bléid]',
    kor: '외과용 미세 메스날 (수술칼날)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '보통 일회용으로 쓰이며 메스 대 끝에 완전 기밀 장착되어 정밀 조직 각도 절개와 시스 절단을 행하는 극도로 예리한 소인용 칼날'
  },
  {
    id: 'ch08-12',
    eng: 'Blade holder',
    pron: '블레이드 홀더 [bléid hóuldər]',
    kor: '메스 대 (수술칼 자루)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '외과 메스날을 안전하게 슬롯 밀어부쳐 타이트하게 고정하는 금속 펜형 자루 그립기구'
  },
  {
    id: 'ch08-13',
    eng: 'Periosteal elevator',
    pron: '페리오스티얼 엘리베이터 [pèriɑ́stiəl élivertər]',
    kor: '골막 박리 박리자 (골막 엘리베이터)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '잇몸 및 치조골을 감싸는 단단한 질긴 뼈의 껍질(골막) 속을 미끄러지듯 침투해 들춰 올리고 안전 분리하는 납작형 거상 보조기구'
  },
  {
    id: 'ch08-14',
    eng: 'Bone chisel',
    pron: '본 치즐 [bóun tʃízl]',
    kor: '골 정밀 외과 수술용 끌',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '망치 타격을 수수 받아 조밀한 손상 치조골 가장자리나 방해물 뼈 턱을 평평하게 대고 쪼아 깎는 일자날 끌 보석기구'
  },
  {
    id: 'ch08-15',
    eng: 'Surgical scissors',
    pron: '서지컬 시저스 [sə́ːrdʒikl sízərz]',
    kor: '외과용 소독 가위',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '예리하게 살 조직을 찢어짐 없이 도려 자르거나 봉합 실을 치간에 침투 유치 제거하기 위한 위생 미세 시저스'
  },
  {
    id: 'ch08-16',
    eng: 'Nippers',
    pron: '니퍼 [nípərz]',
    kor: '조직 깎기용 집게 (조직 니퍼)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '괴사되어 탈락된 잇몸 죽은 조각이나 구강 내로 뻗쳐 덜렁이는 불용 연조직을 똑똑 정밀 가동절식으로 찝어 내는 플라이어 칼집게'
  },
  {
    id: 'ch08-17',
    eng: 'Hemostat',
    pron: '헤모스탯 [híːmoustæ̀t]',
    kor: '혈관 지혈 보조 집 겸자 (지혈 포셉)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '가동 시 자체 안쪽에 나비 걸쇠 잠금핀이 달려있어 분출 혈관 점을 강하게 물리거나 수술용 소모품을 틀어잡는 잠금형 집겸자'
  },
  {
    id: 'ch08-18',
    eng: 'Suture needle',
    pron: '슈처 니들 [sjúːtʃər níːdl]',
    kor: '봉합침 (반원형 바늘)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '좁은 잇몸 플랩의 봉합 작업을 위해 활 모양 반원형 또는 원호로 곡선 성형된 의료용 수술바늘'
  },
  {
    id: 'ch08-19',
    eng: 'Needle holder',
    pron: '니들 홀더 [níːdl hóuldər]',
    kor: '바늘 고정 홀더 겸자 (지침기)',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '둥근 봉합 바늘이 시술 시 미끄러져 겉돌지 않도록 기구 부리 안쪽에 미세 다이아몬드 돌출형 파지 턱과 잠금 장치를 지닌 위생 겸자'
  },
  {
    id: 'ch08-20',
    eng: 'Dean scissors',
    pron: '딘 시저스 [díːn sízərz]',
    kor: '딘 소독 외과 가위',
    chapterId: 'ch08',
    chapterName: '치주학',
    description: '가위 부리가 S자로 미세 우아하게 꺾여 있어 환자 구안 가장 깊숙한 어금니 후벽의 봉합사나 극세 기구를 장애 없이 다듬 가위질하는 가위'
  },

  // === Chapter 09 : 소아치과학 ===
  {
    id: 'ch09-01',
    eng: 'Fluoride tray',
    pron: '플로라이드 트레이 [flúːəràid tréi]',
    kor: '불소 겔 안치 받침 판 (불소 트레이)',
    chapterId: 'ch09',
    chapterName: '소아치과학',
    description: '어린이 예방을 보조하고자 점성 불소 겔을 가득 채워 위아래 잇몸 아치에 꾹 눌러 교합 접촉시키는 스펀지/비닐 트레이'
  },
  {
    id: 'ch09-02',
    eng: 'Mouth prop',
    pron: '마우스 프롭 [máuθ prɑ́p]',
    kor: '개구기 (입 벌림 지지대)',
    chapterId: 'ch09',
    chapterName: '소아치과학',
    description: '소아 환자가 치료 중 반사적으로 입을 닫아 치료부가 다치지 않게 어금니 사이에 물려 개구 상태를 고정 유지해 주는 두꺼운 러버 가위쐐기'
  },
  {
    id: 'ch09-03',
    eng: 'Angle wider',
    pron: '앵글 와이더 [ǽŋgl wáidər]',
    kor: '입술/볼 한방 거상 견인기 (와이더)',
    chapterId: 'ch09',
    chapterName: '소아치과학',
    description: '볼 장막과 질긴 입술 모서리를 외측 좌우로 완전 견인 노출해 소아 구치 진료 핸드피스 조작 시 치료 시야를 크게 해주는 장치'
  },
  {
    id: 'ch09-04',
    eng: 'Crown scissors',
    pron: '크라운 시저스 [kráun sízərz]',
    kor: '금관 수술용 정밀 극세 가위',
    chapterId: 'ch09',
    chapterName: '소아치과학',
    description: '기성 스테인리스 스틸 기성 크라운 하단을 소아 유치 치은 높이에 맞게 미세 재단해 깎아 자르는 휘어진 미세 가위'
  },
  {
    id: 'ch09-05',
    eng: 'Contouring pliers',
    pron: '콘투어링 플라이어 [kɑ́ntuəriŋ pláiərz]',
    kor: '기성 크라운 외형 보조 성형 겸자',
    chapterId: 'ch09',
    chapterName: '소아치과학',
    description: '기성 크롬 크라운 마진을 소아 치경부 곡률 형상에 딱 어우러지도록 구부리고 오므려 주는 볼 볼 둥근 플라이어'
  },
  {
    id: 'ch09-06',
    eng: 'Papoose board',
    pron: '파푸스 보드 [pæpúːs bɔ́ːrd]',
    kor: '신체 운동 제한 보호판 (소아용 파푸스 보드)',
    chapterId: 'ch09',
    chapterName: '소아치과학',
    description: '공포심에 몸부림쳐 날카로운 진료 도구에 찔릴 우려가 있는 심각하게 불협조형 소아 환자를 안전 벨크로 천판에 눕혀 일시적 억제 고정 장치'
  },

  // === Chapter 10 : 구강악안면외과학 ===
  {
    id: 'ch10-01',
    eng: 'Elevator',
    pron: '엘리베이터 [élivertər]',
    kor: '치아 발거 기 지렛대 (기자)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '발치 감 겸자를 대기 전, 지렛대 물리 원리를 활용해 치조골 구멍과 치아 뿌리 틈을 비집어 들어가 치아를 탈구 지상 요동시키는 쐐기형 기구'
  },
  {
    id: 'ch10-02',
    eng: 'Extraction forcep',
    pron: '익스트랙션 포셉 [ikstrǽkʃən fɔ́ːrseps]',
    kor: '발치용 겸자 (발치 포셉)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '탈구 추진된 이 크라운 부분을 미끄럼 없이 타이트 틀어잡고 회전, 좌우 요동시켜 치조 소와 외강 밖으로 온전하게 뽑아내는 겸자'
  },
  {
    id: 'ch10-03',
    eng: 'Root tip picker',
    pron: '루트 팁 피커 [rúːt tìp píkər]',
    kor: '부러진 치근 침투 집 거상자 (치근첨 피커)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '발치 도중 잇몸 깊은 뼈 속에 부러져 박힌 미세한 극세 치근단(뿌리 끝 조각)을 틈으로 찔러 건져 올리는 침형 기구'
  },
  {
    id: 'ch10-04',
    eng: 'Apexo elevator',
    pron: '아펙소 엘리베이터 [éipeksou élivertər]',
    kor: '치근 부분 쐐기 발거 기자 (아펙소 기자)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '부러진 뿌리(치근)를 굴곡 각도 쐐기면을 이용해 단단히 지레 걸어 파지해 들어 올리도록 특화된 각진 외과용 거상 기자'
  },
  {
    id: 'ch10-05',
    eng: 'Tissue forcep',
    pron: '티슈 포셉 [tíʃuː fɔ́ːrsəps]',
    kor: '외과용 구강 조직 집게 핀',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '절개된 판막이나 미끄럽고 얇은 유리 치은 살껍질 조각을 봉합 시 단단하고 섬세하게 붙잡아 정렬해 주는 핀셋식 의료 포셉'
  },
  {
    id: 'ch10-06',
    eng: 'Surgical mallet',
    pron: '서지컬 말렛 [sə́ːrdʒikl mǽlit]',
    kor: '수술용 메치 (외과용 망치)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '치조골 끌(Chisel)의 끝을 때려 뼈를 원활히 조각 박쇄 절단할 수 있도록 유해 금속이나 테프론 수지로 정방 가공된 소형 수조 망치'
  },
  {
    id: 'ch10-07',
    eng: 'Bone file',
    pron: '본 파일 [bóun fàil]',
    kor: '잔골 모서리 다듬 장파일 (뼈 다듬는 줄)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '발치한 뒤 구멍 가장자리에 도드라진 칼날처럼 날카로운 지조골 융기 결을 줄질하여 잇몸이 아물 때 배기지 말라고 둥글 문질 다듬는 기구'
  },
  {
    id: 'ch10-08',
    eng: 'Bone rongeur',
    pron: '본 론저 [bóun rɑndʒúːr]',
    kor: '돌출 치조골 절단 집게 (골 론저)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '기구 앞 코가 미세한 국자 같은 둥근 칼날 바가 달린 우두겸자 형태로 잔조 뾰족 솟은 불용 자갈 뼈 덩어리를 찝어 즉시 절개 이 잘라내는 집게겸자'
  },
  {
    id: 'ch10-09',
    eng: 'Surgical curette',
    pron: '서지컬 큐렛 [sə́ːrdʒikl kjuːrét]',
    kor: '염증성 육아조직 암스푼 핥개 (외과 큐렛)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '발치 완료된 골 홀(소와) 바닥에 둥게 웅크려 든 유해 염증 주머니나 병소 고름 육아 조직을 남김없이 긁어 퍼내는 미세 수푼형 외과기구'
  },
  {
    id: 'ch10-10',
    eng: 'Arch bar',
    pron: '아치 바 [ɑ́ːrtʃ bɑ́ːr]',
    kor: '턱뼈 골절 악간 고정용 철교 철사대 (아치 바)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '턱뼈 고정이나 안면 골절 수술을 대비해 치열 외측면에 길게 대어 각 치아와 철선으로 결착해 악골을 한데 꽁꽁 고정하는 후크 철선 대'
  },
  {
    id: 'ch10-11',
    eng: 'Surgical stent',
    pron: '서지컬 스텐트 [sə́ːrdʒikl stént]',
    kor: '수술 가이드 조준 스텐트 장치',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '임플란트 수술 전 컴퓨터 조각으로 뼈 구조 유도 융기를 정성껏 조준하여 정확한 깊이와 천공 위치를 표시해 주는 수술용 유도 장판'
  },
  {
    id: 'ch10-12',
    eng: 'Implant surgery kit',
    pron: '임플란트 서저리 키트 [í m- plænt sə́ːrdʒəri kìt]',
    kor: '임플란트 시술 기구 종합세트 (수술 드라이버 키트)',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '상아뼈에 나사산을 조여 박기 위한 속도 가변용 미세 기공 드릴, 깊이 측정 게이지, 전용 토크 조절 드라이버를 담은 전용 철갑 세트'
  },
  {
    id: 'ch10-13',
    eng: 'Surgical engine',
    pron: '서지컬 엔진 [sə́ːrdʒikl éndʒin]',
    kor: '안면 수술 겸용 저속 고토크 엔진',
    chapterId: 'ch10',
    chapterName: '구강악안면외과학',
    description: '임플란트나 안악 외과 수술 시 단단한 치조골을 뚫거나 가공할 때 열 마찰 괴사를 예방하려 저연속 다량 생리식수 분사장전 모터 엔진'
  },

  // === Chapter 11 : 치과교정학 ===
  {
    id: 'ch11-01',
    eng: 'Band',
    pron: '밴드 [bǽnd]',
    kor: '치관 결속 유지 금속 고리 (밴드)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '교정 장치의 단단한 지지기반을 세워주고자 큰 어금니(대구치) 몸통을 한 바퀴 빙 둘러싸 시멘트 고정하는 스테인리스 금속 링반지'
  },
  {
    id: 'ch11-02',
    eng: 'Band contouring pliers',
    pron: '밴드 콘투어링 플라이어 [bǽnd kɑ́ntuəriŋ pláiərz]',
    kor: '밴드 형태 수정용 압축 집게',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '둥근 밴드 반지가 치아 경부가 함몰 형성된 곡선과 결합할 수 있도록 마진(경계)을 오목하게 찝어 우벼주는 교정 플라이어'
  },
  {
    id: 'ch11-03',
    eng: 'Band pusher',
    pron: '밴드 푸셔 [bǽnd pʊ́ʃər]',
    kor: '밴드 밀어넣개 (밴드 밀대)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '밴드 가락지를 어금니 치부 틈 속 하방으로 단단히 수수 밀쳐 하강시키기 위해 미끄럼 방지 홈이 진 밀대형 막대 기구'
  },
  {
    id: 'ch11-04',
    eng: 'Band seater',
    pron: '밴드 시터 [bǽnd síːtər]',
    kor: '밴드 안착기 (바이트 시터)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '삼각형 블록이 달려있어 환자가 마주 씹어주는 자가 저작 근 에너지 압으로 밴드를 상하악 치관 경부선에 정확히 끝까지 수장시키는 기구'
  },
  {
    id: 'ch11-05',
    eng: 'Band removing pliers',
    pron: '밴드 리무빙 플라이어 [bǽnd rimúːviŋ pláiərz]',
    kor: '밴드 제거용 전용 집게플라이어',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '기구 한쪽 주둥이 끝은 치아 씹는 면을 지탱 지지하고, 다른 뾰족 외날 끝은 밴드 아랫단을 들어 올려 비틀어 뽑는 가압식 탈거 포셉'
  },
  {
    id: 'ch11-06',
    eng: 'Bracket',
    pron: '브래킷 [brǽkit]',
    kor: '교정용 홈 유지 미세 단추 (브라켓)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '아치 와이어가 삽입 유치될 수 있도록 슬롯 홈을 지닌 치아 표면마다 영구 접착되는 미세 단추 장치'
  },
  {
    id: 'ch11-07',
    eng: 'Bracket positioning gauge',
    pron: '브래킷 포지셔닝 게이지 [brǽkit pəzíʃəniŋ géidʒ]',
    kor: '브라켓 접착 정밀 높이 측정 자 계측기',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '치아 씹는 절단연으로부터 브라켓 와이어 슬롯까지의 간격(mm)을 한 치 오차 없게 정방 측정해 주는 십자 게이지 측정기구'
  },
  {
    id: 'ch11-08',
    eng: 'Bracket tweezer',
    pron: '브래킷 트위저 [brǽkit twíːzər]',
    kor: '브라켓 전용 운반 파지 핀셋',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '부리를 떼면 저절로 오목하게 맞물러 브라켓을 꽉 움켜쥐며 접착 시 미세 배열 조정이 편하도록 특수 성형된 리버스 조작형 핀셋'
  },
  {
    id: 'ch11-09',
    eng: 'Arch wire',
    pron: '아치 와이어 [ɑ́ːrtʃ wáiər]',
    kor: '호선 (교정용 주 활줄 철선)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '브라켓 홈들을 일렬 관통 관절해, 형상 기억 합금 복원 물리력이나 강철 탄력성으로 치아 이동 힘을 고르게 분사하는 주 교정용 철선'
  },
  {
    id: 'ch11-10',
    eng: 'Buccal tube',
    pron: '버컬 튜브 [bʌ́kl tjúːb]',
    kor: '볼쪽 슬롯 튜브 (협측 튜브)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '맨 끝 대구치 밴드 표면에 은땜 납땜되어, 아치 와이어 끝을 부드럽게 감싸 유치하며 지지해 주는 통로형 미세 튜브 소관'
  },
  {
    id: 'ch11-11',
    eng: 'Screw',
    pron: '스크류 [skrúː]',
    kor: '교정 보조용 지지 나사 고착기 (미니 스크류)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '특정 치아만 원할히 후방 견인하고자 치조골 단단한 피질골에 식립해 절대 움직이지 않는 외골 고정 원 기준점 나사산못'
  },
  {
    id: 'ch11-12',
    eng: 'Ligature wire',
    pron: '리가처 와이어 [lígətʃər wáiər]',
    kor: '미세 결찰선 (결찰 철선)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '주 아치 와이어가 브라켓에서 이탈 치탈하지 못하도록 두 홈을 타이트하게 동여매고 꽁꽁 묶어주는 미세 은백 극세 철사선'
  },
  {
    id: 'ch11-13',
    eng: 'Elastics',
    pron: '일래스틱스 [ilǽstiks]',
    kor: '교정용 인장 고무링 (교정 고무줄)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '환자가 직접 상하악 전후 버튼 브라켓 구조 간에 걸어 당겨, 교합 관계 정렬이나 주 정밀 이동을 촉진하는 탄성 고무줄 패드'
  },
  {
    id: 'ch11-14',
    eng: 'Coil spring',
    pron: '코일 스프링 [kɔ́il spríŋ]',
    kor: '교정용 코일 스프링 (틈새 밀개/당김 스프링)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '주 호선에 유치하여 치아 사이 틈을 팽창 벌려 주거나(Opend coil), 고리를 걸어 틈새를 꽉 오므려 당겨 수축시키는(Closed coil) 스프링'
  },
  {
    id: 'ch11-15',
    eng: 'Elastic separator',
    pron: '일래스틱 세퍼레이터 [ilǽstik sépərèitər]',
    kor: '고무 분리 환 (고무 세퍼레이터)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '밴드 시술 전 어금니 인접 틈새를 미세하게 반나절 벌려두고자 치간 접촉점 사이에 고유 팽창 압력으로 밀어넣는 파란 고무링'
  },
  {
    id: 'ch11-16',
    eng: 'Wire bending pliers',
    pron: '와이어 벤딩 플라이어 [wáiər béndiŋ pláiərz]',
    kor: '와이어 굴곡 형성용 플라이어 집게',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '곧은 호선 철사를 구부리거나 다양한 주 루프 루프 곡면을 가공 가소 다듬어 내는 교정선 전용 벤딩 겸자'
  },
  {
    id: 'ch11-17',
    eng: 'Bird-beak pliers',
    pron: '버드 비크 플라이어 [bə́ːrd bíːk pláiərz]',
    kor: '새부리형 플라이어 (조류 부리형 겸자)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '한쪽 날 부리는 원추형 원뿔 모양이고, 다른 한쪽은 네모 각진 형태로 둥근 루프와 스퀘어 각 변경을 한 겸자로 동시 조작 가능한 교정용 겸자'
  },
  {
    id: 'ch11-18',
    eng: 'Tweed loop-bending pliers',
    pron: '트위드 루프 벤딩 플라이어 [twíːd lúːp béndiŋ pláiərz]',
    kor: '트위드 루프 성형용 플라이어 집게',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '와이어를 정확히 일차 원형 원호 모양의 계단식 직경 루프로 찍어서 꺾어 정렬하는 교정 전용 겸자'
  },
  {
    id: 'ch11-19',
    eng: 'Tweed arch-forming pliers',
    pron: '트위드 아치 포밍 플라이어 [twíːd ɑ́ːrtʃ fɔ́ːrmiŋ pláiərz]',
    kor: '아치형 주 활선 성형 플라이어',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '말발굽 모양의 주 아치 와이어 외형 곡면을 틀 뒤틀림 없이 완벽 평탄하게 평행 잡아주는 넓은 사각 턱 교정 겸자'
  },
  {
    id: 'ch11-20',
    eng: 'Weingart utility pliers',
    pron: '와인가트 유틸리티 플라이어 [wáingɑːrt júːtíləti pláiərz]',
    kor: '와인가트 다용도 교정 보조 집게',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '부리가 안쪽을 향해 꺾여 있으며 톱니 세레이션이 있어, 구강 내에서 아치 와이어를 편하고 정밀하게 움켜쥐어 장입하고 빼내는 다목적 최고 활용 기구'
  },
  {
    id: 'ch11-21',
    eng: 'Ligature tucker',
    pron: '리가처 터커 [lígətʃər tʌ́kər]',
    kor: '결찰 철사 끝부분 정리 밀개 (리가처 터커)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '결찰선을 묶고 꼬아 자른 뒤 날카로운 잔여 꼬리 끝이 뺨 슬릿 잇몸을 찌르지 않도록 브라켓 뒤 그늘진 언더컷 틈새로 감춰 밀어 꺾는 밀대형 기구'
  },
  {
    id: 'ch11-22',
    eng: 'Wire cutting pliers',
    pron: '와이어 커팅 플라이어 [wáiər kʌ́tiŋ pláiərz]',
    kor: '교정용 와이어 절단 플라이어 (커터)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '교정선 철사나 기둥 철사를 필요한 길이만큼 단정하게 자르는 절단 전용 플라이어'
  },
  {
    id: 'ch11-23',
    eng: 'Distal end cutter',
    pron: '디스탈 엔드 커터 [dístl énd kʌ́tər]',
    kor: '구강 내 후방 와이어 절단겸자 (원심 말단 커터)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '맨 가쪽 어금니 협측관에서 살짝 삐져나온 굵은 아치 와이어 끝을 턱 절개함과 동시에, 조각이 목구멍으로 튀어 넘어가지 않도록 물어잡아 안전 흡착해 내는 특수 절단기'
  },
  {
    id: 'ch11-24',
    eng: 'Ligature cutter',
    pron: '리가처 커터 [lígətʃər kʌ́tər]',
    kor: '극세 결찰 철선 전용 차단 가위 (핀 커터)',
    chapterId: 'ch11',
    chapterName: '치과교정학',
    description: '브라켓에 주 호선을 꽁꽁 묶은 미세 결찰용 철선만 싹둑 자를 수 있도록 아주 얄팍하고 예리한 칼새를 지닌 전용 극세 커터'
  },

  // === Chapter 12 : 임상치위생학 ===
  {
    id: 'ch12-01',
    eng: 'Toothbrush',
    pron: '투스브러시 [túːθbrʌ̀ʃ]',
    kor: '칫솔',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '치아 표면의 치면세균막(플라크)과 음식물 잔사를 솔 마찰력으로 닦아 제거하는 필수 구강 위생 도구'
  },
  {
    id: 'ch12-02',
    eng: 'Power toothbrush',
    pron: '파워 투스브러시 [páuər túːθbrʌ̀ʃ]',
    kor: '전동 칫솔',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '헤드가 회전하거나 초소닉 음파 진동을 발생시켜 조작이 서툰 환자도 간편하고 뛰어난 세정력을 누리게 해주는 자동 칫솔'
  },
  {
    id: 'ch12-03',
    eng: 'Dentifrice',
    pron: '덴티프리스 [déntəfris]',
    kor: '치약 (치면 세정제)',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '마모제, 세제, 약제 성분(불소 등)이 고루 함유되어 칫솔질의 세정 연마 및 충치 예방 효과를 극대화해 주는 치약'
  },
  {
    id: 'ch12-04',
    eng: 'Dental floss',
    pron: '덴탈 플로스 [déntl flɔ́ːs]',
    kor: '치실',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '치아 인접면 사이 칫솔이 닿지 않는 얇은 틈새에 왁스칠된 실을 장입하여 음식 물질과 플라크를 실 쓸어내림질로 청소하는 위생사'
  },
  {
    id: 'ch12-05',
    eng: 'Floss holder',
    pron: '플로스 홀더 [flɔ́ːs hóuldər]',
    kor: '손잡이용 치실 홀더 (Y자형 일회용 치실)',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '손가락에 실을 둘러 감기 어려운 장애우나 어린이를 위해 Y자형 또는 활 모양 틀 손잡이에 치실을 팽팽히 걸어둔 위생 도구'
  },
  {
    id: 'ch12-06',
    eng: 'Floss threader',
    pron: '플로스 스레더 [flɔ́ːs θrédər]',
    kor: '보철물 공간 치실 통과용 바늘고리 (치실 유도자)',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '브리지 보철물 밑이나 교정 장치 철선 하부 공간으로 치실을 바늘귀 꿰어 쑥 통과시켜 주는 연하고 둥근 플라스틱 실 안내 핀고리'
  },
  {
    id: 'ch12-07',
    eng: 'Tufted dental floss',
    pron: '턱티드 덴탈 플로스 [tʌ́ftid déntl flɔ́ːs]',
    kor: '터프트 치실 (특수 스펀지사 치실)',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '실의 중간 또는 끝부분이 보송보송하게 부풀려진 털 뭉치 스펀지 상태로 넓은 보철 치간부나 임플란트 목 하단을 상처 없이 슬라이드 청소하기 좋은 실'
  },
  {
    id: 'ch12-08',
    eng: 'Interdental brush',
    pron: '인터덴탈 브러시 [ìndərdéntl brʌ̀ʃ]',
    kor: '치간 칫솔 (치간 솔)',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '잇몸 퇴축으로 치아 사이가 뻥 뚫려 생긴 삼각형 공간(Black triangle) 속을 앞뒤로 쑤셔 닦아내는 나선형 철사모 미세 위생솔'
  },
  {
    id: 'ch12-09',
    eng: 'End-tuft brush',
    pron: '엔드 터프트 브러시 [énd tʌ́ft brʌ̀ʃ]',
    kor: '원형 극소 첨단 칫솔 (첨단 솔)',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '칫솔 머리가 연필 끝처럼 작은 원추형 단일 뭉치 솔로 설계되어 깊고 외진 최후방 구치부 뺨쪽이나 맹출 중인 사랑니 총생 치간 전용 솔'
  },
  {
    id: 'ch12-10',
    eng: 'Oral irrigator',
    pron: '오랄 이리게이터 [ɔ́ːrəl ìrigéitər]',
    kor: '구강 물 세정기 (워터픽)',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '맥동 분사 형식의 강한 소량의 맥동 수압 분사를 뿜어내어 보철물 틈새 및 치간의 부스럼 파편을 한 번에 세정 탈락하는 수압 세정 장치'
  },
  {
    id: 'ch12-11',
    eng: 'Tongue cleaner',
    pron: '텅 클리너 [tʌ́ŋ klíːnər]',
    kor: '설태 세척용 혀 클리너',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '혀 표면(설백배부)에 들러붙어 유해 입냄새(구취)의 주범이 되는 설태를 빗자루 쓸어내리듯 긁어 씻어내는 주걱형 스크래퍼'
  },
  {
    id: 'ch12-12',
    eng: 'Denture brush',
    pron: '덴쳐 브러시 [déntʃər brʌ̀ʃ]',
    kor: '틀니 세척 전용 브러시 (의치용 솔)',
    chapterId: 'ch12',
    chapterName: '임상치위생학',
    description: '틀니의 오목하고 좁은 잇몸 맞닿는 면안팎을 마모 흠집 없이 깨끗이 씻을 수 있게 아주 부드러운 양면 모를 지닌 변형 틀니 솔'
  }
];

export const CHAPTERS_WITH_INSTRUMENTS = Array.from(
  new Set(VOCAB_DATA.map(item => item.chapterId))
).map(id => {
  const found = VOCAB_DATA.find(item => item.chapterId === id);
  return {
    id,
    name: found ? found.chapterName : '',
    count: VOCAB_DATA.filter(item => item.chapterId === id).length
  };
});
