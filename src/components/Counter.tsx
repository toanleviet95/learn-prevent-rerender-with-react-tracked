import { useSharedState } from '@/store';

const Counter: React.FC = () => {
  const [state, setState] = useSharedState();
  const increment = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div>
      <button onClick={increment}>+1</button>
      <br />
      {state.count}
      <br />
      {Math.random()}
    </div>
  );
};

export default Counter;
