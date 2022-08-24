import './index.less'
// import { Cascader } from '@component/cascader'
// import { Cascader as AntCascader } from 'antd';
import { useState } from 'react';
import { StarOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { Cascader } from './cascader'
import { CascaderWraper, DropdownWraper } from './style'
// console.log('DropdownWraper', DropdownWraper)
function CascaderView () {
  const options = [
    {
      value: 'zhejiang',
      label: '浙江1121231312312321312321',
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
                  <span>West Lake</span>
                  {/* <span>*</span> */}
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
  // const optionLists: Option[] = [
  //   {
  //     value: 'zhejiang12132131232144',
  //     label: 'Zhejiang',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'jiangsu',
  //     label: 'Jiangsu',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'zhejiang1',
  //     label: 'Zhejiang1',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'jiangsu2',
  //     label: 'Jiangsu2',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'zhejiang3',
  //     label: 'Zhejiang3',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'jiangsu4',
  //     label: 'Jiangsu4',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'zhejiang5',
  //     label: 'Zhejiang5',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'jiangsu6',
  //     label: 'Jiangsu6',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'jiangsu7',
  //     label: 'Jiangsu7',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'jiangsu8',
  //     label: 'Jiangsu8',
  //     isLeaf: false,
  //   },
  //   {
  //     value: 'jiangsu9',
  //     label: 'Jiangsu9',
  //     isLeaf: false,
  //   },
  // ];
  // const [options, setOptions] = useState<Option[]>(optionLists);
  // const loadData = (selectedOptions: any[]) => {
  //   console.log(1)
  //   const targetOption = selectedOptions[selectedOptions.length - 1];
  //   targetOption.loading = true;

  //   // load options lazily
  //   setTimeout(() => {
  //     targetOption.loading = false;
  //     targetOption.children = [
  //       {
  //         label: (
  //           <div className="flex">
  //             <span>{`${targetOption.label}Dynamic 1`}</span>
  //             <span className='test-icon icon'>*</span>
  //           </div>
  //         ),
  //         value: 'dynamic1'
  //       },
  //       {
  //         label: (
  //           <div className="flex">
  //             <span>{`${targetOption.label}Dynamic 2`}</span>
  //             <span className='test-icon icon'>*</span>
  //           </div>
  //         ),
  //         value: 'dynamic2',
  //       },
  //     ];
  //     setOptions([...options]);
  //   }, 1000);
  // };
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
      <Cascader options={options} showSearch={{
      }}></Cascader>
    </div>
  )
}

export { CascaderView }