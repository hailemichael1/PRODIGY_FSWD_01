import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {


	return (
		<div
			className='min-h-screen bg-gradient-to-br
    from-gray-900 via-blue-900 to-lime-900 flex items-center justify-center relative overflow-hidden'
		>
			

			<Routes>
				
				<Route
					path='/signup'
					element={
						
						<H/>
					
					}
				/>
				
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
