import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Journal from "./pages/Journal";
import JournalArticle from "./pages/JournalArticle";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";
import Shipping from "./pages/Shipping";
import CareGuide from "./pages/CareGuide";
import FAQ from "./pages/FAQ";
import Trade from "./pages/Trade";
import GiftCards from "./pages/GiftCards";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundMusic from "./components/BackgroundMusic";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Sustainability from "./pages/Sustainability";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookieSettings from "./pages/CookieSettings";
import Profile from "./pages/Profile";
import AccountDetails from "./pages/AccountDetails";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Addresses from "./pages/Addresses";
import PaymentMethods from "./pages/PaymentMethods";







const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path="/journal/:id" element={<JournalArticle />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/care-guide" element={<CareGuide />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/trade" element={<Trade />} />
                    <Route path="/gift-cards" element={<GiftCards />} />
                    <Route path="/sustainability" element={<Sustainability />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookie-settings" element={<CookieSettings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/account" element={<AccountDetails />} />
                    <Route path="/profile/orders" element={<Orders />} />
                    <Route path="/profile/wishlist" element={<Wishlist />} />
                    <Route path="/profile/addresses" element={<Addresses />} />
                    <Route path="/profile/payment" element={<PaymentMethods />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <BackgroundMusic />
                <ScrollToTopButton />
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
