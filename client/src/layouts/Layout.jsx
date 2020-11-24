import Header from "../components/Header";

export default function Layout(props) {
  return (
    <div className="App">
      <Header currentUser={props.currentUser}/>
      {props.children}
    </div>
  )
}
