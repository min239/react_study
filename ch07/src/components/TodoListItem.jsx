import './css/TodoListItem.css'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import classnames from 'classnames'

function TodoListItem({ todo, onRemove, onToggle }) { //todoitem 만들 때
//  첫번째 값은{
      //    id: 1,
      //    text: '헬스장 가기',
      //    checked: true,
      // },
   const { id, text, checked } = todo
   return (
      <div className="TodoListItem">
         {/*className = 'checkbox chexked'  트루일떄
            className = 'checkbox' *  거짓일떄
        */}

         <div //여기서 실행함 토클박스
            className={classnames('checkbox', { checked })}
            onClick={() => {
               onToggle(id) //id를 매개변수로 사용 클릭할때 만 실행
            }}
         >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} 
            <div className="text">{text}</div>
         </div>
         <div
            className="remove"
            onClick={() => {
               onRemove(id) //클릭할때 만 실행 여기서 삭제 실행
            }}
         >
            <IoMdRemoveCircleOutline />
         </div>
      </div>
   )
}

export default TodoListItem
