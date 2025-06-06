import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type SelectHTMLAttributes, useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { colors, fonts } from '@/styles';

type SelectSizeType = 'small' | 'medium' | 'large';

export type OptionValueType = string | number;
export type SelectOptionType = {
  label: string;
  value: OptionValueType;
};

const SelectBoxSizeStyle = {
  small: css`
    ${fonts.subTitle2};
    height: 40px;
  `,
  medium: css`
    ${fonts.subTitle2};
    height: 45px;
  `,
  large: css`
    ${fonts.subTitle1};
    height: 50px;
  `,
};

const SelectOptionSizeStyle = {
  small: css`
    top: 46px;
  `,
  medium: css`
    top: 52px;
  `,
  large: css`
    top: 57px;
  `,
};

type SelectBoxProps = {
  options: SelectOptionType[];
  size?: SelectSizeType;
  defaultValue?: OptionValueType;
  onCheckedValue?: (value: OptionValueType) => void;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>;

const SelectBox = ({ options, size = 'medium', defaultValue, onCheckedValue }: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>();
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleClickSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: SelectOptionType) => {
    setSelectedOption(option);
    onCheckedValue?.(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (defaultValue) {
      const selectedOption = options.find((option) => option.value == defaultValue);

      setSelectedOption(selectedOption);
    }
  }, [defaultValue, options]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledSelectBox ref={selectRef}>
      <StyledSelectButton type="button" size={size} isOpen={isOpen} onClick={handleClickSelectBox}>
        {selectedOption?.label || '선택해 주세요.'}
        <IoIosArrowDown />
      </StyledSelectButton>

      {isOpen && (
        <StyledSelectOptionWrapper size={size}>
          {options.map((option) => (
            <StyledOption key={option.value} size={size} onClick={() => handleSelectOption(option)}>
              {option.label}
            </StyledOption>
          ))}
        </StyledSelectOptionWrapper>
      )}
    </StyledSelectBox>
  );
};

export default SelectBox;

const StyledSelectBox = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const StyledSelectButton = styled.button<{ size: SelectSizeType; isOpen: boolean }>`
  width: 100%;
  background-color: white;
  color: ${colors.gray300};
  border-radius: 8px;
  border: 1px solid ${colors.gray200};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  ${({ size }) => SelectBoxSizeStyle[size]};
  transition: 0.1s ease-in-out;

  &:focus {
    border-color: ${colors.primaryHover};
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${colors.gray250};
    transition: 0.3s ease-in-out;
    ${({ isOpen }) => (isOpen ? `transform: rotate(180deg);` : `transform: rotate(360deg);`)}
  }
`;

const StyledSelectOptionWrapper = styled.div<{ size: SelectSizeType }>`
  position: absolute;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${colors.gray200};
  background-color: ${colors.white};
  z-index: 5;
  ${({ size }) => SelectOptionSizeStyle[size]};
`;

const StyledOption = styled.div<{ size: SelectSizeType }>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: ${colors.gray300};
  ${({ size }) => SelectBoxSizeStyle[size]};
  cursor: pointer;

  &:hover {
    border-radius: 8px;
    background-color: ${colors.gray100};
  }
`;
