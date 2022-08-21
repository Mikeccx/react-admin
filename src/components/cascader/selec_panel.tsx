import classNames from 'classnames'
import './index.less'
export const SelectPanel = (props: any) => {
  const {
    visible
  } = props
  const selectPanelClass = classNames('ones-select-ul-wraper', {
    [`ones-select-ul-wraper-hidden`]: visible,
  })
  return (
    <>
      <div className={selectPanelClass}>
        <ul>
          <li className='ones-select-ul-wraper-li'>1</li>
        </ul>
        <ul>
          <li className='ones-select-ul-wraper-li'>2</li>
        </ul>
      </div>
    </>
  )
}