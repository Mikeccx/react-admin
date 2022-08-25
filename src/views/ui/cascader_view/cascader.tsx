import { Cascader as AntCascader } from 'antd';
import { useEffect, useState } from 'react';
import resolve from 'resolve';
import { CascaderWraper, DropdownWraper } from './style'
export const Cascader = (props: any) => {
  const {
    options,
    showSearch,
    menuStyle,
    dropdownMenuColumnStyle,
    abnormalTip,
    leafIcon
  } = props
  interface Option {
    value: string | number;
    // label是展示的主体
    label?: React.ReactNode;
    disabled?: boolean;
    children?: Option[];
    // 标记是否为叶子节点，设置了 `loadData` 时有效
    // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
    isLeaf?: boolean;
  }
  interface EnhanceOption extends Option{
    primitiveLabel?: React.ReactNode
  }
  const [_options, _setOptions] = useState<Option[]>([])
  // 前序
  // 树层序遍历
  // const treeLevelOrder = (tree: Option[]) => {
  //   const queue = tree
  //   let level = 0
  //   while(queue.length) {
  //     // todo
  //     const len =  queue.length
  //     for (let i = 0; i < len; i++) {
  //       const curNode = queue.shift()
  //       if (curNode?.children?.length) {
  //         // queue.push(curNode.children)
  //         curNode.label = <>
  //           {curNode.label} { leafIcon }
  //         </>
  //       }
  //     }
  //     level++
  //   }
  // }
  useEffect(() => {
    const level = 0
    const treeInOrder = (tree: any, tlevel: number) => {
      if (tree.length >= 9) {
        // todo
        // 设置标志，需要设置最大高度
      }
      tlevel++
      console.log('tlevel', tlevel)
      for(let i = 0; i < tree.length; i++) {
        if (tree[i]?.children?.length) {
          treeInOrder(tree[i]?.children, tlevel)
        }
        console.log(tree[i].value)
      }
    }
    treeInOrder(options, 0)
    // console.log(level)
    // const option = JSON.parse(JSON.stringify(options))
    // let option = options
    // const queue = option
    // let level = 0
    // const res: Option[] = []
    // console.log(1)
    // while(queue.length) {
    //   // todo
    //   const len =  queue.length
    //   for (let i = 0; i < len; i++) {
    //     const curNode = queue.shift()
    //     if (curNode?.children?.length) {
    //       queue.push(curNode.children)
    //     }
    //     curNode.label = <>
    //         { leafIcon } {curNode.label} 
    //       </>
    //     res.push(curNode)
    //   }
    //   level++
    // }
    // console.log('res', res)
    _setOptions(options)
  }, [options, leafIcon])
  if(!showSearch.filter) {
    // showSearch.filter = (inputValue: any, path: any) => {
    //   return path.some((option: any) => option?.laebl?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 || option?.originLabel?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
    //   // console.log('inputValue', inputValue)
    //   // console.log('path', path)
    // }
  }
  // console.log('111', options[0].children[0].children[0].label)
  // options[0].children[0].children[0].label = <>
  //   { options[0].children[0].children[0].label }
  // </>
  // options[0].children[0].children[0].label
  const  dropdownMenuColumnStyleWraper = {
    minWidth: '160px',
    maxWidth: '200px',
    ...dropdownMenuColumnStyle,
  }
  if (!showSearch.render) {
    showSearch.render = (val: any, path: any) => {
      console.log(path)
      const reg = new RegExp(`${val}`, 'g')
      const r = path.reduce((p: any, c: any) => {
        const w = typeof c.label === 'string' ? c.label : c.originLabel
        // console.log('w', w)
        // console.log('c', c)
        // console.log('', c.value.replace(reg, `<span class="ant-cascader-menu-item-keyword">${val}</span>`))
        return `${p}${p ? ' / ':''}${w.replace(reg, `<span class="ant-cascader-menu-item-keyword">${val}</span>`)}`
      }, '')
      if (path.length) {
        console.log(1)
        return <span dangerouslySetInnerHTML={{__html: r}} title="1111"></span>
      } else {
        console.log(2)
        return <span>111</span>
      }
      // const t = `<span>${r}</span>`
    }
  }
  // const displayRender  = (label: any, selectedOptions: any) => {
  //   console.log('label', label)
  //   console.log('selectedOptions', selectedOptions)
  //   return <span>1</span>
  // }
  const onChange = (value: any, selectedOptions: any) => {
    console.log('value', value)
    console.log('selectedOptions', selectedOptions)
  }
  const displayRender = (label: any, selectedOptions: any) => {
    console.log('label', label)
    console.log('selectedOptions', selectedOptions)
    const res = selectedOptions.reduce((c: any, p: any) => `${c}${c? '/' : ''}${p.originLabel || p.label}`, '')
    console.log('res:', res)
    return res

  }
  return (
    <CascaderWraper>
        {/* <DropdownWraper menuBlockStyle={menuStyle}></DropdownWraper> */}
        <div className='flex flex-col'>
          <AntCascader options={_options}
              notFoundContent="测试"
              displayRender={displayRender}
              // multiple
              dropdownMenuColumnStyle={dropdownMenuColumnStyleWraper}
              showSearch = {{
                ...showSearch,
              }}
              onChange={onChange}
          />
          {abnormalTip}
        </div>
    </CascaderWraper>
  )
}