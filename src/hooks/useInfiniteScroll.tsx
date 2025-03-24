import { useCallback, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

interface UseInfiniteScrollProps<T> {
  fetchData: (page: number) => Promise<{ datas: T[]; isEnd: boolean }>;
}

export default function useInfiniteScroll<T>({
  fetchData,
}: UseInfiniteScrollProps<T>) {
  const [list, setList] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<number>(0);
  const [isDataEnd, setIsDataEnd] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(() => {
    if (!isDataEnd && !isLoading) {
      setPageNum((prev) => prev + 1);
    }
  }, [isDataEnd, isLoading]);

  const { observe, unobserve } = useIntersectionObserver(handleObserver);

  const loadData = useCallback(
    async (pageNumber: number) => {
      if (isDataEnd) return;

      try {
        // 로딩 실행
        setIsLoading(true);

        // 데이터 업데이트
        const { datas, isEnd } = await fetchData(pageNumber);
        setList((prev) => (prev ? prev.concat(...datas) : [...datas]));
        setIsDataEnd(isEnd);
      } finally {
        // 로딩 멈춤
        setIsLoading(false);
      }
    },
    [isDataEnd]
  );

  // 옵저버 설정
  useEffect(() => {
    if (!targetRef.current) return;
    observe(targetRef.current);
    return () => {
      if (targetRef.current) {
        unobserve(targetRef.current);
      }
    };
  }, [observe, unobserve]);

  // 데이터 로드
  useEffect(() => {
    loadData(pageNum);
  }, [pageNum, loadData]);

  return { list, isLoading, targetRef };
}
