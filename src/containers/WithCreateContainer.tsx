import { SharedStateProvider } from '@/store';
import Counter from '@/components/Counter';
import TextBox from '@/components/TextBox';

const WithCreateContainer: React.FC = () => {
  return (
    <SharedStateProvider>
      <div className="App">
        <header className="App-header">
          <Counter />
          <TextBox />
        </header>
      </div>
    </SharedStateProvider>
  );
};

export default WithCreateContainer;
