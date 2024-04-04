import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Analytics from "./components/Analytics/Analytics";
import "./styles/styling.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import Lessons from "./components/Lessons/Lessons";
import Invest from "./components/Investment/Lessons";
import SignupForm from "./components/sign/signup";
import Main from "./components/Main/main";
import SignIn from "./components/sign/singin";
function App() {
	return (
		<Router>
			<AppProvider>
							<Routes>
								<Route path="/" exact element={<SignIn />} />
								<Route
									path="/budget"
									element={<Home />}
								/>
								<Route
									path="/analytics"
									element={<Analytics />}
								/>
								<Route
									path="/lessons"
									element={<Lessons />}
								/>
								<Route
									path="/investment"
									element={<Invest />}
								/>

								<Route 
									path="/signin"
									element={<SignIn />}
								/>

								<Route 
									path="/main" 
									element={<Main />} 
								/>

							</Routes>
			</AppProvider>
		</Router>
	);
}

export default App;
