import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

import { Tab } from '../../types/NavBar'

interface Props {
  setTab: (value: number) => void
  getTab: () => number
  tabs: Tab[]
}
const NawBar: FC<Props> = ({ setTab, getTab, tabs }) => {
  const currTab = getTab()
  const theme = useTheme()
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Link to={tab.link} style={{ textDecoration: 'none' }} key={tab.value}>
          <TabElement
            style={{
              backgroundColor: `${
                currTab == tab.number
                  ? theme.buttonLoginColor
                  : theme.tabsBackColor
              }`,
              color: `${currTab == tab.number ? theme.black : theme.white}`,
            }}
            onClick={() => {
              setTab(tab.number)
            }}
          >
            {tab.value}
          </TabElement>
        </Link>
      ))}
    </TabsContainer>
  )
}

const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 15px;
`
const TabElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  padding: 9px 20px;
  font-size: 18px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
  border-radius: 10px;
  background-color: ${(props) => props.theme.tabsBackColor};
  color: ${(props) => props.theme.paginationButtonColor};
  cursor: pointer;
`

export default NawBar
