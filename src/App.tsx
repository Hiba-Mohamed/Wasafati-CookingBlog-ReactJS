import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { CategoryPage } from "./pages/categoryPage";
import { SubmitRecipe } from "./pages/submitRecipe";
import About from "./pages/about";
import ListCategory from "./pages/listCategory";
import SearchRecipe from "./pages/search";
import RecipePage from "./components/recipeComponent";

function App() {
  return (
    <div className="font-playPen">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
        <Route path="/submitRecipe" element={<SubmitRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/listCategory" element={<ListCategory />} />
        <Route path="/search" element={<SearchRecipe />} />
        <Route path="/recipeComponent" element={<RecipePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
