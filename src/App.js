import { ThemeProvider } from "styled-components";
import { Container, MainBody } from "./styles/Global.styled";
import { Theme } from "./utils/Theme";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MYProjects from "./components/MYProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainBody>
        <Container>
          <Navbar />
          <Showcase />
          <MySkills />
          <MYProjects />
          <Footer />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
