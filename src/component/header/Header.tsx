import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Icon from '../UI/Icon'

const Header = () => {
  return (
    <Head>
      <Icon icon='tv' size={40} color={colors.red} />
    </Head>
  )
}
const Head = styled.div`
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 115px;
  min-width: 1024px;
  max-width: 100%;
  height: 7.2rem;
  padding: 0 6rem;
  color: 'white';
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.595) 6.67%,
    rgba(0, 0, 0, 0.579) 13.33%,
    rgba(0, 0, 0, 0.551) 20%,
    rgba(0, 0, 0, 0.512) 26.67%,
    rgba(0, 0, 0, 0.461) 33.33%,
    rgba(0, 0, 0, 0.401) 40%,
    rgba(0, 0, 0, 0.334) 46.67%,
    rgba(0, 0, 0, 0.266) 53.33%,
    rgba(0, 0, 0, 0.199) 60%,
    rgba(0, 0, 0, 0.139) 66.67%,
    rgba(0, 0, 0, 0.088) 73.33%,
    rgba(0, 0, 0, 0.049) 80%,
    rgba(0, 0, 0, 0.021) 86.67%,
    rgba(0, 0, 0, 0.005) 93.33%,
    transparent
  );
  white-space: nowrap;
  transition: transform 300ms ease;

  transform: translateY(-7.2rem);
`
export default Header
