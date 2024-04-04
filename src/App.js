import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Analytics from "./components/Analytics/Analytics";
import "./styles/styling.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import Lessons from "./components/Lessons/Lessons";
import Invest from "./components/Investment/Lessons";
import SignupForm from "./components/sign/signup";

function App() {
	return (
		<Router>
			<AppProvider>
				<div className="app flex h-screen">
					<Sidebar />
					<div className="flex-1 flex place-content-center py-3 overflow-hidden">
						<div className="content shadow-lg bg-white rounded-2xl p-4">
							<Routes>
								<Route path="/" exact element={<Home />} />
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

								{/* <Route 
									path="/signup"
									element={<SignupForm />}
								/> */}

								<Route path="*" element={<Home />} />
							</Routes>
						</div>
					</div>
				</div>
			</AppProvider>
		</Router>
	);
}

export default App;
