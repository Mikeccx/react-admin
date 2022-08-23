import styled, { createGlobalStyle } from 'styled-components';

interface haha {
  haha: string
}
export const CascaderWraper = styled.div<haha>`
  .ant-select{
    height: $(props =>
      props.haha
    )
  }
`
interface height {
  height: string
}

export const DropdownWraper = createGlobalStyle<height>`
  .ant-cascader-menu {
    max-height: $(props => props.height)
  }
`