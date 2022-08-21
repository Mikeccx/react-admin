import './index.less'
import Button from '@component/button'
import { ButtonType } from  '@component/button'
const ButtonView = () => {
  return (
    <div className="button-view">
      <div className='w-1/3 flex justify-between'>
        <Button type={ButtonType.Default}>default</Button>
        <Button type={ButtonType.Primary}>primary</Button>
        <Button type={ButtonType.Danger}>danger</Button>
        <Button type={ButtonType.Link}>link</Button>
      </div>
    </div>
  )
}

export { ButtonView }