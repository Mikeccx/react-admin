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
    leafSuffixIcon,
    prefixIcon
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
  const [isOverHeight, setIsOverHeight] = useState(false)
  useEffect(() => {
    const treePreOrder = (tree: any, treeLevel: number) => {
      if (tree.length >= 9) {
        // 数量超过9
        setIsOverHeight(true)
      }
      treeLevel++
      for(let i = 0; i < tree.length; i++) {
        // 备份原数据
        tree[i].originLabel = tree[i].label
        // 图标包装
        tree[i].label = <>
          {prefixIcon?.[treeLevel-1]}
          {tree[i]?.label}
          {tree[i]?.children?.length ? null : leafSuffixIcon}
        </>
        if (tree[i]?.children?.length) {
          treePreOrder(tree[i]?.children, treeLevel)
        }
      }
    }
    treePreOrder(options, 0)
    console.log(1)
    _setOptions(options)
  }, [options, leafSuffixIcon, prefixIcon])
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
  const [_showSearch, _setShowSearch] = useState({})
    useEffect(() => {
    if (!showSearch?.render) {
        const searchOps = {...showSearch}
        // 如果用户没有自定义ShowSearch.render，则实现一个搜索高亮,同时设置title，如果有，则不处理，交给用户自定义
        searchOps.render = (inputValue: any, path: any) => {
            const keyWordReg = new RegExp(`${inputValue}`, 'g')
            let title = ''
            const hightLightRender = path.reduce((pre: any, cur: any) => {
                title += cur.label
                // 实现高亮
                return `${pre}${cur?.label?.replace(keyWordReg, `<span class="ant-cascader-menu-item-keyword">${inputValue}</span>`)} `
            }, '')
            return <span dangerouslySetInnerHTML={{__html: hightLightRender}} title={title}></span>
        }
        _setShowSearch(searchOps)
    }
  }, [showSearch])
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