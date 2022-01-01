import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // 컴포넌트가 UI상에 등록 되었을 때 (사용자에게 보여질 때)
  // ex) 컴포넌트가 마운트가 되고 나서 데이터를 받아오거나 컴포넌트가 보여질 때 로딩스피너를 보여줘야 된다
  // ex) 타이머 시작
  // ex) 실시간 채팅의 경우 소켓 초기화
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  // 컴포넌트가 UI상에 지우기 전에
  // ex) 타이머 종료
  // ex) 소켓 정리하고 리소스를 지움
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }

  // PureComponent 하면 값이 안바뀌는 이유
  /**
   * Habit은 자체적인 state는 없고 props를 전달받는데 props 안에 데이터가 변경되지 않으면 render()함수가 호출 되지 않는게 PureComponent죠
   * 우리가 props 안에 habit이 있고 그리고 각각의 이런 콜백함수가 전달되어지죠?
   * 콜백함수는 결국은 여기 App에서 전달되는건데 앱 클래스 Component 안에 선언된 handleIncrement나 이런 멤버변수 아이들이 전달되기 때문에
   * 한번 App이라는 클래스가 만들어진 이후로는 절대 변경되지 않기 때문에 이 props들은 변하지 않습니다.
   * 그리고 우리가 카운트를 증가하게 되면 habit 안에 있는 카운터만 변하죠 즉, 오브젝트 안에 있는 여기 카운트라는 이 아이만 변하기 때문에 결국은
   * 이것이 동일한 오브젝트입니다. 결국은 shallow comparison는 오브젝트에 레퍼런스를 검사한다고 했죠
   * 그래서 props 안에 들어 있는 habit을 그대로 유지하면서 그 안에 있는 데이터가 변했기 때문에 결국은 동일하다고 판단이 되기 때문에 render()가 호출이 되지
   * 않는 것을 볼 수 있습니다 그래서 우리가 여기에 전체적인 오브젝트를 업데이트해줬죠
   */
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
