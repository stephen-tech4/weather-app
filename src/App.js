import Layout from "./components/Layout";
import Main from "./components/Main";
import useTheme from "./hooks/useTheme";
import TodayWeatherPage from "./screens/TodayWeatherPage";

function App() {
  const ThemeProvider = useTheme();

  return (
    <ThemeProvider>
      <Layout>
        <Main title="Find weather">
          <TodayWeatherPage />
        </Main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
