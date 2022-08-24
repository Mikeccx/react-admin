import styled, { createGlobalStyle } from 'styled-components';

interface haha {
  haha: string
}
export const CascaderWraper = styled.div<haha>`
`
interface height {
  height: string
}

export const DropdownWraper = createGlobalStyle<height>`
  .ant-cascader-menu {
    max-height: ${props => { 
      console.log('props', props)
      return props.height}}
  }
`