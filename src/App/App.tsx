import { FC } from 'react';
import { Header } from 'components';
import { Routing } from 'pages';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routing />
    </div>
  );
};

export default App;
