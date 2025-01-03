import { useSelector } from "react-redux";

const Child = () => {
    const count = useSelector(state => state.count)
    return <div>Child {count}</div>
}

export default Child;