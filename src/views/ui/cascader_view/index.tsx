import './index.less'
import { Cascader } from '@component/cascader'
import { Cascader as AntCascader } from 'antd';
import { useState } from 'react';
const CascaderView = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              children: [
                {
                  value: 'jiexinting',
                  label: 'jiexinting',
                }
              ]
            },
          ],
        },
      ],
    },
    {
      value: 'beijing',
      label: 'Beijing',
      children: [
        {
          value: 'yihuan',
          label: 'yihuan',
          children: [
            {
              value: 'gugong',
              label: 'gugong',
            },
          ],
        },
        {
          value: 'erhuan',
          label: 'erhuan',
          children: [
            {
              value: 'bird',
              label: 'bird',
            },
          ],
        },
      ],
    }
  ]
  const defaultSelect: string[] = ['zhejiang', 'hangzhou', 'xihu', 'jiexinting']
  const [resValue, setResValue] = useState('')
  const changeOnSelect = (res: any) => {
    setResValue(res.toString())
  }
  return (
    <>
      <div className="cascader-demo flex justify-center items-center">
        <Cascader options={options} placeHoder="test" defaultSelect={defaultSelect} changeOnSelect={changeOnSelect} resValue={resValue}/>
      </div>

      <div className="cascader-demo flex justify-center items-center">
      <AntCascader options={options}/>
      </div>
    </>
  )
}

export { CascaderView }