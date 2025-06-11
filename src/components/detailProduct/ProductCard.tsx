import React from 'react';
import type { ActionItem } from '@/types/product';
import styled from '@emotion/styled';
import { getRemainingTime } from '@/utils/timeUtils';
import LikeBtn from './LikeBtn';

interface BidHistoryProps {
  status: string;
  item: ActionItem;
}

const ProductCard: React.FC<BidHistoryProps> = ({ status, item }) => {
  const { days, hours } = getRemainingTime(item.startTime);
  return (
    <CardContainer status={status}>
      <Section>
        <Title>{item.name}</Title>
        <LikeBtn />
      </Section>

      <DescriptionSection>
        <SectionTitle>Infomation</SectionTitle>
        <Paragraph>{item.infomation}</Paragraph>
      </DescriptionSection>

      <InfoSection>
        <InfoBox>
          <SectionTitle>Starting Price</SectionTitle>
          <Paragraph>{item.startPrice.toLocaleString()}원</Paragraph>
        </InfoBox>
        <InfoBox>
          <SectionTitle>Current Bid</SectionTitle>
          <StrongText>
            {status === 'before'
              ? 'No bids yet'
              : status === 'auction'
                ? `${item.startPrice.toLocaleString()}원`
                : `${item.toLocaleString()}원`}
          </StrongText>
        </InfoBox>
        <InfoBox>
          <SectionTitle>Time Left</SectionTitle>
          <Paragraph> {days > 0 || hours > 0 ? `${days}d ${hours}h left` : 'Auction started'}</Paragraph>
        </InfoBox>
      </InfoSection>

      <AuctionStatus>
        <SectionTitle>Auction Status</SectionTitle>
        <StatusBadge status={status}>
          {status === 'before' ? 'Coming Soon' : status === 'auction' ? 'Bidding Open' : 'Auction Ended'}
        </StatusBadge>
        <StatusTime>{item.startTime}</StatusTime>
      </AuctionStatus>

      <SellerSection>
        <SectionTitle>Seller Information</SectionTitle>
        <SellerBox>
          <Avatar />
          <UserInfo>
            <UserName>Seok woo kim</UserName>
            <UserRating>Rating: 4/5</UserRating>
          </UserInfo>
        </SellerBox>
      </SellerSection>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div<{ status: string }>`
  background-color: white;
  width: 50%;
  border-radius: 8px;
  border: 0.8px solid rgb(226, 232, 240);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px;
  padding: 24px;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
`;

const Section = styled.div`
  font-weight: 400;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 18px;
  color: rgb(2, 8, 23);
`;

const DescriptionSection = styled.div`
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(226, 232, 240);
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  line-height: 20px;
  color: rgb(100, 116, 139);
`;

const Paragraph = styled.p`
  margin-top: 4px;
  font-weight: 400;
  color: rgb(2, 8, 23);
`;

const StrongText = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: rgb(2, 8, 23);
  margin-top: 4px;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(226, 232, 240);
`;

const InfoBox = styled.div``;

const AuctionStatus = styled.div`
  margin-top: 16px;
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgb(226, 232, 240);
`;

const StatusBadge = styled.div<{ status: string }>`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  margin-top: 8px;
  background-color: ${({ status }) =>
    status === 'before' ? 'rgb(241,245,249)' : status === 'auction' ? 'rgb(15,23,42)' : 'rgb(226,232,240)'};
  color: ${({ status }) =>
    status === 'before' ? 'rgb(15,23,42)' : status === 'auction' ? 'rgb(248,250,252)' : 'rgb(2,8,23)'};
`;

const StatusTime = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(100, 116, 139);
`;

const SellerSection = styled.div``;

const SellerBox = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgb(2, 8, 23);
  margin-right: 16px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgb(2, 8, 23);
`;

const UserRating = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgb(100, 116, 139);
`;
