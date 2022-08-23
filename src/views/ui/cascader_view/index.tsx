import './index.less'
import { Cascader } from '@component/cascader'
import { Cascader as AntCascader } from 'antd';
import { useState } from 'react';
import { StarOutlined } from '@ant-design/icons';
import classNames from 'classnames';
const CascaderView = () => {
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
              label: (
                <span>
                  <span>West Lake</span>
                  <span>*</span>
                </span>
              )
            },
            {
              value: 'changjiang',
              label: 'long River'
            },
            {
              value: 'changjiang',
              label: 'long River'
            },
            {
              value: 'changjiang',
              label: 'long River'
            },
            {
              value: 'changjiang',
              label: 'long River'
            },
            {
              value: 'changjiang',
              label: 'long River'
            },{
              value: 'changjiang',
              label: 'long River'
            },{
              value: 'changjiang',
              label: 'long River'
            },{
              value: 'changjiang',
              label: 'long River'
            }
          ],
        }
      ],
    },
    {
      value: 'zhejiang1',
      label: '浙江1',
      children: [
        {
          value: 'hangzhou',
          label: 'hangzhou',
          children: [
            {
              value: 'xihu',
              label: (
                <span>
                  <span>West Lake</span>
                  <span>*</span>
                </span>
              )
            },
            {
              value: 'changjiang',
              label: 'long River'
            }
          ],
        }
      ],
    },
    {
      value: 'zhejiang2',
      label: '浙江2',
      children: [
        {
          value: 'hangzhou',
          label: 'hangzhou',
          children: [
            {
              value: 'xihu',
              label: (
                <span>
                  <span>West Lake</span>
                  <span>*</span>
                </span>
              )
            },
            {
              value: 'changjiang',
              label: 'long River'
            }
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
  interface Option {
    value: string;
    label: string;
    children?: Option[];
    isLeaf?: boolean;
    loading?: boolean;
  }
  const divStyle = (): React.CSSProperties => ({    // 此行
    background: 'yellow',
    maxWidth: '170px',
    minWidth: '160px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: 'auto'
  });
  const styleTest = (): React.CSSProperties => ({
    background: 'red',
    color: 'red'
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
  const dropdownRender = (menu: any) => {
      console.log('menu', menu)
      return (
        <div className={testEffect}>
          { menu }
          <span>1</span>
        </div>
      )
  }

  return (
    <>
      {/* <div className="cascader-demo flex justify-center items-center">
        <Cascader options={options} placeHoder="test" defaultSelect={defaultSelect} changeOnSelect={changeOnSelect} resValue={resValue}/>
      </div> */}

      <div className="cascader-demo flex justify-center items-center">
      <AntCascader options={options}
        // loadData={loadData}
        dropdownRender = {dropdownRender}
        // multiple
        showSearch = {{
          render: (value, path) => {
            console.log('path', path)
            return <div title="13131313131313" style={{
              width: '200px',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>1021030103103010301301031030103</div>
          }
        }}
        dropdownMenuColumnStyle={(divStyle())}
        onSearch={value => console.log(value)}
      />
      </div>
    </>
  )
}

export { CascaderView }