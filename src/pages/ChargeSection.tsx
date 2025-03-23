import { useCallback, useEffect, useRef, useState } from "react";
import { getMockData } from "../apis/product";
import Article from "../components/Article";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Loading from "../components/Loading";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import type { IMockData } from "../types/mockData";

export default function ChargeSection() {
  const [list, setList] = useState<IMockData[]>([]);
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

      // 로딩 실행
      setIsLoading(true);

      // 데이터 업데이트
      const { datas, isEnd } = await getMockData(pageNumber);
      setList((prev) => prev.concat(...datas));
      setIsDataEnd(isEnd);

      // 로딩 멈춤
      setIsLoading(false);
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
  }, [isLoading, isDataEnd]);

  // 데이터 로드
  useEffect(() => {
    loadData(pageNum);
  }, [pageNum]);

  return (
    <Article title="충전소">
      <List>
        {list &&
          list?.map((item, i) => <ListItem index={i} key={i} product={item} />)}
      </List>
      <div ref={targetRef}></div>
      {isLoading && <Loading />}
    </Article>
  );
}
