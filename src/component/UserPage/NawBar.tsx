import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../constants/colors'
interface Props {
  setTab: (value: number) => void
  getTab: () => number
}
const NawBar: FC<Props> = ({ setTab, getTab }: Props) => {
  const currTab = getTab()
  const tabs = [
    {
      value: 'Favorites',
      number: 1,
      link: 'favorites',
    },
    {
      value: 'Viewed',
      number: 2,
      link: 'viewed',
    },
    {
      value: 'Watch later',
      number: 3,
      link: 'watchLater',
    },
  ]

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Link to={tab.link} style={{ textDecoration: 'none' }} key={tab.value}>
          <Tab
            style={{
              backgroundColor: `${
                currTab == tab.number
                  ? colors.buttonLoginColor
                  : colors.tabsBackColor
              }`,
              color: `${currTab == tab.number ? colors.black : colors.white}`,
            }}
            onClick={() => {
              setTab(tab.number)
            }}
          >
            {tab.value}
          </Tab>
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
const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  padding: 9px 20px;
  font-size: 18px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  border-radius: 10px;
  background-color: ${colors.tabsBackColor};
  color: ${colors.paginationButtonColor};
  cursor: pointer;
`

export default NawBar
