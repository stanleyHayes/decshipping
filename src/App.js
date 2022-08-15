import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import {THEMES} from "./utils/themes";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import BlogPage from "./pages/blog/blog-page";
import BlogDetailPage from "./pages/blog/blog-detail-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import VerificationAcknowledgmentPage from "./pages/authentication/verification-acknowledgment-page";
import RegisterPage from "./pages/authentication/register-page";
import VerifyLoginOtpPage from "./pages/authentication/verify-login-otp-page";
import LoginPage from "./pages/authentication/login-page";
import WelcomePage from "./pages/authentication/welcome-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import NotFoundPage from "./pages/404/not-found-page";
import ServicesPage from "./pages/services/services-page";
import ContactPage from "./pages/contact/contact-page";
import FAQPage from "./pages/others/faq-page";

function App() {
  const {themeVariant} = useSelector(selectUI);
  const theme = themeVariant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme;
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme={true}/>
        <Routes>
          <Route element={<HomePage/>} path="/"/>
          <Route element={<AboutPage/>} path="/about"/>
          <Route element={<ContactPage/>} path="/contact"/>
          <Route element={<ServicesPage/>} path="/services"/>
          <Route element={<BlogPage/>} path="/articles"/>
          <Route element={<BlogDetailPage/>} path="/articles/:articleID"/>
          <Route element={<VerifyAccountPage/>} exact={true} path="/auth/verify/:token"/>
          <Route element={<VerificationAcknowledgmentPage/>} exact={true} path="/account/verify/success"/>
          <Route element={<RegisterPage/>} exact={true} path="/auth/register"/>
          <Route element={<VerifyLoginOtpPage/>} exact={true} path="/auth/otp/:token/verify"/>
          <Route element={<LoginPage/>} exact={true} path="/auth/login"/>
          <Route element={<WelcomePage/>} exact={true} path="/welcome"/>
          <Route element={<FAQPage/>} exact={true} path="/faqs"/>
          <Route element={<ResetPasswordPage/>} exact={true} path="/auth/reset-password"/>
          <Route element={<ForgotPasswordPage/>} exact={true} path="/auth/forgot-password"/>
          <Route element={<NotFoundPage/>} path="*"/>
        </Routes>
      </ThemeProvider>
  );
}

export default App;
