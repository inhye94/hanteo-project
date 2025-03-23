import { useCallback, useEffect, useRef } from "react";

/**
 * useIntersectionObserver 훅
 *
 * IntersectionObserver를 재사용하기 위해 구현한 훅입니다.
 *
 * 제공 기능:
 * 1. 추적 대상으로 등록
 * 2. 추적 대상에서 삭제
 */

type EntryType = IntersectionObserverEntry;

export const useIntersectionObserver = (callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const callbackRef = useRef(callback);

  // 최신 callback 유지
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // 핸들러
  const observerHandler = useCallback((entries: EntryType[]) => {
    if (!entries[0].isIntersecting) return;

    // 타겟이 화면에 나타나는 경우
    callbackRef.current();
  }, []);

  // 추적 등록
  const observe = useCallback((target: Element) => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(observerHandler);
    }

    observer.current.observe(target);
  }, []);

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

  return { observe, unobserve };
};
