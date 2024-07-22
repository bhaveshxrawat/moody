import supabase from "../../utils/Supabase";

export default function Auth() {
    async function handleGoogleLogin(){
        try{await supabase.auth.signInWithOAuth({
            provider: 'google'
          })}
          catch(err) {
            console.error(err)
          }
    }
    async function handleFBLogin(){
        try{const {data, err} = await supabase.auth.signInWithOAuth({
            provider: 'facebook',
        })
        console.log(data, err);
        }
          catch(err) {
            console.error(err)
          }
    }
      
    return (
        <main>
            <section className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold">Login!</p>
                    <div className="flex flex-col gap-4 justify-center items-center mt-16">
                        <button onClick={handleGoogleLogin} className="login-btn">
                            <svg
                                width="28"
                                height="29"
                                viewBox="0 0 28 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.1388 10.1871C17.0809 9.2425 15.6718 8.66663 14.1271 8.66663C10.8349 8.66663 8.16675 11.2788 8.16675 14.5C8.16675 17.7211 10.8349 20.3333 14.1271 20.3333C18.1745 20.3333 19.6701 17.3345 19.8334 14.9861H14.9812"
                                    stroke="black"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M13.9999 26.1667C20.4432 26.1667 25.6666 20.9433 25.6666 14.5C25.6666 8.05672 20.4432 2.83337 13.9999 2.83337C7.55659 2.83337 2.33325 8.05672 2.33325 14.5C2.33325 20.9433 7.55659 26.1667 13.9999 26.1667Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Login with Google
                        </button>
                        <button onClick={handleFBLogin} className="login-btn">
                            <svg
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.3333 2.83337H16.8333C15.2862 2.83337 13.8025 3.44795 12.7086 4.54192C11.6146 5.63588 11 7.11961 11 8.66671V12.1667H7.5V16.8334H11V26.1667H15.6667V16.8334H19.1667L20.3333 12.1667H15.6667V8.66671C15.6667 8.35728 15.7896 8.06054 16.0084 7.84175C16.2271 7.62296 16.5239 7.50004 16.8333 7.50004H20.3333V2.83337Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Login with FaceBook
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
