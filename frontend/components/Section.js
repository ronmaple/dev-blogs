import SectionStyles from './styles/SectionStyles';
import styled from 'styled-components';

const Section = () => (
    <SectionStyles>
        <h1>I love you</h1>
        <OuterSection>img goes here</OuterSection>
        <TextPortion>Lorem ipsum</TextPortion>
    </SectionStyles>
)

const OuterSection = styled(SectionStyles)`
    background: blue;
    height: 120px;
    width: 120px;
`;

const TextPortion = styled(SectionStyles)`
    background: lightblue;
    height: 120px;
    width: 300px;
`;

export default Section;