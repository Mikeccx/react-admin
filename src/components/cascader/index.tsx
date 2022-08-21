import { useState } from 'react'
import './index.less'
import { SelectPanel } from './selec_panel'
import classNames from 'classnames'
export interface IcascaderProps {
  placeHoder?: string
}
export const Cascader = (props: IcascaderProps) => {
  const {
    placeHoder
  } = props
  const [selectPanelVisible, setVisible] = useState(true)
  const showPanel = () => {
    setVisible(!selectPanelVisible)
  }
  const onBlur = () => {
    // setVisible(!selectPanelVisible)
  }
  return (
    <>
      <div className='ones-select ones-select-selector ones-cascader' onClick={showPanel} onBlur={onBlur}>
        <span className='ones-select-search'>
          <input className='ones-select-search-input' readOnly></input>
        </span>
        <span className='ones-select-placeholder'>{placeHoder}</span>
        <SelectPanel visible={selectPanelVisible}/>
      </div>
    </>
  )
}

Cascader.defaultProps = {
  placeHoder: 'please select'
}
