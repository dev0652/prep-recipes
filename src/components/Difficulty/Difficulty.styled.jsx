import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: 8px;
`;
export const BadgeList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Badge = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: 5px;
  min-width: 60px;
  text-align: center;

  color: ${({ theme, active }) => {
    return active ? theme.colors.white : 'normal';
  }};

  background-color: ${({ theme, active }) => {
    return active ? theme.colors.accent : 'transparent';
  }};
`;
