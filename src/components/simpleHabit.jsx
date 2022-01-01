import React, { useCallback, useEffect, useState } from "react";

const SimpleHabit = (props) => {
  // state = {
  //   count: 0,
  // };

  // React Hook에서 state를 쓸 땐 useState api 사용. count와 이 count를 업데이트 할 수 있는 setCount를 정의. 초기값 0 사용
  // useStaet를 호출하게되면 React에서 두 가지를 return 해줍니다.
  // 실제의 state 값과 카운트를 업데이트 할 수 있는 함수 setCount

  // 중요
  /**
   * 클래스는 한번 만들어지면 클래스 안에 있는 요런 멤버변수들 요런 아이들은 클래스가 만들어질 때 딱 한번만 만들어집니다
   * 대신에 state가 변경되거나 props가 업데이트되면 render 함수만 계속 반복해서 호출이 되는거죠?
   * 그래서 이렇게 한번 만들어진 멤버변수는 한번만 요렇게 할당이 되어지는 반면에요
   *
   * 클래스에서 멤버변수는 클래스가 만들어질 때 한번만 이렇게 만들어지고 render 함수만 반복적으로 호출되는 반면에
   * 이 함수는요 이것은 클래스가 아니라 함수에요
   *
   * 그래서 이 컴포넌트가 변경이 되면 이 코드블럭 전체가 여기에서부터 여기 안에 있는 요 아이들이 전부 다 계속 반복해서 호출이 됩니다
   * function 컴포넌트는 props나 state가 변경이 되면 얘네들 전체가 반복이 되어지고요
   *
   * 그래서 이런 지역 변수들 요런것들 이런 것들이 다시 무한정 반복이 됩니다
   *
   */
  const [count, setCount] = useState(0);
  const spanRef = React.useRef(); // createRef 마다 매번 호출할 때마다 새로운 레퍼런스를 만드는 것이 아니라 한 번만 만들고 메모리에 저장해놓고 다시 그것을 재사용합니다

  const handleIncrement = useCallback(() => {
    // useCallback: 자동으로 리액트가 캐시를해서 즉 이것이 계속 반복해서 호출이 되어도 동일한 콜백함수를 전달함
    setCount(count + 1);
  });

  // useEffect: 컴포넌트가 마운트가 되었을 때 그리고 업데이트가 될 때마다 호출되는 아이
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, []);
  // 2번째 인자에 [count] 적어주면, 이 count가 변경이 될 때마다 이 함수가 호출
  // [] : 텅텅 빈 배열을 전달하면 처음에만 호출

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
