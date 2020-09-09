import styled from 'styled-components';

export const PageTitle = styled.h1`
padding-top: 64px;
font-size: 34px;
font-family: ${(props) => props.theme.font.header};
color: ${({ theme }) => theme.colors.primary}
`;