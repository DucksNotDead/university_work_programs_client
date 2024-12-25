import { ReactNode } from 'react';
import { MessageContext } from './context';
import { message, notification } from 'antd';
import useNotification from 'antd/es/notification/useNotification';

interface IProps {
  children: ReactNode;
}

export function MessageContextProvider({ children }: IProps) {
  const [api, contextHolder] = useNotification();

  return (
    <>
      {contextHolder}
      <MessageContext.Provider
        value={{
          success: (text) => api.open({ type: 'success', message: text }),
          error: (text) => api.open({ type: 'error', message: text }),
          info: (text) => api.open({ type: 'info', message: text }),
        }}
      >
        {children}
      </MessageContext.Provider>
    </>
  );
}
