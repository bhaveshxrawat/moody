export const LoginButton = ({ loginProvider, children }) => {
    return (
        <button onClick={loginProvider} className="login-btn">
            {children}
        </button>
    );
};
