import Header from "../components/Header";

export default function Layout(props) {
  return (
    <div className="App">
      <Header />
      {props.children}
    </div>
  )
}
