import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { RightOutlined } from '@ant-design/icons';
import './index.less'
interface ItemProps {
  value: string
  label: string,
  children?: ItemProps []
}
interface ISelectPanelProps {
  options?: ItemProps []
  visible?: boolean
  defaultSelect: string []
  changeOnSelect?: (res: any) => void,
}
export const SelectPanel = (props: ISelectPanelProps) => {
  const {
    visible,
    options,
    defaultSelect,
    changeOnSelect
  } = props
  const selectPanelClass = classNames('ones-select-ul-wraper', {
    [`ones-select-ul-wraper-hidden`]: visible,
  })
  const defaultRenderList: any[]  = []
  if (defaultSelect.length) {
    let cur: any = options
    for (let i = 0; i < defaultSelect.length; i++) {
      const index = cur?.findIndex((c: any) =>  {
        // c.value === defaultSelect[i]
        return c.value === defaultSelect[i]
      })
      if (i === 0) {
        defaultRenderList.push(options)
        const childrenNode = []
        for (let i = 0; i < cur.length; i++) {
          // no-unsafe-optional-chaining
          if (cur && cur[i] && cur[i].children && cur[i].children.length) {
            childrenNode.push(...cur[i].children)
          }
        }
        cur = childrenNode
      } else if (index!==undefined && index > -1) {
        defaultRenderList.push([cur[index]])
        cur = cur[index]?.children || []
      }
    }
  }
  const [renderList, setRenderList] = useState<any>(defaultRenderList)
  useEffect(() => {
    if (!defaultSelect.length) {
      if (options?.length) {
        const nArr = []
        nArr[0] = options
        setRenderList(nArr)
      }
    }
  }, [options, defaultSelect])
  const [res, setRes] = useState<string[]>(defaultSelect)
  const selectItem = (e: React.MouseEvent<HTMLElement>, item: any, index: number) => {
    res[index] = item.value
    res.length = index + 1
    setRes(
      res.slice(0)
    )
    if (item?.children?.length) {
      e.stopPropagation()
    }
    changeOnSelect && changeOnSelect(res)
    const nArr = renderList.slice(0, index + 1)
    nArr[index+1] = item.children
    // nArr.length = index + 1
    setRenderList(
      nArr
    )
  }
  // const itemClass = classNames('flex','ones-select-ul-wraper-li', 'justify-between', 'p-2','items-center', {
  //   ['ones-select-ul-wraper-li-selected']: res.includes()
  // })
  const itemClassCal = (value: string) => {
    return res.includes(value) ? `flex ones-select-ul-wraper-li justify-between p-2 items-center ones-select-ul-wraper-selected`:`flex ones-select-ul-wraper-li justify-between p-2 items-center`
  }

  return (
    <>
      <div className={selectPanelClass}>
        {
          renderList?.map((f: ItemProps[], index: number) => (
            <ul key={index}>
              {
                f?.map((s: ItemProps) => (
                  <div className={itemClassCal(s.value)} onClick={(e: React.MouseEvent<HTMLElement>) => selectItem(e, s, index)}>
                    <li>
                      {s.label}
                    </li>
                    <RightOutlined />
                  </div>
                ))
              }
            </ul>
          ))
        }
      </div>
    </>
  )
}

SelectPanel.defaultProps = {
  defaultSelect: []
}