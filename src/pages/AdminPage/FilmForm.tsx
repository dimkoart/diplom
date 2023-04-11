import React, { FC, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import Button from '../../component/UI/Button'
import Icon from '../../component/UI/Icon'
import Input from '../../component/UI/Input'
import { StyledText } from '../../component/UI/Text'

interface Props {
  setNawBarValue: (value: number) => void
  getNawBarValue: () => number
}
const FilmForm: FC<Props> = ({ setNawBarValue, getNawBarValue }) => {
  const theme = useTheme()
  useEffect(() => {
    getNawBarValue() == 1
      ? setNawBarValue(getNawBarValue() + 2)
      : getNawBarValue() == 2
      ? setNawBarValue(getNawBarValue() + 1)
      : setNawBarValue(getNawBarValue())
  }, [])
  return (
    <FIlmFormCOntainer>
      <InlineBlock>
        <StyledText style={{ fontSize: 30 }}>Film Name</StyledText>
        <Input
          style={{ marginTop: 15, backgroundColor: theme.gray }}
          placeholder='FIlm Name'
        />
        <StyledText style={{ fontSize: 30, marginTop: 15 }}>
          Film Description
        </StyledText>
        <Input
          style={{ marginTop: 15, backgroundColor: theme.gray }}
          placeholder='Description'
        />
        <StyledText style={{ fontSize: 30, marginTop: 15 }}>Genres</StyledText>
        <Input
          style={{ marginTop: 15, backgroundColor: theme.gray }}
          placeholder='Genres'
        />
        <StyledText style={{ fontSize: 30, marginTop: 15 }}>Cast</StyledText>
        <Input
          style={{ marginTop: 15, backgroundColor: theme.gray }}
          placeholder='Cast'
        />
        <StyledText style={{ fontSize: 30, marginTop: 15 }}>Video</StyledText>
        <label
          style={{
            width: 400,
            height: 50,
            borderRadius: 16,
            display: 'inline-block',
            cursor: 'pointer',
            backgroundColor: 'gray',
          }}
        >
          <StyledText
            style={{
              color: theme.placeHolder,
              marginLeft: 100,
              marginTop: 15,
            }}
          >
            Добавить файл
            {
              <Icon
                icon='box-add'
                size={25}
                color={theme.black}
                style={{ marginLeft: 5 }}
              />
            }
          </StyledText>

          <Input
            style={{
              opacity: 0,
              position: 'relative',
              outline: 0,
              top: -10,
              pointerEvents: 'none',
              userSelect: 'none',
              height: 20,
            }}
            type='file'
          />
        </label>
        <Button
          style={{
            width: 400,
          }}
          text='Add Film'
        />
      </InlineBlock>
    </FIlmFormCOntainer>
  )
}
const FIlmFormCOntainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.loginForm};
  border-radius: 16px;
  width: 1560px;
  height: 720px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
`
const InlineBlock = styled.div`
  display: inline-block;
`
export default FilmForm
