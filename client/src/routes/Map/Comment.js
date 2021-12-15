// import { colors } from '@react-spring/shared';
// import { Container } from 'components/Footer/FooterStyle';
import React, { Component } from 'react';
import styled from 'styled-components';

class Comment extends Component {
  render() {
    const { name, content } = this.props;

    return (
      <Container>
        <Chat>
          {name}
          {content}
        </Chat>
      </Container>
    );
  }
}
const Container = styled.div`
  flex: 1;
`;

const Chat = styled.div`
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    background-color: ${({ theme }) => theme.colors.thirdColor};
  }
`;
export default Comment;
