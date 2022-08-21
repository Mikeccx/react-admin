import React from 'react'
import classNames from 'classnames'
import './index.less'
// 按钮形状
export enum ButtonShape {
  Default = 'default',
  Circle = 'circle',
  Round = 'round'
}
// 按钮大小
export enum ButtonSize {
  Large = 'lg',
  Middle = 'md',
  Small = 'sm'
}
// 按钮类型
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

// 按钮props
interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  type?: ButtonType,
  children: React.ReactNode,
  href?: string,
  shape?: string
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    type,
    disabled,
    size,
    children,
    href,
    shape,
  } = props
  const classes = classNames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    [`btn-${shape}`]: shape,
    'diabled': (type === ButtonType.Link) && disabled
  })
  if (type === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

// 默认值
Button.defaultProps = {
  disabled: false,
  type: ButtonType.Default,
  shape: ButtonShape.Default
}

export default Button