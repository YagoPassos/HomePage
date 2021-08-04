import { ReactNode } from 'react';

import { Container, Header,Logo, Burger,Footer } from './styles';
import useWrapperScroll from '../Model/useWrapperScroll';
import { useTransform } from 'framer-motion';

interface UniqueOverlayProps {
}

function UniqueOverlay() {
  // const { scrollYProgress } = useWrapperScroll()

  // const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]) footer só no final

  return (
    <Container>
        <Header>
          <Logo/>
          <Burger/>
          </Header>

          {/* <Footer style={{opacity}}>  Footer só no final  */}
          <Footer>
            <ul>
              <li>
                <a href="#">UI Clone</a>
              </li>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Ipsum</a>
              </li>
            </ul>
            </Footer>      
    </Container>
  );
};

export default UniqueOverlay;
