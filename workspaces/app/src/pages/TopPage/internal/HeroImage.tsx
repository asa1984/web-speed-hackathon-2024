import React from 'react';
import styled from 'styled-components';

const _Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const _Image = styled.img`
  display: inline-block;
  width: 100%;
`;

export const HeroImage: React.FC = () => (
  <_Wrapper>
    <_Image alt="Cyber TOON" loading="eager" src="/assets/top.jpg" />
  </_Wrapper>
);
