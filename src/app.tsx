import './styles/index.css';
import ruRU from 'antd/locale/ru_RU';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { SidebarMenu } from './components/sidebar-menu';
import { ConfigProvider, Layout } from 'antd';
import { useState } from 'react';
import { AuthContextProvider } from './entities/auth/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MessageContextProvider } from './entities/message/provider';

const queryClient = new QueryClient();

export function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#3EB489', colorLink: '#3EB489' } }}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <MessageContextProvider>
            <AuthContextProvider onStatusChange={setIsAuth}>
              <ConfigProvider locale={ruRU}>
                <Layout>
                  <SidebarMenu />
                  <Layout style={{ padding: 12 }}>
                    <AppRouter />
                  </Layout>
                </Layout>
              </ConfigProvider>
            </AuthContextProvider>
          </MessageContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
}
