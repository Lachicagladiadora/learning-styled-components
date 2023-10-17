import "./App.css";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Link } from "./components/Link";
import { Title } from "./components/Title";
import { StyledLink } from "./components/styledComponents/StylingAnyComponent";

function App() {
  return (
    <>
      <Title>learning styled components</Title>
      <Button onClick={() => console.log("you clicked the button")}>
        I'm a Button
      </Button>
      <Checkbox mode="dark">Hello World</Checkbox>
      <Link className="link">I am a link</Link>
      <StyledLink className="newLink">Hello link</StyledLink>
    </>
  );
}

export default App;
