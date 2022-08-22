import { useState } from 'react'
import './index.less'
import { SelectPanel } from './selec_panel'
import classNames from 'classnames'
interface ItemProps {
  value: string
  label: string,
  children?: ItemProps []
}
export interface IcascaderProps {
  placeHoder?: string,
  options: ItemProps [],
  defaultSelect?: string[],
  resValue?: string,
  changeOnSelect?: (res: any) => void
}
export const Cascader = (props: IcascaderProps) => {
  const {
    placeHoder,
    options,
    defaultSelect,
    changeOnSelect,
    resValue
  } = props
  const [selectPanelVisible, setVisible] = useState(true)
  const [value, setValue] = useState('')
  const showPanel = () => {
    setVisible(!selectPanelVisible)
  }
  const onBlur = () => {
    // setVisible(!selectPanelVisible)
  }
  const placeHolderClass = classNames('ones-select-placeholder', {
    ['ones-select-resValue']: resValue
  }

  )
  return (
    <>
      <div className='ones-select ones-select-selector ones-cascader' onClick={showPanel} onBlur={onBlur}>
        <span className='ones-select-search'>
          <input className='ones-select-search-input' readOnly></input>
        </span>
        <span className={placeHolderClass}>{resValue || placeHoder}</span>
        <SelectPanel visible={selectPanelVisible} options={options} defaultSelect={defaultSelect} changeOnSelect={changeOnSelect}/>
      </div>
    </>
  )
}

Cascader.defaultProps = {
  placeHoder: 'please select',
  defaultSelect: []
}
