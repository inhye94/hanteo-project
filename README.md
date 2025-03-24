# 한터글로벌 사전 과제

### 안내사항

- 마감: 2025.03.24 16:00
- 구현 기능
  1. 카테고리
     - 좌<->우 슬라이드를 통한 카테고리간 이동
     - 이동은 상단의 탭 메뉴 클릭과, 좌<->우 슬라이드 터치
  2. 콘텐츠
     - 리스트형 뷰로 구성
     - 무한 스크롤
  3. 배너
     - 슬라이드형
     - 최소 3개의 배너로 구성
     - 무한루프 동작 및 외부 링크 이동
- 주의 사항
  1. 구현 언어, 프레임워크 등은 제한 없음
  2. 퍼블리싱은 예시와 최대한 유사한 형태로 구현

### 작업 요약

- stack: Vite, React, TypeScript, SCSS, PNPM, Swiper
- 깃허브:
- 배포링크:

## 트러블 슈팅

### 좌우 슬라이드를 통한 카테고리간 이동

- **[문제점]** Swiper에서 카테고리별 이동 기능을 구현했지만, Pagination과 Swiper가 독립적으로 동작하여 두 요소 간의 데이터 연동이 필요했습니다. 이를 해결하기 위해 공통 상태를 관리할 방법이 필요했습니다.
- **[해결]** Context API를 활용하여 `swiper` 인스턴스와 `categories` 데이터를 공유하는 `CategoryProvider`를 만들었습니다. 이를 통해 Swiper 및 Pagination이 같은 데이터를 참조할 수 있도록 했습니다.
- **[성과]** Context를 이용해 중앙에서 데이터를 관리하므로, Pagination과 Swiper 간의 상태가 항상 일치하도록 유지할 수 있었습니다.

```tsx
// NOTE: src/providers/CategoryProvider.tsx
export function CategoryProvider({
  swiper,
  categories,
  children,
}: React.PropsWithChildren<ICategoryContext>) {
  return (
    <CategorySwiperContext.Provider value={{ swiper, categories }}>
      {children}
    </CategorySwiperContext.Provider>
  );
}
```

### 무한스크롤

- **[문제점]** IntersectionObserver를 사용해 무한 스크롤을 구현했으나 콜백함수가 2번 호출되는 문제가 발생했습니다.
- **[해결]** 컴포넌트가 언마운트되어 `unobserve`를 설정할 때, 모든 요소의 관찰이 끝났다면 `disconnect()`를 호출하여 옵저버 인스턴스를 해제하도록 수정했습니다. 또한, 중복 실행 방지를 위해 `isLoading`과 `isDataEnd` 상태를 활용하여 콜백 함수가 불필요하게 실행되지 않도록 보완했습니다.
- **[성과]** 콜백 함수의 중복 호출이 사라지고, 불필요한 연산이 줄어들어 성능이 개선되었습니다. 데이터 요청이 안정적으로 이루어지며, 불필요한 리렌더링도 방지되었습니다.

```tsx
// NOTE: src/hooks/useIntersectionObserver.tsx
// 추적 삭제
const unobserve = useCallback((target: Element) => {
  if (observer.current) {
    observer.current.unobserve(target);

    // 모든 요소의 관찰이 끝났다면 disconnect()
    if (observer.current.takeRecords().length === 0) {
      observer.current.disconnect();
      observer.current = null;
    }
  }
}, []);
```

```tsx
// NOTE: src/hooks/useInfiniteScroll.tsx
const handleObserver = useCallback(() => {
  if (!isDataEnd && !isLoading) {
    setPageNum((prev) => prev + 1);
  }
}, [isDataEnd, isLoading]);
```
