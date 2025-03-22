import { MOCK_DATA } from "../mocks/mockDatas";
import { IMockData } from "../types/mockData";

const PER_PAGE = 10;

// 페이지는 1부터 시작함
export const getMockData = (
  pageNum: number
): Promise<{ datas: IMockData[]; isEnd: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datas: IMockData[] = MOCK_DATA.slice(
        PER_PAGE * pageNum,
        PER_PAGE * (pageNum + 1)
      );
      const isEnd = PER_PAGE * (pageNum + 1) >= MOCK_DATA.length;

      resolve({ datas, isEnd });
    }, 1500);
  });
};
