import supabase from "../Supabase";

async function handleGoogleLogin() {
    try {
        await supabase.auth.signInWithOAuth({
            provider: "google",
        });
    } catch (err) {
        console.error(err);
    }
}
async function handleFBLogin() {
    try {
        const { data, err } = await supabase.auth.signInWithOAuth({
            provider: "facebook",
        });
        console.log(data, err);
    } catch (err) {
        console.error(err);
    }
}

export { handleGoogleLogin, handleFBLogin }