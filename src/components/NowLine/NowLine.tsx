import { theme } from '@/themes/theme';
import React from 'react';
import styled from 'styled-components';

export type NowLineProps = {
  text: string;
  top?: number;
  className?: string;
};

const NowLineWrapper = styled.div<{ $top: number }>`
  position: absolute;
  height: 1.5px;
  background-color: ${theme.colors.primary};
  width: 100%;
  right: 0;
  left: 0;
  top: ${({ $top }) => $top}px;
`;

const StyledText = styled.span`
  position: absolute;
  right: 0;
  bottom: 5px;
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
`;

export const NowLine: React.FC<NowLineProps> = ({ text, top = 0, ...props }) => {
  return (
    <NowLineWrapper $top={top} data-testid="NowLine" {...props}>
      <StyledText>{text}</StyledText>
    </NowLineWrapper>
  );
};
