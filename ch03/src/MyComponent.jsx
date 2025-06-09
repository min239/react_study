import PropTypes from 'prop-types'

const MyComponent = ({ name, job, forNumber, children }) => {
   //    console.log(props)

   //    const { name ='창민', jop, forNumber, children } = props //비구조화로
   return (
      <div>
         <p>안녕하세요. 제 이름은{name} 입니다.</p>
         <p>제 직업은 {job}입니다.</p>
         <p>좋아하는 숫자는 {forNumber}</p>
         <p>children 값은 {children}</p>
      </div>
   )
}
//props의 타입 및 필수 값 검증
MyComponent.propTypes = {
   name: PropTypes.string,
   forNumber: PropTypes.number.isRequired,
}

export default MyComponent
//자식
