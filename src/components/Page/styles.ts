import styled from 'styled-components';
import firstImg from '../../images/firstImg.jpg'
import hamburguer1 from '../../images/hamburguer1.jpg'
import hamburguer2 from '../../images/hamburguer2.jpg'
import hamburguer3 from '../../images/hamburguer3.jpg'
import hamburguer4 from '../../images/hamburguer4.jpg'
import hamburguer5 from '../../images/hamburguer5.jpg'
import hamburguer6 from '../../images/hamburguer6.jpg'

export const Container = styled.div`
    
 .colored:nth-child(1) {
/* background: #f1ffe7; */
background: url(${firstImg}) no-repeat center; 
background-size: cover;
}
.colored:nth-child(2) {
/* background: #dfffd9; */
background: url(${hamburguer1}) no-repeat center; 
background-size: cover;
}
.colored:nth-child(3) {
/* background: #cdfeca; */
background: url(${hamburguer2}) no-repeat center; 
background-size: cover;
}
.colored:nth-child(4) {
/* background: #bbfebb; */
background: url(${hamburguer3}) no-repeat center; 
background-size: cover;
}
.colored:nth-child(5) {
/* background: #a9fdac; */
background: url(${hamburguer4}) no-repeat center; 
background-size: cover;
}
.colored:nth-child(6) {
/* background: #90f29c; */
background: url(${hamburguer5}) no-repeat center; 
background-size: cover;
}
.colored:nth-child(7) {
/* background: #77e68c; */
background: url(${hamburguer6}) no-repeat; 
background-size: cover;
}
`
export const ModelsWrapper = styled.div``
export const ModelSection = styled.div``

