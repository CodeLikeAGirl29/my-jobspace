import { Landing, Register, Error, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Profile,
	AllJob,
	AddJob,
	SharedLayout,
	Stats,
} from "./pages/dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index path='stats' element={<Stats />} />
					<Route path='all-jobs' element={<AllJob />} />
					<Route path='add-job' element={<AddJob />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='/register' element={<Register />} />
				<Route path='/landing' element={<Landing />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
