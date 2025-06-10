import styled from '@emotion/styled';
import AuctionItemCard from '@/components/mypage/AuctionItemCard';
import useGetUserItems from '@/hooks/apis/users/useGetUserItems';
import { colors } from '@/styles';

const RegisterItem = () => {
  const { data: userItems, isLoading, isError } = useGetUserItems({
    params: {
      limit: 10,
      currentPage: 1,
    },
    body: {
      state: 'before'
    }
  });

  console.log('userItems:', userItems);

  return (
    <Section>
      <Title>경매에 등록한 상품</Title>
      <ItemList>
        {isLoading ? (
          <div>Loading..</div>
        ) : isError ? (
          <div>에러 발생!</div>
        ) : Array.isArray(userItems) && userItems.length === 0 ? (
          <div>경매에 등록한 상품이 없습니다.</div>
        ) : Array.isArray(userItems) ? (
          userItems.map((item, index) => (
            <AuctionItemCard 
              key={index}
              item={{
                id: index,
                name: item.name,
                thumbnail: item.img,
                description: '',
                startTime: item.startTime,
                startPrice: item.startPrice
              }}
              priceLabel="현재 입찰가"
            />
          ))
        ) : (
          <div>데이터를 불러오는 중 오류가 발생했습니다.</div>
        )}
      </ItemList>
    </Section>
  );
};

export default RegisterItem;

// Styled components는 BiddingItem.tsx와 동일 → 그대로 사용
