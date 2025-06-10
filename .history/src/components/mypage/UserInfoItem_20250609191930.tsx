import styled from '@emotion/styled';

interface Props {
  label: string;
  value: string;
}

const UserInfoItem = ({ label, value }: Props) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Item>
  );
};

export default UserInfoItem;

const Item = styled.li`
  display: flex;
  gap: 12px;
`;

const Label = styled.span`
  font-weight: 600;
  width: 120px;
`;

const Value = styled.span`
  color: #444;
`;
