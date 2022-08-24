import { Cascader as AntCascader } from 'antd';
import { useState } from 'react';
import resolve from 'resolve';
export const Cascader = (props: any) => {
  const {
    options,
    showSearch
  } = props
  // function treePath(tree: any){
  //   return 1
  // }
  
  if(!showSearch.filter) {
    // showSearch.filter = (inputValue: any, path: any) => {
    //   return path.some((option: any) => option?.laebl?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 || option?.originLabel?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
    //   // console.log('inputValue', inputValue)
    //   // console.log('path', path)
    // }
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
  return <AntCascader options={options}
        // multiple
        notFoundContent="无结果"
         showSearch = {{
          ...showSearch,
        }}
        // onSearch={value => console.log(value)}
/>
}