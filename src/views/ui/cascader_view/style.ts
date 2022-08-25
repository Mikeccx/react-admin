import styled, { createGlobalStyle } from 'styled-components';

interface menuStyle {
  menuBlockStyle?: {
    maxWidth?: string | number
    minWidth?: string | number
  }
}
export const CascaderWraper = styled.div<menuStyle>`

`
interface height {
  height: string
}

export const DropdownWraper = createGlobalStyle<menuStyle>`
  .ant-cascader-menu {
    max-width: ${(props) => props.menuBlockStyle?.maxWidth};
    min-width: ${(props) => props.menuBlockStyle?.minWidth}
  }
`