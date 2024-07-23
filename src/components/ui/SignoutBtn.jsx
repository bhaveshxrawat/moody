import supabase from "../../utils/Supabase"

export default function SignoutBtn() {
    async function signOutUser() {
        try {
            await supabase.auth.signOut()
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <button onClick={signOutUser} className="flex px-[0.625rem] py-3 bg-[rgba(0,0,0,0.13)] rounded-xl">
            Sign out!
        </button>
    )
}
