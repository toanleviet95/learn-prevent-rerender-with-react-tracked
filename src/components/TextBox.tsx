import { useSharedState } from '@/store';

const TextBox: React.FC = () => {
  const [state, setState] = useSharedState();
  const setText = (text: string) => {
    setState((prev) => ({ ...prev, text }));
  };
  return (
    <div>
      <input value={state.text} onChange={(e) => setText(e.target.value)} />
      <br />
      {state.text}
      <br />
      {Math.random()}
    </div>
  );
};

export default TextBox;
