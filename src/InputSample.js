import React, {useState, useRef} from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name : '',
    nickName : ''
  });

  const nameInput = useRef();
  const {name, nickName} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })

  };

  const onReset = () => {
    setInputs({
      name : '',
      nickName : ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input placeholder="이름"  name="name" onChange={onChange} value={name} ref={nameInput}/>
      <input placeholder="닉네임" name="nickName" onChange={onChange} value={nickName}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값  : </b>
        {name} ({nickName})
      </div>
    </div>
  )
}

export default InputSample;