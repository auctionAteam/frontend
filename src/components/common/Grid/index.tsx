import styled from '@emotion/styled';
import { type CSSProperties, forwardRef, type HTMLAttributes, type Ref } from 'react';

type GridProps = {
  columns?: number;
  rows?: number;
  gap?: CSSProperties['gap'];
  columnGap?: CSSProperties['columnGap'];
  rowGap?: CSSProperties['rowGap'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  autoFlow?: CSSProperties['gridAutoFlow'];
  autoColumns?: CSSProperties['gridAutoColumns'];
  autoRows?: CSSProperties['gridAutoRows'];
  templateColumns?: CSSProperties['gridTemplateColumns'];
  templateRows?: CSSProperties['gridTemplateRows'];
  templateAreas?: CSSProperties['gridTemplateAreas'];
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Grid = forwardRef(
  (
    {
      children,
      columns,
      rows,
      gap,
      columnGap,
      rowGap,
      align,
      justify,
      autoFlow,
      autoColumns,
      autoRows,
      templateColumns,
      templateRows,
      templateAreas,
      ...props
    }: GridProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <StyledGrid
        ref={ref}
        columns={columns}
        rows={rows}
        gap={gap}
        columnGap={columnGap}
        rowGap={rowGap}
        align={align}
        justify={justify}
        autoFlow={autoFlow}
        autoColumns={autoColumns}
        autoRows={autoRows}
        templateColumns={templateColumns}
        templateRows={templateRows}
        templateAreas={templateAreas}
        {...props}
      >
        {children}
      </StyledGrid>
    );
  },
);

export default Grid;

const StyledGrid = styled.div<Omit<GridProps, 'children'>>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns && `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows }) => rows && `repeat(${rows}, 1fr)`};
  gap: ${({ gap }) => gap};
  column-gap: ${({ columnGap }) => columnGap};
  row-gap: ${({ rowGap }) => rowGap};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  grid-auto-flow: ${({ autoFlow }) => autoFlow};
  grid-auto-columns: ${({ autoColumns }) => autoColumns};
  grid-auto-rows: ${({ autoRows }) => autoRows};
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  grid-template-rows: ${({ templateRows }) => templateRows};
  grid-template-areas: ${({ templateAreas }) => templateAreas};
`;
