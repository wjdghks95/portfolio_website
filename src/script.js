gsap.registerPlugin(ScrollTrigger);

// ── Navbar scroll effect ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Hero: 페이지 로드 시 순차 등장 ──
gsap.timeline({ defaults: { ease: 'power3.out' } })
  .to('.hero-photo', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
  .to('.hero-sub',   { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
  .to('.hero-name',  { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
  .to('.hero-desc',  { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
  .to('.hero-btns',  { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');

// ── 스크롤 reveal 공통 함수 ──
function revealOnScroll(selector, options = {}) {
  const els = gsap.utils.toArray(selector);
  // Hero 내부 .reveal은 이미 위에서 처리했으므로 건너뜀
  const targets = els.filter(el => !el.closest('#hero'));
  if (!targets.length) return;

  gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: options.duration ?? 0.7,
    ease: options.ease ?? 'power3.out',
    stagger: options.stagger ?? 0,
    scrollTrigger: {
      trigger: options.trigger ?? targets[0],
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger,
    },
  });
}

// ── About ──
revealOnScroll('#about .section-heading');
revealOnScroll('.about-top', { duration: 0.8 });
revealOnScroll('.about-card', { stagger: 0.15 });

// ── Skills ──
revealOnScroll('#skills .section-heading');
revealOnScroll('.skill-group', { stagger: 0.12 });

// ── Projects ──
revealOnScroll('#projects .section-heading');
revealOnScroll('.card-featured', { stagger: 0.15 });
revealOnScroll('.sub-label');
revealOnScroll('.card-mini', { stagger: 0.08 });

// ── Contact ──
revealOnScroll('#contact .section-heading');
revealOnScroll('.contact-sub');
revealOnScroll('.contact-links', { duration: 0.8 });

// ── Project Modal ──
const projectData = {
  'kcp': {
    title: '결제 시스템 NHN KCP 전환 구축',
    subtitle: '결제 연동 체계 표준화 및 트랜잭션 안정성 확보를 통한 서비스 신뢰도 제고',
    badge: 'Featured',
    period: '2025. 07 ~ 2025. 08 (2개월)',
    content: `
      <ul>
        <li><strong>결제 모듈 전면 교체 및 프로세스 설계</strong>
          <ul>
            <li>기존 이니페이 결제 모듈을 NHN KCP 시스템으로 전면 교체하여 결제 서비스의 확장성 및 관리 효율성을 제고</li>
            <li>KCP 표준 웹 결제 및 API 규격에 맞춘 백엔드 로직을 설계하고, 결제 요청부터 승인・취소까지의 전 과정에 대한 트랜잭션 관리로 데이터 정합성 확보</li>
          </ul>
        </li>
        <li><strong>예외 상황 대응 및 결제 안정화 로직 구현</strong>
          <ul>
            <li>네트워크 오류 등 예외 상황 발생 시 결제 상태 불일치를 방지하기 위한 망 취소 및 복구 로직을 구현</li>
            <li>결제 위변조 방지를 위한 데이터 암호화 및 데이터 유효성 검증 체계를 강화하여 보안 사고를 사전에 방지</li>
          </ul>
        </li>
      </ul>
    `,
    tags: ['Java', 'Spring', 'Oracle', 'MyBatis', 'JavaScript', 'jQuery', 'JSP', 'IntelliJ'],
  },
  'nuskin-live': {
    title: '뉴스킨 코리아 글로벌 라이브 시스템',
    subtitle: '고성능 병렬 배치 처리 최적화 및 하드웨어(SDK) 연동 서비스 구현',
    badge: 'Featured',
    period: '2024. 05 ~ 2024. 09 (5개월)',
    content: `
      <ul>
        <li><strong>ExecutorService를 활용한 멀티 쓰레드 주문 취소 배치 구현</strong>
          <ul>
            <li>프로모션 종료 후 발생하는 대규모 미처리 주문을 단시간 내 일괄 취소하기 위해 Spring Batch와 Java ExecutorService를 결합한 병렬 처리 구조 설계</li>
            <li>쓰레드 풀을 최적화하여 관리함으로써 단일 쓰레드 방식 대비 처리 속도를 비약적으로 향상시키고 대량 데이터 처리 시의 병목 현상 해결</li>
          </ul>
        </li>
        <li><strong>빅솔론 SDK 연동 및 하드웨어 제어 로직 최적화</strong>
          <ul>
            <li>빅솔론 SDK를 활용한 하드웨어 제어 로직을 직접 구현하여 영수증 출력 지연 시간 단축 및 현장 운영 효율성 제고</li>
            <li>글로벌 사용자를 위한 다국어 인코딩 최적화를 통해 영수증 내 기재 정보의 정확성을 확보하고 출력 무결성 보장</li>
          </ul>
        </li>
        <li><strong>실시간 주문-재고 데이터 정합성 보장</strong>
          <ul>
            <li>주문 상태 변화에 따른 실시간 재고 변동 로직을 구현하여 온-오프라인 시스템 간의 데이터 불일치 리스크 제거</li>
            <li>복잡한 프로모션 상황에서도 정확한 재고 수량을 유지할 수 있도록 데이터베이스 트랜잭션 및 정합성 검증 체계 강화</li>
          </ul>
        </li>
        <li><strong>QA 협업 및 예외 시나리오 정의를 통한 서비스 안정화</strong>
          <ul>
            <li>프로젝트 주기별 요구사항 및 기술적 해결책 공유를 통해 개발 방향성을 명확히 하고, 시나리오별 예외 케이스를 사전에 정의하여 무결한 서비스 런칭 달성</li>
          </ul>
        </li>
      </ul>
    `,
    tags: ['Java', 'Spring', 'Oracle', 'MyBatis', 'JavaScript', 'jQuery', 'JSP', 'IntelliJ'],
  },
  'trcare-server': {
    title: 'TRCARE/TR90 앱 서버 통합 및 서비스 개선',
    subtitle: '다중 서비스 통합 인증 체계(RBAC) 구축 및 인프라 아키텍처 단일화',
    badge: 'Featured',
    period: '2024. 01 ~ 2024. 04 (4개월)',
    content: `
      <ul>
        <li><strong>Spring Security 기반 통합 권한 관리 시스템(RBAC)설계 및 구현</strong>
          <ul>
            <li>개별적으로 운영되던 TRCARE와 TR90의 인증 체계를 Spring Security로 단일화하여 통합 인증 시스템 구축</li>
            <li>Custom AuthenticationProvider를 구현하여 로그인 시 계정 상태 및 보안 정책을 다각도로 검증하는 공통 로직 적용</li>
            <li>관리자 계정별 직무에 따라 메뉴 접근 권한을 세분화하여 제어하는 RBAC 모델을 도입하여 보안성 강화</li>
          </ul>
        </li>
        <li><strong>서버 자원 통합 및 인프라 운영 최적화</strong>
          <ul>
            <li>분리된 앱 서버를 하나의 통합 환경으로 병합하여 클라우드 인프라 운영 비용 절감 및 배포/모니터링 관리 포인트 단일화</li>
            <li>서비스 간 중복되는 비즈니스 로직을 공통 모듈로 분리하여 코드 재사용성을 높이고 유지보수 효율성을 개선</li>
          </ul>
        </li>
        <li><strong>통합 DB 설계 및 데이터 마이그레이션</strong>
          <ul>
            <li>두 서비스의 서로 다른 스키마를 분석하여 통합 데이터 모델링을 수행하고, 데이터 유실 없는 마이그레이션 프로세스 완수</li>
          </ul>
        </li>
      </ul>
    `,
    tags: ['Java', 'Spring Boot', 'MariaDB', 'MyBatis', 'JavaScript', 'jQuery', 'Thymeleaf', 'AWS', 'IntelliJ'],
  },
  'winix': {
    title: 'WINIX 모니터링 Admin 전면 개편',
    subtitle: '레거시 아키텍처 정상화 및 AWS 연동 최적화를 통한 비즈니스 가동률 확보',
    badge: null,
    period: '2025. 01 ~ 2025. 05 (5개월)',
    content: `
      <ul>
        <li><strong>가동 불능 상태의 레거시 시스템 전면 재건 및 안정화</strong>
          <ul class="sub-list">
            <li>정상 작동이 불가능 했던 기존 어드민 서비스를 분석하여 결함이 있는 비즈니스 로직을 전면 수정</li>
            <li>기술 부채인 중복 로직 및 미사용 코드를 제거하고, 데이터 접근 계층을 재설계하여 서비스 안정성 확보</li>
          </ul>
        </li>
        <li><strong>AWS 클라우드 연동 기반의 통합 관리 체계 구축</strong>
          <ul class="sub-list">
            <li>AWS API를 활용하여 사용자 및 제품 정보의 등록·삭제 프로세스를 구현하고, 클라우드 리소스와 DB 간의 데이터 무결성 확보</li>
            <li>클라우드 통신 과정에서의 예외 처리 및 데이터 동기화 로직을 강화하여 관리 효율성 제고</li>
          </ul>
        </li>
        <li><strong>비동기 처리를 통한 사용자 인터페이스 응답 성능 개선</strong>
          <ul class="sub-list">
            <li>대규모 제품 데이터를 불러올 때 발생하는 병목 현상을 해결하기 위해 데이터 처리 로직을 비동기식으로 개편하여 체감 성능 개선</li>
            <li>UI 블로킹 현상을 제거하여 사용자 인터페이스 응답 성능 및 운영 체감 속도 개선</li>
          </ul>
        </li>
      </ul>
    `,
    tags: ['Java', 'Spring', 'MySQL', 'MyBatis', 'JavaScript', 'jQuery', 'JSP', 'AWS', 'IntelliJ'],
  },
  'session': {
    title: '분산 환경 세션 관리 및 중복 로그인 방지 시스템 구축',
    subtitle: 'Redis 기반 세션 클러스터링을 통한 분산 시스템 안정화 및 보안 강화',
    badge: null,
    period: '2025. 03 (1개월)',
    content: `
      <ul>
        <li><strong>Redis 기반 세션 클러스터링 구현</strong>
          <ul class="sub-list">
            <li>다중 인스턴스 환경에서 발생하는 세션 불일치 문제를 해결하기 위해 Redis를 활용한 공유 세션 저장소 아키텍처를 구축</li>
          </ul>
        </li>
        <li><strong>동시 접속 제어 및 중복 로그인 방지 로직 적용</strong>
          <ul class="sub-list">
            <li>동일 계정의 다중 접속을 제어하기 위해 Redis 내 세션 정보를 추적하고, 신규 로그인 시 기존 세션을 만료시키는 중복 로그인 방지 기능 구현</li>
            <li>비정상적인 접근이나 다중 기기 접속에 대한 제어를 통해 서비스 보안성을 강화하고 계정 공유 리스크를 최소화</li>
          </ul>
        </li>
      </ul>
    `,
    tags: ['Java', 'Spring', 'Oracle', 'MyBatis', 'JavaScript', 'jQuery', 'JSP', 'IntelliJ'],
  },
  'keyboard': {
    title: '아이스크림 미디어 디지털 키보드 관리 시스템 개발',
    subtitle: '클라우드 기반 콘텐츠 관리 및 보안 권한 체계 구축',
    badge: null,
    period: '2024. 02 ~ 2024. 05 (4개월)',
    content: `
      <ul>
        <li><strong>Azure Blob Storage를 활용한 음악 콘텐츠 관리 시스템 구축</strong>
          <ul class="sub-list">
            <li>서버 저장 공간의 물리적 제약을 해결하기 위해 Azure Blob Storage를 도입하고, 대량의 교육용 음악 리소스를 안정적으로 저장 및 서빙하는 업로드/조회 로직 구현</li>
            <li>클라우드 내 실제 파일 경로와 DB 내 메타데이터 연동 구조를 설계하여 콘텐츠 관리 효율성 및 데이터 접근성 최적화</li>
          </ul>
        </li>
        <li><strong>Spring Security 기반의 세분화된 관리자 권한 제어</strong>
          <ul class="sub-list">
            <li>Spring Security를 활용하여 관리자 등급별 메뉴 접근 및 데이터 수정 권한을 차등 부여하는 보안 로직 구현</li>
          </ul>
        </li>
        <li><strong>기술적 가시성 확보 및 요구사항 최적화</strong>
          <ul class="sub-list">
            <li>클라이언트와의 정기적인 진행 상황 공유를 통해 비즈니스 요구사항을 기술적으로 정확히 해석하고 설계에 반영</li>
            <li>개발 초기 단계부터 기술적 제약 사항을 투명하게 공유하여 불필요한 재작업을 방지하고, 프로젝트 진행의 가시성을 높여 안정적인 일정 관리 수행</li>
          </ul>
        </li>
      </ul>
    `,
    tags: ['Java', 'Spring', 'MariaDB', 'MyBatis', 'JavaScript', 'jQuery', 'Thymeleaf', 'Azure', 'IntelliJ'],
  },
  'trcare-app': {
    title: 'TRCARE 웹앱 서비스 개발 및 유지보수 / 운영',
    subtitle: '통합 어드민 시스템 구축 및 하이브리드 웹앱 서비스 최적화',
    badge: null,
    period: '2023. 05 ~ (진행중)',
    content: `
      <ul>
        <li><strong>비즈니스 운영 효율화를 위한 전용 Admin 시스템 구축</strong>
          <ul class="sub-list">
            <li>수동으로 관리되던 사용자 데이터 및 제품 설정 기능을 전산화하기 위해 통합 어드민 페이지를 설계 및 구축하여 운영 생산성 개선</li>
            <li>운영팀의 요구사항을 반영한 데이터 시각화 및 엑셀 다운로드 기능을 구현</li>
          </ul>
        </li>
        <li><strong>하이브리드 웹앱 환경에 최적화된 백엔드 아키텍처 고도화</strong>
          <ul class="sub-list">
            <li>웹뷰 기반 서비스 특성을 고려하여 배포 시 자원 캐싱 문제를 방지하는 정적 자원 버전 관리 전략을 수립하고 배포 안정성 확보</li>
            <li>클라이언트 환경에 구애받지 않는 표준화된 RESTful API를 설계하고 응답 구조를 일원화하여 플랫폼 간 데이터 정합성 유지 및 에러 핸들링 로직 효율화</li>
          </ul>
        </li>
        <li><strong>AWS S3기반 콘텐츠 관리 및 인프라 운영</strong>
          <ul class="sub-list">
            <li>서버 저장 공간의 한계를 극복하기 위해 AWS S3와 DB 메타데이터를 연동한 콘텐츠 관리 시스템을 구축하여 대용량 리소스를 효율적으로 서빙</li>
          </ul>
        </li>
      </ul>
    `,
    tags: ['Java', 'Spring', 'MariaDB', 'MyBatis', 'JPA', 'JavaScript', 'jQuery', 'Thymeleaf', 'AWS', 'IntelliJ'],
  },
  'nuskin-maintain': {
    title: '뉴스킨 코리아 개발 및 유지보수 / 운영',
    subtitle: '엔터프라이즈 데이터 정합성 확보 및 비즈니스 로직 고도화를 통한 운영 안정화',
    badge: null,
    period: '2023. 03 ~ (진행중)',
    content: `
      <ul>
        <li><strong>SAP 연동 데이터 인터페이스 및 정합성 관리</strong>
          <ul class="sub-list">
            <li>웹/앱 주문 데이터와 SAP 간의 인터페이스를 위한 Shadow DB를 활용하여 시스템 간 데이터 연동 및 조회 성능 최적화</li>
            <li>기존에 구축된 SAP 연동 비즈니스 로직을 분석 및 유지보수하며, 주문・취소・반품 시 발생하는 데이터의 흐름을 모니터링하고 예외 상황 발생 시 선제적 대응</li>
          </ul>
        </li>
        <li><strong>비즈니스 프로모션 및 주문 로직 고도화</strong>
          <ul class="sub-list">
            <li>뉴스킨 코리아의 정기/상시 프로모션을 위한 백엔드 API를 개발하여 비즈니스 요구사항을 기술적으로 적기에 구현</li>
            <li>Oracle DB 환경에서 주문 및 제품 관련 복잡한 쿼리를 분석하고 최적화를 통해 서비스 응답 성능 유지</li>
          </ul>
        </li>
        <li><strong>레거시 시스템 분석 및 보안 강화</strong>
          <ul class="sub-list">
            <li>JSP/Servlet 기반의 기존 시스템 구조를 면밀히 분석하여 신규 모듈을 안정적으로 결합하고 코드 리팩토링 수행</li>
            <li>ISMS 보안 가이드를 준수하여 민감 정보 처리 로직을 강화하고 보안 취약점에 선제적 대응</li>
          </ul>
        </li>
      </ul>
    `,
    tags: ['Java', 'Spring', 'Oracle', 'MyBatis', 'JavaScript', 'jQuery', 'JSP', 'Vue.js', 'IntelliJ'],
  },
};

const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

function openModal(key) {
  const data = projectData[key];
  if (!data) return;

  modal.querySelector('.modal-badge').textContent = data.badge ?? '';
  modal.querySelector('.modal-badge').style.display = data.badge ? 'inline-block' : 'none';
  modal.querySelector('.modal-title').textContent = data.title;
  modal.querySelector('.modal-subtitle').textContent = data.subtitle ?? '';
  modal.querySelector('.modal-period').textContent = data.period;
  modal.querySelector('.modal-content').innerHTML = data.content;

  const tagsEl = modal.querySelector('.modal-tags');
  tagsEl.innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── 부드러운 네비 링크 클릭 (active 처리) ──
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach(l => l.style.color = '');
    link.style.color = 'var(--accent)';
  });
});
