import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex } from '@/components/common';
import Button from '@/components/common/Button';
import PageWrapper from '@/components/layout/PageWrapper';
import { colors } from '@/styles';

const RegisterPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log('선택된 파일:', files[0]);
    }
  };

  const handleRegister = () => {
    alert('상품이 등록되었습니다'); //post 아직 x
  };

  return (
    <PageWrapper>
      <RegisterContainer>
        <Title>상품 등록 페이지</Title>
        <SubTitle>새로운 경매 상품을 등록하여 판매를 시작하세요</SubTitle>

        <Card>
          <CardTitle>상품 정보</CardTitle>
          <Input type="text" placeholder="상품명을 입력하세요" />
          <Textarea placeholder="상품 설명" />
        </Card>

        <Card>
          <CardTitle>경매 설정</CardTitle>
          <Flex gap={16} wrap="wrap">
            <Flex direction="column" style={{ flex: 1, position: 'relative', gap: 6 }}>
              <Label htmlFor="startPrice">시작 입찰가</Label>
              <Input id="startPrice" type="number" placeholder="0" />
              <Unit>원</Unit>
            </Flex>
            <Flex direction="column" style={{ flex: 1, position: 'relative', gap: 6 }}>
              <Label htmlFor="bidStep">입찰 단위</Label>
              <Input id="bidStep" type="number" placeholder="0" />
              <Unit>원</Unit>
            </Flex>
          </Flex>

          <PeriodSection>
            <Label>경매 기간</Label>
            <Period>
              {['1일', '1주', '2주', '3주', '4주'].map((label) => (
                <PeriodButton
                  key={label}
                  isActive={selectedPeriod === label}
                  onClick={() => setSelectedPeriod(label)}
                >
                  {label}
                </PeriodButton>
              ))}
            </Period>
          </PeriodSection>
        </Card>

        <Card>
          <CardTitle>상품 이미지</CardTitle>
          <UploadImg>
            <Plus>+</Plus>
            <div>이미지를 드래그하거나 클릭하여 업로드</div>
            <DescImg>JPG, PNG 파일만 지원됩니다.</DescImg>
            <UploadButton onClick={handleFileClick}>파일 선택</UploadButton>
            <input type="file" hidden ref={fileInputRef} onChange={handleFileChange} accept="image/*" />
          </UploadImg>
        </Card>

        <DecisionButton>
          <Button
            styleType="ghost"
            size="small"
            style={{ color: colors.gray250, borderColor: colors.gray250 }}
            onClick={() => navigate(-1)} //현재는 히스토리가 없어서 작동 x (아직까진 직접 registerpage로 들어와서)
          >
            뒤로 가기
          </Button>
          <Button styleType="primary" size="small" onClick={handleRegister}>
            등록하기
          </Button>
        </DecisionButton>
      </RegisterContainer>
    </PageWrapper>
  );
};

export default RegisterPage;

const RegisterContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 16px;
`;

const SubTitle = styled.p`
  margin-top: 8px;
  margin-bottom: 24px;
  color: ${colors.gray250};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
`;

const Card = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  transition: all 0.1s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 48px 12px 16px;
  border: 1px solid ${colors.gray100};
  border-radius: 8px;
  font-size: 12px;
  margin-bottom: 24px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 160px;
  padding: 12px 16px;
  border: 1px solid ${colors.gray100};
  border-radius: 8px;
  font-size: 12px;
  resize: none;
  box-sizing: border-box;
`;

const Unit = styled.span`
  position: absolute;
  top: 31px;
  right: 16px;
  font-size: 14px;
  color: gray;
  pointer-events: none;
`;

const Label = styled.label`
  font-size: 13px;
  color: ${colors.gray300};
  font-weight: 500;
`;

const Period = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const PeriodSection = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-top: 16px;
`;

const PeriodButton = styled.button<{ isActive?: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${({ isActive }) => (isActive ? colors.primary : colors.gray200)};
  background: ${({ isActive }) => (isActive ? colors.primary : colors.gray100)};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
`;

const UploadImg = styled.div`
  border: 2px dashed ${colors.gray200};
  padding: 32px 16px;
  text-align: center;
  border-radius: 12px;
  color: ${colors.gray250};
`;

const Plus = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const DescImg = styled.p`
  font-size: 12px;
  margin: 8px 0;
`;

const UploadButton = styled.button`
  margin-top: 12px;
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
`;

const DecisionButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
