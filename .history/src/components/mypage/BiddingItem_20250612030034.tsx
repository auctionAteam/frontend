import styled from '@emotion/styled';

import AuctionItemCard from '@/components/mypage/AuctionItemCard';
import useGetUserItems from '@/hooks/apis/users/useGetUserItems';
import { colors } from '@/styles';

const BiddingItem = () => {
  const { data: userItems, isLoading, isError } = useGetUserItems({
    params: {
      limit: 10,
      currentPage: 1,
    },
    body: {
      state: 'auction',
    },
  });

  console.log('BiddingItem userItems:', userItems);

  return (
    <Section>
      <Title>입찰 중인 상품</Title>
      <ItemList>
        {isLoading ? (
          <div>Loading..</div>
        ) : isError ? (
          <div>에러 발생!</div>
        ) : Array.isArray(userItems) && userItems.length === 0 ? (
          <div>입찰 중인 상품이 없습니다.</div>
        ) : Array.isArray(userItems) ? ( 
          userItems.map((myPageItem, index) => (
              <AuctionItemCard 
                key={index}
                id={myPageItem.id}
                img={myPageItem.img}
                itemName={myPageItem.name}
                endTime={myPageItem.startTime}
                startPrice={myPageItem.startPrice}
              />
            ))
        ) : (
          <div>데이터를 불러오는 중 오류가 발생했습니다.</div>
        )}
      </ItemList>
    </Section>
  );
};

export default BiddingItem;

const Section = styled.section`
  border: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 24px;
  margin-bottom: 40px;
  transition: all 0.1s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 20px;
  border-bottom: thin solid ${colors.gray200};
  padding-bottom: 12px;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
