import './index.less'
// import { Cascader } from '@component/cascader'
// import { Cascader as AntCascader } from 'antd';
import { useState } from 'react';
import { StarOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { Cascader } from './cascader'
import { CascaderWraper } from './style'
// console.log('DropdownWraper', DropdownWraper)
function CascaderView () {
  const options = [
    {
      value: 'zhejiang',
      label: '浙江',
      children: [
        {
          value: 'hangzhou',
          label: 'hangzhou',
          children: [
            {
              value: 'xihu',
              disabled: false,
              label: (
                <span>
                  <span className='flex-1'>111</span>
                  <span>*</span>
                </span>
              ),
              originLabel: 'west Lake'
            },
          ],
        }
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
              value: 'gugong1',
              label: 'gugong1',
            },
            {
              value: 'gugong2',
              label: 'gugong2',
            },
            {
              value: 'gugong3',
              label: 'gugong3',
            },
            {
              value: 'gugong4',
              label: 'gugong4',
            },
            {
              value: 'gugong5',
              label: 'gugong5',
            },
            {
              value: 'gugong6',
              label: 'gugong6',
            },
            {
              value: 'gugong7',
              label: 'gugong7',
            },
            {
              value: 'gugong8',
              label: 'gugong8',
            },
            {
              value: 'gugong9',
              label: 'gugong9',
            },
            {
              value: 'gugong10',
              label: 'gugong10',
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
  interface Option {
    value: string;
    label: string;
    children?: Option[];
    isLeaf?: boolean;
    loading?: boolean;
  }
  // const divStyle = (): React.CSSProperties => ({    // 此行
  //   background: 'yellow',
  //   maxWidth: '170px',
  //   minWidth: '160px',
  //   overflow: 'hidden',
  //   textOverflow: 'ellipsis',
  //   height: 'auto'
  // });
  const styleTest = (): React.CSSProperties => ({
    // background: 'red',
    // color: 'red'
  })
  const [op, setOp] = useState<any>(options)
  const filter = (inputValue: string, path: any[]) =>
  path.some(
    option => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
  );
  const defaultSelect: string[] = ['zhejiang', 'hangzhou', 'xihu', 'jiexinting']
  const [resValue, setResValue] = useState('')
  const changeOnSelect = (res: any) => {
    setResValue(res.toString())
  }
  const render = (menu: any) => {
    console.log('menu: ', menu)
    return (
      <>
        {menu}
        <span>1</span>
      </>
    )
  }
  const displayRender = (label: any, selectedOptions: any) => {
    return (
      label
    )
  }
  const suffixIcon = <span>-</span>
  const testEffect = classNames('test')
  const [noEquitres, setNoEquitres] = useState(true)
  // const dropdownRender = (menu: any) => {
  //     // console.log('menu', menu)
  //     return (
  //       <div className={testEffect}>
  //         { menu }
  //         {
  //           noEquitres ?
  //           <span>暂无数据</span>
  //           : null
  //         }
  //       </div>
  //     )
  // }
  {/* <div className="cascader-demo flex justify-center items-center">
    <Cascader options={options} placeHoder="test" defaultSelect={defaultSelect} changeOnSelect={changeOnSelect} resValue={resValue}/>
  </div> */}

  return (
    <div>
      <Cascader options={op} showSearch={{
      }}
      className="flex-1"
      abnormalTip={'000000000000000001212121212'}
      leafIcon={'🌟'}
      // menuStyle={{
      //   maxWidth: '200px',
      //   minWidth: '160px'
      // }}
      ></Cascader>
      {/* <button onClick={() => setOp(
        options
      )}>测试改变</button> */}
    </div>
  )
}

export { CascaderView }

