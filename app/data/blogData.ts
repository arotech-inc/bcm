// app/(bcm)/data/blogData.ts

export interface BcmBlogPost {
  slug: string;
  tag: 'ENGINE' | 'DESIGN' | 'ART' | 'COMMUNITY' | 'SYSTEM';
  date: string;
  title: string;
  excerpt: string;
  image: string;
  content: string; // 실제 상세 내용 (나중에 MDX 등으로 대체 가능)
}

export const bcmBlogData: BcmBlogPost[] = [
  {
    slug: 'engine-2-0-update-note',
    tag: 'ENGINE',
    date: '2026. 03. 02',
    title: '시뮬레이션 엔진 2.0 업데이트 노트: 발사각 및 풍속 연산 디테일',
    excerpt: '이번 업데이트에서는 타구 속도와 발사각에 따른 물리 법칙을 더욱 정교화했습니다. 또한, 구장별 실시간 풍속 변수가 어떻게 타구 궤적에 영향을 미치는지 상세히 공개합니다.',
    image: '/bcm-blog1.png', // public 폴더에 png 파일 필요
    content: `
      # 시뮬레이션 엔진 2.0 업데이트 상세 내역

      안녕하세요, BCM 개발팀입니다. 오늘은 게임의 심장부인 시뮬레이션 엔진의 핵심 업데이트 내용을 공유하고자 합니다.

      ## 1. 타구 물리 법칙 정교화

      기존 1.5 엔진에서는 '타율 기반 확률'에 의존하는 경향이 있었으나, 2.0 엔진은 투수의 투구 회전수(Spin Rate)와 타자의 스윙 궤적(Attack Angle)을 계산하여 **실시간 타구 속도(Exit Velocity)** 및 **발사각(Launch Angle)**을 도출합니다.

      ### 주요 변경점:
      * **Spin Rate Impact:** 회전수가 높은 패스트볼은 유저의 예상보다 더 '떠오르는' 효과를 내며, 헛스윙 확률이 증가합니다.
      * **Launch Angle Calculation:** 타자의 컨디션과 스윙 타이밍에 따라 발사각이 실시간으로 결정되며, 배럴 타구(Barrel) 비율이 높은 선수는 더 많은 홈런을 기록하게 됩니다.

      ## 2. 구장 및 기상 변수 시스템 (Environment Factors)

      현대 야구의 디테일을 살리기 위해 '구장별 팩터'와 '실시간 기상 변수'가 경기에 미치는 영향을 계산합니다.

      ### 상세 내용:
      * **실시간 풍속/풍향:** 타구 순간의 풍향(외야 쪽/홈 쪽)과 풍속에 따라 비거리가 보정됩니다. 바람이 많이 부는 날에는 플라이볼 투수보다 땅볼 투수의 기용이 유리할 수 있습니다.
      * **Park Factors (RF/CF/LF):** 외야의 펜스 높이와 거리를 3D로 시뮬레이션하여, 특정 구장에서는 홈런이 안타로 바뀌는 등의 변수를 구현했습니다.

      앞으로도 BCM은 가장 정교한 야구 시뮬레이션 경험을 제공하기 위해 최선을 다하겠습니다. 많은 기대 부탁드립니다.
    `
  },
  {
    slug: 'roster-rules-implementation',
    tag: 'DESIGN',
    date: '2026. 02. 18',
    title: '동아시아 리그의 독특한 로스터 운용과 외국인 선수 규정 구현에 대하여',
    excerpt: 'KBO나 CPBL과 같은 아시아 리그의 독특한 타이 브레이커 룰이나 용병 제도를 게임 시스템에 어떻게 녹여냈는지 심도 있게 설명합니다.',
    image: '/bcm-blog2.png',
    content: '... 로스터 규정 상세 내용 준비 중 ...'
  },
  {
    slug: 'stadium-3d-rendering-preview',
    tag: 'ART',
    date: '2026. 01. 25',
    title: '구장 3D 렌더링 시스템 프리뷰: 그림자와 조명의 실시간 변화',
    excerpt: '실시간으로 변하는 해의 위치에 따라 마운드와 외야에 드리워지는 그림자의 변화를 3D로 어떻게 구현했는지 아트팀의 작업물을 공개합니다.',
    image: '/bcm-blog3.png',
    content: '... 3D 렌더링 프리뷰 내용 준비 중 ...'
  }
];