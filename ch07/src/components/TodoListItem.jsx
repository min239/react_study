import './css/TodoListItem.css'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import classnames from 'classnames'

function TodoListItem({ todo, onRemove, onToggle }) {
   //todo키값으로 가져옴
   const { id, text, checked } = todo
   return (
      <div className="TodoListItem">
         {/*className = 'checkbox chexked'  트루일떄
            className = 'checkbox' *  거짓일떄
        */}

         <div
            className={classnames('checkbox', { checked })}
            onClick={() => {
               onToggle(id) //클릭할때 만 실행
            }}
         >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div
            className="remove"
            onClick={() => {
               onRemove(id) //클릭할때 만 실행
            }}
         >
            <IoMdRemoveCircleOutline />
         </div>
      </div>
   )
}

export default TodoListItem
