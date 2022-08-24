import { Cascader as AntCascader } from 'antd';
import { useState } from 'react';
import resolve from 'resolve';
export const Cascader = (props: any) => {
  const {
    options,
    showSearch
  } = props
  if (!showSearch.render) {
    showSearch.render = (val: any, path: any) => {
      const t = <span>111</span>
      console.log(t)
      console.log(path)
      return t
    }
  }
  // const displayRender  = (label: any, selectedOptions: any) => {
  //   console.log('label', label)
  //   console.log('selectedOptions', selectedOptions)
  //   return <span>1</span>
  // }
  return <AntCascader options={options}
        // multiple
         showSearch = {{
          ...showSearch,
        }}
  onSearch={value => console.log(value)}
/>
}