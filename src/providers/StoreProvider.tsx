import store from '@/redux';
import { Provider } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
