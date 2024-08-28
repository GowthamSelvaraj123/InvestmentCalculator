import investmentCalculator from "../assets/investment-calculator-logo.png";
export default function Header()
{
    return(
        <header id="header">
        <img src={investmentCalculator} alt="logo-showing" />
        <h1>React Inverment Calculator.</h1>
        </header>
    );
}