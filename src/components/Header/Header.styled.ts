'use client'

import { TypeAnimation } from 'react-type-animation';
import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('tobias-suit-bg.jpg');
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    background-position: left;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  padding: 2rem;

  @media (max-width: 1024px) {
    right: 0%;
    left: unset;
    background-color: rgba(37, 37, 37, 0.5);
    transform: unset;
  }

  @media (max-width: 480px) {
    right: 0%;
    left: unset;
    background-color: rgba(37, 37, 37, 0.5);
    transform: unset;
    padding: 1rem;
  }
`;

export const HeaderText = styled.p`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: #d4af37
`;

export const HeaderTextAnimation = styled(TypeAnimation)`
  font-size: 1.5rem;
`;

export const HeaderDescription = styled.p`
  margin: 2rem 0;
  max-width: 40rem;
  line-height: 1.5rem;
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const HeaderPrimaryButton = styled.a`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #d4af37;
  color: #252525;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 1rem;
  border: 1px solid black;

  &:hover {
    background-color: rgba(212, 175, 55, 0.7);
  }
`;

export const HeaderSecondaryButton = styled.a`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #252525;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 1rem;
  border: 1px solid black;

  &:hover {
    background-color: rgba(37, 37, 37, 0.7);
  }
`;
