import { getMockData } from "../apis/product";
import Article from "../components/Article";
import ChartItem from "../components/ChartItem";
import ChartList from "../components/ChartList";
import ChartSkeleton from "../components/ChartSkeleton";
import Empty from "../components/Empty";
import Loading from "../components/Loading";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

export default function EventSection() {
  const { isLoading, list, targetRef } = useInfiniteScroll({
    fetchData: getMockData,
  });

  return (
    <Article title="이벤트">
      {list && list.length === 0 && <Empty />}
      {list && list.length > 0 && (
        <ChartList>
          {list?.map((item, i) => (
            <ChartItem
              key={item.productId}
              product={item}
              index={i}
              onClick={() => alert(123)}
            />
          ))}
        </ChartList>
      )}
      <div ref={targetRef}></div>
      {!list && <ChartSkeleton length={3} />}
      {isLoading && <Loading />}
    </Article>
  );
}
